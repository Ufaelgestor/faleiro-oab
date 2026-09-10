/**
 * FALEIRO OAB - Aplicação Principal
 * Gerenciamento de Estado, Cronograma Diário, Persistência Local, Filtros e Temas
 */

class FaleiroOABApp {
  constructor() {
    this.currentTab = "cronograma";
    this.planDuration = 60; // 60 ou 90 dias
    this.completedDays = new Set();
    this.dayNotes = {};
    this.simuladosList = [];
    this.selectedGroupFilter = "ALL";
    this.selectedWeekFilter = "ALL";
    this.selectedStatusFilter = "ALL";
    this.examDate = "2026-11-22"; // Data aproximada do exame de ordem ou customizável
    this.pomodoroInterval = null;
    this.pomodoroTime = 25 * 60; // 25 min em segundos
    this.isPomodoroRunning = false;

    this.initStorage();
  }

  initStorage() {
    // Carregar dias concluídos
    try {
      const savedDays = localStorage.getItem("faleiro_oab_completed_days");
      if (savedDays) {
        this.completedDays = new Set(JSON.parse(savedDays));
      }
    } catch (e) {
      this.completedDays = new Set();
    }

    // Carregar anotações
    try {
      const savedNotes = localStorage.getItem("faleiro_oab_day_notes");
      if (savedNotes) {
        this.dayNotes = JSON.parse(savedNotes);
      }
    } catch (e) {
      this.dayNotes = {};
    }

    // Carregar duração do plano
    const savedDuration = localStorage.getItem("faleiro_oab_plan_duration");
    if (savedDuration && (savedDuration === "60" || savedDuration === "90")) {
      this.planDuration = parseInt(savedDuration, 10);
    }

    // Carregar simulados
    try {
      const savedSims = localStorage.getItem("faleiro_oab_simulados");
      if (savedSims) {
        this.simuladosList = JSON.parse(savedSims);
      } else {
        // Mock inicial de boas-vindas
        this.simuladosList = [
          {
            id: 1,
            title: "Simulado Diagnóstico Inicial",
            date: "2026-09-01",
            score: 36,
            notes: "Identificada necessidade urgente de reforçar Ética e Processo Civil."
          }
        ];
      }
    } catch (e) {
      this.simuladosList = [];
    }

    // Carregar tema
    const savedTheme = localStorage.getItem("faleiro_oab_theme");
    if (savedTheme === "light") {
      document.body.classList.add("theme-light");
    }
  }

  init() {
    this.setupTabs();
    this.setupCountdown();
    this.renderSchedule();
    this.renderRaioX();
    this.renderSimulados();
    this.updateGlobalProgress();
    this.setupPomodoro();

    // Inicializar simulador de notas
    if (window.simulator) {
      window.simulator.render();
    }

    // Atualizar botões de duração
    this.updateDurationButtons();
  }

  // --- NAVEGAÇÃO ENTRE ABAS ---
  setupTabs() {
    const navButtons = document.querySelectorAll(".nav-tab-btn");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.getAttribute("data-tab");
        this.switchTab(tab);
      });
    });
  }

  switchTab(tabName) {
    this.currentTab = tabName;
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
    });
    document.querySelectorAll(".tab-content-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `tab-${tabName}`);
    });

    if (tabName === "simulador" && window.simulator) {
      window.simulator.render();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // --- MUDANÇA DE PLANO (60 DIAS vs 90 DIAS) ---
  setPlanDuration(days) {
    this.planDuration = days;
    localStorage.setItem("faleiro_oab_plan_duration", days.toString());
    this.updateDurationButtons();
    this.selectedWeekFilter = "ALL";
    this.renderSchedule();
    this.updateGlobalProgress();
    window.showToast(`Plano alterado para ${days} Dias com sucesso!`);
  }

  updateDurationButtons() {
    const btn60 = document.getElementById("btnPlan60");
    const btn90 = document.getElementById("btnPlan90");
    if (btn60 && btn90) {
      btn60.classList.toggle("active", this.planDuration === 60);
      btn90.classList.toggle("active", this.planDuration === 90);
    }
  }

  // --- CRONÔMETRO REGRESSIVO DA PROVA ---
  setupCountdown() {
    const countdownEl = document.getElementById("examCountdownNumber");
    if (!countdownEl) return;

    const calculateDays = () => {
      const now = new Date();
      const target = new Date(this.examDate);
      const diffTime = target - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      countdownEl.textContent = diffDays > 0 ? diffDays : "Hoje!";
    };

    calculateDays();
    setInterval(calculateDays, 60000);
  }

  // --- RENDERIZAÇÃO DO CRONOGRAMA ---
  getCurrentScheduleData() {
    return this.planDuration === 60 ? window.SCHEDULE_60_DAYS : window.SCHEDULE_90_DAYS;
  }

  renderSchedule() {
    const container = document.getElementById("scheduleWeeksContainer");
    if (!container) return;

    const schedule = this.getCurrentScheduleData();
    container.innerHTML = "";

    // Atualizar seletor de semanas
    const weekSelect = document.getElementById("weekFilterSelect");
    if (weekSelect) {
      weekSelect.innerHTML = `<option value="ALL">Todas as Semanas (${schedule.length} Semanas)</option>`;
      schedule.forEach(w => {
        const opt = document.createElement("option");
        opt.value = w.week.toString();
        opt.textContent = `Semana ${w.week}: ${w.title.split(":")[1] || w.title}`;
        if (this.selectedWeekFilter === w.week.toString()) opt.selected = true;
        weekSelect.appendChild(opt);
      });
    }

    schedule.forEach(weekData => {
      // Filtro de semana
      if (this.selectedWeekFilter !== "ALL" && this.selectedWeekFilter !== weekData.week.toString()) {
        return;
      }

      // Filtrar dias dentro da semana
      const visibleDays = weekData.days.filter(d => {
        // Filtro de Grupo
        if (this.selectedGroupFilter !== "ALL") {
          if (d.group !== "ALL" && d.group !== this.selectedGroupFilter) {
            return false;
          }
        }
        // Filtro de Status
        const isDone = this.completedDays.has(d.day);
        if (this.selectedStatusFilter === "DONE" && !isDone) return false;
        if (this.selectedStatusFilter === "PENDING" && isDone) return false;
        return true;
      });

      if (visibleDays.length === 0 && this.selectedWeekFilter === "ALL") {
        return;
      }

      const weekCard = document.createElement("div");
      weekCard.className = "schedule-week-card";
      weekCard.id = `week-${weekData.week}`;

      // Calcular progresso da semana
      const weekDoneCount = weekData.days.filter(d => this.completedDays.has(d.day)).length;
      const weekTotalCount = weekData.days.length;
      const weekPct = Math.round((weekDoneCount / weekTotalCount) * 100);

      weekCard.innerHTML = `
        <div class="week-header">
          <div class="week-title-area">
            <span class="week-pill">Semana ${weekData.week}</span>
            <h3 class="week-title">${weekData.title}</h3>
            <p class="week-focus-desc"><span class="focus-label">Foco Estratégico:</span> ${weekData.focus}</p>
          </div>
          <div class="week-progress-area">
            <span class="week-progress-label">${weekDoneCount}/${weekTotalCount} concluídos (${weekPct}%)</span>
            <div class="week-progress-bar">
              <div class="week-progress-fill" style="width: ${weekPct}%"></div>
            </div>
          </div>
        </div>
        <div class="week-days-grid" id="week-grid-${weekData.week}"></div>
      `;

      const grid = weekCard.querySelector(`#week-grid-${weekData.week}`);

      weekData.days.forEach(dayItem => {
        // Se estiver filtrado, pula
        if (!visibleDays.includes(dayItem)) return;

        const isDone = this.completedDays.has(dayItem.day);
        const dayNote = this.dayNotes[dayItem.day] || "";
        const groupBadgeClass = `badge-group-${dayItem.group.toLowerCase()}`;

        const dayCard = document.createElement("div");
        dayCard.className = `day-card ${isDone ? "completed" : ""}`;
        dayCard.id = `day-card-${dayItem.day}`;

        dayCard.innerHTML = `
          <div class="day-card-header">
            <div class="day-number-badge">Missão ${String(dayItem.day).padStart(2, "0")}</div>
            <div class="day-disciplines-tags">
              ${dayItem.disciplines.map(d => `<span class="disc-tag">${d}</span>`).join("")}
              <span class="day-group-tag ${groupBadgeClass}">Grupo ${dayItem.group}</span>
            </div>
            <label class="day-checkbox-label" title="Marcar missão como cumprida">
              <input type="checkbox" 
                     class="day-checkbox" 
                     ${isDone ? "checked" : ""} 
                     onchange="window.app.toggleDay(${dayItem.day})">
              <span class="custom-checkmark"></span>
            </label>
          </div>

          <div class="day-theme-title">${dayItem.theme}</div>

          <div class="day-task-block">
            <div class="task-title">
              <span class="gold-square-mark"></span>
              Legislação e Lei Seca Obrigatória:
            </div>
            <div class="task-content law-content">${dayItem.lawReading}</div>
          </div>

          <div class="day-footer-meta">
            <div class="meta-goal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              Meta: <strong>${dayItem.questionsGoal} questões FGV</strong>
            </div>
            <button type="button" class="btn-toggle-notes" onclick="window.app.toggleNotesArea(${dayItem.day})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              Anotações
            </button>
          </div>

          <div class="day-notes-area ${dayNote ? "visible" : ""}" id="notes-area-${dayItem.day}">
            <textarea placeholder="Suas anotações, pontos de dúvida ou acertos desta missão..." 
                      class="day-notes-input" 
                      onblur="window.app.saveDayNote(${dayItem.day}, this.value)">${dayNote}</textarea>
          </div>
        `;

        grid.appendChild(dayCard);
      });

      container.appendChild(weekCard);
    });
  }

  toggleDay(dayNumber) {
    if (this.completedDays.has(dayNumber)) {
      this.completedDays.delete(dayNumber);
      window.showToast(`Missão ${dayNumber} desmarcada.`);
    } else {
      this.completedDays.add(dayNumber);
      window.showToast(`⚔️ Parabéns! Missão ${dayNumber} cumprida!`);
    }

    localStorage.setItem("faleiro_oab_completed_days", JSON.stringify(Array.from(this.completedDays)));
    this.updateGlobalProgress();

    // Atualizar classe do card
    const card = document.getElementById(`day-card-${dayNumber}`);
    if (card) {
      card.classList.toggle("completed", this.completedDays.has(dayNumber));
    }
  }

  toggleNotesArea(dayNumber) {
    const area = document.getElementById(`notes-area-${dayNumber}`);
    if (area) {
      area.classList.toggle("visible");
      if (area.classList.contains("visible")) {
        const input = area.querySelector("textarea");
        if (input) input.focus();
      }
    }
  }

  saveDayNote(dayNumber, text) {
    if (text.trim()) {
      this.dayNotes[dayNumber] = text.trim();
    } else {
      delete this.dayNotes[dayNumber];
    }
    localStorage.setItem("faleiro_oab_day_notes", JSON.stringify(this.dayNotes));
  }

  // --- FILTROS DO CRONOGRAMA ---
  filterByGroup(group) {
    this.selectedGroupFilter = group;
    document.querySelectorAll(".btn-group-filter").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-group") === group);
    });
    this.renderSchedule();
  }

  filterByWeek(weekVal) {
    this.selectedWeekFilter = weekVal;
    this.renderSchedule();
  }

  filterByStatus(statusVal) {
    this.selectedStatusFilter = statusVal;
    document.querySelectorAll(".btn-status-filter").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-status") === statusVal);
    });
    this.renderSchedule();
  }

  // --- PROGRESSO GERAL ---
  updateGlobalProgress() {
    const totalDays = this.planDuration;
    const doneCount = Array.from(this.completedDays).filter(d => d <= totalDays).length;
    const pct = Math.min(100, Math.round((doneCount / totalDays) * 100));

    const pctText = document.getElementById("overallProgressPct");
    const countText = document.getElementById("overallProgressCount");
    const barFill = document.getElementById("overallProgressBarFill");

    if (pctText) pctText.textContent = `${pct}%`;
    if (countText) countText.textContent = `${doneCount} de ${totalDays} missões cumpridas`;
    if (barFill) barFill.style.width = `${pct}%`;
  }

  // --- RAIO-X DA FGV: ARTIGOS DE OURO ---
  renderRaioX() {
    const container = document.getElementById("raioxCardsGrid");
    if (!container) return;

    container.innerHTML = "";

    window.DISCIPLINES_DATA.forEach(disc => {
      const card = document.createElement("div");
      card.className = "raiox-card";
      card.id = `raiox-${disc.id}`;

      card.innerHTML = `
        <div class="raiox-card-header">
          <div class="raiox-header-left">
            <span class="sim-order-badge">${disc.order}</span>
            <div>
              <h4 class="raiox-title">${disc.name}</h4>
              <span class="sim-badge badge-group-${disc.group.toLowerCase()}">Grupo ${disc.group} • ${disc.questions} questões</span>
            </div>
          </div>
          <div class="raiox-target-pill" title="Meta sugerida para aprovação">
            Meta: <strong>${disc.targetRecommended}/${disc.questions}</strong>
          </div>
        </div>

        <p class="raiox-desc">${disc.description}</p>

        <div class="raiox-section">
          <h5>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Temas Mais Recorrentes na FGV:
          </h5>
          <ul class="raiox-list top-themes">
            ${disc.topThemes.map(t => `<li><span class="theme-dot"></span>${t}</li>`).join("")}
          </ul>
        </div>

        <div class="raiox-section gold-section">
          <h5>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            Artigos de Ouro (Leitura Obrigatória):
          </h5>
          <ul class="raiox-list gold-articles">
            ${disc.goldArticles.map(a => `<li><span class="gold-icon">📜</span>${a}</li>`).join("")}
          </ul>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // --- CONTROLE DE SIMULADOS ---
  renderSimulados() {
    const listContainer = document.getElementById("simuladosHistoryList");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    if (this.simuladosList.length === 0) {
      listContainer.innerHTML = `<div class="empty-simulados-msg">Nenhum simulado registrado ainda. Clique no botão abaixo para registrar seu primeiro simulado!</div>`;
      this.updateSimuladosStats(0, 0, 0);
      return;
    }

    let totalScore = 0;
    let approvedCount = 0;

    this.simuladosList.forEach((sim, idx) => {
      totalScore += sim.score;
      if (sim.score >= 40) approvedCount++;

      const isPass = sim.score >= 40;
      const card = document.createElement("div");
      card.className = `simulado-item-card ${isPass ? "pass" : "fail"}`;

      card.innerHTML = `
        <div class="sim-item-left">
          <div class="sim-item-score-badge ${isPass ? "badge-pass" : "badge-fail"}">
            <span class="score-num">${sim.score}</span>
            <span class="score-total">/80</span>
          </div>
          <div class="sim-item-info">
            <h4 class="sim-item-title">${sim.title}</h4>
            <div class="sim-item-meta">
              <span>📅 ${sim.date}</span>
              <span class="sim-item-status">${isPass ? "✅ Aprovado (≥ 40)" : "⚠️ Abaixo da Nota de Corte"}</span>
            </div>
            ${sim.notes ? `<p class="sim-item-notes">📝 ${sim.notes}</p>` : ""}
          </div>
        </div>
        <div class="sim-item-right">
          <button type="button" class="btn-delete-sim" onclick="window.app.deleteSimulado(${idx})" title="Excluir Simulado">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
          </button>
        </div>
      `;

      listContainer.appendChild(card);
    });

    const avg = Math.round(totalScore / this.simuladosList.length);
    const passRate = Math.round((approvedCount / this.simuladosList.length) * 100);
    this.updateSimuladosStats(this.simuladosList.length, avg, passRate);
  }

  updateSimuladosStats(count, avg, rate) {
    const countEl = document.getElementById("statSimTotal");
    const avgEl = document.getElementById("statSimAvg");
    const rateEl = document.getElementById("statSimRate");

    if (countEl) countEl.textContent = count;
    if (avgEl) avgEl.textContent = `${avg}/80`;
    if (rateEl) rateEl.textContent = `${rate}%`;
  }

  addSimulado(title, date, score, notes) {
    const numScore = parseInt(score, 10);
    if (isNaN(numScore) || numScore < 0 || numScore > 80) {
      alert("Por favor, digite uma pontuação válida entre 0 e 80.");
      return;
    }

    this.simuladosList.unshift({
      id: Date.now(),
      title: title || `Simulado ${this.simuladosList.length + 1}`,
      date: date || new Date().toISOString().split("T")[0],
      score: numScore,
      notes: notes || ""
    });

    localStorage.setItem("faleiro_oab_simulados", JSON.stringify(this.simuladosList));
    this.renderSimulados();
    window.showToast("Simulado registrado com sucesso!");
    this.closeModal("modalAddSimulado");
  }

  deleteSimulado(idx) {
    if (confirm("Deseja realmente remover este simulado do histórico?")) {
      this.simuladosList.splice(idx, 1);
      localStorage.setItem("faleiro_oab_simulados", JSON.stringify(this.simuladosList));
      this.renderSimulados();
      window.showToast("Simulado excluído.");
    }
  }

  // --- MODAL CONTROLS ---
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add("open");
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove("open");
  }

  // --- POMODORO DE FOCO ---
  setupPomodoro() {
    const display = document.getElementById("pomodoroTimerDisplay");
    const toggleBtn = document.getElementById("btnTogglePomodoro");
    const resetBtn = document.getElementById("btnResetPomodoro");

    const updateDisplay = () => {
      const minutes = Math.floor(this.pomodoroTime / 60);
      const seconds = this.pomodoroTime % 60;
      if (display) {
        display.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      }
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        if (this.isPomodoroRunning) {
          clearInterval(this.pomodoroInterval);
          this.isPomodoroRunning = false;
          toggleBtn.innerHTML = `Iniciar Foco`;
        } else {
          this.isPomodoroRunning = true;
          toggleBtn.innerHTML = `Pausar`;
          this.pomodoroInterval = setInterval(() => {
            if (this.pomodoroTime > 0) {
              this.pomodoroTime--;
              updateDisplay();
            } else {
              clearInterval(this.pomodoroInterval);
              this.isPomodoroRunning = false;
              toggleBtn.innerHTML = `Iniciar Foco`;
              window.showToast("⏰ Tempo esgotado! Faça uma pausa de 5 minutos.");
              this.playBeep();
            }
          }, 1000);
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        clearInterval(this.pomodoroInterval);
        this.isPomodoroRunning = false;
        this.pomodoroTime = 25 * 60;
        updateDisplay();
        if (toggleBtn) toggleBtn.innerHTML = `Iniciar Foco`;
      });
    }

    updateDisplay();
  }

  playBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = 800;
      osc.start();
      setTimeout(() => {
        osc.stop();
        ctx.close();
      }, 500);
    } catch (e) {}
  }

  // --- TEMA DARK / LIGHT ---
  toggleTheme() {
    const isLight = document.body.classList.toggle("theme-light");
    localStorage.setItem("faleiro_oab_theme", isLight ? "light" : "dark");
    window.showToast(isLight ? "Tema Claro ativado" : "Tema Escuro ativado");
  }

  // --- EXPORTAR / IMPRIMIR EM PDF ---
  printPDF() {
    // Expandir temporariamente todas as semanas para garantir impressão completa
    const prevWeekFilter = this.selectedWeekFilter;
    const prevGroupFilter = this.selectedGroupFilter;
    const prevStatusFilter = this.selectedStatusFilter;

    this.selectedWeekFilter = "ALL";
    this.selectedGroupFilter = "ALL";
    this.selectedStatusFilter = "ALL";
    this.renderSchedule();

    setTimeout(() => {
      window.print();
      // Restaurar filtros do usuário após abrir a caixa de diálogo
      setTimeout(() => {
        this.selectedWeekFilter = prevWeekFilter;
        this.selectedGroupFilter = prevGroupFilter;
        this.selectedStatusFilter = prevStatusFilter;
        this.renderSchedule();
      }, 1000);
    }, 300);
  }

  // --- RESETAR PROGRESSO ---
  resetAllProgress() {
    if (confirm("Tem certeza que deseja resetar todo o progresso dos dias concluídos e simulador? Esta ação não pode ser desfeita.")) {
      localStorage.removeItem("faleiro_oab_completed_days");
      localStorage.removeItem("faleiro_oab_day_notes");
      localStorage.removeItem("faleiro_oab_sim_scores");
      this.completedDays = new Set();
      this.dayNotes = {};
      if (window.simulator) {
        window.simulator.loadDefaultScores();
        window.simulator.saveScores();
        window.simulator.render();
      }
      this.renderSchedule();
      this.updateGlobalProgress();
      window.showToast("Progresso resetado com sucesso.");
    }
  }
}

// Toast Notification global
window.showToast = function(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
};

// Instanciação inicial
document.addEventListener("DOMContentLoaded", () => {
  window.app = new FaleiroOABApp();
  window.app.init();
});

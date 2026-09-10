/**
 * FALEIRO OAB - Aplicação Principal
 * Gerenciamento de Estado, Cronograma Diário, Persistência Local,
 * Coach Tático & Insights em Tempo Real, Filtros e Temas
 */

class FaleiroOABApp {
  constructor() {
    this.currentTab = "cronograma";
    this.planDuration = 90; // Padrão 90 dias (13 semanas), perfeito para os 101 dias até 20/dez/2026
    this.completedDays = new Set();
    this.daySubtasks = {}; // { [day]: { law: boolean, questions: boolean } }
    this.dayNotes = {};
    this.simuladosList = [];
    this.selectedGroupFilter = "ALL";
    this.selectedWeekFilter = "ALL";
    this.selectedStatusFilter = "ALL";
    this.viewMode = "vitrine"; // "vitrine" (padrão blocos), "week_detail" (semana aberta), "all" (todas)
    this.activeWeekNumber = 1;
    this.examDate = "2026-12-20"; // Data oficial da 1ª Fase do 48º Exame de Ordem Unificado (FGV)
    this.startDate = ""; // Data de início dos estudos
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

    // Carregar subtarefas individuais (lei seca / questões)
    try {
      const savedSubtasks = localStorage.getItem("faleiro_oab_day_subtasks");
      if (savedSubtasks) {
        this.daySubtasks = JSON.parse(savedSubtasks);
      } else {
        this.daySubtasks = {};
      }
    } catch (e) {
      this.daySubtasks = {};
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
    } else {
      this.planDuration = 90; // Padrão 90 dias ideal para a janela do 48º Exame
    }

    // Carregar data da prova
    const savedDate = localStorage.getItem("faleiro_oab_exam_date");
    if (savedDate) {
      if (savedDate === "2026-11-22") {
        this.examDate = "2026-12-20";
        localStorage.setItem("faleiro_oab_exam_date", "2026-12-20");
      } else {
        this.examDate = savedDate;
      }
    }

    // Carregar data de início
    const savedStart = localStorage.getItem("faleiro_oab_start_date");
    if (savedStart) {
      this.startDate = savedStart;
    } else {
      this.startDate = new Date().toISOString().split("T")[0];
      localStorage.setItem("faleiro_oab_start_date", this.startDate);
    }

    // Carregar simulados
    try {
      const savedSims = localStorage.getItem("faleiro_oab_simulados");
      if (savedSims) {
        this.simuladosList = JSON.parse(savedSims);
      } else {
        this.simuladosList = [
          {
            id: 1,
            title: "Simulado Diagnóstico Inicial",
            date: this.startDate,
            score: 36,
            notes: "Identificada necessidade urgente de reforçar Ética Profissional e Processo Civil."
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

  saveAll() {
    try {
      localStorage.setItem("faleiro_oab_completed_days", JSON.stringify(Array.from(this.completedDays)));
      localStorage.setItem("faleiro_oab_day_subtasks", JSON.stringify(this.daySubtasks));
      localStorage.setItem("faleiro_oab_day_notes", JSON.stringify(this.dayNotes));
      localStorage.setItem("faleiro_oab_plan_duration", this.planDuration.toString());
      localStorage.setItem("faleiro_oab_simulados", JSON.stringify(this.simuladosList));
      localStorage.setItem("faleiro_oab_exam_date", this.examDate);
      localStorage.setItem("faleiro_oab_start_date", this.startDate);
    } catch (e) {
      console.warn("Erro ao gravar dados no LocalStorage", e);
    }
  }

  init() {
    this.setupTabs();
    this.setupCountdown();
    this.renderCoachTatico();
    this.renderTodaySpotlight();
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

    // Sincronizar input da data da prova no modal
    const inputExamDate = document.getElementById("inputExamDate");
    if (inputExamDate) inputExamDate.value = this.examDate;
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
    this.renderCoachTatico();
    this.renderTodaySpotlight();
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
    const subtextEl = document.getElementById("countdownSubtext");
    if (!countdownEl) return;

    const calculateDays = () => {
      const now = new Date();
      const target = new Date(this.examDate + "T00:00:00");
      const diffTime = target - now;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays > 0) {
        countdownEl.textContent = diffDays;
        if (subtextEl) {
          const weeks = Math.floor(diffDays / 7);
          const remainingDays = diffDays % 7;
          subtextEl.textContent = `Aproximadamente ${weeks} semanas e ${remainingDays} dias para a prova oficial da 1ª Fase (20/12/2026).`;
        }
      } else if (diffDays === 0) {
        countdownEl.textContent = "0";
        if (subtextEl) subtextEl.textContent = "🔥 É HOJE! Dia da batalha no 48º Exame de Ordem. Rumo aos 40+!";
      } else {
        countdownEl.textContent = "Concluído";
        if (subtextEl) subtextEl.textContent = "1ª Fase finalizada. Rumo à 2ª Fase OAB!";
      }
    };

    calculateDays();
    setInterval(calculateDays, 60000);
  }

  getCurrentScheduleData() {
    return this.planDuration === 60 ? window.SCHEDULE_60_DAYS : window.SCHEDULE_90_DAYS;
  }

  // --- COACH TÁTICO & INSIGHTS EM TEMPO REAL ---
  renderCoachTatico() {
    const container = document.getElementById("coachTaticoContainer");
    if (!container) return;

    const schedule = this.getCurrentScheduleData();
    const allDays = schedule.flatMap(w => w.days);
    const totalDays = allDays.length;
    const completedCount = allDays.filter(d => this.completedDays.has(d.day)).length;
    const progressPct = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;

    // Estatísticas do Grupo A (as 53 questões mais importantes)
    const groupADays = allDays.filter(d => d.group === "A");
    const groupADone = groupADays.filter(d => this.completedDays.has(d.day)).length;
    const groupAPct = groupADays.length > 0 ? Math.round((groupADone / groupADays.length) * 100) : 0;

    // Dias até a prova
    const now = new Date();
    const target = new Date(this.examDate + "T00:00:00");
    const diffDays = Math.max(0, Math.ceil((target - now) / (1000 * 60 * 60 * 24)));

    // Cálculo de Ritmo de Estudos
    const start = new Date(this.startDate + "T00:00:00");
    const daysSinceStart = Math.max(1, Math.ceil((now - start) / (1000 * 60 * 60 * 24)));
    const missionsPerDay = completedCount / daysSinceStart;
    const remainingMissions = totalDays - completedCount;
    
    let paceDescription = "";
    if (completedCount === 0) {
      paceDescription = "Comece sua 1ª missão hoje mesmo para calibrar o seu ritmo de batalha.";
    } else if (missionsPerDay >= 0.8) {
      const daysNeeded = Math.ceil(remainingMissions / missionsPerDay);
      if (daysNeeded < diffDays) {
        const margin = diffDays - daysNeeded;
        paceDescription = `🔥 Ritmo excelente! Você concluirá 100% do edital com ${margin} dias de folga para revisões finais antes de 20/dezembro.`;
      } else {
        paceDescription = `Ritmo firme! Faltam ${remainingMissions} missões para cobrir todo o cronograma.`;
      }
    } else {
      paceDescription = `Você concluiu ${completedCount} missões. Aumente a constância para 1 missão por dia para blindar os 40 pontos.`;
    }

    // Identificação da Fase de Preparação (Insights Adaptativos por Proximidade da Prova)
    let phaseBadge = "";
    let phaseTitle = "";
    let phaseAdvice = "";

    if (diffDays <= 7) {
      phaseBadge = "badge-phase-critical";
      phaseTitle = "🔥 VÉSPERA DA BATALHA • SEMANA DECISIVA DO 48º EXAME";
      phaseAdvice = "Proibido estudar matéria nova! O cronograma recomenda foco 100% na revisão dos 8 pontos de Ética (Estatuto e CED), súmulas vinculantes e descanso mental.";
    } else if (diffDays <= 20) {
      phaseBadge = "badge-phase-final";
      phaseTitle = "⚡ RETA FINAL DO 48º EXAME (Últimos 20 Dias)";
      phaseAdvice = "Fase de fixação cirúrgica: 80% do tempo direcionado para resolução de questões comentadas da FGV e leitura dos Artigos de Ouro do Grupo A.";
    } else if (diffDays <= 45) {
      phaseBadge = "badge-phase-speed";
      phaseTitle = "🎯 FASE DE ACELERAÇÃO & DOMÍNIO DO GRUPO A (53 PONTOS)";
      phaseAdvice = "Garanta presença total nas matérias do Grupo A (Ética, Constitucional, Civil, Processo Civil, Penal e Trabalho). Elas sozinhas colocam 53 pontos na sua mão!";
    } else {
      phaseBadge = "badge-phase-base";
      phaseTitle = "📚 RUMO AO 48º EXAME DE ORDEM (20 DE DEZEMBRO)";
      phaseAdvice = `Você tem ${diffDays} dias até a prova oficial em 20/12/2026. Com o cronograma de 90 dias, você cumpre 1 missão por dia e conclui todo o edital com folga para a reta final!`;
    }

    // Diagnóstico do Último Simulado
    let simInsight = "";
    if (this.simuladosList.length > 0) {
      const lastSim = this.simuladosList[0];
      if (lastSim.score >= 40) {
        simInsight = `🎯 <strong>Último Simulado: ${lastSim.score}/80 (Aprovado!)</strong> — Mantenha a consistência semanal para não oscilar emocionalmente.`;
      } else {
        const gap = 40 - lastSim.score;
        simInsight = `⚠️ <strong>Último Simulado: ${lastSim.score}/80</strong> — Faltam apenas <strong>${gap} pontos</strong> para os 40. Reforce Ética (+3 pts) e Administrativo (+2 pts) para cruzar a linha de corte.`;
      }
    } else {
      simInsight = "💡 Realize seu 1º Simulado Diagnóstico para mapear seus pontos fortes e fracos.";
    }

    container.innerHTML = `
      <div class="coach-header">
        <div class="coach-title-area">
          <div class="coach-badge-live">
            <span class="pulse-dot"></span>
            COACH TÁTICO FALEIRO • INSIGHTS EM TEMPO REAL
          </div>
          <h3 class="coach-main-heading">${phaseTitle}</h3>
        </div>
        <div class="coach-save-status">
          <span class="save-status-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Salvo automaticamente
          </span>
        </div>
      </div>

      <div class="coach-grid">
        <!-- Card 1: Fase & Proximidade -->
        <div class="coach-card">
          <div class="coach-card-label">TEMPO ATÉ A BATALHA</div>
          <div class="coach-metric-val">
            <span class="metric-big">${diffDays}</span>
            <span class="metric-unit">dias restantes</span>
          </div>
          <p class="coach-card-desc">${phaseAdvice}</p>
        </div>

        <!-- Card 2: Grupo A (Pareto 80/20) -->
        <div class="coach-card">
          <div class="coach-card-label">DOMÍNIO DO GRUPO A (53 QUESTÕES)</div>
          <div class="coach-metric-val">
            <span class="metric-big">${groupAPct}%</span>
            <span class="metric-unit">${groupADone}/${groupADays.length} missões concluídas</span>
          </div>
          <div class="coach-progress-track">
            <div class="coach-progress-fill" style="width: ${groupAPct}%"></div>
          </div>
          <p class="coach-card-desc">O Grupo A concentra 66% de toda a prova. Quem domina o Grupo A não depende de sorte.</p>
        </div>

        <!-- Card 3: Ritmo & Previsão -->
        <div class="coach-card">
          <div class="coach-card-label">RITMO & PREVISÃO DE CONCLUSÃO</div>
          <div class="coach-metric-val">
            <span class="metric-big">${progressPct}%</span>
            <span class="metric-unit">${completedCount}/${totalDays} missões cumpridas</span>
          </div>
          <p class="coach-card-desc">${paceDescription}</p>
        </div>
      </div>

      <div class="coach-footer-note">
        <div class="coach-sim-insight">${simInsight}</div>
        <div class="coach-motto">
          <span>⚔️</span>
          <em>"Preparem os cavalos para o dia da batalha." — Faleiro</em>
        </div>
      </div>
    `;
  }

  // --- SPOTLIGHT: SUA PRÓXIMA MISSÃO ---
  renderTodaySpotlight() {
    const spotlightEl = document.getElementById("missionTodaySpotlight");
    if (!spotlightEl) return;

    const schedule = this.getCurrentScheduleData();
    const allDays = schedule.flatMap(w => w.days);
    
    // Encontrar primeira missão não concluída
    const nextMission = allDays.find(d => !this.completedDays.has(d.day));

    if (!nextMission) {
      spotlightEl.innerHTML = `
        <div class="spotlight-card all-completed">
          <div class="spotlight-congrats-icon">🏆</div>
          <div class="spotlight-content">
            <h4 class="spotlight-title">Parabéns, Guerreiro(a)! Você cumpriu 100% das missões!</h4>
            <p class="spotlight-subtitle">Seu cavalo está pronto para a batalha. Agora faça revisões ativas e simulados até o domingo da prova!</p>
          </div>
        </div>
      `;
      return;
    }

    const groupBadgeClass = `badge-group-${nextMission.group.toLowerCase()}`;
    const isSubtaskLawDone = this.daySubtasks[nextMission.day]?.law || false;
    const isSubtaskQuestionsDone = this.daySubtasks[nextMission.day]?.questions || false;

    spotlightEl.innerHTML = `
      <div class="spotlight-card">
        <div class="spotlight-left">
          <div class="spotlight-pill">
            <span class="gold-square-mark"></span>
            SUA MISSÃO DE HOJE • MISSÃO ${String(nextMission.day).padStart(2, "0")}
          </div>
          <h3 class="spotlight-theme-title">${nextMission.theme}</h3>
          <div class="spotlight-meta-row">
            <span class="disc-tag">${nextMission.disciplines.join(" • ")}</span>
            <span class="day-group-tag ${groupBadgeClass}">Grupo ${nextMission.group}</span>
            <span class="spotlight-reading-preview">📖 ${nextMission.lawReading}</span>
          </div>
        </div>

        <div class="spotlight-actions">
          <button type="button" class="btn-spotlight-jump" onclick="window.app.scrollToMission(${nextMission.day})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            Abrir Missão
          </button>
          <button type="button" class="btn-spotlight-complete" onclick="window.app.toggleDay(${nextMission.day})">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
            Concluir Missão Agora
          </button>
        </div>
      </div>
    `;
  }

  // --- MODO DE VISUALIZAÇÃO (VITRINE VS TODAS AS SEMANAS) ---
  setViewMode(mode) {
    this.viewMode = mode;
    this.updateViewModeButtons();
    this.renderSchedule();
    const container = document.getElementById("scheduleWeeksContainer");
    if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  updateViewModeButtons() {
    const btnVitrine = document.getElementById("btnViewVitrine");
    const btnAll = document.getElementById("btnViewAll");
    if (btnVitrine && btnAll) {
      btnVitrine.classList.toggle("active", this.viewMode === "vitrine");
      btnAll.classList.toggle("active", this.viewMode === "all");
    }
  }

  openWeek(weekNum) {
    this.viewMode = "week_detail";
    this.activeWeekNumber = parseInt(weekNum, 10);
    this.updateViewModeButtons();
    this.renderSchedule();
    const container = document.getElementById("scheduleWeeksContainer");
    if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  backToVitrine() {
    this.viewMode = "vitrine";
    this.updateViewModeButtons();
    this.renderSchedule();
    const container = document.getElementById("scheduleWeeksContainer");
    if (container) container.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  prevWeek() {
    if (this.activeWeekNumber > 1) {
      this.openWeek(this.activeWeekNumber - 1);
    }
  }

  nextWeek() {
    const totalWeeks = this.getCurrentScheduleData().length;
    if (this.activeWeekNumber < totalWeeks) {
      this.openWeek(this.activeWeekNumber + 1);
    }
  }

  onWeekSelectChange(val) {
    if (val === "ALL") {
      this.setViewMode("vitrine");
    } else {
      this.openWeek(parseInt(val, 10));
    }
  }

  scrollToMission(dayNumber) {
    const schedule = this.getCurrentScheduleData();
    const targetWeek = schedule.find(w => w.days.some(d => d.day === dayNumber));
    
    // Se encontrou a semana, abre no modo detalhe focado
    if (targetWeek) {
      this.viewMode = "week_detail";
      this.activeWeekNumber = targetWeek.week;
      this.updateViewModeButtons();
    }

    // Resetar filtros de status/grupo se necessário para o card aparecer
    if (this.selectedStatusFilter === "DONE") {
      this.selectedStatusFilter = "ALL";
    }
    if (this.selectedGroupFilter !== "ALL") {
      this.selectedGroupFilter = "ALL";
    }

    this.renderSchedule();

    setTimeout(() => {
      const el = document.getElementById(`day-card-${dayNumber}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("highlight-pulse");
        setTimeout(() => el.classList.remove("highlight-pulse"), 2500);
      }
    }, 150);
  }

  // --- RENDERIZAÇÃO DO CRONOGRAMA ---
  renderSchedule() {
    const container = document.getElementById("scheduleWeeksContainer");
    if (!container) return;

    const schedule = this.getCurrentScheduleData();
    container.innerHTML = "";

    // Atualizar seletor de semanas
    const weekSelect = document.getElementById("weekFilterSelect");
    if (weekSelect) {
      weekSelect.innerHTML = `<option value="ALL">▦ Vitrine de Semanas (${schedule.length} Semanas)</option>`;
      schedule.forEach(w => {
        const opt = document.createElement("option");
        opt.value = w.week.toString();
        opt.textContent = `Semana ${w.week}: ${w.title.split(":")[1] || w.title}`;
        if (this.viewMode === "week_detail" && this.activeWeekNumber === w.week) {
          opt.selected = true;
        }
        weekSelect.appendChild(opt);
      });
    }

    if (this.viewMode === "vitrine") {
      this.renderVitrineGrid(container, schedule);
    } else if (this.viewMode === "week_detail") {
      const currentWeekData = schedule.find(w => w.week === this.activeWeekNumber) || schedule[0];
      this.renderSingleWeekDetail(container, schedule, currentWeekData);
    } else {
      this.renderAllWeeks(container, schedule);
    }
  }

  // Obter ícone/emblema temático da semana para a capa do módulo
  getWeekEmblemSvg(weekNumber) {
    switch (weekNumber) {
      case 1: // Ética & Constitucional I - Balança da Justiça
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h18"></path></svg>`;
      case 2: // Ética II & Constitucional II - Templo Constitucional
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="21" x2="21" y2="21"></line><line x1="4" y1="10" x2="20" y2="10"></line><polygon points="12 2 2 7 22 7 12 2"></polygon><line x1="6" y1="10" x2="6" y2="21"></line><line x1="10" y1="10" x2="10" y2="21"></line><line x1="14" y1="10" x2="14" y2="21"></line><line x1="18" y1="10" x2="18" y2="21"></line></svg>`;
      case 3: // Direito Penal - Escudo da Justiça
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
      case 4: // Processo Penal - Martelo da Justiça
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0-.83-.83-.83-2.17 0-3L11 10"></path><path d="m16 16 6-6"></path><path d="m8 8 6-6"></path><path d="m9 7 8 8"></path><path d="m21 11-8-8"></path></svg>`;
      case 5: // Direito Civil - Código Civil / Livro Aberto
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
      case 6: // Processo Civil - Petição & Pena
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`;
      case 7: // Trabalho & Proc. Trabalho - Maleta Trabalhista
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`;
      case 8: // Administrativo - Palácio / Prédio Governamental
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"></path><path d="M5 21V7l7-4 7 4v14"></path><path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v11H9V10z"></path></svg>`;
      case 9: // Tributário & Financeiro - Moeda e Balança
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
      case 10: // Empresarial, Consumidor & ECA - Pessoas e Sociedade
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`;
      case 11: // Ambiental & DH - Globo Terrestre
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
      case 12: // Reta Final I - Alvo Estratégico
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>`;
      case 13: // Reta Final II - Troféu de Aprovação
      default:
        return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    }
  }

  // Renderizar Grade Vitrine (Capas de Módulo em Formato Vertical)
  renderVitrineGrid(container, schedule) {
    const grid = document.createElement("div");
    grid.className = "vitrine-grid";

    schedule.forEach(weekData => {
      const weekDoneCount = weekData.days.filter(d => this.completedDays.has(d.day)).length;
      const totalDays = weekData.days.length;
      const pct = Math.round((weekDoneCount / totalDays) * 100);

      let statusBadgeClass = "pending";
      let statusText = "Pendente";
      let statusCardClass = "";
      let fillClass = "empty";

      if (pct === 100) {
        statusBadgeClass = "done";
        statusText = "✓ Concluída";
        statusCardClass = "status-done";
        fillClass = "done";
      } else if (pct > 0) {
        statusBadgeClass = "in-progress";
        statusText = `🔥 Em Curso (${pct}%)`;
        statusCardClass = "status-in-progress";
        fillClass = "in-progress";
      }

      // Limpar título da semana caso já venha com prefixo "Semana X:"
      const cleanTitle = weekData.title.replace(/^Semana\s*\d+\s*:\s*/i, "").trim();

      // Disciplinas únicas da semana
      const disciplinesSet = new Set();
      weekData.days.forEach(d => d.disciplines.forEach(disc => disciplinesSet.add(disc)));
      const uniqueDisciplines = Array.from(disciplinesSet).slice(0, 3);

      const card = document.createElement("div");
      card.className = `vitrine-week-card ${statusCardClass}`;
      card.onclick = () => window.app.openWeek(weekData.week);

      card.innerHTML = `
        <div class="module-cover-bg-glow"></div>
        <div class="module-cover-watermark">
          ${this.getWeekEmblemSvg(weekData.week)}
        </div>

        <div class="module-cover-content">
          <!-- Topo da Capa: Número do Módulo/Semana e Status -->
          <div class="module-cover-top">
            <div class="module-cover-number-wrap">
              <span class="module-cover-number">SEMANA ${String(weekData.week).padStart(2, "0")}</span>
            </div>
            <span class="vitrine-status-badge ${statusBadgeClass}">${statusText}</span>
          </div>

          <!-- Centro da Capa: Emblema Temático + Título da Semana -->
          <div class="module-cover-center">
            <div class="module-cover-emblem">
              ${this.getWeekEmblemSvg(weekData.week)}
            </div>
            <h3 class="module-cover-title">${cleanTitle}</h3>
            <p class="module-cover-focus">${weekData.focus}</p>
            <div class="module-cover-disciplines">
              ${uniqueDisciplines.map(d => `<span class="cover-disc-tag">${d}</span>`).join("")}
            </div>
          </div>

          <!-- Base da Capa: Progresso e Ação de Entrada -->
          <div class="module-cover-bottom">
            <div class="module-cover-progress-row">
              <span>Progresso</span>
              <strong>${weekDoneCount}/${totalDays} missões</strong>
            </div>
            <div class="module-cover-progress-track">
              <div class="module-cover-progress-fill ${fillClass}" style="width: ${pct}%"></div>
            </div>
            <div class="module-cover-action">
              <span>Acessar Módulo</span>
              <span class="module-cover-action-arrow">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
            </div>
          </div>
        </div>
      `;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  }

  // Renderizar Semana Focada Individual (com botão de voltar para a vitrine)
  renderSingleWeekDetail(container, schedule, weekData) {
    const wrapper = document.createElement("div");
    wrapper.className = "single-week-view-wrapper";

    // Barra Superior de Navegação
    const navBar = document.createElement("div");
    navBar.className = "week-detail-top-nav";
    navBar.innerHTML = `
      <button type="button" class="btn-back-to-vitrine" onclick="window.app.backToVitrine()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Voltar para a Vitrine de Semanas
      </button>

      <div class="week-detail-pager">
        <button type="button" class="btn-pager-prev" onclick="window.app.prevWeek()" ${weekData.week <= 1 ? "disabled" : ""}>
          ‹ Semana Anterior
        </button>
        <span class="pager-current-label">Semana ${weekData.week} de ${schedule.length}</span>
        <button type="button" class="btn-pager-next" onclick="window.app.nextWeek()" ${weekData.week >= schedule.length ? "disabled" : ""}>
          Próxima Semana ›
        </button>
      </div>
    `;
    wrapper.appendChild(navBar);

    // Card da semana selecionada
    const weekCard = this.createWeekCardElement(weekData);
    if (weekCard) wrapper.appendChild(weekCard);

    container.appendChild(wrapper);
  }

  // Renderizar Todas as Semanas (Visão Expandida)
  renderAllWeeks(container, schedule) {
    schedule.forEach(weekData => {
      const weekCard = this.createWeekCardElement(weekData);
      if (weekCard) container.appendChild(weekCard);
    });
  }

  // Construtor do Card de Semana com suas Missões
  createWeekCardElement(weekData) {
    // Filtrar dias dentro da semana
    const visibleDays = weekData.days.filter(d => {
      if (this.selectedGroupFilter !== "ALL") {
        if (d.group !== "ALL" && d.group !== this.selectedGroupFilter) {
          return false;
        }
      }
      const isDone = this.completedDays.has(d.day);
      if (this.selectedStatusFilter === "DONE" && !isDone) return false;
      if (this.selectedStatusFilter === "PENDING" && isDone) return false;
      return true;
    });

    if (visibleDays.length === 0 && this.selectedStatusFilter !== "ALL") {
      return null;
    }

    const weekCard = document.createElement("div");
    weekCard.className = "schedule-week-card";
    weekCard.id = `week-${weekData.week}`;

    const weekDoneCount = weekData.days.filter(d => this.completedDays.has(d.day)).length;
    const weekTotalCount = weekData.days.length;
    const weekPct = Math.round((weekDoneCount / weekTotalCount) * 100);

    weekCard.innerHTML = `
      <div class="week-header">
        <div class="week-title-area">
          <div class="week-pill-row">
            <span class="week-pill">Semana ${weekData.week}</span>
            <span class="week-done-badge">${weekDoneCount}/${weekTotalCount} concluídos (${weekPct}%)</span>
          </div>
          <h3 class="week-title">${weekData.title}</h3>
          <p class="week-focus-desc"><span class="focus-label">Foco Estratégico:</span> ${weekData.focus}</p>
        </div>
        <div class="week-progress-area">
          <div class="week-progress-bar">
            <div class="week-progress-fill" style="width: ${weekPct}%"></div>
          </div>
        </div>
      </div>
      <div class="week-days-grid" id="week-grid-${weekData.week}"></div>
    `;

    const grid = weekCard.querySelector(`#week-grid-${weekData.week}`);

    weekData.days.forEach(dayItem => {
      if (!visibleDays.includes(dayItem)) return;

      const isDone = this.completedDays.has(dayItem.day);
      const dayNote = this.dayNotes[dayItem.day] || "";
      const subtasks = this.daySubtasks[dayItem.day] || { law: isDone, questions: isDone };
      const groupBadgeClass = `badge-group-${dayItem.group.toLowerCase()}`;

      const dayCard = document.createElement("div");
      dayCard.className = `day-card ${isDone ? "completed" : ""}`;
      dayCard.id = `day-card-${dayItem.day}`;

      dayCard.innerHTML = `
        <div class="day-card-header">
          <div class="day-header-left">
            <span class="day-number-badge">Missão ${String(dayItem.day).padStart(2, "0")}</span>
            <div class="day-disciplines-tags">
              ${dayItem.disciplines.map(d => `<span class="disc-tag">${d}</span>`).join("")}
              <span class="day-group-tag ${groupBadgeClass}">Grupo ${dayItem.group}</span>
            </div>
          </div>
          
          <div class="day-header-right">
            ${isDone ? '<span class="status-done-pill">✓ Concluída</span>' : ''}
            <button type="button" 
                    class="btn-toggle-mission ${isDone ? 'active' : ''}" 
                    onclick="window.app.toggleDay(${dayItem.day})"
                    title="${isDone ? 'Desmarcar missão' : 'Marcar missão como cumprida'}">
              ${isDone ? '✓ Cumprida' : 'Concluir'}
            </button>
          </div>
        </div>

        <h4 class="day-theme-title">${dayItem.theme}</h4>

        <!-- Checklist de Ação Objetiva (Micro-tarefas) -->
        <div class="day-checklist-block">
          <label class="checklist-item ${subtasks.law ? 'checked' : ''}">
            <input type="checkbox" 
                   ${subtasks.law ? 'checked' : ''} 
                   onchange="window.app.toggleSubtask(${dayItem.day}, 'law', this.checked)">
            <span class="checklist-custom-check"></span>
            <span class="checklist-label-text">
              <strong>📖 Legislação:</strong> ${dayItem.lawReading}
            </span>
          </label>

          <label class="checklist-item ${subtasks.questions ? 'checked' : ''}">
            <input type="checkbox" 
                   ${subtasks.questions ? 'checked' : ''} 
                   onchange="window.app.toggleSubtask(${dayItem.day}, 'questions', this.checked)">
            <span class="checklist-custom-check"></span>
            <span class="checklist-label-text">
              <strong>🎯 Meta Prática:</strong> Resolver ${dayItem.questionsGoal} questões FGV comentadas
            </span>
          </label>
        </div>

        <div class="day-card-footer">
          <div class="day-note-preview">
            ${dayItem.reviewNotes ? `<span class="day-tip-text">💡 ${dayItem.reviewNotes}</span>` : ''}
          </div>
          <button type="button" class="btn-toggle-notes" onclick="window.app.toggleNotesArea(${dayItem.day})">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            ${dayNote ? 'Editar Nota' : 'Anotações'}
          </button>
        </div>

        <div class="day-notes-area ${dayNote ? 'visible' : ''}" id="notes-area-${dayItem.day}">
          <textarea placeholder="Suas anotações, artigos que mais errou ou pontos de atenção desta missão..." 
                    class="day-notes-input" 
                    onblur="window.app.saveDayNote(${dayItem.day}, this.value)">${dayNote}</textarea>
        </div>
      `;

      grid.appendChild(dayCard);
    });

    return weekCard;
  }

  // Alternar micro-tarefa individual (Lei Seca ou Questões)
  toggleSubtask(dayNumber, taskKey, isChecked) {
    if (!this.daySubtasks[dayNumber]) {
      this.daySubtasks[dayNumber] = { law: false, questions: false };
    }
    this.daySubtasks[dayNumber][taskKey] = isChecked;

    // Se marcou ambas as tarefas, conclui a missão automaticamente!
    if (this.daySubtasks[dayNumber].law && this.daySubtasks[dayNumber].questions) {
      if (!this.completedDays.has(dayNumber)) {
        this.completedDays.add(dayNumber);
        window.showToast(`⚔️ Ambas as metas cumpridas! Missão ${dayNumber} finalizada!`);
      }
    } else {
      // Se desmarcou uma e a missão estava concluída, remove a conclusão total
      if (this.completedDays.has(dayNumber)) {
        this.completedDays.delete(dayNumber);
      }
    }

    this.saveAll();
    this.updateGlobalProgress();
    this.renderCoachTatico();
    this.renderTodaySpotlight();
    this.renderSchedule();
  }

  toggleDay(dayNumber) {
    if (this.completedDays.has(dayNumber)) {
      this.completedDays.delete(dayNumber);
      if (this.daySubtasks[dayNumber]) {
        this.daySubtasks[dayNumber].law = false;
        this.daySubtasks[dayNumber].questions = false;
      }
      window.showToast(`Missão ${dayNumber} desmarcada.`);
    } else {
      this.completedDays.add(dayNumber);
      if (!this.daySubtasks[dayNumber]) {
        this.daySubtasks[dayNumber] = { law: true, questions: true };
      } else {
        this.daySubtasks[dayNumber].law = true;
        this.daySubtasks[dayNumber].questions = true;
      }
      window.showToast(`⚔️ Parabéns! Missão ${dayNumber} cumprida!`);
    }

    this.saveAll();
    this.updateGlobalProgress();
    this.renderCoachTatico();
    this.renderTodaySpotlight();
    this.renderSchedule();
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
    this.saveAll();
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

  // --- ATUALIZAÇÃO DO PROGRESSO GLOBAL ---
  updateGlobalProgress() {
    const schedule = this.getCurrentScheduleData();
    const allDays = schedule.flatMap(w => w.days);
    const totalDays = allDays.length;
    const completedCount = allDays.filter(d => this.completedDays.has(d.day)).length;
    const pct = totalDays > 0 ? Math.round((completedCount / totalDays) * 100) : 0;

    const pctEl = document.getElementById("overallProgressPct");
    const countEl = document.getElementById("overallProgressCount");
    const barEl = document.getElementById("overallProgressBarFill");

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (countEl) countEl.textContent = `${completedCount} de ${totalDays} missões concluídas`;
    if (barEl) barEl.style.width = `${pct}%`;
  }

  // --- RAIO-X & ARTIGOS DE OURO ---
  renderRaioX() {
    const container = document.getElementById("raioXDisciplinesList");
    if (!container || !window.DISCIPLINES_DATA) return;

    container.innerHTML = "";

    window.DISCIPLINES_DATA.forEach(disc => {
      const card = document.createElement("div");
      card.className = "raiox-card";
      card.id = `raiox-${disc.id}`;

      card.innerHTML = `
        <div class="raiox-header">
          <div class="raiox-header-left">
            <span class="raiox-order-pill">Questões ${disc.order}</span>
            <h4 class="raiox-title">${disc.name}</h4>
          </div>
          <div class="raiox-header-right">
            <span class="day-group-tag badge-group-${disc.group.toLowerCase()}">Grupo ${disc.group}</span>
            <span class="raiox-q-count">${disc.questions} questões</span>
          </div>
        </div>

        <p class="raiox-desc">${disc.description}</p>

        <div class="raiox-section">
          <div class="raiox-section-label">
            <span class="gold-square-mark"></span>
            Artigos de Ouro Mais Recorrentes na FGV:
          </div>
          <ul class="raiox-articles-list">
            ${disc.goldArticles.map(art => `<li>${art}</li>`).join("")}
          </ul>
        </div>

        <div class="raiox-section">
          <div class="raiox-section-label">
            <span class="gold-square-mark"></span>
            Temas com Maior Incidência Histórica:
          </div>
          <div class="raiox-themes-tags">
            ${disc.topThemes.map(th => `<span class="raiox-theme-pill">${th}</span>`).join("")}
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // --- HISTÓRICO DE SIMULADOS ---
  renderSimulados() {
    const listContainer = document.getElementById("simuladosHistoryList");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    if (this.simuladosList.length === 0) {
      listContainer.innerHTML = `
        <div class="empty-simulados-notice">
          <p>Nenhum simulado cadastrado ainda.</p>
          <button type="button" class="btn-header btn-primary-gold" onclick="window.app.openModal('modalAddSimulado')">
            + Cadastrar Meu Primeiro Simulado
          </button>
        </div>
      `;
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

    this.saveAll();
    this.renderSimulados();
    this.renderCoachTatico();
    window.showToast("Simulado registrado com sucesso!");
    this.closeModal("modalAddSimulado");
  }

  deleteSimulado(idx) {
    if (confirm("Deseja realmente remover este simulado do histórico?")) {
      this.simuladosList.splice(idx, 1);
      this.saveAll();
      this.renderSimulados();
      this.renderCoachTatico();
      window.showToast("Simulado excluído.");
    }
  }

  // --- MODAIS & BACKUP ---
  openModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.add("open");
  }

  closeModal(modalId) {
    const m = document.getElementById(modalId);
    if (m) m.classList.remove("open");
  }

  openBackupModal() {
    this.openModal("modalBackup");
  }

  openDateModal() {
    const inputExamDate = document.getElementById("inputExamDate");
    if (inputExamDate) inputExamDate.value = this.examDate;
    this.openModal("modalExamDate");
  }

  saveExamDate(e) {
    if (e) e.preventDefault();
    const inputExamDate = document.getElementById("inputExamDate");
    if (inputExamDate && inputExamDate.value) {
      this.examDate = inputExamDate.value;
      localStorage.setItem("faleiro_oab_exam_date", this.examDate);
      this.setupCountdown();
      this.renderCoachTatico();
      this.closeModal("modalExamDate");
      window.showToast("Data da prova atualizada com sucesso!");
    }
  }

  // Geração de Objeto de Backup Completo
  getBackupPayload() {
    return {
      version: "2.0",
      product: "Cronograma Estratégico OAB • Prof Faleiro",
      completedDays: Array.from(this.completedDays),
      daySubtasks: this.daySubtasks,
      dayNotes: this.dayNotes,
      planDuration: this.planDuration,
      examDate: this.examDate,
      startDate: this.startDate,
      simuladosList: this.simuladosList,
      simScores: localStorage.getItem("faleiro_oab_sim_scores") || null,
      exportedAt: new Date().toISOString()
    };
  }

  downloadBackupFile() {
    const data = this.getBackupPayload();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `faleiro-oab-backup-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    window.showToast("Backup baixado com sucesso!");
  }

  copyBackupCode() {
    const data = this.getBackupPayload();
    const jsonStr = JSON.stringify(data);
    navigator.clipboard.writeText(jsonStr).then(() => {
      window.showToast("Código de backup copiado para a área de transferência!");
    }).catch(() => {
      window.showToast("Não foi possível copiar. Tente baixar o arquivo.");
    });
  }

  importBackupFromTextarea() {
    const textarea = document.getElementById("importBackupTextarea");
    if (!textarea || !textarea.value.trim()) {
      alert("Por favor, cole o código do backup na caixa de texto.");
      return;
    }
    this.applyBackupJson(textarea.value.trim());
  }

  handleBackupFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.applyBackupJson(e.target.result);
    };
    reader.readAsText(file);
  }

  applyBackupJson(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (!data || (!data.completedDays && !data.version)) {
        alert("Arquivo de backup inválido.");
        return;
      }

      if (Array.isArray(data.completedDays)) {
        this.completedDays = new Set(data.completedDays);
      }
      if (data.daySubtasks) {
        this.daySubtasks = data.daySubtasks;
      }
      if (data.dayNotes) {
        this.dayNotes = data.dayNotes;
      }
      if (data.planDuration === 60 || data.planDuration === 90) {
        this.planDuration = data.planDuration;
      }
      if (data.examDate) {
        this.examDate = data.examDate;
      }
      if (data.startDate) {
        this.startDate = data.startDate;
      }
      if (Array.isArray(data.simuladosList)) {
        this.simuladosList = data.simuladosList;
      }
      if (data.simScores) {
        localStorage.setItem("faleiro_oab_sim_scores", data.simScores);
      }

      this.saveAll();
      this.updateDurationButtons();
      this.setupCountdown();
      this.renderCoachTatico();
      this.renderTodaySpotlight();
      this.renderSchedule();
      this.renderSimulados();
      this.updateGlobalProgress();
      if (window.simulator) window.simulator.render();

      this.closeModal("modalBackup");
      window.showToast("🎉 Backup restaurado com sucesso em 100%!");
    } catch (err) {
      alert("Erro ao ler o backup. Verifique se o formato é válido.");
    }
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
    const prevWeekFilter = this.selectedWeekFilter;
    const prevGroupFilter = this.selectedGroupFilter;
    const prevStatusFilter = this.selectedStatusFilter;

    this.selectedWeekFilter = "ALL";
    this.selectedGroupFilter = "ALL";
    this.selectedStatusFilter = "ALL";
    this.renderSchedule();

    setTimeout(() => {
      window.print();
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
      localStorage.removeItem("faleiro_oab_day_subtasks");
      localStorage.removeItem("faleiro_oab_day_notes");
      localStorage.removeItem("faleiro_oab_sim_scores");
      this.completedDays = new Set();
      this.daySubtasks = {};
      this.dayNotes = {};
      if (window.simulator) {
        window.simulator.loadDefaultScores();
        window.simulator.saveScores();
        window.simulator.render();
      }
      this.renderCoachTatico();
      this.renderTodaySpotlight();
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

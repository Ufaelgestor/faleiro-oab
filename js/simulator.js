/**
 * FALEIRO OAB - Simulador Inteligente dos 40 Pontos
 * Gestão de metas de acertos por disciplina e análise estratégica em tempo real
 */

class OABSimulator {
  constructor() {
    this.scores = {};
    this.storageKey = "faleiro_oab_sim_scores";
    this.initScores();
  }

  initScores() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      try {
        this.scores = JSON.parse(saved);
      } catch (e) {
        this.loadDefaultScores();
      }
    } else {
      this.loadDefaultScores();
    }

    // Garantir que todas as 20 matérias tenham chave
    window.DISCIPLINES_DATA.forEach(d => {
      if (typeof this.scores[d.id] !== "number") {
        this.scores[d.id] = d.targetRecommended || Math.ceil(d.questions * 0.5);
      }
    });
  }

  loadDefaultScores() {
    this.scores = {};
    window.DISCIPLINES_DATA.forEach(d => {
      this.scores[d.id] = d.targetRecommended || Math.ceil(d.questions * 0.5);
    });
  }

  applyPreset(presetIndex) {
    const preset = window.SIMULATOR_PRESETS[presetIndex];
    if (preset) {
      this.scores = { ...preset.scores };
      this.saveScores();
      this.render();
      if (window.showToast) {
        window.showToast(`Preset "${preset.name}" aplicado com sucesso!`);
      }
    }
  }

  setScore(disciplineId, val) {
    const disc = window.DISCIPLINES_DATA.find(d => d.id === disciplineId);
    if (!disc) return;

    let num = parseInt(val, 10);
    if (isNaN(num)) num = 0;
    if (num < 0) num = 0;
    if (num > disc.questions) num = disc.questions;

    this.scores[disciplineId] = num;
    this.saveScores();
    this.updateSummary();
  }

  saveScores() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.scores));
  }

  calculateTotals() {
    let total = 0;
    let groupA = 0;
    let groupB = 0;
    let groupC = 0;

    window.DISCIPLINES_DATA.forEach(d => {
      const score = this.scores[d.id] || 0;
      total += score;
      if (d.group === "A") groupA += score;
      else if (d.group === "B") groupB += score;
      else if (d.group === "C") groupC += score;
    });

    let status = "";
    let statusClass = "";
    let statusTip = "";

    if (total >= 50) {
      status = "💎 Aprovado com Excelência!";
      statusClass = "status-excellent";
      statusTip = "Margem de segurança máxima (+10 pontos acima da nota de corte). Você terá uma base excepcional para a 2ª fase!";
    } else if (total >= 40) {
      status = "🟢 Aprovado na 1ª Fase!";
      statusClass = "status-pass";
      statusTip = "Você atingiu ou superou os 40 pontos necessários! Mantenha a constância e não descuide da revisão de Ética.";
    } else if (total >= 38) {
      status = "🟡 Na Trave (Atenção!)";
      statusClass = "status-warning";
      statusTip = `Faltam apenas ${40 - total} ponto(s) para os 40. Sugestão: aumente 1 ponto em Ética e 1 ponto em Consumidor/ECA para virar o jogo!`;
    } else {
      status = "🔴 Zona de Risco";
      statusClass = "status-danger";
      statusTip = `Você está a ${40 - total} pontos da aprovação. Concentre seus estudos nas matérias do Grupo A (especialmente Ética e Constitucional) para subir rapidamente.`;
    }

    return { total, groupA, groupB, groupC, status, statusClass, statusTip };
  }

  render() {
    const container = document.getElementById("simulatorDisciplinesList");
    if (!container) return;

    container.innerHTML = "";

    window.DISCIPLINES_DATA.forEach(disc => {
      const currentVal = this.scores[disc.id] || 0;
      const groupBadgeClass = `badge-group-${disc.group.toLowerCase()}`;

      const card = document.createElement("div");
      card.className = "sim-discipline-row";
      card.id = `sim-row-${disc.id}`;
      card.innerHTML = `
        <div class="sim-row-left">
          <span class="sim-order-badge">${disc.order}</span>
          <div class="sim-name-col">
            <div class="sim-discipline-name">
              ${disc.name}
              <span class="sim-badge ${groupBadgeClass}">Grupo ${disc.group}</span>
            </div>
            <div class="sim-discipline-meta">Total de ${disc.questions} questões na prova oficial</div>
          </div>
        </div>
        <div class="sim-row-right">
          <div class="sim-slider-wrap">
            <input type="range" 
                   id="slider-${disc.id}"
                   min="0" 
                   max="${disc.questions}" 
                   value="${currentVal}" 
                   class="sim-range-input"
                   oninput="window.simulator.handleSliderChange('${disc.id}', this.value)">
          </div>
          <div class="sim-score-control">
            <button type="button" class="btn-step" onclick="window.simulator.stepScore('${disc.id}', -1)" title="Diminuir">-</button>
            <span class="sim-score-val" id="val-${disc.id}">${currentVal}</span>
            <span class="sim-score-max">/${disc.questions}</span>
            <button type="button" class="btn-step" onclick="window.simulator.stepScore('${disc.id}', 1)" title="Aumentar">+</button>
          </div>
        </div>
      `;
      container.appendChild(card);
    });

    this.updateSummary();
    this.renderPresets();
  }

  handleSliderChange(id, val) {
    this.setScore(id, val);
    const displayVal = document.getElementById(`val-${id}`);
    if (displayVal) displayVal.textContent = val;
  }

  stepScore(id, delta) {
    const current = this.scores[id] || 0;
    const disc = window.DISCIPLINES_DATA.find(d => d.id === id);
    if (!disc) return;

    let next = current + delta;
    if (next < 0) next = 0;
    if (next > disc.questions) next = disc.questions;

    this.setScore(id, next);
    const slider = document.getElementById(`slider-${id}`);
    if (slider) slider.value = next;
    const displayVal = document.getElementById(`val-${id}`);
    if (displayVal) displayVal.textContent = next;
  }

  renderPresets() {
    const container = document.getElementById("simulatorPresetsList");
    if (!container) return;

    container.innerHTML = "";
    window.SIMULATOR_PRESETS.forEach((preset, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "btn-preset";
      btn.innerHTML = `
        <span class="preset-title">${preset.name}</span>
        <span class="preset-desc">${preset.description}</span>
      `;
      btn.onclick = () => this.applyPreset(idx);
      container.appendChild(btn);
    });
  }

  updateSummary() {
    const { total, groupA, groupB, groupC, status, statusClass, statusTip } = this.calculateTotals();

    // Elementos do resumo
    const totalScoreEl = document.getElementById("simTotalScore");
    const statusPillEl = document.getElementById("simStatusPill");
    const tipTextEl = document.getElementById("simTipText");
    const groupAScoreEl = document.getElementById("simGroupAScore");
    const groupBScoreEl = document.getElementById("simGroupBScore");
    const groupCScoreEl = document.getElementById("simGroupCScore");
    const simProgressBar = document.getElementById("simProgressBar");

    if (totalScoreEl) totalScoreEl.textContent = total;
    if (statusPillEl) {
      statusPillEl.textContent = status;
      statusPillEl.className = `sim-status-pill ${statusClass}`;
    }
    if (tipTextEl) tipTextEl.textContent = statusTip;

    if (groupAScoreEl) groupAScoreEl.textContent = `${groupA}/53`;
    if (groupBScoreEl) groupBScoreEl.textContent = `${groupB}/9`;
    if (groupCScoreEl) groupCScoreEl.textContent = `${groupC}/18`;

    if (simProgressBar) {
      const pct = Math.min(100, Math.round((total / 80) * 100));
      simProgressBar.style.width = `${pct}%`;
      simProgressBar.className = `sim-progress-fill ${statusClass}`;
    }
  }
}

// Instanciar simulador globalmente
window.simulator = new OABSimulator();

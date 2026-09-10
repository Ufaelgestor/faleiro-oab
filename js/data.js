/**
 * FALEIRO OAB - Dados Estratégicos Oficiais da 1ª Fase OAB
 * Matriz Oficial de 80 questões da FGV
 */

const DISCIPLINES_DATA = [
  {
    id: "etica",
    name: "Ética Profissional",
    questions: 8,
    order: "01-08",
    group: "A",
    icon: "scale",
    color: "#eab308", // Dourado / Ouro
    targetRecommended: 7,
    description: "A disciplina mais importante da 1ª fase. Representa 10% de toda a prova com apenas 3 diplomas legais curtos. Meta: gabaritar ou errar no máximo 1 questão.",
    goldArticles: [
      "Estatuto da OAB (Lei 8.906/94): Arts. 1º a 5º (Atividade de Advocacia)",
      "Arts. 6º a 7º-B (Direitos e Prerrogativas do Advogado - Tema Campeão FGV)",
      "Arts. 8º a 14 (Inscrição na OAB e Impedimentos)",
      "Arts. 15 a 17 (Sociedade de Advogados)",
      "Arts. 18 a 21 (Advogado Empregado)",
      "Arts. 22 a 26 (Honorários Advocatícios - Sucumbenciais, Contratuais)",
      "Arts. 27 a 30 (Incompatibilidades e Impedimentos)",
      "Arts. 34 a 43 (Infrações e Sanções Disciplinares: Censura, Suspensão, Exclusão)",
      "Código de Ética e Disciplina (CED): Arts. 1º a 7º, 28 a 34 (Sigilo Profissional e Publicidade)",
      "Regulamento Geral da OAB: Eleições, Órgãos e Competências"
    ],
    topThemes: [
      "Prerrogativas do Advogado (Art. 7º - inviolabilidade, comunicação, prisão em flagrante)",
      "Incompatibilidades x Impedimentos (Cargos públicos, polícia, judiciário)",
      "Honorários Advocatícios (Prescrição de 5 anos, arbitramento, quota litis)",
      "Infrações Disciplinares e Processo Disciplinar",
      "Publicidade na Advocacia (redes sociais, limites informativos)",
      "Sociedades de Advogados (Unipessoal vs Pluripessoal)"
    ]
  },
  {
    id: "filosofia",
    name: "Filosofia do Direito",
    questions: 2,
    order: "09-10",
    group: "C",
    icon: "book-open",
    color: "#a855f7",
    targetRecommended: 1,
    description: "Questões teóricas e conceituais de hermenêutica e pensadores clássicos e contemporâneos.",
    goldArticles: [
      "Positivismo Jurídico vs Não-Positivismo (Kelsen, Hart, Bobbio, Alexy)",
      "Teoria da Justiça (John Rawls, Michael Sandel)",
      "Moral e Direito (Habermas, Dworkin)"
    ],
    topThemes: [
      "Hans Kelsen (Teoria Pura do Direito, Norma Fundamental)",
      "Herbert Hart (Regras Primárias e Secundárias)",
      "Robert Alexy (Regras vs Princípios, Proporcionalidade)",
      "John Rawls (Véu da ignorância, Princípios da Justiça)"
    ]
  },
  {
    id: "constitucional",
    name: "Direito Constitucional",
    questions: 6,
    order: "11-16",
    group: "A",
    icon: "landmark",
    color: "#3b82f6",
    targetRecommended: 5,
    description: "Espinha dorsal de toda a prova e fundamental para compreender todas as demais disciplinas. Altíssima incidência de texto expresso da CF/88.",
    goldArticles: [
      "CF/88 Art. 5º (Direitos e Deveres Individuais e Coletivos - Campeão de Questões)",
      "CF/88 Art. 12 (Nacionalidade e Cargos Privativos de Brasileiro Nato)",
      "CF/88 Arts. 14 a 16 (Direitos Políticos e Inelegibilidades)",
      "CF/88 Arts. 18 a 36 (Organização do Estado e Intervenção Federal/Estadual)",
      "CF/88 Arts. 44 a 75 (Poder Legislativo, Imunidades Parlamentares e Processo Legislativo)",
      "CF/88 Arts. 84 a 88 (Poder Executivo e Atribuições do Presidente)",
      "CF/88 Arts. 102 e 103 (Controle Concentrado: ADI, ADC, ADO, ADPF e Competências do STF)",
      "CF/88 Art. 105 (Competências do STJ)",
      "Súmulas Vinculantes do STF (leitura obrigatória: SVs 11, 13, 14, 25, 45, 56)"
    ],
    topThemes: [
      "Controle de Constitucionalidade (Concentrado vs Difuso, Legitimados do Art. 103)",
      "Processo Legislativo (PEC, Leis Complementares e Ordinárias, Medidas Provisórias)",
      "Direitos Fundamentais e Remédios Constitucionais (HC, MS, HD, MI, AP)",
      "Repartição de Competências Federativas (Privativa da União vs Concorrente)",
      "Imunidades Parlamentares (Material e Formal)"
    ]
  },
  {
    id: "humanos",
    name: "Direitos Humanos",
    questions: 2,
    order: "17-18",
    group: "C",
    icon: "users",
    color: "#06b6d4",
    targetRecommended: 2,
    description: "Disciplina rápida com temas recorrentes sobre tratados internacionais e Sistema Interamericano.",
    goldArticles: [
      "CF/88 Art. 5º, § 2º e § 3º (Status dos Tratados de Direitos Humanos - Emendas Constitucionais)",
      "Pacto de San José da Costa Rica (Convenção Americana sobre Direitos Humanos)",
      "Declaração Universal dos Direitos Humanos (1948)",
      "Jurisprudência da Corte Interamericana de Direitos Humanos contra o Brasil"
    ],
    topThemes: [
      "Incorporação de Tratados e Teoria da Supralegalidade (RE 466.343/STF)",
      "Comissão e Corte Interamericana de Direitos Humanos (Legitimidade e Processamento)",
      "Incidentes de Deslocamento de Competência (IDC - Art. 109, § 5º da CF)",
      "Garantias do Devido Processo Legal no Sistema Interamericano"
    ]
  },
  {
    id: "eleitoral",
    name: "Direito Eleitoral",
    questions: 2,
    order: "19-20",
    group: "C",
    icon: "check-circle",
    color: "#10b981",
    targetRecommended: 1,
    description: "Foco prático em condições de elegibilidade, causas de inelegibilidade e propaganda eleitoral.",
    goldArticles: [
      "CF/88 Art. 14 (Condições de Elegibilidade, Alistamento e Inelegibilidades)",
      "LC nº 64/90 (Lei das Inelegibilidades e Lei da Ficha Limpa - LC 135/2010)",
      "Lei nº 9.504/97 (Lei das Eleições: Propaganda e Registro de Candidatura)"
    ],
    topThemes: [
      "Inelegibilidade Reflexa (Art. 14, § 7º da CF/88)",
      "Cargos e Idades Mínimas na Posse (Art. 14, § 3º, VI)",
      "Condutas Vedadas a Agentes Públicos em Ano Eleitoral",
      "Ações Eleitorais: AIME, AIJE e RCED"
    ]
  },
  {
    id: "internacional",
    name: "Direito Internacional",
    questions: 2,
    order: "21-22",
    group: "C",
    icon: "globe",
    color: "#6366f1",
    targetRecommended: 1,
    description: "Compreende Direito Internacional Público e Direito Internacional Privado (LINDB e Cooperação).",
    goldArticles: [
      "LINDB (Decreto-Lei 4.657/42): Arts. 7º ao 19 (Estatuto Pessoal, Sucessão e Domicílio)",
      "CPC/15 Arts. 21 a 25 (Competência Internacional da Justiça Brasileira)",
      "CPC/15 Arts. 26 a 41 (Cooperação Jurídica Internacional e Carta Rogatória)",
      "Lei nº 13.445/2017 (Lei de Migração: Extradição, Expulsão, Deportação e Repatriação)"
    ],
    topThemes: [
      "Direito Internacional Privado e Aplicação da Lei no Espaço (LINDB)",
      "Diferenças entre Extradição, Expulsão, Deportação e Asilo",
      "Homologação de Decisão Estrangeira no STJ (Art. 105, I, i da CF e RISTJ)",
      "Competência Internacional Exclusiva vs Concorrente (CPC Arts. 21 e 23)"
    ]
  },
  {
    id: "financeiro",
    name: "Direito Financeiro",
    questions: 2,
    order: "23-24",
    group: "C",
    icon: "trending-up",
    color: "#14b8a6",
    targetRecommended: 1,
    description: "Foco no ciclo orçamentário constitucional e normas fundamentais da Lei de Responsabilidade Fiscal.",
    goldArticles: [
      "CF/88 Arts. 165 a 169 (PPA, LDO, LOA, Vedações Orçamentárias e Emendas Parlamentares Impositivas)",
      "LC nº 101/2000 (Lei de Responsabilidade Fiscal - LRF: Despesa com Pessoal e Restos a Pagar)",
      "Lei nº 4.320/64 (Receitas e Despesas Públicas, Créditos Adicionais)"
    ],
    topThemes: [
      "Espécies Orçamentárias (PPA, LDO e LOA - prazos e finalidades)",
      "Créditos Adicionais (Suplementares, Especiais e Extraordinários)",
      "Emendas Parlamentares Individuais e de Bancada (Orçamento Impositivo)",
      "Limites de Despesa com Pessoal e Vedações de Fim de Mandato (LRF)"
    ]
  },
  {
    id: "tributario",
    name: "Direito Tributário",
    questions: 5,
    order: "25-29",
    group: "B",
    icon: "receipt",
    color: "#f97316",
    targetRecommended: 4,
    description: "Uma das disciplinas com maior regularidade de repetição na FGV. Estudar os princípios, imunidades e CTN garante excelente pontuação.",
    goldArticles: [
      "CF/88 Arts. 145 a 149-A (Espécies Tributárias: Impostos, Taxas, Contribuições de Melhoria, Empréstimos Compulsórios)",
      "CF/88 Arts. 150 a 152 (Limitações ao Poder de Tributar: Legalidade, Anterioridade, Irretroatividade, Imunidades)",
      "CF/88 Arts. 153 a 156 (Competências Tributárias da União, Estados e Municípios)",
      "CTN Arts. 96 a 112 (Legislação Tributária e Vigência)",
      "CTN Arts. 113 a 138 (Obrigação Tributária e Responsabilidade Tributária de Sócios e Sucessores)",
      "CTN Arts. 142 a 150 (Lançamento Tributário)",
      "CTN Art. 151 (Causas de Suspensão da Exigibilidade do Crédito Tributário - MODESPA)",
      "CTN Art. 156 (Causas de Extinção do Crédito Tributário: Decadência, Prescrição, Pagamento)",
      "CTN Art. 175 (Causas de Exclusão: Isenção e Anistia)",
      "Súmulas Vinculantes e Súmulas do STJ (Ex: Súmula 430, 435, 555 STJ)"
    ],
    topThemes: [
      "Imunidades Tributárias (Musical, Livros/Papel, Templos de qualquer culto, Recíproca)",
      "Princípio da Anterioridade Anual e Nonagesimal (Exceções clássicas)",
      "Suspensão vs Extinção vs Exclusão do Crédito Tributário",
      "Decadência e Prescrição Tributária (Termo a quo e Súmula 555 STJ)",
      "Responsabilidade dos Sócios e Administradores (Art. 135 CTN e Súmula 435 STJ)"
    ]
  },
  {
    id: "administrativo",
    name: "Direito Administrativo",
    questions: 5,
    order: "30-34",
    group: "A",
    icon: "building",
    color: "#3b82f6",
    targetRecommended: 4,
    description: "Fundamental no Grupo A. Temas consagrados na FGV: Licitações (Lei 14.133), Improbidade (Lei 8.429 com reforma da 14.230) e Responsabilidade Civil do Estado.",
    goldArticles: [
      "CF/88 Art. 37 (Princípios LIMPE, Concurso Público, Teto Remuneratório, Acumulação de Cargos e § 6º Responsabilidade Civil)",
      "Lei nº 14.133/2021 (Nova Lei de Licitações: Modalidades, Critérios de Julgamento, Contratação Direta - Inexigibilidade vs Dispensa)",
      "Lei nº 8.429/92 alterada pela Lei 14.230/2021 (Improbidade Administrativa: Exigência do DOLO específico, prescrição de 8 anos)",
      "Lei nº 8.987/95 (Concessões e Permissões de Serviços Públicos: Formas de extinção como Encampação e Caducidade)",
      "Lei nº 9.784/99 (Processo Administrativo Federal: Princípios, Anulação, Revogação e Recursos)",
      "Decreto-Lei 3.365/41 e CF/88 Art. 5º, XXIV (Desapropriação e Intervenção do Estado na Propriedade)"
    ],
    topThemes: [
      "Responsabilidade Civil do Estado (Art. 37, § 6º - Teoria do Risco Administrativo, Caso Fortuito, Força Maior e Omissão)",
      "Nova Lei de Licitações (Modalidades: Diálogo Competitivo, Concorrência, Pregão; Hipóteses de Inexigibilidade)",
      "Nova Lei de Improbidade (Fim da modalidade culposa, Dolo Específico, Prazo prescricional único)",
      "Atos Administrativos (Requisitos COFIFOMOB, Atributos PATI, Revogação vs Anulação)",
      "Intervenção do Estado na Propriedade (Desapropriação por Utilidade Pública, Servidão e Tombamento)"
    ]
  },
  {
    id: "ambiental",
    name: "Direito Ambiental",
    questions: 2,
    order: "35-36",
    group: "C",
    icon: "leaf",
    color: "#22c55e",
    targetRecommended: 2,
    description: "Disciplina com alto custo-benefício. Foco em princípios, responsabilidade ambiental e Código Florestal.",
    goldArticles: [
      "CF/88 Art. 225 (Direito ao Meio Ambiente Ecologicamente Equilibrado, EIA/RIMA e Tríplice Responsabilidade)",
      "Lei nº 6.938/81 (Política Nacional do Meio Ambiente - PNMA: Princípios, SISNAMA e Responsabilidade Objetiva)",
      "Lei nº 12.651/2012 (Novo Código Florestal: APP vs Reserva Legal)",
      "Lei nº 9.605/98 (Crimes Ambientais: Responsabilidade Penal da Pessoa Jurídica)",
      "Lei nº 9.985/2000 (SNUC - Unidades de Proteção Integral vs Uso Sustentável)"
    ],
    topThemes: [
      "Princípios da Prevenção vs Precaução (In dubio pro natura)",
      "Responsabilidade Civil Ambiental (Objetiva, Solidária, Propter Rem e Teoria do Risco Integral)",
      "Tríplice Responsabilidade (Civil, Administrativa e Penal - Art. 225, § 3º da CF)",
      "Espécies de Unidades de Conservação (SNUC) e Diferenças de APP e Reserva Legal"
    ]
  },
  {
    id: "civil",
    name: "Direito Civil",
    questions: 6,
    order: "37-42",
    group: "A",
    icon: "home",
    color: "#ec4899",
    targetRecommended: 4,
    description: "Uma das disciplinas mais extensas, mas com cobrança concentrada da FGV em Parte Geral, Obrigações, Contratos e Família/Sucessões.",
    goldArticles: [
      "CC/02 Arts. 1º a 10 (Pessoa Natural e Capacidade Civil)",
      "CC/02 Arts. 40 a 52 (Pessoas Jurídicas e Desconsideração da Personalidade Jurídica - Art. 50)",
      "CC/02 Arts. 98 a 103 (Bens e Classificação)",
      "CC/02 Arts. 104 a 184 (Fatos Jurídicos, Negócio Jurídico e Defeitos: Erro, Dolo, Coação, Estado de Perigo, Lesão e Fraude)",
      "CC/02 Arts. 189 a 211 (Prescrição e Decadência)",
      "CC/02 Arts. 233 a 420 (Direito das Obrigações: Modalidades, Transmissão, Adimplemento e Inadimplemento)",
      "CC/02 Arts. 421 a 480 (Teoria Geral dos Contratos, Evicção, Vício Redibitório e Resolução)",
      "CC/02 Arts. 927 a 954 (Responsabilidade Civil Contratual e Extracontratual)",
      "CC/02 Arts. 1.196 a 1.227 e 1.238 a 1.244 (Posse e Usucapião)",
      "CC/02 Arts. 1.784 a 1.856 (Sucessões: Direito de Representação, Ordem de Vocação Hereditária e Herança Legítima)"
    ],
    topThemes: [
      "Defeitos do Negócio Jurídico (Nulidade vs Anulabilidade, Lesão, Estado de Perigo e Fraude contra Credores)",
      "Desconsideração da Personalidade Jurídica (Teoria Maior do Art. 50 CC vs Teoria Menor do CDC)",
      "Modalidades de Usucapião (Extraordinária, Ordinária, Especial Urbana, Familiar e Rural)",
      "Sucessão Legítima e Concorrência Sucessória do Cônjuge/Companheiro (Art. 1.829)",
      "Responsabilidade Civil e Danos (Dano moral presumido/in re ipsa, Excludentes de nexo causal)"
    ]
  },
  {
    id: "eca",
    name: "ECA (Criança e Adolescente)",
    questions: 2,
    order: "43-44",
    group: "C",
    icon: "smile",
    color: "#f59e0b",
    targetRecommended: 2,
    description: "Disciplina de ALTÍSSIMO retorno. Lei curta, 2 pontos fáceis e previsíveis para garantir sua aprovação.",
    goldArticles: [
      "Lei nº 8.069/90 (ECA): Arts. 1º a 6º (Princípio da Proteção Integral e Doutrina Prioritária)",
      "Arts. 19 a 52-D (Direito à Convivência Familiar e Adoção - Requisitos e Vedações)",
      "Arts. 81 a 85 (Prevenção e Proibições de Vendas/Hospedagem)",
      "Arts. 103 a 105 (Ato Infracional e Inimputabilidade)",
      "Arts. 112 a 125 (Medidas Socioeducativas: Advertência, Prestação de Serviços, Liberdade Assistida, Semiliberdade e Internação)",
      "Arts. 131 a 140 (Conselho Tutelar: Natureza, Atribuições e Escolha dos Membros)"
    ],
    topThemes: [
      "Adoção no ECA (Idade mínima de 18 anos, diferença de 16 anos, proibição por ascendentes e irmãos)",
      "Medidas Socioeducativas vs Medidas de Proteção (Cabimento da internação - violência, grave ameaça ou reiteração)",
      "Atribuições e Limites do Conselho Tutelar",
      "Autorização para Viagens Nacionais e Internacionais de Crianças e Adolescentes"
    ]
  },
  {
    id: "consumidor",
    name: "Direito do Consumidor",
    questions: 2,
    order: "45-46",
    group: "C",
    icon: "shopping-bag",
    color: "#10b981",
    targetRecommended: 2,
    description: "Outra disciplina de ALTÍSSIMO custo-benefício. Código enxuto, questões práticas do dia a dia e jurisprudência pacífica.",
    goldArticles: [
      "CDC (Lei 8.078/90): Arts. 2º e 3º (Conceito de Consumidor, Fornecedor e Teoria Finalista)",
      "Art. 6º (Direitos Básicos do Consumidor: Inversão do Ônus da Prova, Informação)",
      "Arts. 12 a 17 (Responsabilidade pelo Fato do Produto e do Serviço - Acidente de Consumo e Responsabilidade Objetiva)",
      "Arts. 18 a 25 (Responsabilidade por Vício do Produto e do Serviço - Prazos de 30 e 90 dias)",
      "Arts. 26 e 27 (Prazos de Reclamação e Prescrição de 5 anos)",
      "Arts. 39 a 42-A (Práticas Abusivas e Cobrança de Dívidas)",
      "Art. 49 (Direito de Arrependimento de 7 dias para compras fora do estabelecimento)",
      "Art. 54-A a 54-G (Superendividamento - Lei 14.181/2021)"
    ],
    topThemes: [
      "Fato do Produto/Serviço (Acidente) vs Vício do Produto/Serviço (Inadequação funcional)",
      "Responsabilidade Solidária dos Fornecedores e Hipótese Subsidiária do Comerciante (Art. 13)",
      "Direito de Arrependimento e Comércio Eletrônico (Art. 49 e devolução integral de valores)",
      "Práticas Abusivas (Venda casada, envio de cartão não solicitado - Súmula 532 STJ)",
      "Inversão do Ônus da Prova (Art. 6º, VIII - Critérios: Verossimilhança ou Hipossuficiência)"
    ]
  },
  {
    id: "empresarial",
    name: "Direito Empresarial",
    questions: 4,
    order: "47-50",
    group: "B",
    icon: "briefcase",
    color: "#d97706",
    targetRecommended: 3,
    description: "Disciplina temida por muitos, mas que cobra pontos bem delimitados da FGV: Teoria da Empresa, Sociedade Limitada/Anônima, Títulos e Falência.",
    goldArticles: [
      "CC/02 Arts. 966 a 985 (Conceito de Empresário, Exclusões e Registro)",
      "CC/02 Arts. 1.052 a 1.087 (Sociedade Limitada - Quóruns de Deliberação e Responsabilidade)",
      "CC/02 Arts. 1.142 a 1.149 (Estabelecimento Empresarial e Trespasse)",
      "Lei nº 6.404/76 (Lei das S/A: Ações, Acordo de Acionistas e Governança)",
      "Decreto nº 57.663/66 - LUG (Letra de Câmbio e Nota Promissória: Endosso vs Cessão de Crédito, Aval vs Fiança)",
      "Lei nº 7.357/85 (Lei do Cheque: Prazos de Apresentação e Prescrição)",
      "Lei nº 11.101/2005 (Recuperação Judicial e Falência: Ordem de Classificação de Créditos do Art. 83 e Efeitos)"
    ],
    topThemes: [
      "Diferença entre Endosso (autônomo) e Cessão de Crédito civil; Aval vs Fiança",
      "Contrato de Trespasse e Cláusula de Não Concorrência (Art. 1.147 CC)",
      "Sociedade Limitada: Exclusão de sócio e quóruns de alteração contratual",
      "Ordem de Preferência dos Créditos na Falência (Trabalhistas com teto de 150 SM, Garantia Real, Tributários, Quirografários)",
      "Créditos Extraconcursais na Falência e Recuperação Judicial"
    ]
  },
  {
    id: "processocivil",
    name: "Processo Civil",
    questions: 6,
    order: "51-56",
    group: "A",
    icon: "file-text",
    color: "#6366f1",
    targetRecommended: 4,
    description: "Pilar processual essencial. A FGV prioriza Petição Inicial, Recursos (Apelação e Agravo de Instrumento), Tutelas Provisórias e Execução.",
    goldArticles: [
      "CPC/15 Arts. 1º a 15 (Normas Fundamentais do Processo Civil)",
      "CPC/15 Arts. 294 a 311 (Tutelas Provisórias: Urgência Antecipada, Cautelar e Evidência)",
      "CPC/15 Arts. 318 a 334 (Procedimento Comum e Audiência de Mediação/Conciliação)",
      "CPC/15 Arts. 335 a 346 (Respostas do Réu: Contestação, Reconvenção e Efeitos da Revelia)",
      "CPC/15 Arts. 485 e 487 (Extinção Sem vs Com Resolução do Mérito)",
      "CPC/15 Arts. 994 a 1.044 (Recursos: Apelação, Agravo de Instrumento do Art. 1.015, Embargos de Declaração)",
      "CPC/15 Arts. 513 a 538 (Cumprimento de Sentença e Impugnação)",
      "CPC/15 Arts. 771 a 925 (Processo de Execução de Título Extrajudicial e Embargos à Execução)"
    ],
    topThemes: [
      "Rol do Agravo de Instrumento (Art. 1.015 CPC e Taxatividade Mitigada pelo Tema 988/STJ)",
      "Tutelas de Urgência vs Tutela de Evidência (Art. 311 - dispensabilidade do perigo de dano)",
      "Prazos Processuais em Dias Úteis e Contagem (Art. 219 e 224)",
      "Intervenção de Terceiros (Denunciação da Lide, Chamamento ao Processo, Desconsideração)",
      "Efeitos da Revelia e Matérias Cognoscíveis de Ofício na Contestação"
    ]
  },
  {
    id: "penal",
    name: "Direito Penal",
    questions: 6,
    order: "57-62",
    group: "A",
    icon: "shield-alert",
    color: "#ef4444",
    targetRecommended: 5,
    description: "Grande paixão de muitos candidatos e pontuação muito acessível se dominar a Teoria do Delito, Tipicidade e Crimes contra a Vida e Patrimônio.",
    goldArticles: [
      "CP Arts. 1º a 12 (Aplicação da Lei Penal: Tempo, Lugar do Crime e Princípio da Legalidade)",
      "CP Arts. 13 a 25 (Teoria do Crime: Relação de Causalidade, Tentativa, Consumação, Erro de Tipo/Proibição e Excludentes de Ilicitude)",
      "CP Arts. 26 a 28 (Culpabilidade e Inimputabilidade)",
      "CP Arts. 29 a 31 (Concurso de Pessoas: Coautoria e Participação)",
      "CP Arts. 59 a 76 (Aplicação da Pena: Sistema Trifásico de Nelson Hungria)",
      "CP Arts. 107 a 120 (Extinção da Punibilidade e Prescrição Penal - Arts. 109 e 115)",
      "CP Arts. 121 a 129 (Homicídio Qualificado, Feminicídio, Lesão Corporal)",
      "CP Arts. 155 a 180 (Crimes contra o Patrimônio: Furto, Roubo, Extorsão, Estelionato, Receptação)",
      "CP Arts. 312 a 327 (Crimes contra a Administração Pública: Peculato, Concussão, Corrupção Passiva e Prevaricação)"
    ],
    topThemes: [
      "Excludentes de Ilicitude (Legítima Defesa, Estado de Necessidade, Estrito Cumprimento do Dever Legal)",
      "Erro de Tipo vs Erro de Proibição (Efeitos na tipicidade e culpabilidade)",
      "Desistência Voluntária, Arrependimento Eficaz e Arrependimento Posterior (Art. 15 e 16 CP)",
      "Crimes contra a Vida (Homicídio Privilegiado vs Qualificado; Feminicídio como hediondo)",
      "Crimes Funcionais (Peculato, Concussão x Corrupção Passiva x Corrupção Ativa)"
    ]
  },
  {
    id: "processopenal",
    name: "Processo Penal",
    questions: 6,
    order: "63-68",
    group: "A",
    icon: "folder",
    color: "#f43f5e",
    targetRecommended: 5,
    description: "Matéria de lógica defensiva. A FGV adora Inquérito Policial, Ação Penal, Prisões Cautelares, Júri e Recursos em Processo Penal.",
    goldArticles: [
      "CPP Arts. 4º a 23 (Inquérito Policial: Características, Incomunicabilidade, Arquivamento e Trancamento)",
      "CPP Arts. 24 a 62 (Ação Penal Pública e Privada: Prazos decadenciais e Princípios)",
      "CPP Arts. 69 a 91 (Competência Penal: Lugar da infração e Prevenção)",
      "CPP Arts. 155 a 157 (Teoria das Provas e Provas Ilícitas por Derivação - Fruits of the poisonous tree)",
      "CPP Arts. 282 a 350 (Medidas Cautelares, Prisão em Flagrante, Prisão Preventiva e Prisão Temporária - Lei 7.960/89)",
      "CPP Arts. 394 a 405 (Procedimento Comum Ordinário e Resposta à Acusação)",
      "CPP Arts. 406 a 497 (Procedimento do Tribunal do Júri: Pronúncia, Impronúncia, Absolvição Sumária e Desclassificação)",
      "CPP Arts. 581 (RESE - Hipóteses do rol) e Arts. 593 a 603 (Apelação Criminal)"
    ],
    topThemes: [
      "Prisão em Flagrante e Audiência de Custódia (Prazos e conversão em Preventiva)",
      "Procedimento Bifásico do Tribunal do Júri (Decisões de 1ª fase: Pronúncia vs Absolvição Sumária)",
      "Recurso em Sentido Estrito - RESE (Rol legal, juízo de retratação e cabimento)",
      "Resposta à Acusação e Hipóteses de Absolvição Sumária do Art. 397 do CPP",
      "Provas Ilícitas e Desentranhamento (Art. 157 CPP e Teoria da Descoberta Inevitável)"
    ]
  },
  {
    id: "previdenciario",
    name: "Direito Previdenciário",
    questions: 2,
    order: "69-70",
    group: "C",
    icon: "umbrella",
    color: "#8b5cf6",
    targetRecommended: 1,
    description: "Seguridade Social, Benefícios do RGPS e Regras de Transição pós-Reforma da Previdência (EC 103/2019).",
    goldArticles: [
      "CF/88 Arts. 194 a 204 (Princípios da Seguridade Social, Saúde, Previdência e Assistência Social)",
      "Lei nº 8.213/91 (Planos de Benefícios da Previdência: Segurados Obrigatórios e Facultativos)",
      "Arts. 15 (Período de Graça e Manutenção da Qualidade de Segurado)",
      "Arts. 24 a 27 (Carência) e Arts. 42 a 86 (Aposentadorias, Auxílio por Incapacidade Temporária, Pensão por Morte)",
      "EC nº 103/2019 (Idades Mínimas e Regras de Transição)"
    ],
    topThemes: [
      "Qualidade de Segurado e Período de Graça (Prazos de manutenção sem contribuição)",
      "Diferença entre Segurado Obrigatório (Empregado, Contribuinte Individual, Especial) e Facultativo",
      "Auxílio por Incapacidade Temporária (antigo auxílio-doença) e Aposentadoria por Incapacidade Permanente",
      "Pensão por Morte (Critérios de rateio e duração com base na idade do cônjuge)"
    ]
  },
  {
    id: "trabalho",
    name: "Direito do Trabalho",
    questions: 5,
    order: "71-75",
    group: "A",
    icon: "hammer",
    color: "#0284c7",
    targetRecommended: 4,
    description: "Excelente índice de acerto. A FGV é previsível: Contrato de Trabalho, Remuneração, Jornada de Trabalho e Reforma Trabalhista (Lei 13.467/17).",
    goldArticles: [
      "CF/88 Art. 7º (Direitos dos Trabalhadores Urbanos e Rurais - Prescrição de 5 anos até 2 anos pós-extinção)",
      "CLT Arts. 2º e 3º (Conceitos de Empregador, Grupo Econômico e Empregado)",
      "CLT Arts. 58 a 75 (Jornada de Trabalho, Horas Extras, Banco de Horas e Teletrabalho)",
      "CLT Arts. 129 a 153 (Férias: Período Aquisitivo, Concessivo e Abono Pecuniário)",
      "CLT Arts. 442 a 467 (Contrato Individual de Trabalho: Alteração Contratual, Transferência e Salário Substituição)",
      "CLT Arts. 457 a 467 (Remuneração, Gorjetas, Equiparação Salarial do Art. 461 e Prêmios)",
      "CLT Arts. 477 a 486 (Rescisão Contratual: Justa Causa do Art. 482, Rescisão Indireta do Art. 483 e Acordo Mútuo do Art. 484-A)",
      "CLT Arts. 611-A e 611-B (Negociado sobre o Legislado)",
      "Súmulas e OJs do TST (Súmula 331 TST Terceirização, Súmula 291 Horas Extras)"
    ],
    topThemes: [
      "Rescisão do Contrato de Trabalho (Justa Causa, Rescisão Indireta e Extinção por Acordo Mútuo)",
      "Equiparação Salarial (Art. 461 CLT - mesmos requisitos pós-reforma)",
      "Jornada de Trabalho, Intervalos Intrajornada e Banco de Horas",
      "Terceirização de Serviços e Responsabilidade Subsidiária (Tema 725/STF e Súmula 331 TST)",
      "Teletrabalho / Home Office (Regras do Art. 75-A da CLT)"
    ]
  },
  {
    id: "processotrabalho",
    name: "Processo do Trabalho",
    questions: 5,
    order: "76-80",
    group: "A",
    icon: "check-square",
    color: "#0369a1",
    targetRecommended: 4,
    description: "Dupla dinâmica com Direito do Trabalho. Estude ritos processuais, audiência trabalhista e sistema recursal próprio.",
    goldArticles: [
      "CF/88 Art. 114 (Competência da Justiça do Trabalho)",
      "CLT Arts. 791 (Jus Postulandi e suas limitações - Súmula 425 TST)",
      "CLT Arts. 791-A (Honorários de Sucumbência na Justiça do Trabalho)",
      "CLT Arts. 837 a 852 (Procedimento Comum e Audiência Trabalhista: Reclamada, Preposto e Revelia do Art. 844)",
      "CLT Arts. 852-A a 852-I (Procedimento Sumaríssimo: Limite de 40 salários mínimos e até 2 testemunhas)",
      "CLT Arts. 893 a 902 (Recursos Trabalhistas: Recurso Ordinário - 8 dias, Agravo de Instrumento, Agravo de Petição e Embargos ao TST)",
      "Súmulas do TST (Súmula 218, 245, 278, 393 TST)"
    ],
    topThemes: [
      "Recursos Trabalhistas e Prazos (Prazo uniforme de 8 dias para quase todos os recursos; Depósito Recursal e Custas)",
      "Audiência Trabalhista e Efeitos do Não Comparecimento (Arquivamento vs Revelia - Art. 844 CLT)",
      "Procedimento Sumaríssimo (Diferenças do Rito Ordinário: citação por edital vedada, 2 testemunhas)",
      "Competência da Justiça do Trabalho (Art. 114 CF e Danos Morais decorrentes da relação de trabalho)",
      "Jus Postulandi (Cabimento e Vedações da Súmula 425 do TST - não cabe em RO, Ação Rescisória, Mandado de Segurança)"
    ]
  }
];

// Resumo por Grupos Estratégicos
const GROUPS_SUMMARY = {
  A: {
    title: "Grupo A - Coração da Aprovação",
    badge: "Prioridade Máxima",
    color: "#3b82f6",
    totalQuestions: 53,
    targetScore: 38,
    disciplines: ["etica", "constitucional", "civil", "processocivil", "penal", "processopenal", "administrativo", "trabalho", "processotrabalho"],
    strategy: "Dedique 65% a 70% da sua carga horária aqui. Gabaritar Ética (8) e somar pelo menos 30 pontos nas outras 8 matérias já garante sua aprovação sem depender de mais nada!"
  },
  B: {
    title: "Grupo B - Intermediário Estruturado",
    badge: "Alta Previsibilidade",
    color: "#f59e0b",
    totalQuestions: 9,
    targetScore: 7,
    disciplines: ["tributario", "empresarial"],
    strategy: "Matérias técnicas com temas altamente repetitivos na FGV. Com foco nas súmulas e artigos-chave, rende de 6 a 8 acertos preciosos."
  },
  C: {
    title: "Grupo C - Leitura Rápida e Alto Retorno",
    badge: "Custo-Benefício Cirúrgico",
    color: "#10b981",
    totalQuestions: 18,
    targetScore: 10,
    disciplines: ["eca", "consumidor", "humanos", "ambiental", "previdenciario", "eleitoral", "financeiro", "internacional", "filosofia"],
    strategy: "ECA e Consumidor garantem 4 pontos fáceis com apenas a leitura das leis secas. Nas demais de 2 questões, estude cirurgicamente apenas os temas mais recorrentes."
  }
};

// Cronograma de 60 Dias (Intensivo de Alto Rendimento)
const SCHEDULE_60_DAYS = [
  // SEMANA 1: O Bloco de Ouro (Ética + Constitucional)
  {
    week: 1,
    title: "Semana 1: A Base Invencível (Ética e Constitucional)",
    focus: "Garantir os 14 primeiros pontos da prova (Ética 8 + Constitucional 6)",
    days: [
      {
        day: 1,
        disciplines: ["Ética Profissional"],
        group: "A",
        theme: "Atividade de Advocacia e Inscrição na OAB",
        lawReading: "Estatuto da OAB (Lei 8.906/94): Arts. 1º a 14",
        questionsGoal: 25,
        reviewNotes: "Fixar quem pode e quem não pode postular em juízo sem advogado."
      },
      {
        day: 2,
        disciplines: ["Ética Profissional"],
        group: "A",
        theme: "Direitos e Prerrogativas do Advogado (Tema nº 1 FGV)",
        lawReading: "Estatuto da OAB: Arts. 6º a 7º-B (Inviolabilidade de escritório, comunicação com preso)",
        questionsGoal: 30,
        reviewNotes: "Revisar as hipóteses em que o advogado pode se retirar da audiência."
      },
      {
        day: 3,
        disciplines: ["Direito Constitucional"],
        group: "A",
        theme: "Direitos Individuais e Coletivos (Art. 5º)",
        lawReading: "CF/88 Art. 5º (Incisos I a XL) + Remédios Constitucionais (HC, MS)",
        questionsGoal: 25,
        reviewNotes: "Distinção entre Mandado de Segurança Individual e Coletivo."
      },
      {
        day: 4,
        disciplines: ["Direito Constitucional"],
        group: "A",
        theme: "Direitos Sociais, Nacionalidade e Direitos Políticos",
        lawReading: "CF/88 Arts. 6º, 12, 14 a 16 + Inelegibilidade reflexa",
        questionsGoal: 25,
        reviewNotes: "Prazos de desincompatibilização e idades mínimas."
      },
      {
        day: 5,
        disciplines: ["Ética Profissional", "Direito Constitucional"],
        group: "A",
        theme: "Honorários Advocatícios & Controle de Constitucionalidade",
        lawReading: "Estatuto OAB Arts. 22 a 26 + CF/88 Arts. 102 e 103",
        questionsGoal: 30,
        reviewNotes: "Legitimados universais e especiais para propor ADI/ADC."
      },
      {
        day: 6,
        disciplines: ["Revisão Semanal", "Ética Profissional"],
        group: "A",
        theme: "Super Revisão Ativa de Ética + Caderno de Erros da Semana",
        lawReading: "Revisão dos artigos lidos de Ética + Leitura do CED Arts. 1º a 7º",
        questionsGoal: 40,
        reviewNotes: "Refazer todas as questões que errou durante a semana."
      },
      {
        day: 7,
        disciplines: ["Simulado"],
        group: "ALL",
        theme: "Simulado Diagnóstico 1 (80 Questões) + Descanso",
        lawReading: "Treinar gestão do tempo: 5 horas para 80 questões.",
        questionsGoal: 80,
        reviewNotes: "Anotar o placar e identificar quais matérias ficaram abaixo de 50%."
      }
    ]
  },
  // SEMANA 2: Penal e Processo Penal
  {
    week: 2,
    title: "Semana 2: A Dupla Penal (Penal e Processo Penal)",
    focus: "Dominar a lógica defensiva e teoria do delito (12 questões)",
    days: [
      {
        day: 8,
        disciplines: ["Direito Penal"],
        group: "A",
        theme: "Aplicação da Lei Penal e Teoria do Crime",
        lawReading: "Código Penal Arts. 1º a 25 (Excludentes de Ilicitude, Tentativa, Consumação)",
        questionsGoal: 25,
        reviewNotes: "Erro de Tipo x Erro de Proibição e seus efeitos jurídicos."
      },
      {
        day: 9,
        disciplines: ["Direito Penal"],
        group: "A",
        theme: "Crimes contra a Pessoa e o Patrimônio",
        lawReading: "CP Arts. 121 (Homicídio/Feminicídio) e Arts. 155 a 171 (Furto, Roubo e Estelionato)",
        questionsGoal: 30,
        reviewNotes: "Causas de aumento do Roubo (arma branca vs arma de fogo de uso restrito)."
      },
      {
        day: 10,
        disciplines: ["Processo Penal"],
        group: "A",
        theme: "Inquérito Policial e Ação Penal",
        lawReading: "CPP Arts. 4º a 23 e Arts. 24 a 62",
        questionsGoal: 25,
        reviewNotes: "Prazos de decadência para queixa-crime e características do Inquérito."
      },
      {
        day: 11,
        disciplines: ["Processo Penal"],
        group: "A",
        theme: "Prisões Cautelares, Flagrante e Liberdade Provisória",
        lawReading: "CPP Arts. 282 a 350 + Lei de Prisão Temporária (Lei 7.960/89)",
        questionsGoal: 30,
        reviewNotes: "Audiência de custódia e requisitos da Prisão Preventiva."
      },
      {
        day: 12,
        disciplines: ["Direito Penal", "Processo Penal"],
        group: "A",
        theme: "Crimes contra a Adm. Pública & Tribunal do Júri",
        lawReading: "CP Arts. 312 a 327 + CPP Arts. 406 a 497",
        questionsGoal: 30,
        reviewNotes: "Diferença entre Pronúncia, Impronúncia, Absolvição Sumária e Desclassificação."
      },
      {
        day: 13,
        disciplines: ["Ética Profissional", "Revisão Penal"],
        group: "A",
        theme: "Incompatibilidades e Impedimentos na OAB + Revisão de Penal",
        lawReading: "Estatuto da OAB Arts. 27 a 30 (Tema obrigatório!)",
        questionsGoal: 35,
        reviewNotes: "Policial e militar podem advogar em causa própria? (Não, incompatibilidade total!)."
      },
      {
        day: 14,
        disciplines: ["Descanso Estruturado / Simulado Temático"],
        group: "A",
        theme: "Simulado Temático 40 Questões (Ética + Penal + Processo Penal)",
        lawReading: "Revisão pontual de súmulas do STJ/STF.",
        questionsGoal: 40,
        reviewNotes: "Treinar foco e velocidade de raciocínio."
      }
    ]
  },
  // SEMANA 3: Civil e Processo Civil
  {
    week: 3,
    title: "Semana 3: O Gigante Civil (Civil e Processo Civil)",
    focus: "Mapear os artigos-chave de Civil e Processo Civil (12 questões)",
    days: [
      {
        day: 15,
        disciplines: ["Direito Civil"],
        group: "A",
        theme: "Parte Geral: Pessoas, Bens e Defeitos do Negócio Jurídico",
        lawReading: "CC/02 Arts. 1º a 184 (Erro, Dolo, Coação, Lesão, Fraude contra Credores)",
        questionsGoal: 25,
        reviewNotes: "Nulidade absoluta vs Anulabilidade e prazos decadenciais."
      },
      {
        day: 16,
        disciplines: ["Direito Civil"],
        group: "A",
        theme: "Direito das Obrigações e Teoria Geral dos Contratos",
        lawReading: "CC/02 Arts. 233 a 480 (Inadimplemento, Cláusula Penal, Evicção, Vício Redibitório)",
        questionsGoal: 30,
        reviewNotes: "Mora do devedor x Mora do credor; Perdas e danos."
      },
      {
        day: 17,
        disciplines: ["Processo Civil"],
        group: "A",
        theme: "Normas Fundamentais, Competência e Petição Inicial",
        lawReading: "CPC/15 Arts. 1º a 15, Arts. 42 a 69, Arts. 319 a 334",
        questionsGoal: 25,
        reviewNotes: "Audiência de conciliação do Art. 334: quando não ocorre?"
      },
      {
        day: 18,
        disciplines: ["Processo Civil"],
        group: "A",
        theme: "Respostas do Réu e Tutelas Provisórias",
        lawReading: "CPC/15 Arts. 294 a 311 (Urgência e Evidência) e Arts. 335 a 346",
        questionsGoal: 30,
        reviewNotes: "Tutela de Evidência prescinde de perigo de dano (Art. 311)."
      },
      {
        day: 19,
        disciplines: ["Direito Civil", "Processo Civil"],
        group: "A",
        theme: "Família/Sucessões & Recursos em Espécie (Apelação e AI)",
        lawReading: "CC Arts. 1.784 a 1.856 + CPC Art. 1.015 (Agravo de Instrumento)",
        questionsGoal: 30,
        reviewNotes: "Rol do Art. 1.015 CPC e a tese da taxatividade mitigada do STJ."
      },
      {
        day: 20,
        disciplines: ["Ética Profissional", "Revisão Civil"],
        group: "A",
        theme: "Infrações e Sanções Disciplinares na OAB + Revisão de Erros",
        lawReading: "Estatuto da OAB Arts. 34 a 43 (Censura, Suspensão, Exclusão)",
        questionsGoal: 35,
        reviewNotes: "Quórum qualificado de 2/3 para exclusão do advogado."
      },
      {
        day: 21,
        disciplines: ["Simulado"],
        group: "ALL",
        theme: "Simulado Geral 2 (80 Questões) + Autoanálise de Progresso",
        lawReading: "Identificar evolução nas disciplinas do Grupo A já estudadas.",
        questionsGoal: 80,
        reviewNotes: "Verificar se Ética já está batendo 6+ acertos."
      }
    ]
  },
  // SEMANA 4: Trabalho e Processo do Trabalho + Direito Administrativo
  {
    week: 4,
    title: "Semana 4: O Bloco Trabalhista e Administrativo",
    focus: "Conquistar 15 pontos vitais (Trabalho 5 + Processo Trabalho 5 + Administrativo 5)",
    days: [
      {
        day: 22,
        disciplines: ["Direito do Trabalho"],
        group: "A",
        theme: "Contrato de Trabalho, Jornada e Horas Extras",
        lawReading: "CLT Arts. 2º, 3º, 58 a 75 e CF Art. 7º",
        questionsGoal: 25,
        reviewNotes: "Banco de horas (acordo individual de até 6 meses vs convenção coletiva 1 ano)."
      },
      {
        day: 23,
        disciplines: ["Direito do Trabalho"],
        group: "A",
        theme: "Remuneração, Equiparação Salarial e Rescisão",
        lawReading: "CLT Arts. 457 a 484-A (Rescisão por acordo mútuo)",
        questionsGoal: 30,
        reviewNotes: "Verbas pagas pela metade no acordo do Art. 484-A (aviso prévio e multa FGTS de 20%)."
      },
      {
        day: 24,
        disciplines: ["Processo do Trabalho"],
        group: "A",
        theme: "Competência, Audiência e Procedimento Sumaríssimo",
        lawReading: "CF Art. 114 + CLT Arts. 843 a 852-I",
        questionsGoal: 25,
        reviewNotes: "Ausência do reclamante gera arquivamento; da reclamada gera revelia."
      },
      {
        day: 25,
        disciplines: ["Processo do Trabalho"],
        group: "A",
        theme: "Sistema Recursal Trabalhista (RO, Agravo de Petição)",
        lawReading: "CLT Arts. 893 a 902 + Súmula 425 do TST (Jus Postulandi)",
        questionsGoal: 30,
        reviewNotes: "Prazo padrão de 8 dias para recursos trabalhistas."
      },
      {
        day: 26,
        disciplines: ["Direito Administrativo"],
        group: "A",
        theme: "Regime Jurídico, Organização Adm. e Atos Administrativos",
        lawReading: "CF Art. 37 (LIMPE) + Requisitos e Atributos do Ato Adm.",
        questionsGoal: 30,
        reviewNotes: "Competência, Finalidade, Forma, Motivo e Objeto (COFIFOMOB)."
      },
      {
        day: 27,
        disciplines: ["Direito Administrativo", "Ética Profissional"],
        group: "A",
        theme: "Nova Lei de Licitações (14.133) & Sociedades de Advogados",
        lawReading: "Lei 14.133/21 (Modalidades e Inexigibilidade) + Estatuto OAB Arts. 15 a 17",
        questionsGoal: 35,
        reviewNotes: "Sociedade Unipessoal de Advocacia: regras e responsabilidade."
      },
      {
        day: 28,
        disciplines: ["Revisão Semanal"],
        group: "A",
        theme: "Caderno de Erros de Trabalho, Processo do Trabalho e Adm.",
        lawReading: "Revisão dos artigos-chave e súmulas do TST.",
        questionsGoal: 40,
        reviewNotes: "Consolidar a meta de 35+ pontos só no Grupo A."
      }
    ]
  },
  // SEMANA 5: Direito Tributário e Empresarial (Grupo B)
  {
    week: 5,
    title: "Semana 5: O Bloco Estrutural (Tributário e Empresarial)",
    focus: "Dominar as 9 questões mais previsíveis e técnicas da prova",
    days: [
      {
        day: 29,
        disciplines: ["Direito Tributário"],
        group: "B",
        theme: "Princípios Tributários e Imunidades Constitucionais",
        lawReading: "CF/88 Arts. 150 a 152 (Anterioridade, Legalidade, Imunidades)",
        questionsGoal: 25,
        reviewNotes: "Exceções à Anterioridade Anual e Nonagesimal (II, IE, IPI, IOF)."
      },
      {
        day: 30,
        disciplines: ["Direito Tributário"],
        group: "B",
        theme: "Crédito Tributário: Suspensão, Extinção e Exclusão",
        lawReading: "CTN Arts. 151 (Suspensão), 156 (Extinção), 175 (Exclusão)",
        questionsGoal: 30,
        reviewNotes: "Mnemônico MODESPA para suspensão: Moratória, Depósito, Recursos, Liminar, Parcelamento."
      },
      {
        day: 31,
        disciplines: ["Direito Tributário"],
        group: "B",
        theme: "Responsabilidade Tributária e Execução Fiscal",
        lawReading: "CTN Arts. 134 a 138 + Súmula 435 do STJ (Dissolução irregular)",
        questionsGoal: 25,
        reviewNotes: "Redirecionamento da execução fiscal contra sócio administrador."
      },
      {
        day: 32,
        disciplines: ["Direito Empresarial"],
        group: "B",
        theme: "Teoria da Empresa, Registro e Estabelecimento",
        lawReading: "CC/02 Arts. 966 a 985 e Arts. 1.142 a 1.149 (Trespasse)",
        questionsGoal: 25,
        reviewNotes: "Cláusula de não concorrência no trespasse (prazo de 5 anos se omitido)."
      },
      {
        day: 33,
        disciplines: ["Direito Empresarial"],
        group: "B",
        theme: "Títulos de Crédito & Falência e Recuperação Judicial",
        lawReading: "LUG (Aval x Fiança) + Lei 11.101/05 Arts. 83 e 84 (Ordem de créditos)",
        questionsGoal: 30,
        reviewNotes: "Trabalhista limitado a 150 salários mínimos na falência."
      },
      {
        day: 34,
        disciplines: ["Ética Profissional", "Revisão Tributário/Empresarial"],
        group: "A",
        theme: "Publicidade na Advocacia (CED) + Revisão do Grupo B",
        lawReading: "CED Arts. 39 a 47 + Provimento 205/2021 OAB (Marketing Jurídico)",
        questionsGoal: 35,
        reviewNotes: "O que é vedado no marketing jurídico: mercantilização, valores, captação indevida."
      },
      {
        day: 35,
        disciplines: ["Simulado"],
        group: "ALL",
        theme: "Simulado Geral 3 (80 Questões)",
        lawReading: "Medir desempenho com Grupo A + Grupo B completos.",
        questionsGoal: 80,
        reviewNotes: "Nesse ponto o aluno deve estar atingindo 40 a 45 pontos!"
      }
    ]
  },
  // SEMANA 6: As Matérias de Alto Rendimento do Grupo C (ECA + CDC + Humanos + Ambiental)
  {
    week: 6,
    title: "Semana 6: O Bônus de Alta Eficiência (ECA, CDC, Humanos e Ambiental)",
    focus: "Conquistar 8 pontos certeiros através de leitura direta de leis curtas",
    days: [
      {
        day: 36,
        disciplines: ["ECA (Criança e Adolescente)"],
        group: "C",
        theme: "Família Substituta, Adoção e Viagens",
        lawReading: "ECA (Lei 8.069/90) Arts. 19 a 52-D e Arts. 81 a 85",
        questionsGoal: 25,
        reviewNotes: "Requisitos da adoção: 18 anos, diferença mínima de 16 anos, proibição a irmãos."
      },
      {
        day: 37,
        disciplines: ["ECA (Criança e Adolescente)"],
        group: "C",
        theme: "Ato Infracional e Medidas Socioeducativas",
        lawReading: "ECA Arts. 103 a 125 e Conselho Tutelar Arts. 131 a 140",
        questionsGoal: 25,
        reviewNotes: "Hipóteses taxativas de internação (violência, reiteração grave, descumprimento)."
      },
      {
        day: 38,
        disciplines: ["Direito do Consumidor"],
        group: "C",
        theme: "Fato vs Vício do Produto e Direito de Arrependimento",
        lawReading: "CDC Arts. 12 a 27, Art. 49 (7 dias para devolução online)",
        questionsGoal: 25,
        reviewNotes: "Prazo prescricional de 5 anos para acidente de consumo (Art. 27)."
      },
      {
        day: 39,
        disciplines: ["Direito do Consumidor"],
        group: "C",
        theme: "Práticas Abusivas, Cobrança de Dívidas e Superendividamento",
        lawReading: "CDC Arts. 39 a 42-A e Lei 14.181/2021",
        questionsGoal: 25,
        reviewNotes: "Repetição do indébito em dobro (quando há má-fé ou engano injustificável)."
      },
      {
        day: 40,
        disciplines: ["Direitos Humanos", "Direito Ambiental"],
        group: "C",
        theme: "Convenção Americana (Pacto de San José) & Art. 225 CF",
        lawReading: "CADH + CF Art. 225 + Lei 6.938/81 (Política Nacional do Meio Ambiente)",
        questionsGoal: 30,
        reviewNotes: "Responsabilidade objetiva ambiental e reparação integral."
      },
      {
        day: 41,
        disciplines: ["Ética Profissional", "Revisão Geral"],
        group: "A",
        theme: "Simulado Relâmpago de Ética (30 Questões) + Caderno de Erros",
        lawReading: "Regulamento Geral da OAB: Eleições e Recursos nos Conselhos",
        questionsGoal: 35,
        reviewNotes: "Fixar prazos recursais no âmbito da OAB (15 dias úteis)."
      },
      {
        day: 42,
        disciplines: ["Descanso Estruturado"],
        group: "C",
        theme: "Recuperação Física e Mental + Leitura Leve de Súmulas",
        lawReading: "Súmulas Vinculantes do STF (1 a 58)",
        questionsGoal: 20,
        reviewNotes: "Revisão passiva para recarregar baterias."
      }
    ]
  },
  // SEMANA 7: Finalização do Grupo C + Reta de Ajuste
  {
    week: 7,
    title: "Semana 7: Completando o Mapa (Previdenciário, Eleitoral, Financeiro, Internacional, Filosofia)",
    focus: "Apostilhas cirúrgicas para as matérias restantes de 2 questões (10 questões)",
    days: [
      {
        day: 43,
        disciplines: ["Direito Previdenciário"],
        group: "C",
        theme: "Segurados do RGPS e Período de Graça",
        lawReading: "Lei 8.213/91 Arts. 11 a 15 + Principais Benefícios",
        questionsGoal: 25,
        reviewNotes: "Manutenção da qualidade de segurado por 12, 24 ou 36 meses."
      },
      {
        day: 44,
        disciplines: ["Direito Eleitoral"],
        group: "C",
        theme: "Condições de Elegibilidade e Lei da Ficha Limpa",
        lawReading: "CF Art. 14 + LC 64/90 (Inelegibilidades)",
        questionsGoal: 25,
        reviewNotes: "Inelegibilidade reflexa e cônjuges de Chefes do Poder Executivo."
      },
      {
        day: 45,
        disciplines: ["Direito Financeiro"],
        group: "C",
        theme: "Ciclo Orçamentário (PPA, LDO, LOA) e LRF",
        lawReading: "CF Arts. 165 a 169 + Lei de Responsabilidade Fiscal",
        questionsGoal: 25,
        reviewNotes: "Diferença entre créditos suplementares, especiais e extraordinários."
      },
      {
        day: 46,
        disciplines: ["Direito Internacional", "Filosofia do Direito"],
        group: "C",
        theme: "LINDB (Arts. 7º ao 17) & Pensadores Principais (Kelsen, Alexy)",
        lawReading: "LINDB + Resumo prático de Regras vs Princípios",
        questionsGoal: 25,
        reviewNotes: "Competência internacional da justiça brasileira e sucessão de bens."
      },
      {
        day: 47,
        disciplines: ["Nova Lei de Improbidade", "Responsabilidade do Estado"],
        group: "A",
        theme: "Direito Administrativo Avançado (Lei 14.230/21 e Art. 37, § 6º)",
        lawReading: "Lei 8.429/92 atualizada (Arts. 1º ao 12) + Casos práticos FGV",
        questionsGoal: 30,
        reviewNotes: "Exigência expressa de dolo específico para configuração de improbidade."
      },
      {
        day: 48,
        disciplines: ["Ética Profissional", "Revisão Geral"],
        group: "A",
        theme: "Gabaritando Ética: 40 Questões Recentes da FGV",
        lawReading: "Revisão rápida de todos os artigos do Estatuto da OAB",
        questionsGoal: 40,
        reviewNotes: "Checar se a média em Ética já está em 7/8."
      },
      {
        day: 49,
        disciplines: ["Simulado"],
        group: "ALL",
        theme: "Simulado Geral 4 (80 Questões em Condições Reais de Prova)",
        lawReading: "Simular prova completa de 13h às 18h com máscara/alimentação real.",
        questionsGoal: 80,
        reviewNotes: "Meta: atingir 45+ acertos com folga!"
      }
    ]
  },
  // SEMANA 8: Reta Final & Super Revisão de Véspera
  {
    week: 8,
    title: "Semana 8: Reta Final - A Lapidação da Aprovação",
    focus: "Revisão exclusiva dos temas mais cobrados de todo o Grupo A e Ética",
    days: [
      {
        day: 50,
        disciplines: ["Ética Profissional"],
        group: "A",
        theme: "Imersão Total em Ética: Todos os Artigos Campeões",
        lawReading: "Estatuto Arts. 1º a 43 + CED na íntegra",
        questionsGoal: 40,
        reviewNotes: "Garantir os 8 pontos que definem a aprovação."
      },
      {
        day: 51,
        disciplines: ["Direito Constitucional", "Direito Administrativo"],
        group: "A",
        theme: "Super Revisão: Remédios, Controle e Licitações",
        lawReading: "CF Art. 5º, 37, 102 + Súmulas Vinculantes",
        questionsGoal: 35,
        reviewNotes: "Apenas pontos onde a FGV adora pegar em pegadinhas."
      },
      {
        day: 52,
        disciplines: ["Direito Civil", "Processo Civil"],
        group: "A",
        theme: "Super Revisão: Contratos, Família, Recursos e Tutelas",
        lawReading: "CPC Art. 1.015, 300, 311 + CC Art. 186, 927, 1.829",
        questionsGoal: 35,
        reviewNotes: "Revisar prazos recursais de 15 dias úteis e exceção dos EDs (5 dias)."
      },
      {
        day: 53,
        disciplines: ["Direito Penal", "Processo Penal"],
        group: "A",
        theme: "Super Revisão: Teoria do Delito, Crimes Funcionais, Prisões e Recursos",
        lawReading: "CP Arts. 121, 155, 157, 312 + CPP Arts. 312, 581",
        questionsGoal: 35,
        reviewNotes: "Hipóteses de cabimento do Recurso em Sentido Estrito (RESE)."
      },
      {
        day: 54,
        disciplines: ["Direito do Trabalho", "Processo do Trabalho"],
        group: "A",
        theme: "Super Revisão: Rescisão Contratual, Recursos Trabalhistas e Súmulas TST",
        lawReading: "CLT Arts. 482, 483, 895 + Súmula 331 e 425 TST",
        questionsGoal: 35,
        reviewNotes: "Súmula 331: Responsabilidade subsidiária e ônus da prova contra a Fazenda."
      },
      {
        day: 55,
        disciplines: ["ECA", "Direito do Consumidor", "Tributário"],
        group: "B",
        theme: "Super Revisão de Leis Rápidas & Crédito Tributário",
        lawReading: "ECA (Adoção) + CDC (Prazos) + CTN (Suspensão e Extinção)",
        questionsGoal: 30,
        reviewNotes: "Revisão expressa de 9 pontos muito fáceis na prova."
      },
      {
        day: 56,
        disciplines: ["Simulado Final"],
        group: "ALL",
        theme: "Simulado de Confirmação (Último Exame Oficial da OAB)",
        lawReading: "Fazer a prova do último exame real aplicado pela FGV.",
        questionsGoal: 80,
        reviewNotes: "Consolidar a confiança: você está preparado!"
      },
      {
        day: 57,
        disciplines: ["Revisão Leve", "Ética Profissional"],
        group: "A",
        theme: "Leitura Final do Estatuto da OAB e Prerrogativas",
        lawReading: "Apenas leitura de lei seca dos 8 primeiros artigos do Estatuto.",
        questionsGoal: 15,
        reviewNotes: "Sem forçar a mente, manter a tranquilidade."
      },
      {
        day: 58,
        disciplines: ["Revisão de Véspera"],
        group: "ALL",
        theme: "Revisão Geral de Pontos Quentes e Súmulas Vinculantes",
        lawReading: "Checklist de artigos de ouro da FGV.",
        questionsGoal: 0,
        reviewNotes: "Nada de questões exaustivas hoje. Apenas revisão de fichas."
      },
      {
        day: 59,
        disciplines: ["Descanso Pré-Prova"],
        group: "ALL",
        theme: "Dia de Desaceleração: Alimentação Leve, Sono e Hidratação",
        lawReading: "Separar documento com foto, canetas pretas de tubo transparente, água e lanche.",
        questionsGoal: 0,
        reviewNotes: "Confie no processo. Você construiu a base necessária."
      },
      {
        day: 60,
        disciplines: ["O Grande Dia"],
        group: "ALL",
        theme: "DIA DA PROVA DA 1ª FASE OAB! 🎯",
        lawReading: "Estratégia de Prova: Começar por Ética (01 a 08) para garantir 8 pontos e ganhar confiança imediata!",
        questionsGoal: 80,
        reviewNotes: "Alcançar os 40+ pontos e carimbar o passaporte para a 2ª Fase!"
      }
    ]
  }
];

// Configurações e presets de estratégias para o Simulador de 40 Pontos
const SIMULATOR_PRESETS = [
  {
    name: "Estratégia Mínima Segura (43 Pontos)",
    description: "Margem mínima de segurança para aprovação (3 pontos acima do corte de 40).",
    scores: {
      etica: 6,
      filosofia: 1,
      constitucional: 3,
      humanos: 1,
      eleitoral: 1,
      internacional: 1,
      financeiro: 1,
      tributario: 2,
      administrativo: 3,
      ambiental: 1,
      civil: 3,
      eca: 2,
      consumidor: 2,
      empresarial: 2,
      processocivil: 3,
      penal: 3,
      processopenal: 3,
      previdenciario: 1,
      trabalho: 2,
      processotrabalho: 2
    }
  },
  {
    name: "Estratégia Recomendada Faleiro (53 Pontos)",
    description: "Equilíbrio de alto rendimento que dá segurança total (+13 pontos) e excelente base para a 2ª fase.",
    scores: {
      etica: 7,
      filosofia: 1,
      constitucional: 4,
      humanos: 1,
      eleitoral: 1,
      internacional: 1,
      financeiro: 1,
      tributario: 3,
      administrativo: 4,
      ambiental: 1,
      civil: 4,
      eca: 2,
      consumidor: 2,
      empresarial: 2,
      processocivil: 4,
      penal: 4,
      processopenal: 4,
      previdenciario: 1,
      trabalho: 3,
      processotrabalho: 3
    }
  },
  {
    name: "Estratégia Pareto Reta Final (48 Pontos)",
    description: "Foco quase exclusivo no Grupo A (+8 pontos acima do corte) e nas leis curtas de alta eficiência (ECA e Consumidor).",
    scores: {
      etica: 8,
      filosofia: 0,
      constitucional: 5,
      humanos: 0,
      eleitoral: 0,
      internacional: 0,
      financeiro: 0,
      tributario: 3,
      administrativo: 4,
      ambiental: 0,
      civil: 4,
      eca: 2,
      consumidor: 2,
      empresarial: 2,
      processocivil: 4,
      penal: 4,
      processopenal: 4,
      previdenciario: 0,
      trabalho: 3,
      processotrabalho: 3
    }
  }
];

// Função geradora do Cronograma de 90 Dias (Extensivo Completo e Cirúrgico)
function getSchedule90Days() {
  return [
    {
      week: 1,
      title: "Semana 1: Fundamentos de Ética & Constitucional I",
      focus: "Construir a base sólida com Estatuto da OAB e CF Art. 5º",
      days: [
        {
          day: 1,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Atividade de Advocacia e Inscrição na OAB",
          lawReading: "Estatuto da OAB (Lei 8.906/94): Arts. 1º a 14",
          questionsGoal: 25,
          reviewNotes: "Fixar quem pode e quem não pode postular em juízo sem advogado."
        },
        {
          day: 2,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Direitos e Prerrogativas do Advogado (Tema nº 1 FGV)",
          lawReading: "Estatuto da OAB: Arts. 6º a 7º-B (Inviolabilidade de escritório, comunicação com preso)",
          questionsGoal: 30,
          reviewNotes: "Revisar as hipóteses em que o advogado pode se retirar da audiência."
        },
        {
          day: 3,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Direitos Fundamentais e Remédios Constitucionais",
          lawReading: "CF/88 Art. 5º (Incisos I a XL) + Remédios Constitucionais (HC, MS)",
          questionsGoal: 25,
          reviewNotes: "Distinção entre Mandado de Segurança Individual e Coletivo."
        },
        {
          day: 4,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Direitos Sociais, Nacionalidade e Direitos Políticos",
          lawReading: "CF/88 Arts. 6º, 12, 14 a 16 + Inelegibilidade reflexa",
          questionsGoal: 25,
          reviewNotes: "Prazos de desincompatibilização e idades mínimas."
        },
        {
          day: 5,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Honorários Advocatícios e Sociedade de Advogados",
          lawReading: "Estatuto OAB Arts. 15 a 26 (Honorários sucumbenciais e contratuais)",
          questionsGoal: 25,
          reviewNotes: "Sociedade Unipessoal e cumulação de honorários."
        },
        {
          day: 6,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "A",
          theme: "Super Revisão de Ética da Semana + Caderno de Erros",
          lawReading: "Revisão dos artigos lidos de Ética + Leitura do CED Arts. 1º a 7º",
          questionsGoal: 35,
          reviewNotes: "Refazer todas as questões que errou durante a semana."
        },
        {
          day: 7,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Diagnóstico Extensivo 1 (80 Questões) + Descanso",
          lawReading: "Treinar gestão do tempo: 5 horas para 80 questões.",
          questionsGoal: 80,
          reviewNotes: "Anotar o placar e identificar quais matérias ficaram abaixo de 50%."
        }
      ]
    },
    {
      week: 2,
      title: "Semana 2: Ética & Constitucional II (Poderes e Controle)",
      focus: "Dominar Incompatibilidades da OAB e Controle de Constitucionalidade",
      days: [
        {
          day: 8,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Incompatibilidades e Impedimentos na Advocacia",
          lawReading: "Estatuto da OAB Arts. 27 a 30 (Tema obrigatório de toda prova)",
          questionsGoal: 30,
          reviewNotes: "Diferenciar proibição total (incompatibilidade) de parcial (impedimento)."
        },
        {
          day: 9,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Infrações e Sanções Disciplinares na OAB",
          lawReading: "Estatuto da OAB Arts. 34 a 43 (Censura, Suspensão, Exclusão, Multa)",
          questionsGoal: 30,
          reviewNotes: "Quórum qualificado de 2/3 para exclusão de advogado."
        },
        {
          day: 10,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Controle Concentrado de Constitucionalidade (ADI, ADC, ADO, ADPF)",
          lawReading: "CF/88 Arts. 102 e 103 + Lei 9.868/99 e Lei 9.882/99",
          questionsGoal: 25,
          reviewNotes: "Legitimados universais e especiais do Art. 103 CF."
        },
        {
          day: 11,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Organização do Estado e Repartição de Competências",
          lawReading: "CF/88 Arts. 18 a 31 (Competência Privativa da União vs Concorrente)",
          questionsGoal: 25,
          reviewNotes: "Macete FGV: Legislar sobre Direito Civil, Penal, Processual = Privativa da União."
        },
        {
          day: 12,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Processo Legislativo e Emendas à Constituição",
          lawReading: "CF/88 Arts. 59 a 69 (Limitações materiais, circunstanciais e formais da PEC)",
          questionsGoal: 30,
          reviewNotes: "Cláusulas pétreas do Art. 60, § 4º da CF."
        },
        {
          day: 13,
          disciplines: ["Revisão Semanal"],
          group: "A",
          theme: "Revisão Geral do Bloco Constitucional + Caderno de Erros",
          lawReading: "Revisão dos artigos-chave de CF e CED.",
          questionsGoal: 35,
          reviewNotes: "Fixar súmulas vinculantes sobre prerrogativas e constitucional."
        },
        {
          day: 14,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 2 (80 Questões) + Autoanálise",
          lawReading: "Avaliar evolução em Ética e Constitucional.",
          questionsGoal: 80,
          reviewNotes: "Meta: atingir 11+ pontos na soma de Ética e Constitucional."
        }
      ]
    },
    {
      week: 3,
      title: "Semana 3: Direito Penal - Teoria Geral do Crime & Delitos",
      focus: "Consolidar os 6 pontos de Direito Penal na 1ª Fase",
      days: [
        {
          day: 15,
          disciplines: ["Direito Penal"],
          group: "A",
          theme: "Aplicação da Lei Penal no Tempo e Espaço & Teoria do Delito",
          lawReading: "Código Penal Arts. 1º a 25 (Princípio da Legalidade, Ilicitude e Legítima Defesa)",
          questionsGoal: 25,
          reviewNotes: "Diferença de tempo do crime (atividade) e lugar do crime (ubiquidade)."
        },
        {
          day: 16,
          disciplines: ["Direito Penal"],
          group: "A",
          theme: "Tipicidade, Erro de Tipo e Erro de Proibição",
          lawReading: "CP Arts. 20 e 21 (Efeitos do Erro Escusável e Inescusável)",
          questionsGoal: 30,
          reviewNotes: "Erro de tipo exclui o dolo; erro de proibição exclui a culpabilidade."
        },
        {
          day: 17,
          disciplines: ["Direito Penal"],
          group: "A",
          theme: "Culpabilidade, Imputabilidade e Concurso de Pessoas",
          lawReading: "CP Arts. 26 a 31 (Embriaguez, Menoridade e Concurso de Pessoas)",
          questionsGoal: 25,
          reviewNotes: "Teoria Monista/Unitária no concurso de pessoas e cooperação dolosamente distinta."
        },
        {
          day: 18,
          disciplines: ["Direito Penal"],
          group: "A",
          theme: "Crimes Contra a Vida: Homicídio, Feminicídio e Infanticídio",
          lawReading: "CP Arts. 121 a 128 (Qualificadoras subjetivas vs objetivas)",
          questionsGoal: 30,
          reviewNotes: "Compatibilidade do dolo eventual com o feminicídio."
        },
        {
          day: 19,
          disciplines: ["Direito Penal"],
          group: "A",
          theme: "Crimes Contra o Patrimônio: Furto, Roubo, Extorsão e Estelionato",
          lawReading: "CP Arts. 155 a 171 (Majorantes do roubo e requisitos do estelionato)",
          questionsGoal: 30,
          reviewNotes: "Súmula 582 do STJ: Consumação do roubo com a posse mansa e pacífica desnecessária."
        },
        {
          day: 20,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "A",
          theme: "Revisão Ativa de Penal + Revisão de Ética Semanal",
          lawReading: "CP Arts. 121 a 180 + Revisão EAOAB Arts. 1º a 10",
          questionsGoal: 35,
          reviewNotes: "Todo sábado é dia de revisar Ética Profissional!"
        },
        {
          day: 21,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 3 (80 Questões) + Mapeamento de Erros",
          lawReading: "Gestão emocional e ritmo de 3 minutos por questão.",
          questionsGoal: 80,
          reviewNotes: "Cadastrar pontuação e anotar disciplinas que exigem reforço."
        }
      ]
    },
    {
      week: 4,
      title: "Semana 4: Processo Penal - Inquérito, Ação e Prisões",
      focus: "Garantir os 6 pontos de Processo Penal na prova",
      days: [
        {
          day: 22,
          disciplines: ["Processo Penal"],
          group: "A",
          theme: "Inquérito Policial, Notitia Criminis e ANPP",
          lawReading: "CPP Arts. 4º a 23 e Art. 28-A (Requisitos e vedações do ANPP)",
          questionsGoal: 25,
          reviewNotes: "Características do IP: sigiloso, inquisitivo, dispensável e indisponível."
        },
        {
          day: 23,
          disciplines: ["Processo Penal"],
          group: "A",
          theme: "Ação Penal Pública e Privada & Competência Penal",
          lawReading: "CPP Arts. 24 a 62 e Arts. 69 a 91",
          questionsGoal: 25,
          reviewNotes: "Prazo decadencial de 6 meses na ação penal privada."
        },
        {
          day: 24,
          disciplines: ["Processo Penal"],
          group: "A",
          theme: "Teoria Geral das Provas e Provas Ilícitas",
          lawReading: "CPP Arts. 155 a 250 (Teoria dos Frutos da Árvore Envenenada)",
          questionsGoal: 30,
          reviewNotes: "Cadeia de custódia (Art. 158-A a 158-F) e reconhecimento de pessoas (Art. 226)."
        },
        {
          day: 25,
          disciplines: ["Processo Penal"],
          group: "A",
          theme: "Prisões Cautelares, Flagrante e Audiência de Custódia",
          lawReading: "CPP Arts. 282 a 350 + Lei 7.960/89 (Prisão Temporária)",
          questionsGoal: 30,
          reviewNotes: "Requisitos da Prisão Preventiva: fumus comissi delicti e periculum libertatis."
        },
        {
          day: 26,
          disciplines: ["Processo Penal"],
          group: "A",
          theme: "Procedimento Comum Ordinário e Tribunal do Júri",
          lawReading: "CPP Arts. 394 a 405 e Arts. 406 a 497 (Primeira e Segunda Fase do Júri)",
          questionsGoal: 30,
          reviewNotes: "Decisões da 1ª fase do júri: Pronúncia, Impronúncia, Absolvição Sumária e Desclassificação."
        },
        {
          day: 27,
          disciplines: ["Revisão Semanal"],
          group: "A",
          theme: "Recursos em Processo Penal (Apelação e RESE) + Revisão de Ética",
          lawReading: "CPP Art. 581 (Rol do RESE) e Art. 593 (Apelação)",
          questionsGoal: 35,
          reviewNotes: "Prazos de interposição e de razões recursais."
        },
        {
          day: 28,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 4 (80 Questões)",
          lawReading: "Consolidação da Dupla Penal (Penal + Processo Penal = 12 questões).",
          questionsGoal: 80,
          reviewNotes: "Meta: atingir 8+ pontos no bloco criminal."
        }
      ]
    },
    {
      week: 5,
      title: "Semana 5: Direito Civil - Da Parte Geral à Família",
      focus: "Mapear o maior código do edital com foco seletivo (6 questões)",
      days: [
        {
          day: 29,
          disciplines: ["Direito Civil"],
          group: "A",
          theme: "Pessoas Naturais, Personalidade, Capacidade e Bens",
          lawReading: "Código Civil Arts. 1º a 103 (Estatuto da Pessoa com Deficiência)",
          questionsGoal: 25,
          reviewNotes: "Apenas menores de 16 anos são absolutamente incapazes (Art. 3º CC)."
        },
        {
          day: 30,
          disciplines: ["Direito Civil"],
          group: "A",
          theme: "Defeitos do Negócio Jurídico e Invalidade",
          lawReading: "CC Arts. 138 a 184 (Erro, Dolo, Coação, Estado de Perigo, Lesão, Fraude)",
          questionsGoal: 30,
          reviewNotes: "Simulação é causa de nulidade absoluta (não convalesce com o tempo)."
        },
        {
          day: 31,
          disciplines: ["Direito Civil"],
          group: "A",
          theme: "Teoria Geral das Obrigações e Adimplemento",
          lawReading: "CC Arts. 233 a 420 (Obrigações de dar, fazer, solidárias e pagamento)",
          questionsGoal: 25,
          reviewNotes: "Solidariedade não se presume: decorre da lei ou da vontade das partes."
        },
        {
          day: 32,
          disciplines: ["Direito Civil"],
          group: "A",
          theme: "Contratos em Espécie e Responsabilidade Civil",
          lawReading: "CC Arts. 421 a 480 (Função social e boa-fé) e Arts. 927 a 954",
          questionsGoal: 30,
          reviewNotes: "Responsabilidade objetiva do Art. 927, parágrafo único (atividade de risco)."
        },
        {
          day: 33,
          disciplines: ["Direito Civil"],
          group: "A",
          theme: "Direito das Coisas: Posse, Propriedade e Usucapião",
          lawReading: "CC Arts. 1.196 a 1.250 (Usucapião extraordinária, ordinária e especial urbana)",
          questionsGoal: 25,
          reviewNotes: "Posse de boa-fé e direito à indenização por benfeitorias necessárias e úteis."
        },
        {
          day: 34,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "A",
          theme: "Família e Sucessões + Revisão de Ética Semanal",
          lawReading: "CC Arts. 1.511 a 1.856 (Regimes de bens e ordem de vocação hereditária)",
          questionsGoal: 35,
          reviewNotes: "Concorrência do cônjuge sobrevivente com os descendentes."
        },
        {
          day: 35,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 5 (80 Questões)",
          lawReading: "Verificar rendimento em Direito Civil.",
          questionsGoal: 80,
          reviewNotes: "Alimentar o caderno de erros com questões de contratos e família."
        }
      ]
    },
    {
      week: 6,
      title: "Semana 6: Processo Civil - Petição Inicial, Tutelas e Recursos",
      focus: "Garantir os 6 pontos de Processo Civil na FGV",
      days: [
        {
          day: 36,
          disciplines: ["Processo Civil"],
          group: "A",
          theme: "Normas Fundamentais, Competência e Cooperação",
          lawReading: "CPC/15 Arts. 1º a 69 (Competência absoluta vs relativa, prorrogação)",
          questionsGoal: 25,
          reviewNotes: "Princípio da Não Surpresa e cooperação intersubjetiva."
        },
        {
          day: 37,
          disciplines: ["Processo Civil"],
          group: "A",
          theme: "Tutelas Provisórias de Urgência e Evidência",
          lawReading: "CPC/15 Arts. 294 a 311 (Requisitos da Urgência vs Hipóteses da Evidência)",
          questionsGoal: 30,
          reviewNotes: "Tutela de evidência dispensa demonstração de perigo de dano (Art. 311)."
        },
        {
          day: 38,
          disciplines: ["Processo Civil"],
          group: "A",
          theme: "Petição Inicial, Respostas do Réu e Revelia",
          lawReading: "CPC/15 Arts. 319 a 346 (Contestação, Reconvenção e Efeitos da Revelia)",
          questionsGoal: 25,
          reviewNotes: "Princípio da eventualidade na contestação (todas as matérias de defesa)."
        },
        {
          day: 39,
          disciplines: ["Processo Civil"],
          group: "A",
          theme: "Teoria Geral das Provas e Sentença Cível",
          lawReading: "CPC/15 Arts. 369 a 484 (Ônus da prova e elementos essenciais da sentença)",
          questionsGoal: 25,
          reviewNotes: "Diferença entre coisa julgada formal e material."
        },
        {
          day: 40,
          disciplines: ["Processo Civil"],
          group: "A",
          theme: "Sistema Recursal: Apelação, Agravo de Instrumento e Embargos",
          lawReading: "CPC/15 Arts. 994 a 1.026 + Rol do Art. 1.015 (Agravo de Instrumento)",
          questionsGoal: 35,
          reviewNotes: "Tema repetitivo 988 do STJ: taxatividade mitigada do Art. 1.015 CPC."
        },
        {
          day: 41,
          disciplines: ["Revisão Semanal", "Processo Civil"],
          group: "A",
          theme: "Cumprimento de Sentença e Execução de Título Extrajudicial",
          lawReading: "CPC Arts. 513 a 538 e Arts. 771 a 830 (Impugnação vs Embargos à Execução)",
          questionsGoal: 35,
          reviewNotes: "Garantia do juízo é necessária nos embargos à execução? (Regra geral: não!)."
        },
        {
          day: 42,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 6 (80 Questões)",
          lawReading: "Consolidação do Bloco Civil (Civil + Processo Civil = 12 questões).",
          questionsGoal: 80,
          reviewNotes: "Calcular percentual de acertos nas duas matérias."
        }
      ]
    },
    {
      week: 7,
      title: "Semana 7: Direito do Trabalho & Processo do Trabalho",
      focus: "Alcançar os 10 pontos da dobradinha trabalhista (5 + 5 questões)",
      days: [
        {
          day: 43,
          disciplines: ["Direito do Trabalho"],
          group: "A",
          theme: "Contrato de Trabalho, Grupo Econômico e Terceirização",
          lawReading: "CLT Arts. 2º a 10 e Lei 6.019/74 reformada (Terceirização de atividade-fim)",
          questionsGoal: 25,
          reviewNotes: "Reforma Trabalhista: grupo econômico por simples coordenação requer interesse comum."
        },
        {
          day: 44,
          disciplines: ["Direito do Trabalho"],
          group: "A",
          theme: "Duração do Trabalho, Horas Extras, Intervalos e Teletrabalho",
          lawReading: "CLT Arts. 58 a 75-E (Banco de horas individual de 6 meses)",
          questionsGoal: 30,
          reviewNotes: "Supressão do intervalo intrajornada gera apenas pagamento do período suprimido."
        },
        {
          day: 45,
          disciplines: ["Direito do Trabalho"],
          group: "A",
          theme: "Rescisão Contratual, Estabilidades e Acordo Mútuo",
          lawReading: "CLT Arts. 477 a 484-A (Rescisão por acordo mútuo) e CF Art. 10 ADCT (Gestante)",
          questionsGoal: 30,
          reviewNotes: "Verbas no acordo do Art. 484-A: metade do aviso prévio e metade da multa do FGTS (20%)."
        },
        {
          day: 46,
          disciplines: ["Processo do Trabalho"],
          group: "A",
          theme: "Competência da Justiça do Trabalho, Audiência e Revelia",
          lawReading: "CF Art. 114 e CLT Arts. 843 a 852 (Jus postulandi e Súmula 425 TST)",
          questionsGoal: 25,
          reviewNotes: "Ausência do reclamante: arquivamento; ausência do reclamado: revelia e confissão ficta."
        },
        {
          day: 47,
          disciplines: ["Processo do Trabalho"],
          group: "A",
          theme: "Recursos Trabalhistas: RO, Agravo de Petição e Depósito Recursal",
          lawReading: "CLT Arts. 893 a 902 (Prazo unificado de 8 dias úteis para recursos)",
          questionsGoal: 30,
          reviewNotes: "Depósito recursal não é exigido de entidades filantrópicas e beneficiários da justiça gratuita."
        },
        {
          day: 48,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "A",
          theme: "Revisão Trabalhista + Súmulas do TST + Revisão de Ética",
          lawReading: "Súmulas 214, 219 e 425 do TST + Estatuto OAB",
          questionsGoal: 35,
          reviewNotes: "Trabalho + Processo do Trabalho somam 10 pontos decisivos."
        },
        {
          day: 49,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 7 (80 Questões)",
          lawReading: "Medir evolução no bloco trabalhista.",
          questionsGoal: 80,
          reviewNotes: "Meta: cravar 8 de 10 nas matérias de trabalho."
        }
      ]
    },
    {
      week: 8,
      title: "Semana 8: Direito Administrativo - Licitações e Improbidade",
      focus: "Conquistar os 5 pontos de Direito Administrativo na 1ª Fase",
      days: [
        {
          day: 50,
          disciplines: ["Direito Administrativo"],
          group: "A",
          theme: "Regime Jurídico Administrativo e Organização Administrativa",
          lawReading: "CF Art. 37 (LIMPE) e Decreto-Lei 200/67 (Autarquias, Fundações, Empresas Públicas, SEM)",
          questionsGoal: 25,
          reviewNotes: "Criação de autarquia exige lei específica; as demais exigem lei autorizadora."
        },
        {
          day: 51,
          disciplines: ["Direito Administrativo"],
          group: "A",
          theme: "Atos Administrativos: Elementos, Atributos e Extinção",
          lawReading: "COFIFOMOB (Competência, Finalidade, Forma, Motivo, Objeto) e Atributos (PATI)",
          questionsGoal: 30,
          reviewNotes: "Anulação de ato ilegal produz efeitos ex tunc; revogação de ato inconveniente produz ex nunc."
        },
        {
          day: 52,
          disciplines: ["Direito Administrativo"],
          group: "A",
          theme: "Nova Lei de Licitações (Lei 14.133/21): Modalidades e Contratação Direta",
          lawReading: "Lei 14.133/21 Arts. 28 a 32 (Pregão, Concorrência, Concurso, Leilão, Diálogo Competitivo) e Arts. 74-75",
          questionsGoal: 30,
          reviewNotes: "Inexigibilidade (inviabilidade de competição) vs Dispensa (rol taxativo de conveniência)."
        },
        {
          day: 53,
          disciplines: ["Direito Administrativo"],
          group: "A",
          theme: "Servidores Públicos e Responsabilidade Civil do Estado",
          lawReading: "CF Art. 37, § 6º (Responsabilidade objetiva da Adm.) e Lei 8.112/90",
          questionsGoal: 25,
          reviewNotes: "Teoria do Risco Administrativo admite causas excludentes (culpa exclusiva da vítima, caso fortuito)."
        },
        {
          day: 54,
          disciplines: ["Direito Administrativo"],
          group: "A",
          theme: "Improbidade Administrativa Reformada (Lei 14.230/21)",
          lawReading: "Lei 8.429/92 Arts. 9º a 12 (Exigência de DOLO específico em todos os atos)",
          questionsGoal: 30,
          reviewNotes: "Atenção máxima: Não existe mais improbidade culposa na ordem jurídica brasileira!"
        },
        {
          day: 55,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "A",
          theme: "Revisão Geral do Grupo A (Todas as 53 Questões Mapeadas)",
          lawReading: "Revisão dos 5 principais artigos de cada matéria do Grupo A.",
          questionsGoal: 40,
          reviewNotes: "O Grupo A sozinho garante a aprovação (53 questões de 80)."
        },
        {
          day: 56,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 8 (80 Questões) - O Teste do Grupo A",
          lawReading: "Verificar se você já atinge 35+ pontos apenas com o Grupo A.",
          questionsGoal: 80,
          reviewNotes: "Se atingir 35 pontos no Grupo A, você está praticamente aprovado!"
        }
      ]
    },
    {
      week: 9,
      title: "Semana 9: Direito Tributário & Direito Financeiro",
      focus: "Dominar os 5 pontos de Tributário e os 2 pontos de Financeiro",
      days: [
        {
          day: 57,
          disciplines: ["Direito Tributário"],
          group: "B",
          theme: "Princípios Constitucionais Tributários (Legalidade, Anterioridade)",
          lawReading: "CF/88 Arts. 145 a 152 (Exceções à anterioridade nonagesimal e de exercício)",
          questionsGoal: 25,
          reviewNotes: "Tributos que podem ser alterados por decreto presidencial (II, IE, IPI, IOF)."
        },
        {
          day: 58,
          disciplines: ["Direito Tributário"],
          group: "B",
          theme: "Imunidades Tributárias Constitucionais (Art. 150, VI CF)",
          lawReading: "CF Art. 150, VI (Imunidade recíproca, templos, livros, jornais, partidos e sindicatos)",
          questionsGoal: 30,
          reviewNotes: "Súmula Vinculante 57: A imunidade do livro se aplica ao leitor eletrônico (e-reader)."
        },
        {
          day: 59,
          disciplines: ["Direito Tributário"],
          group: "B",
          theme: "Crédito Tributário: Suspensão, Extinção e Exclusão",
          lawReading: "CTN Arts. 151 (MODELOPRO), Art. 156 (Extinção) e Art. 175 (Isenção e Anistia)",
          questionsGoal: 30,
          reviewNotes: "Memorizar MODELOPRO: Moratória, Depósito, Recursos, Liminar, Parcelamento, Provisória."
        },
        {
          day: 60,
          disciplines: ["Direito Tributário"],
          group: "B",
          theme: "Responsabilidade Tributária e Execução Fiscal",
          lawReading: "CTN Arts. 134 e 135 (Redirecionamento contra sócio-administrador com excesso de mandato)",
          questionsGoal: 25,
          reviewNotes: "Súmula 430 STJ: O mero inadimplemento da obrigação tributária não gera responsabilidade do sócio."
        },
        {
          day: 61,
          disciplines: ["Direito Financeiro"],
          group: "C",
          theme: "Direito Financeiro: Orçamento Público, PPA, LDO, LOA e LRF",
          lawReading: "CF/88 Arts. 165 a 169 + LC 101/2000 (Lei de Responsabilidade Fiscal)",
          questionsGoal: 25,
          reviewNotes: "LDO define metas e prioridades e orienta a elaboração da LOA."
        },
        {
          day: 62,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "B",
          theme: "Revisão de Tributário/Financeiro + Ética Semanal",
          lawReading: "Revisão dos artigos-chave de CTN e CF.",
          questionsGoal: 35,
          reviewNotes: "Fixar a lista de causas de suspensão da exigibilidade do crédito."
        },
        {
          day: 63,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 9 (80 Questões)",
          lawReading: "Avaliar o impacto de Tributário e Financeiro na nota global.",
          questionsGoal: 80,
          reviewNotes: "Meta: somar +4 pontos com Tributário e Financeiro."
        }
      ]
    },
    {
      week: 10,
      title: "Semana 10: Direito Empresarial & Previdenciário",
      focus: "Conquistar 6 pontos cirúrgicos (Empresarial 4 + Previdenciário 2)",
      days: [
        {
          day: 64,
          disciplines: ["Direito Empresarial"],
          group: "B",
          theme: "Teoria da Empresa, Registro e Estabelecimento",
          lawReading: "Código Civil Arts. 966 a 980 (Conceito de empresário e profissão intelectual)",
          questionsGoal: 25,
          reviewNotes: "Quem exerce profissão intelectual (médico, advogado) não é empresário, salvo se constituir elemento de empresa."
        },
        {
          day: 65,
          disciplines: ["Direito Empresarial"],
          group: "B",
          theme: "Sociedade Limitada e Sociedade Anônima",
          lawReading: "CC Arts. 1.052 a 1.087 (Responsabilidade dos sócios na LTDA) e Lei 6.404/76",
          questionsGoal: 30,
          reviewNotes: "Na sociedade limitada, a responsabilidade dos sócios é restrita ao valor de suas quotas, mas respondem solidariamente pela integralização do capital social."
        },
        {
          day: 66,
          disciplines: ["Direito Empresarial"],
          group: "B",
          theme: "Títulos de Crédito: Princípios, Cheque, Duplicata e Nota Promissória",
          lawReading: "CC Arts. 887 a 926 + Lei do Cheque (Lei 7.357/85)",
          questionsGoal: 25,
          reviewNotes: "Cartularidade, literalidade e autonomia (abstração e inoponibilidade das exceções pessoais)."
        },
        {
          day: 67,
          disciplines: ["Direito Empresarial"],
          group: "B",
          theme: "Recuperação Judicial e Falência (Lei 11.101/05 reformada)",
          lawReading: "Lei 11.101/05 Arts. 47 a 74 e Art. 83 (Ordem de classificação dos créditos)",
          questionsGoal: 30,
          reviewNotes: "Ordem da falência: Trabalhistas (até 150 SM) -> Garantia real -> Tributários -> Quirografários."
        },
        {
          day: 68,
          disciplines: ["Direito Previdenciário"],
          group: "C",
          theme: "Segurados Obrigatórios, Benefícios e Período de Graça",
          lawReading: "Lei 8.213/91 Arts. 11 a 15 (Empregado, avulso, contribuinte individual) e Art. 15 (Período de Graça)",
          questionsGoal: 25,
          reviewNotes: "Segurado desempregado mantém a qualidade de segurado por até 24 ou 36 meses."
        },
        {
          day: 69,
          disciplines: ["Revisão Semanal", "Ética Profissional"],
          group: "B",
          theme: "Revisão de Empresarial/Previdenciário + Ética Semanal",
          lawReading: "Revisão dos artigos-chave de Lei de Falências e Lei 8.213/91.",
          questionsGoal: 35,
          reviewNotes: "Garantir os acertos nas disciplinas do Grupo B."
        },
        {
          day: 70,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 10 (80 Questões)",
          lawReading: "Reta de aproximação: controle do cansaço mental.",
          questionsGoal: 80,
          reviewNotes: "Meta: consolidar 42+ pontos com margem segura."
        }
      ]
    },
    {
      week: 11,
      title: "Semana 11: Leis Especiais de Alto Retorno (ECA, CDC, Ambiental, Humanos)",
      focus: "Garantir 8 pontos de ouro estudando poucas páginas de lei",
      days: [
        {
          day: 71,
          disciplines: ["ECA"],
          group: "C",
          theme: "Adoção, Medidas Protetivas e Medidas Socioeducativas",
          lawReading: "ECA (Lei 8.069/90): Arts. 39 a 52 e Arts. 98 a 125 (Internação e prazo máx. de 3 anos)",
          questionsGoal: 25,
          reviewNotes: "Diferença mínima de 16 anos entre adotante e adotado."
        },
        {
          day: 72,
          disciplines: ["Direito do Consumidor"],
          group: "C",
          theme: "Responsabilidade Civil no CDC: Vício vs Fato do Produto",
          lawReading: "CDC (Lei 8.078/90): Arts. 12 a 28 (Fato = acidente de consumo / dano; Vício = problema de funcionamento)",
          questionsGoal: 30,
          reviewNotes: "Prazo prescricional de 5 anos para reparação de danos causados por fato do produto (Art. 27)."
        },
        {
          day: 73,
          disciplines: ["Direito Ambiental"],
          group: "C",
          theme: "Princípios Ambientais e Responsabilidade Tríplice (CF Art. 225)",
          lawReading: "CF Art. 225 + Lei 6.938/81 (PNMA) e Lei 9.605/98 (Crimes Ambientais)",
          questionsGoal: 25,
          reviewNotes: "Responsabilidade administrativa, civil e penal são independentes e cumulativas."
        },
        {
          day: 74,
          disciplines: ["Direitos Humanos"],
          group: "C",
          theme: "Pacto de San José da Costa Rica e Sistema Interamericano",
          lawReading: "CF Art. 5º, § 2º e § 3º + Convenção Americana de Direitos Humanos (CADH)",
          questionsGoal: 25,
          reviewNotes: "Súmula Vinculante 25: É ilícita a prisão civil de depositário infiel, qualquer que seja a modalidade do depósito."
        },
        {
          day: 75,
          disciplines: ["Direito Internacional"],
          group: "C",
          theme: "LINDB: Aplicação da Lei no Espaço, Sucessão e Cooperação",
          lawReading: "LINDB (Decreto-Lei 4.657/42): Arts. 7º ao 19 e CPC Arts. 21 a 41",
          questionsGoal: 25,
          reviewNotes: "Estatuto pessoal: rege-se pela lei do domicílio da pessoa."
        },
        {
          day: 76,
          disciplines: ["Revisão Semanal"],
          group: "C",
          theme: "Super Revisão de Leis Curtas (ECA + CDC + Ambiental + Humanos)",
          lawReading: "Revisão dos artigos-chave de ECA, CDC e CADH.",
          questionsGoal: 35,
          reviewNotes: "Essas matérias são as que mais rendem pontos por hora investida na OAB!"
        },
        {
          day: 77,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Extensivo 11 (80 Questões)",
          lawReading: "Simulação de fechamento de blocos da prova.",
          questionsGoal: 80,
          reviewNotes: "Meta: pontuar alto em ECA, Consumidor e Ambiental."
        }
      ]
    },
    {
      week: 12,
      title: "Semana 12: Complementares & Consolidação Pré-Véspera",
      focus: "Fechar Filosofia, Eleitoral e revisar as matérias mais cobradas",
      days: [
        {
          day: 78,
          disciplines: ["Filosofia do Direito"],
          group: "C",
          theme: "Filosofia: Jusnaturalismo vs Positivismo Jurídico e Teoria da Justiça",
          lawReading: "Autores clássicos da FGV: Kant (imperativo categórico), Kelsen, Bobbio, Hart e Dworkin",
          questionsGoal: 20,
          reviewNotes: "Kant: Dignidade humana e vedação a tratar o ser humano como mero meio."
        },
        {
          day: 79,
          disciplines: ["Direito Eleitoral"],
          group: "C",
          theme: "Condições de Elegibilidade e Inelegibilidades Reflexas",
          lawReading: "CF/88 Art. 14 + LC 64/90 (Lei das Inelegibilidades e Ficha Limpa)",
          questionsGoal: 25,
          reviewNotes: "Idades mínimas: 35 anos (Presidente/Senador), 30 (Governador), 21 (Deputados/Prefeito), 18 (Vereador)."
        },
        {
          day: 80,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Revisão Completa e Implacável de Ética (Os 8 Pontos)",
          lawReading: "Estatuto da OAB Arts. 1º a 43 + Regulamento Geral",
          questionsGoal: 40,
          reviewNotes: "Ética é o pilar da sua aprovação. Sem 7 ou 8 acertos aqui a vida fica muito mais difícil."
        },
        {
          day: 81,
          disciplines: ["Direito Constitucional"],
          group: "A",
          theme: "Mega Revisão de Constitucional (Remédios, Controle e Direitos)",
          lawReading: "CF Art. 5º + Arts. 102 e 103",
          questionsGoal: 35,
          reviewNotes: "Remédios gratuitos na CF: HC e HD (além dos atos necessários ao exercício da cidadania)."
        },
        {
          day: 82,
          disciplines: ["Direito Penal", "Processo Penal"],
          group: "A",
          theme: "Mega Revisão Penal e Processual Penal (Crimes e Prisões)",
          lawReading: "CP Arts. 121, 155, 157, 171 + CPP Arts. 282 a 313",
          questionsGoal: 40,
          reviewNotes: "Causas de extinção da punibilidade (Art. 107 CP) e prescrição."
        },
        {
          day: 83,
          disciplines: ["Civil e Processo Civil"],
          group: "A",
          theme: "Mega Revisão Civil e Processual Civil (Contratos e Recursos)",
          lawReading: "CC Art. 186/927 + CPC Art. 1.015",
          questionsGoal: 40,
          reviewNotes: "Fixar rol do Agravo de Instrumento e hipóteses de tutela de urgência."
        },
        {
          day: 84,
          disciplines: ["Simulado Geral"],
          group: "ALL",
          theme: "Simulado Geral Oficial de Véspera (Condições Reais FGV)",
          lawReading: "Treino de 5 horas ininterruptas, sem consulta, com máscara/água/caneta preta.",
          questionsGoal: 80,
          reviewNotes: "Treinar a ordem de resolução: começar por Ética -> Grupo C -> Constitucional -> demais."
        }
      ]
    },
    {
      week: 13,
      title: "Semana 13: Reta Final de Véspera • O Dia da Batalha",
      focus: "Revisão cirúrgica de véspera, súmulas vinculantes e preparação mental",
      days: [
        {
          day: 85,
          disciplines: ["Artigos de Ouro"],
          group: "A",
          theme: "Revisão dos 50 Artigos mais cobrados da História da OAB",
          lawReading: "Leitura rápida dos artigos marcados com selo de ouro nas disciplinas do Grupo A.",
          questionsGoal: 30,
          reviewNotes: "Não estude matéria nova! Apenas reforce o que você já construiu."
        },
        {
          day: 86,
          disciplines: ["Súmulas Vinculantes"],
          group: "A",
          theme: "Todas as Súmulas Vinculantes do STF com Incidência OAB",
          lawReading: "Súmulas Vinculantes 11 (Uso de algemas), 14 (Acesso a autos por advogado) e 25 (Prisão civil).",
          questionsGoal: 25,
          reviewNotes: "A FGV adora cobrar a literalidade de súmulas vinculantes!"
        },
        {
          day: 87,
          disciplines: ["Ética Profissional"],
          group: "A",
          theme: "Check-in Final de Ética Profissional (Leitura Completa do CED)",
          lawReading: "Código de Ética e Disciplina da OAB (Arts. 1º a 73)",
          questionsGoal: 30,
          reviewNotes: "Garantir a fixação de sigilo profissional e honorários."
        },
        {
          day: 88,
          disciplines: ["Estratégia de Prova"],
          group: "ALL",
          theme: "Técnica de Prova: Gestão do Tempo e Eliminação de Alternativas",
          lawReading: "Revisar as regras do edital FGV: caneta esferográfica preta em material transparente.",
          questionsGoal: 20,
          reviewNotes: "Não gaste mais de 3 minutos em nenhuma questão. Se travar, marque para revisar depois."
        },
        {
          day: 89,
          disciplines: ["Descanso Estratégico"],
          group: "ALL",
          theme: "Véspera da Prova: Descanso Mental e Separação de Documentos",
          lawReading: "Separar documento oficial com foto, canetas pretas transparentes, comprovante e água.",
          questionsGoal: 0,
          reviewNotes: "Durma cedo. Sua mente precisa estar descansada para processar 80 questões no domingo."
        },
        {
          day: 90,
          disciplines: ["O DIA DA BATALHA"],
          group: "ALL",
          theme: "1ª FASE OAB: Preparem os cavalos para o dia da batalha!",
          lawReading: "Confie na sua preparação. 40 pontos colocam sua carteira vermelha na mão!",
          questionsGoal: 80,
          reviewNotes: "Você treinou, você cumpriu cada missão. A vaga na 2ª Fase é sua!"
        }
      ]
    }
  ];
}

const SCHEDULE_90_DAYS = getSchedule90Days();

// Exportar para escopo global / window
window.DISCIPLINES_DATA = DISCIPLINES_DATA;
window.GROUPS_SUMMARY = GROUPS_SUMMARY;
window.SCHEDULE_60_DAYS = SCHEDULE_60_DAYS;
window.SCHEDULE_90_DAYS = SCHEDULE_90_DAYS;
window.SIMULATOR_PRESETS = SIMULATOR_PRESETS;


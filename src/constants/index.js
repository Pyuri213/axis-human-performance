const navLinks = [
  { label: "Conceito", href: "#showcase" },
  { label: "Diagnóstico", href: "#product-viewer" },
  { label: "Auto-Avaliação", href: "#maturity-quiz" },
  { label: "Pilares", href: "#pillars" },
  { label: "Metodologia", href: "#methodology" },
  { label: "Diferenciais", href: "#highlights" },
  { label: "FAQ", href: "#faq" },
];

const companyInfo = {
  razaoSocial: "AXIS HUMAN PERFORMANCE LTDA.",
  nomeFantasia: "AXIS HUMAN PERFORMANCE",
  cnpj: "67.828.408/0001-27",
  sede: "Maringá — Paraná",
  inicioAtividades: "02/07/2026",
  tagline: "AXIS — Inteligência Empresarial",
  subTagline: "HUMAN PERFORMANCE DIAGNOSTIC SYSTEM",
  heroHeadline:
    "Transformamos empresas em negócios organizados, eficientes e preparados para crescer.",
  heroSubheadline:
    "Integramos diagnóstico comportamental de alta precisão, arquitetura de processos e tecnologia própria para eliminar gargalos invisíveis e construir operações escaláveis.",
  formula: [
    "Pessoas",
    "Estratégia",
    "Processos",
    "Tecnologia",
    "Performance Empresarial",
  ],
  logicFlow: [
    "Diagnosticar",
    "Organizar",
    "Executar",
    "Medir",
    "Melhorar",
    "Escalar",
  ],
};

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const platformModules = [
  {
    id: "humano",
    badge: "MÓDULO 01 • COMPORTAMENTO & DIAGNÓSTICO",
    shortName: "Diagnóstico Humano",
    title: "Análise Corporal e Comportamental Empresarial",
    leader: "Michele Mattos — CEO",
    description:
      "Leitura técnica de gestores, líderes e equipes para identificar padrões comportamentais, conflitos silenciosos, incompatibilidades de função e potencial real de liderança.",
    colorHex: "#c5a880",
    metrics: [
      { label: "Mapeamento de Perfil", value: "360°" },
      { label: "Redução de Ruídos", value: "-78%" },
      { label: "Retenção & Alinhamento", value: "3.2x" },
    ],
    bullets: [
      "Perfil comportamental de sócios e gestores",
      "Análise de compatibilidade entre colaborador e cargo",
      "Diagnóstico de conflitos e travas de liderança",
    ],
  },
  {
    id: "processos",
    badge: "MÓDULO 02 • ESTRATÉGIA & OPERAÇÃO",
    shortName: "AXIS OS & Processos",
    title: "Arquitetura Operacional & Governança",
    leader: "Andriely — COO / Operações",
    description:
      "Transformamos estratégias abstratas em um Sistema Operacional Empresarial (AXIS OS): processos documentados, checklists, funil comercial, CRM, contratos e indicadores de entrega.",
    colorHex: "#1e1e22",
    metrics: [
      { label: "Processos Documentados", value: "100%" },
      { label: "Autonomia da Equipe", value: "+85%" },
      { label: "Eficiência Comercial", value: "2.6x" },
    ],
    bullets: [
      "Documentação completa de rotinas e POPs",
      "Estruturação comercial, CRM e pós-venda",
      "Descentralização para libertar o fundador do operacional",
    ],
  },
  {
    id: "cockpit",
    badge: "MÓDULO 03 • TECNOLOGIA & ESCALA",
    shortName: "Cockpit SaaS & IA",
    title: "Human Performance Diagnostic System",
    leader: "Pablo — CTO / Tecnologia",
    description:
      "Plataforma proprietária SaaS para acompanhamento contínuo: dashboards executivos, histórico de diagnósticos, relatórios automatizados com IA e planos de ação auditáveis.",
    colorHex: "#adb5bd",
    metrics: [
      { label: "Monitoramento", value: "Real-Time" },
      { label: "Planos de Ação IA", value: "Ativos" },
      { label: "Arquitetura", value: "SaaS Cloud" },
    ],
    bullets: [
      "Dashboards de indicadores e evolução corporativa",
      "Histórico comparativo de avaliações por setor",
      "Automações inteligentes e relatórios executivos",
    ],
  },
];

const marketPains = [
  {
    id: "pain-1",
    symptom: "Crescimento Desorganizado",
    reality:
      "A empresa vende e fatura, mas o caos interno cresce na mesma proporção. Faltam processos claros e padrões de entrega.",
    solution:
      "Implantação do AXIS OS com fluxos mapeados, responsabilidades definidas e previsibilidade operacional.",
  },
  {
    id: "pain-2",
    symptom: "Dependência Exclusiva do Dono",
    reality:
      "Toda decisão, aprovação ou resolução de problema precisa passar pelo fundador. Se o dono para, a operação trava.",
    solution:
      "Transferência do conhecimento para processos documentados, indicadores e líderes preparados para decidir.",
  },
  {
    id: "pain-3",
    symptom: "Equipes Desalinhadas e Líderes Sobrecarregados",
    reality:
      "Talentos alocados nas funções erradas, falhas crônicas de comunicação e gestores que não sabem conduzir pessoas.",
    solution:
      "Análise Corporal e Comportamental Empresarial para realocar perfis, destravar lideranças e eliminar atritos.",
  },
  {
    id: "pain-4",
    symptom: "Decisões no 'Feeling' Sem Indicadores",
    reality:
      "Contratações, cortes e investimentos feitos por intuição, sem diagnóstico prévio nem métricas reais de retorno.",
    solution:
      "Diagnóstico estruturado + Plataforma AXIS com dashboards, histórico de performance e planos de ação objetivos.",
  },
];

const pillarsData = [
  {
    id: "pilar-1",
    number: "01",
    tag: "COMPORTAMENTO & DIAGNÓSTICO",
    title: "Inteligência Comportamental Aplicada a Negócios",
    leaderName: "Michele Mattos",
    leaderRole: "CEO & Estrategista Comportamental",
    summary:
      "Compreendemos profundamente a mente e o comportamento das pessoas que movem a empresa para eliminar gargalos humanos invisíveis.",
    capabilities: [
      "Análise Corporal Empresarial de sócios, líderes e equipes",
      "Mapeamento de perfil comportamental e tomada de decisão",
      "Identificação de padrões, conflitos internos e travas de liderança",
      "Alinhamento de compatibilidade entre perfil profissional e função",
      "Desenvolvimento emocional e alta performance executiva",
    ],
    highlightQuote:
      "Não analisamos apenas números; decodificamos as pessoas que constroem os números.",
  },
  {
    id: "pilar-2",
    number: "02",
    tag: "ESTRATÉGIA, OPERAÇÃO & COMERCIAL",
    title: "Engenharia Operacional & Execução Real",
    leaderName: "Andriely",
    leaderRole: "COO / Diretora de Operações",
    summary:
      "Transformamos o diagnóstico e a visão estratégica em um sistema operacional vivo, organizado, mensurável e pronto para delegação.",
    capabilities: [
      "Construção do AXIS OS (Manual e Sistema Operacional da Empresa)",
      "Documentação de processos, checklists, contratos e governança",
      "Estruturação comercial completa: CRM, atendimento, vendas e pós-venda",
      "Gestão de projetos, acompanhamento de entregas e controle financeiro",
      "Rituais de gestão e indicadores de produtividade por área",
    ],
    highlightQuote:
      "Tudo o que se repete dentro da empresa precisa deixar de depender da memória e virar processo.",
  },
  {
    id: "pilar-3",
    number: "03",
    tag: "TECNOLOGIA & PLATAFORMA SAAS",
    title: "Sistemas Próprios, Automação e Escala Digital",
    leaderName: "Pablo",
    leaderRole: "CTO / Tecnologia & Desenvolvimento",
    summary:
      "Convertemos metodologia e inteligência consultiva em software escalável, garantindo que a evolução da empresa seja contínua e orientada a dados.",
    capabilities: [
      "Plataforma AXIS — Human Performance Diagnostic System (SaaS)",
      "Dashboards executivos e indicadores de performance em tempo real",
      "Relatórios automáticos e planos de ação assistidos por Inteligência Artificial",
      "Histórico longitudinal de avaliações comportamentais e organizacionais",
      "Desenvolvimento de automações e infraestrutura digital sob medida",
    ],
    highlightQuote:
      "A consultoria gera o diagnóstico profundo; a tecnologia transforma esse conhecimento em escala contínua.",
  },
];

const methodologySteps = [
  {
    step: "01",
    verb: "Diagnosticar",
    title: "Radiografia Humana e Organizacional",
    description:
      "Imersão na empresa para mapear o perfil de líderes, dinâmica das equipes, gargalos operacionais, falhas de comunicação e pontos cegos da gestão.",
    deliverable: "Relatório de Diagnóstico Integrado AXIS",
  },
  {
    step: "02",
    verb: "Organizar",
    title: "Arquitetura de Processos & Funções",
    description:
      "Redesenho do organograma funcional, realocação de perfis comportamentais, criação de fluxos claros, contratos e estruturação do sistema operacional.",
    deliverable: "Matriz de Funções & Blueprint Operacional",
  },
  {
    step: "03",
    verb: "Executar",
    title: "Implementação Guiada de Planos de Ação",
    description:
      "Aplicação prática das mudanças junto aos gestores e equipes, com treinamentos comportamentais, organização comercial e rituais semanais de gestão.",
    deliverable: "Cronograma de Execução & Governança Ativa",
  },
  {
    step: "04",
    verb: "Medir",
    title: "Indicadores Objetivos & Telemetria",
    description:
      "Monitoramento contínuo através da Plataforma AXIS: conversão comercial, produtividade de equipe, evolução de clima, prazos e saúde financeira.",
    deliverable: "Cockpit de Indicadores & KPIs",
  },
  {
    step: "05",
    verb: "Melhorar",
    title: "Otimização Contínua Baseada em Dados",
    description:
      "Ciclos de revisão estratégica para corrigir desvios rapidamente, refinar processos e elevar o padrão de entrega sem gerar sobrecarga.",
    deliverable: "Ciclos de Auditoria & Refinamento",
  },
  {
    step: "06",
    verb: "Escalar",
    title: "Crescimento Replicável e Sustentável",
    description:
      "Com pessoas certas nos lugares certos, processos documentados e tecnologia ativa, a empresa multiplica resultados com segurança e previsibilidade.",
    deliverable: "Operação Escalável & Autônoma",
  },
];

const performanceImages = [
  { id: "p1", src: "/performance1.png", label: "Mapeamento Comportamental" },
  { id: "p2", src: "/performance2.png", label: "Dashboards Executivos" },
  { id: "p3", src: "/performance3.png", label: "Processos AXIS OS" },
  { id: "p4", src: "/performance4.png", label: "Indicadores de Liderança" },
  { id: "p5", src: "/performance5.jpg", label: "Plataforma AXIS SaaS" },
  { id: "p6", src: "/performance6.png", label: "Análise de Equipes" },
  { id: "p7", src: "/performance7.png", label: "Planos de Ação IA" },
];

const performanceImgPositions = [
  { id: "p1", left: 5, bottom: 65 },
  { id: "p2", right: 10, bottom: 60 },
  { id: "p3", right: -5, bottom: 45 },
  { id: "p4", right: -10, bottom: 0 },
  { id: "p5", left: 20, bottom: 50 },
  { id: "p6", left: 2, bottom: 30 },
  { id: "p7", left: -5, bottom: 0 },
];

const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Avaliação Comportamental 360°.",
    text: "Mapeie o perfil corporal e comportamental de cada gestor e colaborador para eliminar incompatibilidades de função.",
    styles: "left-5 md:left-20 top-[18%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "AXIS OS & Gestão de Processos.",
    text: "Centralize checklists, scripts comerciais, contratos e fluxos operacionais para que a empresa nunca dependa apenas da memória.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Diagnóstico Assistido por IA.",
    text: "Transforme dados comportamentais e operacionais em relatórios executivos automáticos e planos de ação claros em segundos.",
    styles: "left-5 md:left-20 top-[48%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "Histórico & Comparação Evolutiva.",
    text: "Acompanhe a evolução de líderes, setores e indicadores ao longo dos meses com comparativos visuais de performance.",
    styles: "right-5 md:right-20 top-[64%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Governança & Escala Corporativa.",
    text: "Uma arquitetura SaaS desenhada para transformar inteligência consultiva em crescimento previsível e recorrente.",
    styles: "left-5 md:left-20 top-[80%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const servicesSolutions = [
  {
    title: "Diagnóstico & Análise Empresarial",
    category: "Entrada Estratégica",
    description:
      "Investigação completa dos gargalos humanos, operacionais e comerciais que impedem o crescimento da organização.",
    items: [
      "Mapeamento de gargalos ocultos",
      "Auditoria de liderança e processos",
      "Plano Diretor de Reestruturação",
    ],
  },
  {
    title: "Análise Corporal & Comportamental Corporativa",
    category: "Fator Humano",
    description:
      "Avaliação executiva conduzida por Michele Mattos para decodificar perfis de sócios, líderes e equipes estratégicas.",
    items: [
      "Leitura comportamental e corporal de líderes",
      "Resolução de conflitos e alinhamento de sócios",
      "Readequação de talentos às funções ideais",
    ],
  },
  {
    title: "Reestruturação Operacional (AXIS OS)",
    category: "Processos & Gestão",
    description:
      "Implantação da engenharia operacional com Andriely para organizar comercial, processos, indicadores e rotinas.",
    items: [
      "Manual Operacional da Empresa (AXIS OS)",
      "Estruturação de CRM, vendas e atendimento",
      "Rituais de gestão e delegação segura",
    ],
  },
  {
    title: "Plataforma AXIS & Soluções Tecnológicas",
    category: "SaaS & Tecnologia",
    description:
      "Acesso contínuo ao ecossistema digital liderado por Pablo para medir performance, automatizar fluxos e escalar.",
    items: [
      "Assinatura do AXIS Diagnostic System",
      "Dashboards e relatórios inteligentes",
      "Automações e sistemas sob demanda",
    ],
  },
];

const maturityQuizQuestions = [
  {
    id: "q1",
    pillar: "Processos & Autonomia",
    question:
      "Se você (sócio/fundador) precisar se ausentar por 15 dias hoje, o que acontece com a empresa?",
    options: [
      {
        label: "A operação trava ou cai drasticamente; quase tudo depende de mim.",
        score: 25,
        diagnosis: "Dependência Crítica do Fundador",
      },
      {
        label: "Funciona parcialmente, mas surgem muitos erros e ligações diárias.",
        score: 55,
        diagnosis: "Processos Sem Padronização Completa",
      },
      {
        label: "Segue rodando com processos documentados e líderes autônomos.",
        score: 95,
        diagnosis: "Alta Autonomia Operacional",
      },
    ],
  },
  {
    id: "q2",
    pillar: "Comportamento & Liderança",
    question:
      "Como você avalia o alinhamento comportamental da sua equipe e liderança hoje?",
    options: [
      {
        label: "Há conflitos frequentes, ruídos de comunicação e líderes sobrecarregados.",
        score: 25,
        diagnosis: "Desalinhamento Comportamental e de Liderança",
      },
      {
        label: "Temos pessoas boas, mas algumas parecem estar na função errada.",
        score: 60,
        diagnosis: "Necessidade de Mapeamento de Perfil por Função",
      },
      {
        label: "Perfis mapeados, funções bem distribuídas e liderança madura.",
        score: 95,
        diagnosis: "Sinergia Humana Consolidada",
      },
    ],
  },
  {
    id: "q3",
    pillar: "Estrutura Comercial & AXIS OS",
    question:
      "Como funcionam os processos internos e o funil comercial da sua empresa?",
    options: [
      {
        label: "Estão apenas na cabeça das pessoas; não temos manual nem CRM estruturado.",
        score: 20,
        diagnosis: "Ausência de Sistema Operacional (AXIS OS)",
      },
      {
        label: "Temos algumas planilhas e rotinas, mas falta padrão no pós-venda e entrega.",
        score: 55,
        diagnosis: "Operação Parcialmente Estruturada",
      },
      {
        label: "Tudo documentado em checklists, contratos padronizados e CRM ativo.",
        score: 95,
        diagnosis: "Engenharia Operacional Madura",
      },
    ],
  },
  {
    id: "q4",
    pillar: "Indicadores & Tecnologia",
    question:
      "De que forma as decisões estratégicas são tomadas na organização?",
    options: [
      {
        label: "Quase sempre no 'feeling' e urgência, apagando incêndios do dia a dia.",
        score: 20,
        diagnosis: "Gestão Reativa Sem Telemetria",
      },
      {
        label: "Olhamos o financeiro básico, mas faltam indicadores claros de produtividade.",
        score: 55,
        diagnosis: "Visibilidade Parcial de Indicadores",
      },
      {
        label: "Acompanhamos dashboards em tempo real, metas e planos de ação claros.",
        score: 95,
        diagnosis: "Gestão Orientada a Dados",
      },
    ],
  },
];

const beforeAfterData = {
  withoutAxis: [
    "Processos presos apenas na memória do dono e de funcionários antigos.",
    "Líderes sobrecarregados apagando incêndios operacionais todos os dias.",
    "Profissionais talentosos rendendo pouco por estarem na função incompatível com seu perfil.",
    "Empresa que vende e fatura, mas vive desorganizada e sem previsibilidade de caixa.",
    "Decisões tomadas por intuição ('feeling'), sem diagnóstico prévio nem indicadores.",
    "Crescimento que gera mais estresse e caos em vez de liberdade e lucro.",
  ],
  withAxis: [
    "AXIS OS implantado: processos documentados, checklists, contratos e rotinas claras.",
    "Análise Corporal e Comportamental Empresarial: a pessoa certa na função certa.",
    "Lideranças destravadas, comunicação limpa e redução drástica de conflitos internos.",
    "Operação comercial estruturada com CRM, funil de vendas e acompanhamento de entregas.",
    "Plataforma AXIS com dashboards, histórico evolutivo e planos de ação objetivos.",
    "Estrutura replicável e autônoma, preparada para escalar sem depender 100% do fundador.",
  ],
};

const operationPhases = [
  {
    phase: "FASE 01",
    name: "ORGANIZAR",
    subtitle: "Construção da Base Sólida",
    items: [
      "Diagnóstico comportamental e organizacional",
      "Definição clara de cargos, funções e contratos",
      "Organização financeira e separação de contas",
      "Desenho dos processos essenciais e identidade",
    ],
  },
  {
    phase: "FASE 02",
    name: "OPERAR",
    subtitle: "Execução com Método",
    items: [
      "Prospecção e funil comercial ativo no CRM",
      "Atendimento padronizado e contratos seguros",
      "Entrega de excelência com checklists operacionais",
      "Acompanhamento próximo da jornada do cliente",
    ],
  },
  {
    phase: "FASE 03",
    name: "MEDIR E DOCUMENTAR",
    subtitle: "Refinamento por Indicadores",
    items: [
      "Monitoramento de KPIs de conversão e produtividade",
      "Auditoria de resultados, falhas e custos",
      "Coleta de feedback e melhoria de processos",
      "Consolidação do manual operacional (AXIS OS)",
    ],
  },
  {
    phase: "FASE 04",
    name: "ESCALAR",
    subtitle: "Expansão Sustentável & SaaS",
    items: [
      "Equipe autônoma e lideranças preparadas",
      "Uso intensivo da Plataforma AXIS e automações",
      "Processos replicáveis e receita recorrente",
      "Crescimento sem sobrecarga dos sócios",
    ],
  },
];

const executiveFaqs = [
  {
    question: "A AXIS é uma consultoria tradicional?",
    answer:
      "Não. Consultorias tradicionais costumam entregar relatórios teóricos que acabam engavetados. A AXIS é uma empresa de Inteligência e Performance Empresarial que atua na prática unindo três pontas: Comportamento Humano (Michele Mattos), Engenharia Operacional e Processos (Andriely) e Tecnologia Escalável (Pablo).",
  },
  {
    question:
      "Como funciona a Análise Corporal e Comportamental Empresarial na prática?",
    answer:
      "Diferente de uma análise individual isolada, nossa abordagem corporativa mapeia o perfil dos sócios, gestores e colaboradores para identificar como cada pessoa pensa, decide, reage à pressão e lidera. Isso permite resolver conflitos internos, destravar líderes e alocar cada profissional na função onde ele entrega máxima performance.",
  },
  {
    question:
      "Minha empresa já vende bem, mas vive desorganizada. Por onde começamos?",
    answer:
      "Começamos sempre pela Etapa 01: Diagnosticar. Realizamos uma radiografia humana e operacional para descobrir onde estão os gargalos invisíveis (processos centralizados no dono, falhas de comunicação, retrabalho ou falta de indicadores) e, em seguida, estruturamos o seu AXIS OS (Sistema Operacional da Empresa).",
  },
  {
    question: "O que é o AXIS OS e como ele liberta o dono do operacional?",
    answer:
      "O AXIS OS é a documentação viva de como a sua empresa funciona: processos passo a passo, checklists, scripts comerciais, modelos de contratos, matriz de responsabilidades e rituais de gestão. Com tudo padronizado, a operação deixa de depender da memória das pessoas e passa a rodar com autonomia.",
  },
  {
    question: "A AXIS atende apenas empresas de Maringá/PR ou de todo o Brasil?",
    answer:
      "Nossa sede fica em Maringá — Paraná, onde realizamos atendimentos presenciais e imersões in-company na região, e também atendemos empresas de todo o Brasil através de nossa estrutura digital e da Plataforma AXIS.",
  },
  {
    question: "Para qual porte de empresa a AXIS é recomendada?",
    answer:
      "Atendemos desde empresas em fase de estruturação e crescimento acelerado (que precisam organizar a base para não colapsar) até médias e grandes operações que buscam alinhar lideranças, profissionalizar processos e implementar governança orientada a dados.",
  },
];

const footerLinks = [
  { label: "Diagnóstico Empresarial", href: "#showcase" },
  { label: "Auto-Avaliação Online", href: "#maturity-quiz" },
  { label: "Os 3 Pilares", href: "#pillars" },
  { label: "Metodologia AXIS", href: "#methodology" },
  { label: "Perguntas Frequentes", href: "#faq" },
];

export {
  navLinks,
  companyInfo,
  noChangeParts,
  platformModules,
  marketPains,
  pillarsData,
  methodologySteps,
  performanceImages,
  performanceImgPositions,
  features,
  featureSequence,
  servicesSolutions,
  maturityQuizQuestions,
  beforeAfterData,
  operationPhases,
  executiveFaqs,
  footerLinks,
};

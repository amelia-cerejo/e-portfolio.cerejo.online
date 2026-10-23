import { PortfolioData } from "./types";

const OFFICIAL_COURSE_NAME = "Formação Pedagógica Contínua de Formadores — Formador de Formadores";

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  title: "e-Portefólio",
  subtitle: `Portefólio científico-pedagógico • ${OFFICIAL_COURSE_NAME}`,
  
  // Capa Metadata
  formanda: "Amélia Cerejo Lopes",
  entidadeFormadora: "IEFP — Instituto do Emprego e Formação Profissional, I.P.",
  delegacaoRegional: "Delegação Regional do Alentejo",
  servico: "Centro de Emprego e Formação Profissional de Beja",
  curso: OFFICIAL_COURSE_NAME,
  formaOrganizacao: "E-learning",
  periodoFormacao: "14 de maio de 2026 a 10 de julho de 2026",
  coordenadoraPedagogica: "Ivone Silva",
  formadores: [
    "Ana Mafalda Maia Caetano de Sales Gomes e Teixeira Pereira",
    "Joaquim Manuel Rodrigues Paulino"
  ],
  ccp: "n.º EDF 407745/2006 DL — emitido a 31 de maio de 2006",
  dataElaboracao: "Julho de 2026",
  referencialRef: "IEFP. Referencial de Formação Pedagógica Contínua de Formadores — Formador de Formadores, 3.ª edição, janeiro de 2022.",

  // 1. Apresentação Pessoal
  personalBio: "O presente e-portf\u00f3lio reflexivo apresenta o meu percurso de aprendizagem na Forma\u00e7\u00e3o Pedag\u00f3gica Cont\u00ednua de Formadores \u2013 Formador de Formadores. Foi elaborado no \u00e2mbito do curso promovido pelo IEFP, em regime de e-learning, e procura evidenciar as aprendizagens, as atividades realizadas e a reflex\u00e3o cr\u00edtica desenvolvida ao longo dos m\u00f3dulos.\n\nSou Am\u00e9lia Cerejo Lopes e tenho um percurso acad\u00e9mico e profissional diversificado, com experi\u00eancia em Psicologia, Gest\u00e3o, Tecnologias de Informa\u00e7\u00e3o, forma\u00e7\u00e3o, gest\u00e3o de projetos e apoio administrativo. Esta diversidade tem contribu\u00eddo para uma vis\u00e3o ampla da forma\u00e7\u00e3o, das pessoas e dos contextos profissionais.\n\nA minha atividade enquanto formadora tem sido marcada pela utiliza\u00e7\u00e3o de ferramentas digitais, ambientes online, plataformas colaborativas e recursos pedag\u00f3gicos multim\u00e9dia. Esta experi\u00eancia ajudou-me a valorizar a clareza, a organiza\u00e7\u00e3o, a acessibilidade dos materiais e a adapta\u00e7\u00e3o das estrat\u00e9gias aos participantes.\n\nAo realizar esta forma\u00e7\u00e3o, procurei refor\u00e7ar a minha capacidade de analisar necessidades, conceber recursos e percursos formativos, refletir sobre pr\u00e1ticas profissionais, utilizar metodologias adequadas e acompanhar outros formadores em processos de desenvolvimento pedag\u00f3gico.",
  experienceBullets: [
    "Formação especializada em contexto de centros de formação do IEFP, empresas e escolas profissionais parceiras",
    "Áreas de especialização orientadas principalmente para as TIC, soft skills e orientação profissional",
    "Acompanhamento individualizado e de grupo em processos de diagnóstico e inserção profissional ativa"
  ],
  motivationBullets: [
    "Aprofundar competências técnicas e pedagógicas estruturantes para formar futuros formadores, articulando conhecimentos operacionais com uma postura reflexiva, crítica e responsável.",
    "Aceder a novas áreas de intervenção profissional, nomeadamente a participação em processos de RvccFor — Reconhecimento, Validação e Certificação de Competências de Formadores, em funções compatíveis com a experiência, as habilitações e o enquadramento institucional.",
    "Atualizar o meu registo profissional e curricular no NETFORCE, integrando as competências e certificações adquiridas."
  ],

  // 2. Objetivos do e-portefólio
  portfolioGoalsBullets: [
    "Reunir informa\u00e7\u00e3o significativa sobre o percurso formativo realizado;",
    "Relacionar os m\u00f3dulos do curso com as atividades desenvolvidas;",
    "Identificar aprendizagens adquiridas em contextos formais, n\u00e3o formais e informais;",
    "Refletir criticamente sobre pr\u00e1ticas pedag\u00f3gicas e identidade profissional;",
    "Selecionar e justificar evid\u00eancias relevantes para demonstrar compet\u00eancias;",
    "Identificar pontos fortes, \u00e1reas de melhoria e objetivos de desenvolvimento futuro."
  ],
  objectivesIntro: "Este e-portf\u00f3lio tem uma fun\u00e7\u00e3o reflexiva, formativa e demonstrativa. N\u00e3o pretende ser apenas uma cole\u00e7\u00e3o de trabalhos, mas sim um instrumento de an\u00e1lise do percurso realizado, das compet\u00eancias mobilizadas e das aprendizagens constru\u00eddas ao longo da forma\u00e7\u00e3o.",
  goalsQuote: "Este e-portefólio não é apenas um requisito formal de avaliação, mas um instrumento de desenvolvimento profissional contínuo que pretendo alimentar e atualizar ao longo da minha carreira.",

  // 3. Percurso e Atividades
  activityModules: [
    {
      code: "MF1",
      title: "Diagnóstico de Necessidades e Referenciais de Competências e de Formação",
      activities: [
        "Sessão Síncrona",
        "Atividade 1 | Instrumentos de Diagnóstico de Necessidades de Competências e de Formação",
        "Atividade 2 | Lacunas de Competências e de Formação",
        "Atividade 3 | Competências Essenciais para uma Função"
      ]
    },
    {
      code: "MF2",
      title: "Conceção da Formação",
      activities: [
        "Atividade 1 | Recurso Didático e Multimédia",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Glossário de termos CoP",
        "Atividade 4 | Caraterização das Comunidades de Prática"
      ]
    },
    {
      code: "MF3",
      title: "Dinâmica de Aprendizagem ao Longo da Vida",
      activities: [
        "Atividade 1 | Sou um Profissional Reflexivo Crítico",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Lição Dinâmica de Aprendizagem ao Longo da Vida",
        "Atividade 4 | E-Portefólio",
        "Percurso Profissional"
      ]
    },
    {
      code: "MF4",
      title: "Metodologias e Estratégias Pedagógicas",
      activities: [
        "Atividade 1 | Métodos e Técnicas Pedagógicas",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Planificação e Protótipo de um Miniprojeto"
      ]
    },
    {
      code: "MF5",
      title: "Simulações Pedagógicas",
      activities: [
        "Atividade 1 | Práticas de Dinamização da Simulação",
        "Atividade 2 | Sessão Síncrona – Simulação Inicial",
        "Atividade 3 | Instrumento de Suporte a Simulações Pedagógicas – Escolha do Instrumento a Analisar"
      ]
    }
  ],

  // 4. Reflexão Crítica sobre os Módulos
  modules: [
    {
      id: "m1",
      code: "MF1",
      title: "Diagnóstico de Necessidades e Referenciais de Competências e de Formação",
      hours: "10 horas",
      sabia: "Antes de iniciar este módulo, já possuía conhecimentos práticos sobre a identificação de necessidades de formação, adquiridos ao longo da minha atividade formativa. Sabia que era importante conhecer o perfil dos formandos antes de planear uma ação, mas ainda não tinha sistematizado esse processo de forma tão estruturada. Os conceitos de referencial de competências e referencial de formação eram-me familiares, embora não dominasse totalmente a sua construção formal.",
      aprendi: [
        "Aprofundei instrumentos de diagnóstico de necessidades, distinguindo métodos qualitativos e quantitativos, como observação direta, avaliação de pares, avaliação 360 graus, entrevistas, focus group e análise documental.",
        "Compreendi melhor as vantagens, limitações e cuidados de aplicação da observação direta e da avaliação 360 graus em contextos formativos e organizacionais.",
        "Consolidei as etapas de construção de referenciais de competências, incluindo o mapeamento de unidades de competência e a sua articulação com necessidades reais de desempenho.",
        "A construção de um perfil de formação para Especialista em Promoção de Destinos no TikTok ajudou-me a compreender como se podem desenhar referenciais para funções emergentes.",
        "A análise de lacunas de competências permitiu-me relacionar competências existentes, competências exigidas e respostas formativas ajustadas."
      ],
      atividades: [
        "Sessão síncrona",
        "Atividade 1 | Instrumentos de Diagnóstico de Necessidades de Competências e de Formação",
        "Atividade 2 | Lacunas de Competências e de Formação",
        "Atividade 3 | Competências Essenciais para uma Função"
      ],
      reflexao: "O MF1 levou-me a olhar de forma mais estruturada para o diagnóstico de necessidades, reconhecendo-o como uma etapa essencial do planeamento da formação. Percebi que diagnosticar não é apenas recolher informação inicial, mas interpretar dados, compreender contextos e fundamentar decisões pedagógicas. O trabalho sobre o perfil de Especialista em Promoção de Destinos no TikTok mostrou-me também que os referenciais precisam de acompanhar a evolução das profissões e das linguagens digitais.",
      aplicacaoFutura: "Pretendo rever as fichas e práticas de diagnóstico inicial das formações que dinamizo, usando instrumentos mais adequados ao contexto e ao perfil dos formandos.",
      aspetosAprofundar: "Desejo aprofundar a construção de referenciais de competências e de formação, bem como a utilização de ferramentas de análise de lacunas alinhadas com o Catálogo Nacional de Qualificações."
    },
    {
      id: "m2",
      code: "MF2",
      title: "Conceção da Formação",
      hours: "10 horas",
      sabia: "Já utilizava ferramentas digitais para criar recursos de apoio, como apresentações, vídeos curtos, tabelas e guiões. Contudo, fazia-o sobretudo com base na experiência e na intuição, sem uma aplicação tão consciente dos princípios da aprendizagem multimédia ou da lógica das comunidades de prática.",
      aprendi: [
        "Aprofundei os princípios da aprendizagem multimédia de Richard Mayer, em especial a redução de ruído, a sinalização da informação relevante e a coerência visual e verbal.",
        "Reforcei a ideia de que a tecnologia deve estar ao serviço dos objetivos pedagógicos e das características dos formandos adultos.",
        "Compreendi a estrutura das Comunidades de Prática, nomeadamente a relação entre domínio, comunidade e prática.",
        "Trabalhei os conceitos de envolvimento mútuo e repertório partilhado, percebendo o seu valor para a aprendizagem colaborativa entre formadores."
      ],
      atividades: [
        "Atividade 1 | Elaboração de um Recurso Didático e Multimédia",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Glossário de Termos — Comunidades de Prática",
        "Atividade 4 | Caracterização das Comunidades de Prática"
      ],
      reflexao: "O MF2 ajudou-me a olhar para os recursos didáticos com mais critério. Compreendi que um recurso visualmente apelativo pode não ser eficaz se criar excesso de informação ou dispersão. A reflexão sobre Comunidades de Prática também me mostrou que a aprendizagem entre pares pode continuar para além da formação formal, desde que exista um propósito comum, interação regular e partilha de recursos.",
      aplicacaoFutura: "Passarei a rever os meus recursos pedagógicos com maior atenção à clareza, à organização da informação e à adequação aos objetivos de aprendizagem. Pretendo também incentivar comunidades de prática simples e funcionais entre formadores.",
      aspetosAprofundar: "Quero aprofundar ferramentas de e-learning e recursos interativos, como H5P, Articulate Storyline ou soluções HTML5, mantendo sempre o foco na utilidade pedagógica."
    },
    {
      id: "m3",
      code: "MF3",
      title: "Dinâmica de Aprendizagem ao Longo da Vida",
      hours: "10 horas",
      sabia: "Conhecia genericamente o papel do reconhecimento de competências no sistema nacional de qualificações e sabia que o IEFP disponibiliza a plataforma NETFORCE para a gestão do percurso dos formadores. No entanto, desconhecia vários aspetos específicos do RvccFor e a forma como a aprendizagem formal, não formal e informal se articula no percurso profissional.",
      aprendi: [
        "Compreendi melhor o RvccFor — Reconhecimento, Validação e Certificação de Competências de Formadores — e a sua relação com a experiência profissional documentada.",
        "Percebi que o NETFORCE deve ser usado para atualizar o registo profissional e curricular, integrando competências e certificações adquiridas.",
        "Reforcei a distinção entre educação formal, não formal e informal, reconhecendo que todas contribuem para a aprendizagem ao longo da vida.",
        "Aprofundei o papel do e-portefólio como instrumento de autoavaliação, seleção de evidências e reflexão crítica sobre a prática profissional."
      ],
      atividades: [
        "Atividade 1 | Sou um Profissional Reflexivo Crítico",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Lição Dinâmica de aprendizagem ao longo da vida",
        "Atividade 4 | E-Portefólio",
        "Percurso Profissional"
      ],
      reflexao: "O MF3 permitiu-me reconhecer que a experiência profissional ganha valor quando é analisada, documentada e relacionada com referenciais claros. O RvccFor surgiu como uma possibilidade de valorização de percursos, mas também como um processo que exige rigor, evidências e enquadramento adequado. Esta aprendizagem reforçou a importância de manter o meu percurso atualizado e refletido.",
      aplicacaoFutura: "Pretendo participar em processos de RvccFor, em funções compatíveis com a minha experiência, as minhas habilitações e o enquadramento institucional.",
      aspetosAprofundar: "Quero conhecer melhor os procedimentos específicos do RvccFor e acompanhar práticas institucionais que me permitam compreender melhor o papel dos diferentes intervenientes."
    },
    {
      id: "m4",
      code: "MF4",
      title: "Metodologias e Estratégias Pedagógicas",
      hours: "10 horas",
      sabia: "Já recorria ao método expositivo e a atividades práticas nas minhas formações, alternando momentos de explicação com exercícios individuais ou em grupo. Ainda assim, faltava-me um quadro mais claro para relacionar métodos, técnicas pedagógicas e objetivos de aprendizagem, sobretudo em contextos digitais ou híbridos.",
      aprendi: [
        "Reforcei a distinção entre métodos expositivo, interrogativo, demonstrativo e ativo, compreendendo melhor quando e porquê utilizar cada um.",
        "Aprofundei metodologias ativas, como aprendizagem baseada em projetos, estudo de caso, role playing, gamificação e resolução de problemas.",
        "Explorei estratégias colaborativas em e-learning, incluindo fóruns, mapas mentais, murais digitais e trabalho entre pares.",
        "Trabalhei a organização de projetos pedagógicos, articulando objetivos, métodos, recursos, calendarização e avaliação."
      ],
      atividades: [
        "Atividade 1 | Métodos e Técnicas Pedagógicas",
        "Atividade 2 | Sessão Síncrona",
        "Atividade 3 | Planificação e Protótipo de um Miniprojeto"
      ],
      reflexao: "O MF4 ajudou-me a confirmar que a qualidade pedagógica não depende da quantidade de recursos utilizados, mas da coerência entre objetivos, métodos, atividades e avaliação. A planificação do miniprojeto levou-me a pensar de forma mais integrada, procurando criar experiências de aprendizagem que façam sentido para os formandos e para o contexto profissional em que se inserem.",
      aplicacaoFutura: "Pretendo desenhar guiões didáticos mais claros, integrando metodologias ativas sempre que estas contribuam para aprendizagens mais significativas.",
      aspetosAprofundar: "Quero aprofundar técnicas de facilitação de grupos, metodologias ágeis aplicadas à formação e estratégias de acompanhamento em ambientes digitais."
    },
    {
      id: "m5",
      code: "MF5",
      title: "Simulações Pedagógicas: Acompanhamento e Avaliação",
      hours: "10 horas",
      sabia: "Já tinha assistido a simulações pedagógicas em formações anteriores, mas observava-as de forma pouco sistemática. Faltava-me uma grelha de análise mais objetiva para identificar comportamentos pedagógicos, formular feedback e apoiar a melhoria contínua.",
      aprendi: [
        "Compreendi melhor os diferentes momentos das simulações pedagógicas e a sua utilidade para diagnosticar, acompanhar e avaliar competências.",
        "Aprofundei a construção de grelhas de observação, incluindo critérios relacionados com comunicação, postura, gestão do tempo, interação e estratégias pedagógicas.",
        "Reforcei a importância do feedback construtivo, claro e respeitador, como elemento central no desenvolvimento de formadores.",
        "Percebi que o acompanhamento deve transformar a observação em propostas concretas de melhoria, ajustadas à pessoa e ao contexto."
      ],
      atividades: [
        "Atividade 1 | Práticas de Dinamização da Simulação Pedagógica",
        "Atividade 2 | Sessão Síncrona - Simulação Inicial — Módulo 2 do Curso de Formação Pedagógica Inicial de Formadores, 2022",
        "Atividade 3 | Instrumento de Suporte a Simulações Pedagógicas: Escolha do Instrumento a Analisar"
      ],
      reflexao: "O MF5 mostrou-me que observar uma simulação pedagógica exige atenção, método e responsabilidade. Ao analisar comportamentos pedagógicos, percebi que pequenos detalhes de comunicação, organização e interação podem influenciar muito a qualidade da sessão. Este módulo reforçou a importância de um feedback que ajude o formando a compreender o que pode melhorar e como pode fazê-lo.",
      aplicacaoFutura: "Pretendo utilizar grelhas de observação mais claras nas simulações e apoiar os formandos com feedback prático, respeitador e orientado para a melhoria.",
      aspetosAprofundar: "Quero aprofundar instrumentos de observação, técnicas de feedback e estratégias de acompanhamento individual em simulações pedagógicas."
    }
  ],

  // 4. Autoavaliação de Competências
  competenceRows: [
    { id: "c1", name: "Diagnóstico de necessidades de competências e de formação", antes: 2, apos: 4, evidences: "Atividades do MF1 sobre diagnóstico e análise de lacunas" },
    { id: "c2", name: "Conceção e adaptação de referenciais de competências", antes: 2, apos: 4, evidences: "Perfil de competências desenvolvido no MF1" },
    { id: "c3", name: "Conceção e adaptação de referenciais de formação", antes: 1, apos: 4, evidences: "Plano de formação e atividades de referenciação do MF1" },
    { id: "c4", name: "Conceção de recursos didáticos e multimédia", antes: 3, apos: 5, evidences: "Recurso didático Profissão de Risco: Bombeiro" },
    { id: "c5", name: "Dinamização de comunidades de prática", antes: 2, apos: 4, evidences: "Glossários e caracterização das Comunidades de Prática" },
    { id: "c6", name: "Construção e avaliação de portefólios", antes: 3, apos: 5, evidences: "E-portefólio e ficha de percurso profissional" },
    { id: "c7", name: "Métodos e técnicas pedagógicas", antes: 3, apos: 4, evidences: "Atividades do MF4 sobre métodos e técnicas pedagógicas" },
    { id: "c8", name: "Organização de projetos pedagógicos", antes: 2, apos: 4, evidences: "Planificação e protótipo de um miniprojeto" },
    { id: "c9", name: "Acompanhamento e avaliação de simulações pedagógicas", antes: 2, apos: 4, evidences: "Grelhas e instrumentos do MF5" },
    { id: "c10", name: "Utilização de ferramentas digitais na formação", antes: 2, apos: 4, evidences: "Recursos digitais e evidências multimédia desenvolvidas" },
    { id: "c11", name: "Reflexão crítica sobre a prática profissional", antes: 3, apos: 5, evidences: "Reflexões por módulo e síntese global do e-portefólio" }
  ],
  pontosFortes: [
    "Experiência prática consolidada como formadora desde 2006, com públicos diversificados.",
    "Facilidade em refletir criticamente sobre a prática e identificar oportunidades de melhoria.",
    "Boa adaptação a ambientes digitais de aprendizagem, plataformas LMS e ferramentas de e-learning.",
    "Disponibilidade para o trabalho colaborativo e para a partilha de repertório didático.",
    "Postura ética, responsável e centrada na autonomia dos formandos."
  ],
  areasDesenvolver: [
    "Aprofundar a participação em processos de RvccFor, de acordo com o enquadramento institucional aplicável.",
    "Alargar o repertório de técnicas de acompanhamento pedagógico perante formandos com diferentes níveis de experiência.",
    "Desenvolver competências na utilização ética de inteligência artificial generativa no apoio à conceção de formação.",
    "Participar de forma mais regular em Comunidades de Prática de formadores."
  ],

  // 5. Síntese Reflexiva Global
  synthesisText1: `A ${OFFICIAL_COURSE_NAME} representou um marco importante no meu percurso profissional. Se em 2006 a formação pedagógica inicial me deu as ferramentas adequadas para exercer a atividade formativa, este percurso permitiu-me aprofundar a responsabilidade de formar outros formadores com maior consciência pedagógica, ética e metodológica.`,
  synthesisText2: "A articulação entre teoria, prática e reflexão ajudou-me a consolidar uma visão mais clara sobre o papel do formador de formadores. Compreendi que a qualidade da formação depende da capacidade de diagnosticar necessidades, planear com rigor, escolher metodologias adequadas, acompanhar processos e avaliar evidências com sentido crítico.",
  synthesisText3: "Esta jornada no IEFP em Beja, acompanhada pelos formadores e partilhada com colegas de percurso, reforçou o meu compromisso com a educação de adultos. Sinto-me mais preparada para continuar a desenvolver a minha prática, prestando um serviço público de elevado rigor técnico e com atenção às pessoas que aprendem.",
  signatureName: "Amélia Cerejo Lopes",
  signatureRole: "Formadora de Formadores Certificada",
  signatureYear: "2026",

  // 6. Expectativas e Projetos Futuros
  goalsShortTerm: [
    "Atualizar o meu registo profissional e curricular no NETFORCE, integrando as competências e certificações adquiridas.",
    "Participar em processos de RvccFor, em funções compatíveis com a experiência, as habilitações e o enquadramento institucional.",
    "Ajustar os meus recursos formativos de acordo com princípios de clareza, coerência e adequação pedagógica.",
    "Facilitar sessões tutoriais iniciais com foco em metodologias ativas e acompanhamento próximo dos formandos."
  ],
  goalsMediumTerm: [
    "Aprofundar a participação em processos de RvccFor, quando o enquadramento institucional e profissional o permitir.",
    "Conceber, testar e dinamizar uma Comunidade de Prática online orientada para a partilha de repertório didático entre formadores.",
    "Especializar-me em metodologias ativas direcionadas para públicos adultos e experientes.",
    "Desenvolver um repositório digital de recursos pedagógicos abertos de apoio à formação de adultos."
  ],
  plannedTrainings: [
    "Formação especializada em Inteligência Artificial Generativa aplicada à conceção de formação e avaliação de competências.",
    "Participação regular em congressos nacionais e conferências sobre andragogia e educação de adultos.",
    "Curso avançado de auditoria de formação e sistemas de garantia da qualidade."
  ],

  // 7. Evidências das Aprendizagens
  evidences: [
    {
      id: "ev1",
      moduleCode: "MF1",
      title: "Atividade 1 — Instrumentos de Diagnóstico de Necessidades de Competências e de Formação",
      description: "Trabalho de grupo sobre instrumentos de diagnóstico, com foco na observação direta e na avaliação de pares/360 graus.",
      url: "evidencias/pdf-viewer.html?file=mf1/mf1-atividade-1-diagnostico.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev2",
      moduleCode: "MF1",
      title: "Atividade 2 — Lacunas de Competências e de Formação",
      description: "Registo da atividade de análise de lacunas de competências e de formação.",
      url: "evidencias/pdf-viewer.html?file=mf1/mf1-atividade-2-AMELIA_LOPES_Atividade2 Diagnostico Necessidades Formacao.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev3",
      moduleCode: "MF1",
      title: "Atividade 3 — Competências Essenciais para uma Função",
      description: "Referencial de competências e plano de formação para a função Especialista em Promoção de Destinos no TikTok.",
      url: "evidencias/pdf-viewer.html?file=mf1/mf1-atividade-3-perfis-competencias.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev4",
      moduleCode: "MF2",
      title: "MF2 A1 — Profissão de Risco: Bombeiro",
      description: "Recurso didático e multimédia sobre a profissão de bombeiro, desenvolvido com preocupação de clareza e adequação pedagógica.",
      url: "evidencias/mf2/recurso-didatico/index.html"
    },
    {
      id: "ev5",
      moduleCode: "MF2",
      title: "MF2 A3 — Glossário: Envolvimento Mútuo",
      description: "Glossário de termo associado às Comunidades de Prática.",
      url: "evidencias/mf2/mf2-glossario-envolvimento-mutuo.html"
    },
    {
      id: "ev6",
      moduleCode: "MF2",
      title: "MF2 A3 — Glossário: Repertório Partilhado",
      description: "Glossário de termo associado às Comunidades de Prática.",
      url: "evidencias/mf2/mf2-glossario-repertorio-partilhado.html"
    },
    {
      id: "ev7",
      moduleCode: "MF2",
      title: "MF2 A4 — Caracterização das Comunidades de Prática",
      description: "Trabalho de caracterização do desenvolvimento de uma Comunidade de Prática.",
      url: "evidencias/pdf-viewer.html?file=mf2/mf2-atividade-4-comunidades-pratica.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev8",
      moduleCode: "MF2",
      title: "MF2 A4 — Proposta de Comunidade de Prática",
      description: "Proposta de criação e desenvolvimento de uma Comunidade de Prática.",
      url: "evidencias/mf2/proposta-cop-site/index.html"
    },
    {
      id: "ev9",
      moduleCode: "MF3",
      title: "Atividade 1 — Sou um Profissional Reflexivo Crítico",
      description: "Trabalho reflexivo sobre a prática profissional do formador.",
      url: "evidencias/mf3/formador-reflexivo/index.html"
    },
    {
      id: "ev10",
      moduleCode: "MF3",
      title: "Percurso Profissional",
      description: "Ficha de percurso profissional e de formação.",
      url: "evidencias/ficha-percurso.html"
    },
    {
      id: "ev11",
      moduleCode: "MF4",
      title: "MF4 | A1 — Métodos e Técnicas Pedagógicas",
      description: "Evidências associadas à exploração de métodos e técnicas pedagógicas, incluindo infográfico e mapa mental.",
      url: "evidencias/mf4/mf4-metodos-tecnicas.html"
    },
    {
      id: "ev12",
      moduleCode: "MF4",
      title: "Infográfico — Métodos e Técnicas Pedagógicas",
      description: "Infográfico produzido no âmbito do MF4.",
      url: "evidencias/mf4/mf4-infografia.png"
    },
    {
      id: "ev13",
      moduleCode: "MF4",
      title: "Mapa Mental — Métodos e Técnicas Pedagógicas",
      description: "Mapa mental produzido no âmbito do MF4.",
      url: "evidencias/mf4/mf4-mapa-mental.png"
    },
    {
      id: "ev14",
      moduleCode: "MF4",
      title: "Planificação e Protótipo de um Miniprojeto",
      description: "Planificação do miniprojeto pedagógico.",
      url: "evidencias/pdf-viewer.html?file=mf4/mf4-planificacao-miniprojeto.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev15",
      moduleCode: "MF4",
      title: "Manual de Acolhimento do Formando",
      description: "Manual de acolhimento associado ao miniprojeto.",
      url: "evidencias/pdf-viewer.html?file=mf4/mf4-manual-acolhimento-formando.pdf&back=../e-portfolio.html%23evidencias"
    },
    {
      id: "ev16",
      moduleCode: "MF5",
      title: "MF5 | A1 — Práticas de Dinamização da Simulação Pedagógica",
      description: "Práticas e materiais de dinamização da simulação pedagógica.",
      url: "evidencias/mf5/simulacoes-pedagogicas/index.html"
    },
    {
      id: "ev17",
      moduleCode: "MF5",
      title: "MF5 | A3 — Instrumento de Suporte a Simulações Pedagógicas",
      description: "Instrumento digital de apoio à observação, autoavaliação e feedback em simulações pedagógicas.",
      url: "evidencias/mf5/grelha-avaliacao-feedback/index.html"
    },
    {
      id: "ev19",
      moduleCode: "MF5",
      title: "Escolha do Instrumento a Analisar",
      description: "Análise do instrumento selecionado para observação e feedback.",
      url: "evidencias/mf5/grelha-avaliacao-feedback/analise.html"
    }
  ],

  // 8. Referências Bibliográficas e Documentais
  references: [
    {
      id: "r1",
      category: "Legisla\u00e7\u00e3o",
      citation: "Portugal. Portaria n.\u00ba 214/2011, de 30 de maio. Estabelece o regime de forma\u00e7\u00e3o e certifica\u00e7\u00e3o de compet\u00eancias pedag\u00f3gicas dos formadores."
    },
    {
      id: "r2",
      category: "Referenciais",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2022). Referencial de Forma\u00e7\u00e3o Pedag\u00f3gica Cont\u00ednua de Formadores \u2014 Formador de Formadores. 3.\u00aa edi\u00e7\u00e3o."
    },
    {
      id: "r3",
      category: "Referenciais",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2023). Referencial de Forma\u00e7\u00e3o Pedag\u00f3gica Cont\u00ednua de Formadores \u2014 Simula\u00e7\u00f5es Pedag\u00f3gicas: Acompanhamento e Avalia\u00e7\u00e3o."
    },
    {
      id: "r4",
      category: "Referenciais",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (s.d.). Regulamento da Forma\u00e7\u00e3o e Certifica\u00e7\u00e3o de Formadores."
    },
    {
      id: "r5",
      category: "Manuais",
      citation: "ANQEP \u2014 Ag\u00eancia Nacional para a Qualifica\u00e7\u00e3o e o Ensino Profissional. (s.d.). Guia de apoio ao processo de Reconhecimento, Valida\u00e7\u00e3o e Certifica\u00e7\u00e3o de Compet\u00eancias."
    },
    {
      id: "r6",
      category: "Manuais",
      citation: "ANQEP \u2014 Ag\u00eancia Nacional para a Qualifica\u00e7\u00e3o e o Ensino Profissional. (s.d.). Referencial de Compet\u00eancias-Chave para a Educa\u00e7\u00e3o e Forma\u00e7\u00e3o de Adultos."
    },
    {
      id: "r7",
      category: "Manuais",
      citation: "ANQEP \u2014 Ag\u00eancia Nacional para a Qualifica\u00e7\u00e3o e o Ensino Profissional. (s.d.). Orienta\u00e7\u00f5es para a constru\u00e7\u00e3o do portef\u00f3lio reflexivo de aprendizagens."
    },
    {
      id: "r8",
      category: "Obras",
      citation: "APDSI \u2014 Associa\u00e7\u00e3o para a Promo\u00e7\u00e3o e Desenvolvimento da Sociedade da Informa\u00e7\u00e3o. (2009). e-Portef\u00f3lios: modelos e pr\u00e1ticas."
    },
    {
      id: "r9",
      category: "Obras",
      citation: "Wenger-Trayner, E., & Wenger-Trayner, B. (2015). Introduction to communities of practice. Dispon\u00edvel em: https://www.wenger-trayner.com/introduction-to-communities-of-practice/ [acedido em maio de 2026]"
    },
    {
      id: "r10",
      category: "Instrumentos",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2026). Ficha de Percurso Profissional e de Forma\u00e7\u00e3o."
    },
    {
      id: "r11",
      category: "Instrumentos",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2026). Instrumento de autoavalia\u00e7\u00e3o \u201cSou um Profissional Reflexivo Cr\u00edtico?\u201d."
    },
    {
      id: "r12",
      category: "Instrumentos",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2026). Grelhas de avalia\u00e7\u00e3o das simula\u00e7\u00f5es pedag\u00f3gicas \u2014 CP3, CP3A e CP3B."
    },
    {
      id: "r13",
      category: "Recursos",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2026). Plataforma FAD/Moodle."
    },
    {
      id: "r14",
      category: "Recursos",
      citation: "IEFP \u2014 Instituto do Emprego e Forma\u00e7\u00e3o Profissional. (2026). Plataforma NETFORCE."
    }
  ],

  quoteText: "Quem ensina, aprende ao ensinar; e quem aprende, ensina ao aprender.",
  quoteAuthor: "Paulo Freire"
};


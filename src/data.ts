import { PortfolioData } from "./types";

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  title: "e-Portfólio",
  subtitle: "Portfólio Científico-Pedagógico • Curso de Formação Pedagógica Contínua de Formador de Formadores",
  
  // Capa Metadata
  formanda: "Amélia Cerejo Lopes",
  entidadeFormadora: "IEFP — Instituto do Emprego e Formação Profissional, I.P.",
  delegacaoRegional: "Delegação Regional do Alentejo",
  servico: "Centro de Emprego e Formação Profissional de Beja",
  curso: "Formação Pedagógica Contínua de Formador de Formadores",
  formaOrganizacao: "E-learning",
  periodoFormacao: "14 de maio de 2026 a 10 de julho de 2026",
  coordenadoraPedagogica: "Ivone Silva",
  formadores: [
    "Ana Mafalda Maia Caetano de Sales Gomes e Teixeira Pereira",
    "Joaquim Manuel Rodrigues Paulino"
  ],
  ccp: "n.º EDF 407745/2006 DL — emitido a 31 de maio de 2006",
  dataElaboracao: "Junho de 2026",
  referencialRef: "Referencial de Formação Pedagógica Contínua de Formadores — IEFP, 3.ª Edição (Janeiro 2022)",

  // 1. Apresentação Pessoal
  personalBio: "Sou formadora certificada desde 2006, tendo iniciado a minha atividade formativa após a conclusão da Formação Pedagógica Inicial de Formadores. Ao longo destes anos, desenvolvi atividade na formação de formandos em processos de desenvolvimento de competências digitais, desenvolvimento pessoal e andragogia, trabalhando com públicos diversos (ativos empregados, desempregados e jovens em formação profissional).",
  experienceBullets: [
    "Formação especializada em contexto de centros de formação do IEFP, empresas e escolas profissionais parceiras",
    "Áreas de especialização orientadas principalmente para as TIC (Tecnologias de Informação e Comunicação), soft skills e orientação profissional",
    "Acompanhamento individualizado e de grupo em processos de diagnóstico e inserção profissional ativa"
  ],
  motivationBullets: [
    "Aprofundar competências técnicas e pedagógicas estruturantes para formar futuros formadores, transmitindo não apenas conhecimentos operacionais, mas também a postura reflexiva e crítica estruturada que a profissão exige.",
    "Aceder a novas áreas de intervenção profissional de relevância estratégica, nomeadamente: participação ativa em processos de RVCC como técnica ou júri avaliador, validação de novos módulos através do NETFORCE e orientação na Formação Pedagógica Inicial.",
    "Atualização, consolidação e valorização científica permanente, ciente de que a andragogia de vanguarda requer aprendizagem ao longo da vida e inovação instrucional constante."
  ],

  // 2. Objetivos do e-Portfolio
  portfolioGoalsBullets: [
    "Documentar e refletir criticamente sobre todo o itinerário de aprendizagem percorrido ao longo do Curso de Formação de Formadores.",
    "Autoavaliar as competências adquiridas e consolidadas, reconhecendo pilares de excelência e demarcando domínios adicionais de especialização futura.",
    "Sistematizar evidências tangíveis das atividades realizadas em cada um dos módulos letivos.",
    "Projetar a atividade andragógica futura, estabelecendo um plano de ação robusto e diretrizes sólidas de desenvolvimento individual contínuo.",
    "Demonstrar a proficiência metacognitiva essencial a quem assume a responsabilidade científica de formar formadores."
  ],
  goalsQuote: "Este portfólio não é apenas um requisito formal de avaliação, mas um instrumento dinâmico de desenvolvimento profissional contínuo que pretendo alimentar e atualizar regularmente ao longo da minha carreira.",

  // 3. Reflexão Crítica sobre os Módulos
  modules: [
    {
      id: "m1",
      code: "MF1",
      title: "Diagnóstico de Necessidades e Referenciais de Competências e de Formação",
      hours: "18 Horas",
      sabia: "Antes de iniciar este módulo, já possuía conhecimentos práticos sobre a identificação de necessidades de formação, adquiridos ao longo de anos de atividade formativa. Sabia que era importante perceber o perfil dos formandos antes de planear uma ação, mas nunca tinha sistematizado esse processo de forma pedagógica, técnica e estruturada. Os conceitos de 'referencial de competências' e 'referencial de formação' eram-me familiares de forma intuitiva, mas não dominava a sua construção formal.",
      aprendi: [
        "Instrumentos de diagnóstico de necessidades de excelência: distinção rigorosa e aplicação prática de métodos qualitativos e quantitativos — observação direta estruturada, avaliação de pares/360 graus, inquéritos por entrevista de diagnóstico, focus group de competências e análise documental aprofundada.",
        "Avaliação 360 Graus e Observação Direta: a dinâmica de trabalho colaborativo permitiu compreender a fundo as suas vantagens estruturais, eventuais resistências, riscos e aplicabilidade real no alinhamento de equipas corporativas e formativas.",
        "Construção de referenciais de competências: fases operatórias de conceção, mapeamento sistemático de unidades de competências, identificação de competências transversais integradas e processos de homologação/validação científica.",
        "Perfil de formação orientado para competências emergentes: o desenvolvimento do referencial para o cenário estimulante e desafiador de 'Especialista em Promoção de Destinos no TikTok' serviu de âncora para entender como conceber referenciais para funções em mutação acelerada e as metodologias de Storytelling Visual em Vídeos Curtos.",
        "Análise rigorosa de lacunas de competências: mensurar a distância técnica entre competências em uso profissional e as competências exigidas pelo referencial de mercado, convertendo esta análise num plano de ação personalizado."
      ],
      atividades: [
        "Atividade 1 (Grupo 3 — Amélia, Elisabete, Luísa, Sílvia): Instrumentos de Diagnóstico de Necessidades de Competências e de Formação. Foco exaustivo nas metodologias de 'Observação Direta' e 'Avaliação de Pares / Avaliação 360 Graus', estruturando as vantagens, limitações institucionais e propostas de relatórios.",
        "Atividade 2 (Individual): Análise profunda de lacunas de competências e de formação profissional a partir de um caso de estudo. Elaboração de um relatório consolidado com propostas de intervenção formativa direta. (Duração aproximada: 180 minutos).",
        "Atividade 3 (Grupo 3 — Amélia, Elisabete, Luísa, Sílvia): Desenvolvimento integral do perfil de competências e plano de formação para a função emergente 'Especialista em Promoção de Destinos no TikTok' centrado no módulo de Storytelling Visual. Feedback do formador Joaquim Paulino: 'Trabalho de nível muito elevado e rigoroso do ponto de vista técnico-pedagógico.'"
      ],
      reflexao: "A jornada no MF1 alterou radicalmente a minha perspetiva sobre a iniciação de qualquer intervenção pedagógica. Percebi que o diagnóstico não é um preâmbulo administrativo dispensável, mas sim o alicerce ético-científico de toda a ação formativa. O trabalho sobre o Specialist de TikTok demonstrou-nos que os referenciais contemporâneos necessitam de ser dinâmicos, plásticos e fortemente sintonizados com as linguagens emergentes.",
      aplicacaoFutura: "Pretendo reestruturar ativamente as fichas e práticas de diagnóstico iniciais das formações que lidero, substituindo questionários meramente burocráticos por metodologias ativas de observação e mapeamento de lacunas alinhadas com o CNQ (Catálogo Nacional de Qualificações).",
      aspetosAprofundar: "Desejo realizar formação avançada em engenharia de diagnóstico de necessidades industriais e aprofundar as bases de dados e ferramentas de cruzamento de competências dinâmicas no CNQ."
    },
    {
      id: "m2",
      code: "MF2",
      title: "Conceção da Formação: Recursos Didáticos e Comunidades de Prática",
      hours: "18 Horas",
      sabia: "Já utilizava com bom desempenho ferramentas digitais comuns na criação de recursos de apoio — apresentações, pequenos vídeos didáticos, tabelas e guiões — contudo, tal acontecia de modo muito intuitivo, sem o respaldo sistemático da teoria de Design Instrucional, dos princípios cognitivos da aprendizagem multimédia ou da articulação estruturada das Comunidades de Prática.",
      aprendi: [
        "Princípios da aprendizagem multimédia de Richard Mayer: redução da carga cognitiva estranha, sinalização de informação relevante, contiguidade espacial e temporal, e importância capital da coerência para evitar sobrecarga auditiva/visual.",
        "Integração Tecnologia-Pedagogia: a convicção de que a tecnologia atua estritamente como mediadora e amplificadora do processo de formação, devendo adaptar-se escrupulosamente aos objetivos pedagógicos e características do público adulto.",
        "Teoria de Comunidades de Prática (CoP) de Etienne Wenger: estruturação baseada na triangulação vital entre Domínio (identidade partilhada), Comunidade (encontros e partilha de saberes) e Prática (repertório de conhecimento gerado).",
        "Conceitos de Envolvimento Mútuo e Repertório Partilhado: dinâmica de fomento de responsabilidades comuns, interações recorrentes de apoio mútuo e consolidação de recursos, técnicas, léxico e boas-práticas construídos em espírito cooperativo."
      ],
      atividades: [
        "Atividade 1 (Individual) — MF2 A1: Conceção de raiz e desenvolvimento de um Recurso Didático Interativo e Multimédia subordinado ao tema 'Profissão de Risco: Bombeiro'. O recurso foi desenhado com base em arquiteturas cognitivas rigorosas, detalhando riscos ocupacionais, proteção ativa e tomadas de decisão preventivas.",
        "Atividade 3 (Individual) — MF2 A3: Elaboração fundamentada de um Glossário Técnico sobre Comunidades de Prática, conceituando e aplicando com exemplos reais 'Envolvimento Mútuo' e 'Repertório Partilhado' com amparo na literatura científica de Wenger-Trayner e da APDSI.",
        "Atividade 4 (Grupo 3 — Amélia e Luísa) — MF2 A4: Caracterização abrangente do desenvolvimento de uma Comunidade de Prática. Mapeamento das três fases vitais (Potencial, Coalizão e Início Ativo), fatores cruciais de sustentabilidade, barreiras funcionais e análise de caso prático de uma CoP de emergência fundada por formadores durante a pandemia de COVID-19."
      ],
      reflexao: "Este módulo forneceu-me os óculos da ergonomia cognitiva aplicados ao material de aprendizagem. Compreendi que apresentar um recurso esteticamente atrativo mas pedagogicamente sobrecarregado diminui drasticamente a retenção. Da mesma forma, compreender a anatomia de uma Comunidade de Prática permitiu-me enxergar como o formador de formadores pode emancipar grupos para continuarem a aprender de forma autónoma pós-formação formal.",
      aplicacaoFutura: "Passarei a rever todos os meus recursos pedagógicos de acordo com os princípios de Mayer, erradicando o ruído visual e apostando em interfaces digitais limpas e intuitivas. Pretendo igualmente atuar no fomento de e-Communities duradouras entre as minhas turmas.",
      aspetosAprofundar: "Aprofundar o domínio técnico de softwares dedicados a e-learning complexo (como iSpring, Articulate Storyline e pacotes interativos em HTML5/H5P) para enriquecer o portfólio de atividades disponíveis."
    },
    {
      id: "m3",
      code: "MF3",
      title: "Dinâmica de Aprendizagem ao Longo da Vida",
      hours: "18 Horas",
      sabia: "Conhecia genericamente o papel do RVCC no sistema nacional de qualificações e sabia que o IEFP geria a certificação docente geral através da plataforma NETFORCE. Contudo, desconhecia totalmente os regulamentos específicos do RVCC profissional focado em Formadores ou o fluxo técnico necessário para validar módulos especializados.",
      aprendi: [
        "O processo especializado de RVCC Formadores: enquadramento na Portaria 214/2011, pressuposto das 300 horas letivas de formação documentadas, fases sequenciais (candidatura técnica, triagem, análise de evidências, elaboração do portfólio reflexivo e prova final diante de júri externo).",
        "Funcionamento científico e operatório da plataforma NETFORCE: metodologia para solicitação e devida justificação de novos domínios da prática pedagógica (ex: sub-módulos de Tecnologias, Andragogia Avançada, Avaliação), cruzando dados de currículo, ações práticas de campo e formação formal ou contínua.",
        "Distinção técnica entre as três tipologias de educação: Formal (estruturada, oficializado por diplomas), Não-Formal (formações pontuais, workshops, ações de desenvolvimento técnico-profissional s/ graus) e Informal (adquirida no labor quotidiano, reflexão de vida, interações).",
        "O e-Portfólio Reflexivo de Aprendizagem como instrumento de auto-avaliação metacognitiva: diversidade tipológica, metodologias de triagem de evidências e os critérios objetivos para estruturação e articulação teórica do dossiê."
      ],
      atividades: [
        "Atividade 1 (Especial) — 'Sou um Profissional Reflexivo Crítico?': Exercício introspectivo com base numa checklist técnica de autoavaliação profissional, que permitiu realçar forças (autonomia pedagógica, cooperação multidisciplinar) e traçar correções em áreas de formação contínua especializada.",
        "Atividade 3 (Geral) — Dinâmica de Aprendizagem ao Longo da Vida: Lição aplicada e debate sobre a porosidade e riqueza da integração ativa das esferas de educação formal, informal e não-formal.",
        "Atividade 4 / Portefólio (Consolidação): Redação e construção do presente e-Portfólio Reflexivo, juntamente com a Ficha oficial de Percurso Profissional e de Formação."
      ],
      reflexao: "A aprendizagem da mecânica do RVCC deu-me a certeza de que a experiência empírica acumulada é um património sagrado de conhecimento que os sistemas públicos de qualificação devem acarinhar e formalizar com elevado pendor científico. Perceber a NETFORCE não apenas como um repositório de dados burocráticos, mas sim como um portal dinâmico de acreditação da minha carreira docente foi crucial.",
      aplicacaoFutura: "Pretendo candidatar-me formalmente à intervenção como técnica ou avaliadora em equipas de RVCC no Centro de Emprego e Formação de Beja, facilitando que outros formadores trilhem este e-Portfólio com segurança técnica.",
      aspetosAprofundar: "Assegurar presença ativa em sessões de júri público de RVCC como formadora observadora para absorver a gesticulação técnica e dinâmica do painel, além de dominar os guias operacionais do IEFP."
    },
    {
      id: "m4",
      code: "MF4",
      title: "Metodologias e Estratégias Pedagógicas Avançadas",
      hours: "18 Horas",
      sabia: "Trabalhava rotineiramente com o método expositivo tradicional nas minhas aulas de formação presencial e alternava pontualmente para atividades individuais de pesquisa prática. No entanto, faltava-me um quadro estruturado de correlação entre os métodos (demonstrativo, ativo, interrogativo) e a sua articulação dinâmica baseada na aprendizagem orientada a problemas (PBL) em ambientes puramente digitais.",
      aprendi: [
        "Classificação e cruzamento inteligente de Métodos Pedagógicos (expositivo, interrogativo, demonstrativo e ativo) e as respetivas especificidades ao nível da descentralização do papel do formador em favor do formando.",
        "Metodologias Ativadoras de Ensino e Aprendizagem: implementação de dinâmicas como Aprendizagem Baseada em Projetos (Project-Based Learning - PBL), estudo de caso ramificado, encenações profissionais (role playing), gamificação instrucional e dinâmicas cognitivas online.",
        "Metodologias Colaborativas em e-Learning: estruturação de fóruns de discussão científica geradores de conhecimento crítico, co-criação síncrona em murais colaborativos, mapas mentais partilhados e portfólios peer-reviewed.",
        "Desenho e orçamentação técnica de Projetos Pedagógicos Integrados: correlação de meios curriculares, recursos materiais, recursos digitais de suporte e alinhamento com referenciais técnicos de qualidade do IEFP e DGERT."
      ],
      atividades: [
        "Atividade 1 (Individual): Planificação integrada de um Projeto Pedagógico modular, articulando calendarização híbrida, metodologias ativas específicas por bloco letivo e o roteiro detalhado de apoio instrucional síncrono/assíncrono.",
        "Atividade 2 (Fórum Co-Criativo): Debate crítico nas salas Moodle sobre a mutação da autoridade docente no digital — como mediar discussões acesas sem castrar a evolução crítica individual dos formandos docentes."
      ],
      reflexao: "A excelência didática não provém da abundância de tecnologias, mas sim do método que rege a sua cadência. Entender que o papel de quem forma formadores é criar o ambiente propício para que a dúvida brote e a discussão crítica floresça estimulou-me a desconstruir parte do meu antigo preciosismo expositivo.",
      aplicacaoFutura: "Desenhar novos guiões didáticos para as minhas turmas assentes inteiramente em metodologias de resolução de problemas do quotidiano profissional, aplicando o método ativo no mínimo em 50% de cada bloco de formação.",
      aspetosAprofundar: "Especialização em metodologias ágeis aplicadas ao desenho curricular e técnicas avançadas de facilitação de grupos de elevado rendimento profissional."
    },
    {
      id: "m5",
      code: "MF5",
      title: "Simulações Pedagógicas: Acompanhamento e Avaliação",
      hours: "18 Horas",
      sabia: "Já tinha assistido à apresentação e gravação de simulações em formações iniciais de formadores há anos, mas sob uma perspetiva quase amadora — anotando o que decorria de forma simplista, sem grelhas metódicas de análise de comportamentos docentes e sem o suporte de projetos estruturados de remediação pedagógica/melhoria contínua.",
      aprendi: [
        "Modelos de Simulações Pedagógicas aplicadas com rigor: Simulação Diagnóstica (identificação de vícios didáticos e potencial nato), Simulação Intermédia (avaliação de progresso e plasticidade) e Simulação Final integradora.",
        "Taxonomia de Comportamentos Docentes e formulação de Grelhas de Observação estruturadas: registo de postura andragógica, gestão da espacialidade síncrona, controlo de tempos letivos, eficácia das técnicas interrogativas e tratamento de objeções de formandos difíceis.",
        "Feedback Construtivo e Reflexão Compartilhada: as técnicas de visionamento individual e avaliação dialógica pós-simulação como catalisadores de mudança imediata, evitando reações defensivas baseadas em vulnerabilidades individuais.",
        "Desenho de Projetos de Melhoria Contínua individualizados: desenhar planos estruturados de reforço contendo metas claras para correção de aspetos críticos revelados no transcurso das intervenções letivas."
      ],
      atividades: [
        "Atividade 1 (Simulação Inicial): Planeamento, simulação e posterior verificação crítica de uma micro-aula estruturada. Mapeamento de pontos fortes iniciais (assertividade científica, empatia) e deteção de oportunidades de intervenção e melhoria de ritmo.",
        "Atividade 2 (Individual): Projeto de Melhoria e Acompanhamento Curricular. Elaboração do plano de tutoria ativa focado no suporte pedagógico personalizado a um formando docente com elevadas fragilidades de projeção vocal e gestão de conflitos grupais."
      ],
      reflexao: "Observar com critério científico é o ato mais desafiante e precioso do formador de formadores. Ao visionar e codificar as simulações dos colegas e o meu próprio desempenho, aprendi a analisar os detalhes que fazem uma sessão letiva passar de enfadonha a transformadora, o que me conferiu total segurança para guiar o diagnóstico e a modelação andragógica de outros profissionais.",
      aplicacaoFutura: "Pretendo orientar as provas práticas de simulação no IEFP munida destas novas tabelas e do pilar de feedback construtivo humanista, transformando o momento da prova final num ambiente enriquecedor livre de ansiedade.",
      aspetosAprofundar: "Estudar em profundidade os modelos de microrrelação de Robert Bales aplicados à interação de pequenos grupos e dinâmicas afetivas durante as sessões de formação docente cooperativa."
    }
  ],

  // 4. Autoavaliação de Competências
  competenceRows: [
    { id: "c1", name: "Formação de Formadores (Desenho / Facilitação)", antes: 2, apos: 4, evidences: "Projetos práticos desenvolvidos nos blocos MF4 e MF5" },
    { id: "c2", name: "Enquadramento Estrutural e Operacional do Sistema RVCC", antes: 1, apos: 4, evidences: "Fichas técnicas e portfólio oficial estruturado no MF3" },
    { id: "c3", name: "Validação Técnica Docente (IEFP / NETFORCE)", antes: 1, apos: 4, evidences: "Guiões práticos de acreditação do MF3" },
    { id: "c4", name: "Diagnóstico Científico de Necessidades", antes: 2, apos: 4, evidences: "Mapeamento e glossários elaborados no módulo MF1" },
    { id: "c5", name: "Arquitetura de Referenciais de Competências", antes: 2, apos: 4, evidences: "Trabalhos práticos de engenharia curricular de base (MF1)" },
    { id: "c6", name: "Design de Recursos Instrucionais Multimédia", antes: 3, apos: 5, evidences: "Recurso interativo para 'Profissão de Risco: Bombeiro' (MF2)" },
    { id: "c7", name: "Mediação e Fomento a CoPs de Formadores", antes: 2, apos: 4, evidences: "Trabalho de análise de nascimento e manutenção de CoPs (MF2)" },
    { id: "c8", name: "Implementação Científica de Modelos de Avaliação", antes: 3, apos: 4, evidences: "Atividades e avaliações de feedback sistemático formativo (Todos)" },
    { id: "c9", name: "Autoavaliação e Metacognição Crítica", antes: 3, apos: 5, evidences: "Dossiê pedagógico geral - Este e-Portfólio Reflexivo de referência" },
    { id: "c10", name: "Desenvolvimento de Interfaces Digitais de Aprendizagem", antes: 2, apos: 4, evidences: "Trabalho prático global e estruturação síncrona de recursos" }
  ],
  pontosFortes: [
    "Vasta e consolidada experiência prática como formadora profissional no terreno desde o ano de 2006, lidando com públicos de enorme diversidade sociocultural.",
    "Elevada apetência para a reflexão crítica fundamentada e flexibilidade cognitiva na identificação e correção de fragilidades andragógicas próprias.",
    "Forte facilidade de adaptação perante ambientes digitais de aprendizagem, sistemas LMS de grande escala (Moodle, Teams) e ferramentas de e-learning moderno.",
    "Proatividade comprovada no trabalho colaborativo de cariz científico, facilitando a partilha e o repertório mútuo.",
    "Comportamento ético inabalável e postura humanista pautada pelo incentivo incondicional à autonomia crítica dos formandos."
  ],
  areasDesenvolver: [
    "Falta de experiência letiva em júris formais no âmbito do RVCC Profissional (pretendo consolidar esta competência assistindo a sessões públicas).",
    "Aprofundar o repertório de técnicas de remediação andragógica perante formandos formadores seniores que apresentem considerável resistência à inovação metodológica.",
    "Desenvolver novas competências na integração produtiva de inteligência artificial generativa ética no apoio ao desenvolvimento de planos de formação e tutoria.",
    "Participação mais ativa e regular em Comunidades de Prática de formadores nacionais para estreitar as redes de repertório técnico."
  ],

  // 5. Síntese Reflexiva Global
  synthesisText1: "O Curso de Formador de Formadores representou um marco profundamente gerador de sentido no decurso da minha carreira profissional. Se em 2006 a Formação Pedagógica Inicial me conferiu as aptas ferramentas de cariz técnico para exercer a docência, este percurso agora concluído elevou a minha prática a um patamar superior: a responsabilidade ética, científica e metodológica de formar outros formadores e promover percursos de RVCC profissionais sólidos no Alentejo.",
  synthesisText2: "A fusão sistemática entre a teoria de vanguarda — seja nos preceitos cognitivos da aprendizagem multimédia de Mayer, seja na fecundidade dialógica das Comunidades de Prática de Wenger — e os desafios do mercado laboral atual dotaram-me de uma robustez pedagógica inabalável. Compreendi que o formador de excelência assume o papel de arquiteto de experiências de descoberta, abandonando o pedestal da mera transmissão de informação estática.",
  synthesisText3: "Esta jornada percorrida no seio do IEFP em Beja, sob a orientação científica de formadores de excelência e partilhada com um excecional grupo de pares reflexivos, reafirmou a minha paixão insubstituível pela educação de adultos. Sinto-me pronta para abraçar o meu novo papel, prestando um serviço público de elevando rigor técnico e empatia transformadora.",
  signatureName: "Amélia Cerejo Lopes",
  signatureRole: "Formadora de Formadores Certificada",
  signatureYear: "2026",

  // 6. Expectativas e Projetos Futuros
  goalsShortTerm: [
    "Submeter o dossiê curricular devidamente estruturado na plataforma NETFORCE para validação de novas competências docentes docentes de apoio.",
    "Integrar no prazo de 6 meses uma equipa de acompanhamento RVCC Profissional no Centro de Emprego de Beja como técnica de diagnóstico pedagógico.",
    "Concluir os ajustamentos instrucionais nos meus recursos das formações do Catálogo Nacional de Qualificações de acordo com os princípios de ergonomia cognitiva de Mayer.",
    "Facilitar sessões tutoriais iniciais para formandos com foco em metodologias ativas híbridas."
  ],
  goalsMediumTerm: [
    "Atuar ativamente na qualidade de membro de Júri de RVCC Profissional para certificação de formadores competentes.",
    "Conceber, testar e operacionalizar uma Comunidade de Prática online sintonizada com formadores das áreas de Beja e Alentejo no partilhar de repertório didático.",
    "Especializar-me em metodologias ativas direcionadas para a formação de públicos seniores altamente especializados.",
    "Desenvolver um website repositório de recursos andragógicos abertos e livres de suporte à andragogia."
  ],
  plannedTrainings: [
    "Formação especializada em Inteligência Artificial Generativa aplicada à Engenharia Curricular e Avaliação de Competências.",
    "Participação regular anual em Congressos Nacionais e Conferências de Vanguarda de Andragogia e Educação de Adultos.",
    "Curso Avançado de Auditoria de Formação e Sistemas de Garantia da Qualidade (modelos EQUAVET / DGERT)."
  ],

  // 7. Evidências das Aprendizagens
  evidences: [
    {
      id: "ev1",
      moduleCode: "MF1",
      title: "Instrumentos de Diagnóstico — Observação Direta & Avaliação 360",
      description: "Trabalho de grupo aprofundado mapeando de forma exaustiva as vantagens operativas, limitações funcionais e relatórios técnicos destas ferramentas diagnósticas."
    },
    {
      id: "ev2",
      moduleCode: "MF1",
      title: "Perfil do TikTok Destination Specialist",
      description: "Referencial de competências de vanguarda focado em Storytelling Visual em Vídeos Curtos para funções em mutação acelerada."
    },
    {
      id: "ev3",
      moduleCode: "MF2",
      title: "Recurso Multimédia 'Profissão de Risco: Bombeiro'",
      description: "Recurso didático e-learning totalmente desenhado com base nos preceitos de ergonomia cognitiva de Mayer para otimização da carga mental."
    },
    {
      id: "ev4",
      moduleCode: "MF2",
      title: "Glossário Científico sobre Comunidades de Prática",
      description: "Análise lexicográfica dos conceitos vitais de 'Envolvimento Mútuo' e 'Repertório Partilhado' defendidos por Etienne Wenger."
    },
    {
      id: "ev5",
      moduleCode: "MF3",
      title: "Este e-Portfólio Reflexivo Integrado",
      description: "Instrumento central de meta-avaliação e estruturação da identidade andragógica madura, unificando todo o percurso formativo.",
      url: "evidencias/mf3/o-formador-reflexivo/"
    },
    {
      id: "ev6",
      moduleCode: "MF3",
      title: "Ficha oficial de Percurso Profissional e de Formação",
      description: "Documentação curricular unificada ligando as aprendizagens formais, não-formais e informais consolidadas desde 2006."
    },
    {
      id: "ev7",
      moduleCode: "MF4",
      title: "Planeamento Completo de Projeto Pedagógico Híbrido",
      description: "Desenho instrucional de uma unidade curricular com cronograma de momentos síncronos e assíncronos e plano ativo de problemas de campo."
    },
    {
      id: "ev8",
      moduleCode: "MF5",
      title: "Grelhas de Análise de Comportamentos Pedagógicos",
      description: "Guião de observação e codificação objetiva de micro-aulas, postura de voz, dinamização e estratégias de remediação grupal."
    },
    {
      id: "ev9",
      moduleCode: "MF5",
      title: "Grelha de Observação Interativa e Feedback Estruturado",
      description: "Instrumento digital de apoio à observação, autoavaliação e feedback construtivo em simulações pedagógicas.",
      url: "evidencias/mf5/grelha-avaliacao-feedback/"
    }
  ],

  // 8. Referências Bibliográficas e Documentais
  references: [
    { id: "r1", category: "Legislação", citation: "Portaria n.º 214/2011, de 30 de maio. Diário da República, 1.ª série — N.º 104. Regula o Sistema Nacional de Qualificações e o processo de Reconhecimento, Validação e Certificação de Competências (RVCC)." },
    { id: "r2", category: "Referenciais", citation: "IEFP (2022). Referencial de Formação Pedagógica Contínua de Formadores — Formador de Formadores (3.ª edição). Instituto do Emprego e Formação Profissional." },
    { id: "r3", category: "Referenciais", citation: "IEFP (2023). Referencial de Formação Pedagógica Inicial de Formadores (5.ª edição). Instituto do Emprego e Formação Profissional." },
    { id: "r4", category: "Referenciais", citation: "IEFP. Regulamento da Formação e Certificação de Formadores. Instituto do Emprego e Formação Profissional." },
    { id: "r5", category: "Manuais", citation: "ANQEP. Guia de Candidatura ao RVCC Formadores. Agência Nacional para a Qualificação e o Ensino Profissional." },
    { id: "r6", category: "Manuais", citation: "ANQEP. Guia de Operacionalização dos Processos de Reconhecimento, Validação e Certificação de Competências. Agência Nacional para a Qualificação e o Ensino Profissional." },
    { id: "r7", category: "Manuais", citation: "ANQEP. Manual de Orientação ao Longo da Vida no Centro Qualifica. Agência Nacional para a Qualificação e o Ensino Profissional." },
    { id: "r8", category: "Obras", citation: "APDSI (2009). Comunidades de Prática no Espaço Digital. Associação para a Promoção e Desenvolvimento da Sociedade da Informação." },
    { id: "r9", category: "Obras", citation: "Wenger-Trayner, E., & Wenger-Trayner, B. (2015). Introduction to communities of practice. Disponível online." },
    { id: "r10", category: "Instrumentos", citation: "Ficha de Percurso Profissional e de Formação. Material de apoio técnico do Módulo 3, Curso de Formador de Formadores, IEFP." },
    { id: "r11", category: "Instrumentos", citation: "Checklist de Autoavaliação 'Sou um Formador Reflexivo?'. Material de apoio instrucional do Módulo 3, Curso de Formador de Formadores, IEFP." },
    { id: "r12", category: "Recursos", citation: "Plataforma NETFORCE — Sistema de Gestão de Formadores. IEFP. Disponível online em netforce.iefp.pt." },
    { id: "r13", category: "Recursos", citation: "Plataforma FAD/Moodle IEFP — Plataforma de Formação a Distância do IEFP. Disponível online em fad.iefp.pt." }
  ],

  // General Quote
  quoteText: "Quem ensina, aprende ao ensinar; e quem aprende, ensina ao aprender.",
  quoteAuthor: "Paulo Freire"
};

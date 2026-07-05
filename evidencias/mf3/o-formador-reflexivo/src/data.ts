import { DomainData, SmartGoal, StartedAction, ReflectiveDiaryEntry } from './types';

export const INITIAL_DOMAINS: DomainData[] = [
  {
    id: 'professional',
    name: 'Desenvolvimento Pessoal e Profissional',
    shortName: 'Excelência Profissional',
    score: 4.3,
    icon: 'Star',
    color: 'bg-deep-teal text-white',
    borderColor: 'border-deep-teal',
    description: 'Autoavaliação da dedicação ao crescimento intelectual, andragógico e ético das suas próprias metodologias de ensino.',
    subCriteria: [
      {
        id: 'prof_1',
        name: 'Atualização e Pesquisa em Novas Tecnologias',
        score: 4.5,
        description: 'Capacidade de pesquisar e adotar ferramentas digitais emergentes na dinâmica das sessões.'
      },
      {
        id: 'prof_2',
        name: 'Formação Contínua e Andragogia',
        score: 4.2,
        description: 'Participação ativa em formações especializadas sobre aprendizagem de adultos (Andragogia).'
      },
      {
        id: 'prof_3',
        name: 'Ética e Postura Pedagogicamente Coerente',
        score: 4.2,
        description: 'Manutenção de conduta irrepreensível e incentivo à inclusão e integridade intelectual.'
      }
    ]
  },
  {
    id: 'collaboration',
    name: 'Trabalho com a Equipa Pedagógica',
    shortName: 'Colaboração',
    score: 4.0,
    icon: 'Users',
    color: 'bg-primary text-white',
    borderColor: 'border-soft-teal',
    description: 'Trabalho de articulação, planeamento conjunto e partilha de boas práticas entre formadores e coordenadores.',
    subCriteria: [
      {
        id: 'col_1',
        name: 'Articulação Curricular Multidisciplinar',
        score: 4.1,
        description: 'Colaborar com outros formadores para alinhar objetivos pedagógicos e transversais.'
      },
      {
        id: 'col_2',
        name: 'Co-docência e Mentoria de Pares',
        score: 3.9,
        description: 'Disposição para abrir a sua sala à observação de pares e oferecer feedback construtivo.'
      },
      {
        id: 'col_3',
        name: 'Partilha em Comunidades de Prática',
        score: 4.0,
        description: 'Disseminação de materiais inovadores em pastas partilhadas ou fóruns institucionais.'
      }
    ]
  },
  {
    id: 'pedagogical',
    name: 'Prática Pedagógica',
    shortName: 'Ação Direta',
    score: 3.8,
    icon: 'School',
    color: 'bg-tertiary text-white',
    borderColor: 'border-slate-gray',
    description: 'Execução direta em sala de aula, implementação de dinâmicas interativas e facilitação eficaz.',
    subCriteria: [
      {
        id: 'ped_1',
        name: 'Domínio de Metodologias Ativas',
        score: 4.0,
        description: 'Capacidade de desenhar dinâmicas em que os formandos são protagonistas da aprendizagem.'
      },
      {
        id: 'ped_2',
        name: 'Diferenciação e Gestão de Ritmos',
        score: 3.7,
        description: 'Ajuste de materiais para formandos com perfis e ritmos cognitivos desiguais.'
      },
      {
        id: 'ped_3',
        name: 'Clima Relacional e Empatia',
        score: 3.7,
        description: 'Criação de um porto seguro onde o erro é acolhido como parte indispensável do processo.'
      }
    ]
  },
  {
    id: 'reflection',
    name: 'Reflexão Crítica',
    shortName: 'Foco Prioritário',
    score: 3.5,
    icon: 'Psychology',
    color: 'bg-secondary-container text-on-secondary-container',
    borderColor: 'border-muted-gold',
    description: 'Processo consciente de paragem para analisar o que correu bem ou mal, convertendo ato em conhecimento sistematizado.',
    subCriteria: [
      {
        id: 'ref_1',
        name: 'Sistematicidade do Registo Reflexivo',
        score: 3.2,
        description: 'Hábito de manter notas escritas estruturadas pós-sessão de forma contínua e disciplinada.'
      },
      {
        id: 'ref_2',
        name: 'Recolha e Análise de Evidências',
        score: 3.8,
        description: 'Utilização de dados concretos (trabalhos, métricas virtuais e feedback) para balizar a reflexão.'
      },
      {
        id: 'ref_3',
        name: 'Ajuste de Planos de Ação',
        score: 3.5,
        description: 'Velocidade e eficácia em remodelar a formação seguinte com base na reflexão prévia.'
      }
    ]
  }
];

export const INITIAL_SMART_GOALS: SmartGoal[] = [
  {
    id: 'goal_1',
    meta: 'Meta 1',
    timeframe: '3 MESES',
    title: 'Avaliação Formativa',
    description: 'Integrar de forma sistemática 3 interações de feedback por sessão de formação, utilizando ferramentas digitais para coleta de impressões em tempo real.',
    tags: ['Feedback', 'Interatividade'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjvy_0ZxraQOPtJ3UWCQI54Q2lJTFDZKsWKo37d769ui86tJ-d0Tf6lOcB3T14WSIXtICVoPlCL85Gfn82dDwb--JFAbBOShG4LiiWWC0gB8fkuaOTAzcLuoAs6XlkWXw_sXHYg5L2nK4wbSUSrQX3DwHkSGBS-n55pE1SWerE0LlCskkeCGrIpXEiznOCLvE_KR8WKvxU09eNYrZ6atjJFCXBC3viwIocr6qYPNEIQNI84Z0pyp-oXaY6Apc2McdDwLBMNfOpWYm',
    status: 'In Progress',
    tasks: [
      { id: 't1_1', text: 'Selecionar 3 ferramentas digitais (ex: Mentimeter, Kahoot, Slido)', done: true },
      { id: 't1_2', text: 'Desenhar modelos de perguntas de feedback instantâneo no início, meio e fim da sessão', done: true },
      { id: 't1_3', text: 'Aplicar experimentalmente em 2 turmas piloto', done: false },
      { id: 't1_4', text: 'Avaliar adesão técnica e clareza das respostas dos formandos', done: false }
    ]
  },
  {
    id: 'goal_2',
    meta: 'Meta 2',
    timeframe: '6 MESES',
    title: 'Diferenciação de Materiais',
    description: 'Desenvolver e aplicar versões visuais (esquemas/vídeos), escritas (manuais formatados) e práticas (guias passo-a-passo) para todos os módulos principais, garantindo inclusão.',
    tags: ['Diferenciação', 'Andragogia'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADcNafIAtbZjx9K9TRU-TzUDUEDQYqmylcNDcOVNq1kbo85G9IBYvMoX6uUMRUqhZMagO-Zmn9VScq5kewOr1XbIFDtUPuVnaGx-fA-R8BOVK6qPNK1IyQ7L1jA9u3TeWq-0dSXiifldTgggVzT_pf-S8JoFnZQ3YmEjQ7Cx08fC_v1bOaZFDVklDTWewg9Z5487CilgTjCH20hS5bJIoQ2ZplAOefF90gHGBVy5pevXYaJk27EpvyEhEW7xhGeMgeDIuI0dHP4WNG',
    status: 'Not Started',
    tasks: [
      { id: 't2_1', text: 'Auditar manuais atuais para identificar falta de infográficos ou apoios visuais', done: false },
      { id: 't2_2', text: 'Criar resumos gráficos / mapas mentais para o Módulo de Práticas Ativas', done: false },
      { id: 't2_3', text: 'Estruturar laboratórios práticos com checklists de verificação imediata', done: false },
      { id: 't2_4', text: 'Testar e aferir o impacto nos resultados finais das turmas', done: false }
    ]
  },
  {
    id: 'goal_3',
    meta: 'Meta 3',
    timeframe: '12 MESES',
    title: 'Portfólio Reflexivo',
    description: 'Consolidar um hábito de registo pedagógico consistente com o registo de pelo menos 12 reflexões de incidentes críticos estruturados (1 por mês) no portfólio pedagógico digital.',
    tags: ['Reflexão', 'Crescimento'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Z5SZiBCvWggKPI5VmQPGqn92Oz5XsLEaorpN4kuONYyE2vI12zLYlTciXTY6mWzbR_p8wsqc_7HW1ug5lRJ_iOPiwmX_6jgjq1f6q72zEx8dodt8XcVIslwyuvMUvnRwc7t-NxUlQaKorbdrd25aCOPhJfnO540IncZS6_XYcGbd_y7DbYhgJzc2Cp-Yt6n-dEuFCH8fBZ6gffqhXbHGIPHK2QohiBC-IZrFHywbMEmM9athtBwz11qL9CGSMiva2DLs8V0ZBeSo',
    status: 'In Progress',
    tasks: [
      { id: 't3_1', text: 'Definir uma estrutura repetível para registo de incidentes críticos', done: true },
      { id: 't3_2', text: 'Submeter o 1º diário reflexivo focado numa aula com menor engajamento', done: true },
      { id: 't3_3', text: 'Manter a cadência de 1 registo mensal focado em evidências práticas', done: false },
      { id: 't3_4', text: 'Fazer uma revisão semestral agregada para reavaliar a evolução do próprio índice', done: false }
    ]
  }
];

export const INITIAL_STARTED_ACTIONS: StartedAction[] = [
  {
    id: 'act_1',
    title: 'Leitura Especializada',
    description: 'Aprofundamento teórico contínuo em Metodologias Ativas e as bases da Andragogia (educação de adultos), com foco na aplicabilidade prática corporativa.',
    status: 'Em progresso • Semanal',
    icon: 'BookOpen',
    hoursSpent: 12,
    consistency: 85
  },
  {
    id: 'act_2',
    title: 'Feedback Informal',
    description: 'Recolha ativa de impressões e críticas construtivas no final de cada módulo com colegas de equipa técnica e formadores experientes.',
    status: 'Prática Diária',
    icon: 'MessageSquareShare',
    hoursSpent: 8,
    consistency: 90
  },
  {
    id: 'act_3',
    title: 'Adaptação Reativa',
    description: 'Capacidade e sensibilidade de ajustar exemplos, dinâmicas e o ritmo da fala em tempo real, baseando-se na linguagem corporal e engajamento dos formandos.',
    status: 'Ajuste Dinâmico em Sala',
    icon: 'Zap',
    hoursSpent: 15,
    consistency: 90
  }
];

export const INITIAL_DIARY_ENTRIES: ReflectiveDiaryEntry[] = [
  {
    id: 'diary_1',
    date: '2026-06-15',
    title: 'Resolução de Conflitos e Inclusão no Módulo de IA',
    content: 'Introduzi ferramentas generativas e notei grande disparidade na velocidade de uso técnica dos formandos. Em vez de apressar, ativei a mentoria de pares: formandos avançados ajudaram os recém-chegados. O ambiente gerou grande confiança e partilha.',
    tags: ['Andragogia', 'Tecnologia', 'Mentoria'],
    domainId: 'pedagogical',
    evidenceImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQRMn64EgYnaScS9iGKjc0OwWqXHlIoVIZmq9yC-dZdN-_syeVQiWQM8r9Pb4ZHoSyfl2lkCQ1o6qc2QnYAif2u15Ac7CLXYfHQGFIvt_ed-FlBV8VaWvUqlSkjJL_5Ehik6a3cVx8BMeUxU7xyo9HCawrfAf45HKD18jjPm5rB9XFHebdbS6dFn9NMvrOzfMXvDedtU3VkD1JXv0e4v0dWMT3hxlRfHJu78okWoKgGY-yZSaJ8_hTZrBIGTe5U2NarwMw9vIYlCmJ'
  },
  {
    id: 'diary_2',
    date: '2026-06-03',
    title: 'Utilização do Slido para avaliação formativa',
    content: 'Experimentei recolher as expectativas de forma anónima a meio da sessão para aferir se os ritmos de explicação estavam adequados. Descobri que 30% achavam o ritmo acelerado. Reduzi de imediato o ritmo e fiz um exercício prático suplementar. Excelente aceitação e clima positivo.',
    tags: ['Feedback', 'Interatividade'],
    domainId: 'reflection',
    evidenceImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWnMgGkgAy4E5yLe3Wd4zgtFb2L0W2xW-qBab5nX-LAqvoiipBCIlBJ13lvRpTYtRCSV9hA6V45UjORNl4TP6ZDCh12y1ZaE-GNTP1kK1ixFDBhmy3c8-GjIHPBsRHc5KQ-hkWke_STLdqUkDYFjViALxa8lmY4kOGVZW_GS1x5P1JBkVjFqbuej97DwlfMeDymlo9u8I3kmiT7hZ3vXwP2T4ZNfOUcTDcQKH5CV7dLRdVan1EIdIvwuT0PFr621RGcjMSufFbD600'
  }
];

export const REFERENCE_IMAGES = {
  journal: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5Z5SZiBCvWggKPI5VmQPGqn92Oz5XsLEaorpN4kuONYyE2vI12zLYlTciXTY6mWzbR_p8wsqc_7HW1ug5lRJ_iOPiwmX_6jgjq1f6q72zEx8dodt8XcVIslwyuvMUvnRwc7t-NxUlQaKorbdrd25aCOPhJfnO540IncZS6_XYcGbd_y7DbYhgJzc2Cp-Yt6n-dEuFCH8fBZ6gffqhXbHGIPHK2QohiBC-IZrFHywbMEmM9athtBwz11qL9CGSMiva2DLs8V0ZBeSo',
  educator: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFjvy_0ZxraQOPtJ3UWCQI54Q2lJTFDZKsWKo37d769ui86tJ-d0Tf6lOcB3T14WSIXtICVoPlCL85Gfn82dDwb--JFAbBOShG4LiiWWC0gB8fkuaOTAzcLuoAs6XlkWXw_sXHYg5L2nK4wbSUSrQX3DwHkSGBS-n55pE1SWerE0LlCskkeCGrIpXEiznOCLvE_KR8WKvxU09eNYrZ6atjJFCXBC3viwIocr6qYPNEIQNI84Z0pyp-oXaY6Apc2McdDwLBMNfOpWYm',
  materials: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADcNafIAtbZjx9K9TRU-TzUDUEDQYqmylcNDcOVNq1kbo85G9IBYvMoX6uUMRUqhZMagO-Zmn9VScq5kewOr1XbIFDtUPuVnaGx-fA-R8BOVK6qPNK1IyQ7L1jA9u3TeWq-0dSXiifldTgggVzT_pf-S8JoFnZQ3YmEjQ7Cx08fC_v1bOaZFDVklDTWewg9Z5487CilgTjCH20hS5bJIoQ2ZplAOefF90gHGBVy5pevXYaJk27EpvyEhEW7xhGeMgeDIuI0dHP4WNG',
  evidence: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQRMn64EgYnaScS9iGKjc0OwWqXHlIoVIZmq9yC-dZdN-_syeVQiWQM8r9Pb4ZHoSyfl2lkCQ1o6qc2QnYAif2u15Ac7CLXYfHQGFIvt_ed-FlBV8VaWvUqlSkjJL_5Ehik6a3cVx8BMeUxU7xyo9HCawrfAf45HKD18jjPm5rB9XFHebdbS6dFn9NMvrOzfMXvDedtU3VkD1JXv0e4v0dWMT3hxlRfHJu78okWoKgGY-yZSaJ8_hTZrBIGTe5U2NarwMw9vIYlCmJ',
  propisito: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWnMgGkgAy4E5yLe3Wd4zgtFb2L0W2xW-qBab5nX-LAqvoiipBCIlBJ13lvRpTYtRCSV9hA6V45UjORNl4TP6ZDCh12y1ZaE-GNTP1kK1ixFDBhmy3c8-GjIHPBsRHc5KQ-hkWke_STLdqUkDYFjViALxa8lmY4kOGVZW_GS1x5P1JBkVjFqbuej97DwlfMeDymlo9u8I3kmiT7hZ3vXwP2T4ZNfOUcTDcQKH5CV7dLRdVan1EIdIvwuT0PFr621RGcjMSufFbD600',
  backdrop: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGxIybaPylybFBE_zys955VyLOh9p-HRResLg-KsQPNL7NCfdTReYSlSso_mh0pqr9b2090Z-ev2d0Gcnl_SWABWQlicS-DH7P_cd2VZ-RB0n4Ctl3DFRA-e_INTTqjuqBcaoIjtU6D_oXzWXzrOqsAYhrJ2xx-f_zUJ0B_SdLS6M42deSBGzxjrLNYbQlqZWDKPJ2ehnlvVGHjWgSfreYK2vgVAI66kWi0NluQyASTAgENLjyo6GmjBfROevBK_hTn7266c5bMUyO'
};

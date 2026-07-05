/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Structured data representing a single Module Reflection with the newly demanded subsections
export interface ModuleDetail {
  id: string; // m1, m2, m3, m4, m5
  code: string; // MF1, MF2, MF3, etc.
  title: string;
  hours: string;
  sabia: string; // O QUE JÁ SABIA
  aprendi: string[]; // O QUE APRENDI
  atividades: string[]; // ATIVIDADES REALIZADAS
  reflexao: string; // REFLEXÃO CRÍTICA
  aplicacaoFutura: string; 
  aspetosAprofundar: string;
}

// Comparison row for Autoavaliação table
export interface CompetenceRow {
  id: string;
  name: string;
  antes: number; // 1-5 stars
  apos: number; // 1-5 stars
  evidences: string;
}

// Reference representation
export interface BibReference {
  id: string;
  category: "Legislação" | "Referenciais" | "Manuais" | "Obras" | "Instrumentos" | "Recursos";
  citation: string; // Full standard text citation
}

// Portfolio Structure conforming directly to the user's document
export interface PortfolioData {
  title: string;
  subtitle: string;
  
  // Capa Metadata
  formanda: string;
  entidadeFormadora: string;
  delegacaoRegional: string;
  servico: string;
  curso: string;
  formaOrganizacao: string;
  periodoFormacao: string;
  coordenadoraPedagogica: string;
  formadores: string[];
  ccp: string;
  dataElaboracao: string;
  referencialRef: string;

  // 1. Apresentação Pessoal
  personalBio: string;
  experienceBullets: string[];
  motivationBullets: string[];

  // 2. Objetivos do e-Portfolio
  portfolioGoalsBullets: string[];
  goalsQuote: string;

  // 3. Reflexão Crítica sobre os Módulos
  modules: ModuleDetail[];

  // 4. Autoavaliação de Competências
  competenceRows: CompetenceRow[];
  pontosFortes: string[];
  areasDesenvolver: string[];

  // 5. Síntese Reflexiva Global
  synthesisText1: string; // Drop cap paragraph
  synthesisText2: string;
  synthesisText3: string;
  signatureName: string;
  signatureRole: string;
  signatureYear: string;

  // 6. Expectativas e Projetos Futuros
  goalsShortTerm: string[];
  goalsMediumTerm: string[];
  plannedTrainings: string[];

  // 7. Evidências das Aprendizagens
  evidences: {
    id: string;
    moduleCode: string;
    title: string;
    description: string;
    url?: string;
  }[];

  // 8. Referências Bibliográficas e Documentais
  references: BibReference[];

  // General Quote
  quoteText: string;
  quoteAuthor: string;
}

export interface TeacherMessage {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  content: string;
  date: string;
}

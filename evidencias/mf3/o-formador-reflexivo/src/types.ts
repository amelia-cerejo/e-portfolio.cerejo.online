/**
 * Types for O Formador Reflexivo
 */

export interface SubCriterion {
  id: string;
  name: string;
  score: number; // 0.0 to 5.0
  description: string;
}

export interface DomainData {
  id: 'professional' | 'collaboration' | 'pedagogical' | 'reflection';
  name: string;
  shortName: string;
  score: number; // calculated from sub-criteria
  icon: string; // lucide icon name
  color: string; // colors for theme integration
  borderColor: string;
  description: string;
  subCriteria: SubCriterion[];
}

export interface SmartGoal {
  id: string;
  meta: string; // e.g., "Meta 1"
  timeframe: string; // e.g., "3 MESES"
  title: string;
  description: string;
  tags: string[];
  image: string;
  status: 'Not Started' | 'In Progress' | 'Completed';
  tasks: { id: string; text: string; done: boolean }[];
}

export interface StartedAction {
  id: string;
  title: string;
  description: string;
  status: string;
  icon: string;
  hoursSpent?: number;
  consistency: number; // 0 to 100 percentage
}

export interface ReflectiveDiaryEntry {
  id: string;
  date: string;
  title: string;
  content: string;
  tags: string[];
  evidenceImage?: string;
  domainId?: string;
}

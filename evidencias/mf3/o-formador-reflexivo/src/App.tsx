import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { DiagnosticoView } from './components/DiagnosticoView';
import { AnaliseView } from './components/AnaliseView';
import { PlanoView } from './components/PlanoView';
import { PerfilView } from './components/PerfilView';

import { 
  INITIAL_DOMAINS, 
  INITIAL_SMART_GOALS, 
  INITIAL_STARTED_ACTIONS, 
  INITIAL_DIARY_ENTRIES,
  REFERENCE_IMAGES
} from './data';
import { DomainData, SmartGoal, StartedAction, ReflectiveDiaryEntry } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  
  // High-fidelity state hubs
  const [domains, setDomains] = useState<DomainData[]>(INITIAL_DOMAINS);
  const [smartGoals, setSmartGoals] = useState<SmartGoal[]>(INITIAL_SMART_GOALS);
  const [startedActions, setStartedActions] = useState<StartedAction[]>(INITIAL_STARTED_ACTIONS);
  const [diaryEntries, setDiaryEntries] = useState<ReflectiveDiaryEntry[]>(INITIAL_DIARY_ENTRIES);

  // Callback to inject recommended AI smart goals dynamically
  const handleSetSuggestedSmartGoals = (suggestedTasks: string[]) => {
    if (!suggestedTasks || suggestedTasks.length === 0) return;

    // Create a new unique goal suggested by the AI Coach
    const customGoalId = `goal_ai_${Date.now()}`;
    const newAiGoal: SmartGoal = {
      id: customGoalId,
      meta: 'Recomendação IA',
      timeframe: 'IMEDIATO',
      title: 'Plano Direcionado de Ação',
      description: 'Metas sugeridas de forma personalizada a partir das suas pontuações e relatos mais baixos detectados.',
      tags: ['Recomendado', 'Inteligência Artificial'],
      image: REFERENCE_IMAGES.evidence,
      status: 'In Progress',
      tasks: suggestedTasks.map((taskText, idx) => ({
        id: `ai_task_${Date.now()}_${idx}`,
        text: taskText,
        done: false
      }))
    };

    // Check if we already appended an AI goal to avoid duplicate piling
    const filteredGoals = smartGoals.filter(goal => !goal.id.startsWith('goal_ai_'));
    setSmartGoals([...filteredGoals, newAiGoal]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView setCurrentTab={setCurrentTab} />
        )}
        
        {currentTab === 'diagnostico' && (
          <DiagnosticoView 
            domains={domains} 
            setDomains={setDomains} 
            diaryEntries={diaryEntries}
            setCurrentTab={setCurrentTab}
            setSmartGoalsStatus={handleSetSuggestedSmartGoals}
          />
        )}

        {currentTab === 'analise' && (
          <AnaliseView 
            domains={domains} 
            diaryEntries={diaryEntries} 
            setDiaryEntries={setDiaryEntries}
            setCurrentTab={setCurrentTab}
          />
        )}

        {currentTab === 'plano' && (
          <PlanoView 
            smartGoals={smartGoals} 
            setSmartGoals={setSmartGoals}
            startedActions={startedActions}
            setStartedActions={setStartedActions}
          />
        )}

        {currentTab === 'perfil' && (
          <PerfilView 
            domains={domains} 
            smartGoals={smartGoals} 
            diaryEntries={diaryEntries} 
          />
        )}
      </main>

      <Footer setCurrentTab={setCurrentTab} />
    </div>
  );
}

import { useState, FormEvent } from 'react';
import { BookOpen, Award, CheckSquare, Square, ChevronDown, ChevronUp, PlusCircle, Sparkles, MessageSquare, Zap, Activity } from 'lucide-react';
import { SmartGoal, StartedAction } from '../types';
import { REFERENCE_IMAGES } from '../data';

interface PlanoViewProps {
  smartGoals: SmartGoal[];
  setSmartGoals: (goals: SmartGoal[]) => void;
  startedActions: StartedAction[];
  setStartedActions: (actions: StartedAction[]) => void;
}

export function PlanoView({
  smartGoals,
  setSmartGoals,
  startedActions,
  setStartedActions
}: PlanoViewProps) {
  
  // Custom states for interactive additions
  const [activeGoalId, setActiveGoalId] = useState<string | null>(null);
  const [newTimeframe, setNewTimeframe] = useState('18 MESES');
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDescription] = useState('');
  const [newTags, setNewTags] = useState('Inovação, Metodologia');
  const [newImg, setNewImage] = useState(REFERENCE_IMAGES.educator);
  const [newTaskListString, setNewTaskListString] = useState('Estudar 1 nova andragogia, Submeter à coordenação');
  const [showConfig, setShowConfig] = useState(false);

  // Status mapping colors
  const statusColors = {
    'Not Started': 'bg-stone-100 text-stone-600 border-stone-200',
    'In Progress': 'bg-amber-100 text-amber-700 border-amber-200',
    'Completed': 'bg-emerald-100 text-emerald-700 border-emerald-200'
  };

  // Toggle tasks check
  const handleToggleTask = (goalId: string, taskId: string) => {
    const updated = smartGoals.map(goal => {
      if (goal.id !== goalId) return goal;
      const updatedTasks = goal.tasks.map(task => {
        if (task.id !== taskId) return task;
        return { ...task, done: !task.done };
      });
      
      // Auto upgrade status if all tasks are done, or mark in progress
      const allDone = updatedTasks.every(t => t.done);
      const someDone = updatedTasks.some(t => t.done);
      let nextStatus = goal.status;
      if (allDone) {
        nextStatus = 'Completed';
      } else if (someDone) {
        nextStatus = 'In Progress';
      }

      return { ...goal, tasks: updatedTasks, status: nextStatus };
    });
    setSmartGoals(updated);
  };

  // Toggle goal status manually
  const handleChangeStatus = (goalId: string, nextStatus: 'Not Started' | 'In Progress' | 'Completed') => {
    setSmartGoals(smartGoals.map(goal => 
      goal.id === goalId ? { ...goal, status: nextStatus } : goal
    ));
  };

  // Check off or adjust consistency of began actions
  const handleUpdateConsistency = (actionId: string, nextValue: number) => {
    setStartedActions(startedActions.map(action => 
      action.id === actionId ? { ...action, consistency: nextValue } : action
    ));
  };

  // Check off hourly commitments
  const handleAddHours = (actionId: string) => {
    setStartedActions(startedActions.map(action => {
      if (action.id !== actionId) return action;
      return { ...action, hoursSpent: (action.hoursSpent || 0) + 1 };
    }));
  };

  // Create customized goal timeframe node
  const handleCreateCustomGoal = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) return;

    const taskLines = newTaskListString
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const tasksMapped = taskLines.map((taskText, idx) => ({
      id: `task_custom_${Date.now()}_${idx}`,
      text: taskText,
      done: false
    }));

    const nextId = `goal_custom_${Date.now()}`;
    const newGoal: SmartGoal = {
      id: nextId,
      meta: `Meta ${smartGoals.length + 1}`,
      timeframe: newTimeframe,
      title: newTitle,
      description: newDesc,
      tags: newTags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      image: newImg,
      status: 'In Progress',
      tasks: tasksMapped
    };

    setSmartGoals([...smartGoals, newGoal]);
    
    // Clear forms
    setNewTitle('');
    setNewDescription('');
    setShowConfig(false);
  };

  // Calculate consistency total average from started actions list
  const generalConsistencyAverage = Math.round(
    startedActions.reduce((acc, act) => acc + act.consistency, 0) / startedActions.length
  );

  return (
    <div className="animate-fade-in-up font-sans text-on-surface bg-surface min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      
      {/* Page Header */}
      <header className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <span className="font-sans text-xs text-muted-gold uppercase tracking-widest font-bold block">
              Plano de Evolução
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-deep-teal leading-tight">
              Metas SMART e Ações Ativas
            </h1>
            <p className="font-sans text-stone-500 text-sm md:text-base leading-relaxed">
              Um roteiro estruturado para a excelência pedagógica, focado na prática reflexiva e no desenvolvimento contínuo de competências andragógicas.
            </p>
          </div>
          
          <div className="shrink-0 text-center md:text-right">
            <button 
              onClick={() => setShowConfig(!showConfig)}
              className="bg-primary hover:bg-primary-container text-white px-5 py-3 rounded-xs text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all shadow-xs select-none mx-auto md:ml-auto"
            >
              <PlusCircle size={14} className="text-secondary-fixed text-white" />
              <span>Adicionar Meta SMART</span>
            </button>
          </div>
        </div>

        <div className="h-0.5 w-full bg-grid-line relative mt-4 select-none">
          <div className="absolute left-0 top-0 h-full w-4/5 bg-deep-teal"></div>
        </div>
      </header>

      {/* Goal creation expandable panel */}
      {showConfig && (
        <form onSubmit={handleCreateCustomGoal} className="bg-white p-6 border border-[#bdc9c8] rounded-xs shadow-md space-y-4 max-w-3xl animate-fade-in-up">
          <div className="flex justify-between items-center border-b border-grid-line pb-3">
            <h4 className="font-serif font-bold text-md text-deep-teal flex items-center gap-2">
              <Sparkles size={16} className="text-muted-gold" />
              <span>Nova Meta SMART Personalizada</span>
            </h4>
            <button 
              type="button" 
              onClick={() => setShowConfig(false)}
              className="text-stone-400 hover:text-stone-600 font-bold select-none cursor-pointer"
            >
              X
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label htmlFor="goal-title" className="text-xs font-bold text-stone-600 block">Título da Meta</label>
              <input 
                id="goal-title"
                type="text" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Exemplo: Inovação em Vídeo"
                className="w-full text-xs p-3 border border-grid-line outline-none"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="goal-frame" className="text-xs font-bold text-stone-600 block">Prazo de Resolução</label>
              <input 
                id="goal-frame"
                type="text" 
                value={newTimeframe}
                onChange={(e) => setNewTimeframe(e.target.value)}
                placeholder="Exemplo: 18 MESES"
                className="w-full text-xs p-3 border border-grid-line outline-none"
                required
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="goal-tags" className="text-xs font-bold text-stone-600 block">Tags (separador-vírgula)</label>
              <input 
                id="goal-tags"
                type="text" 
                value={newTags}
                onChange={(e) => setNewTags(e.target.value)}
                className="w-full text-xs p-3 border border-grid-line outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="goal-desc" className="text-xs font-bold text-stone-600 block">Prosa Descritiva Completa</label>
            <textarea 
              id="goal-desc"
              rows={2}
              value={newDesc}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Descreva a meta de forma específica, mensurável, atingível, relevante e temporal..."
              className="w-full text-xs p-3 border border-grid-line outline-none"
              required
            ></textarea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="goal-checklist" className="text-xs font-bold text-stone-600 block">Checklist de Tarefas (separar por vírgula)</label>
              <input 
                id="goal-checklist"
                type="text" 
                value={newTaskListString}
                onChange={(e) => setNewTaskListString(e.target.value)}
                placeholder="Ex: Ler manual Knowles, Experimentar Slido na Aula"
                className="w-full text-xs p-3 border border-grid-line outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="goal-img" className="text-xs font-bold text-stone-600 block">Imagem Representativa</label>
              <select 
                id="goal-img"
                value={newImg}
                onChange={(e) => setNewImage(e.target.value)}
                className="w-full text-xs p-3 border border-grid-line outline-none bg-white"
              >
                <option value={REFERENCE_IMAGES.educator}>Formador Interagindo com Tablet</option>
                <option value={REFERENCE_IMAGES.materials}>Diferenciação de Manuais em Espaço de Trabalho</option>
                <option value={REFERENCE_IMAGES.journal}>Diário de Couro Intelectual</option>
              </select>
            </div>
          </div>

          <div className="text-right pt-2">
            <button 
              type="submit"
              className="bg-deep-teal hover:bg-primary text-white px-6 py-2.5 text-xs font-bold uppercase rounded-sm cursor-pointer select-none"
            >
              Criar e Registar Meta
            </button>
          </div>
        </form>
      )}

      {/* Main dual column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left timeline section (7 cols) */}
        <section className="lg:col-span-12 xl:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
            <Activity className="text-deep-teal" size={20} />
            <h2 className="font-sans font-bold text-xs text-deep-teal uppercase tracking-widest">
              Timeline de Metas SMART
            </h2>
          </div>

          {/* Timeline Node Block */}
          <div className="relative border-l border-[#bdc9c8] pl-6 md:pl-10 ml-3 space-y-12">
            {smartGoals.map((goal, idx) => {
              const isExpanded = activeGoalId === goal.id;
              const totalTasksCount = goal.tasks.length;
              const completedTasksCount = goal.tasks.filter(t => t.done).length;
              const ratioFinished = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;

              return (
                <div key={goal.id} className="relative animate-fade-in-up">
                  
                  {/* Timeline bullet handle */}
                  <span className="absolute -left-12.5 md:-left-16 top-1.5 w-12 h-12 bg-deep-teal text-white border-4 border-surface rounded-full flex items-center justify-center text-xs font-serif font-bold shadow-xs select-none">
                    0{idx + 1}
                  </span>

                  {/* Goal card frame structure */}
                  <div className="bg-white border border-[#eceeee] p-6 rounded-sm shadow-xs space-y-4 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap justify-between items-center gap-2 border-b border-grid-line pb-3">
                      <div>
                        <span className="bg-primary text-white text-[9px] font-sans font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full mr-2 select-none">
                          {goal.meta}
                        </span>
                        <span className="font-sans font-semibold text-xs text-muted-gold tracking-wider uppercase font-mono">
                          {goal.timeframe}
                        </span>
                      </div>
                      
                      {/* State Dropdown pill select */}
                      <select 
                        aria-label="Status do plano"
                        value={goal.status}
                        onChange={(e) => handleChangeStatus(goal.id, e.target.value as any)}
                        className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-sm border outline-none bg-white cursor-pointer ${statusColors[goal.status]}`}
                      >
                        <option value="Not Started" className="bg-stone-50 text-stone-700">Não Iniciado</option>
                        <option value="In Progress" className="bg-amber-50 text-amber-700">Em Progresso</option>
                        <option value="Completed" className="bg-emerald-50 text-emerald-700">Concluído</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-8 space-y-3">
                        <h3 className="font-serif text-lg font-bold text-deep-teal">{goal.title}</h3>
                        <p className="font-sans text-xs text-stone-600 leading-relaxed">
                          {goal.description}
                        </p>
                        
                        <div className="flex gap-2 flex-wrap pt-1 select-none">
                          {goal.tags.map((tag, i) => (
                            <span key={i} className="bg-surface-container text-on-surface-variant text-[10px] px-2.5 py-0.5 rounded-xs font-semibold">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Side preview image */}
                      <div className="md:col-span-4 self-center">
                        <div className="aspect-video w-full rounded-sm overflow-hidden h-24 border border-grid-line bg-stone-50 select-none">
                          <img 
                            referrerPolicy="no-referrer"
                            src={goal.image || REFERENCE_IMAGES.journal} 
                            alt={goal.title} 
                            className="w-full h-full object-cover grayscale brightness-95"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Progress details line indicator */}
                    <div className="space-y-1.5 border-t border-grid-line pt-3 text-xs text-stone-500">
                      <div className="flex justify-between items-center text-[10px] uppercase font-semibold">
                        <span>Progresso Integrado: {completedTasksCount} de {totalTasksCount} metas</span>
                        <span>{Math.round(ratioFinished)}%</span>
                      </div>
                      <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className="bg-deep-teal h-full transition-all duration-500" 
                          style={{ width: `${ratioFinished}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Checklist details toggle block */}
                    <div className="pt-1">
                      <button 
                        onClick={() => setActiveGoalId(isExpanded ? null : goal.id)}
                        className="text-[10px] uppercase tracking-wider font-bold text-primary flex items-center gap-1 hover:underline cursor-pointer select-none"
                      >
                        {isExpanded ? (
                          <>
                            <ChevronUp size={12} />
                            <span>Ocultar Checklist das Tarefas</span>
                          </>
                        ) : (
                          <>
                            <ChevronDown size={12} />
                            <span>Gerir {totalTasksCount} Tarefas Internas</span>
                          </>
                        )}
                      </button>

                      {isExpanded && (
                        <div className="mt-4 p-4 border border-grid-line bg-[#fbfcfc] rounded-xs space-y-2.5 animate-fade-in-up">
                          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Checklist de Execução SMART:</span>
                          {goal.tasks.map((task) => (
                            <div 
                              key={task.id}
                              onClick={() => handleToggleTask(goal.id, task.id)}
                              className="flex items-start gap-3 cursor-pointer group text-xs text-stone-600 hover:text-deep-teal transition-colors"
                            >
                              <div className="shrink-0 mt-0.5 select-none">
                                {task.done ? (
                                  <CheckSquare size={14} className="text-deep-teal fill-soft-teal/30" />
                                ) : (
                                  <Square size={14} className="text-stone-300 group-hover:text-deep-teal" />
                                )}
                              </div>
                              <span className={`leading-tight ${task.done ? 'line-through text-stone-400' : ''}`}>
                                {task.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </section>

        {/* Right side bento box - started practices (5 cols) */}
        <section className="lg:col-span-12 xl:col-span-5 space-y-8">
          <div className="flex items-center gap-3">
            <Award className="text-[#A07830]" size={20} />
            <h2 className="font-sans font-bold text-xs text-deep-teal uppercase tracking-widest">
              Ações Já Iniciadas
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
            {startedActions.map((action) => (
              <div 
                key={action.id}
                className="bg-white border border-[#eceeee] p-6 rounded-sm shadow-xs space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start border-b border-grid-line pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="p-2 bg-secondary-container/30 text-muted-gold rounded-xs">
                      {action.icon === 'BookOpen' && <BookOpen size={16} />}
                      {action.icon === 'MessageSquareShare' && <MessageSquare size={16} />}
                      {action.icon === 'Zap' && <Zap size={16} />}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-deep-teal leading-tight">{action.title}</h4>
                  </div>
                  <span className="bg-primary-container/10 border border-primary-container/20 text-[#1a7a7a] text-[9px] font-sans font-bold px-2 py-0.5 rounded-full select-none">
                    Ativa
                  </span>
                </div>

                <p className="font-sans text-xs text-stone-600 leading-relaxed">
                  {action.description}
                </p>

                {/* Consistency tracker interactive bar */}
                <div className="space-y-2 pt-2">
                  <div className="flex justify-between items-center text-[10px] uppercase font-bold text-[#A07830]">
                    <span>Consistência de Execução</span>
                    <span>{action.consistency}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden mb-1">
                    <div 
                      className="bg-muted-gold h-full transition-all duration-500" 
                      style={{ width: `${action.consistency}%` }}
                    ></div>
                  </div>
                  <input 
                    aria-label="Controle consistência"
                    type="range"
                    min="50"
                    max="100"
                    step="5"
                    value={action.consistency}
                    onChange={(e) => handleUpdateConsistency(action.id, parseInt(e.target.value))}
                    className="w-full h-1 bg-stone-100 accent-muted-gold rounded-lg cursor-pointer"
                  />
                </div>

                {/* Hour logs checklist */}
                <div className="pt-2 flex justify-between items-center text-xs">
                  <div className="text-stone-400 font-sans text-[11px]">
                    Tempo focado: <strong className="text-stone-700">{action.hoursSpent || 0} horas</strong>
                  </div>
                  <button 
                    onClick={() => handleAddHours(action.id)}
                    className="text-[10px] font-sans font-bold uppercase tracking-wider text-primary border border-primary/30 px-3 py-1 rounded-sm hover:bg-surface-container cursor-pointer select-none active:scale-95 transition-all"
                  >
                    +1 Hora Ativa
                  </button>
                </div>
              </div>
            ))}

            {/* General progress banner inside began actions list */}
            <div className="bg-secondary-container p-6 rounded-sm space-y-2 border-l-4 border-muted-gold select-none">
              <span className="text-[10px] font-sans uppercase tracking-widest font-black text-on-secondary-container">Métrica Global de Consistência:</span>
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-serif text-3xl font-black text-on-secondary-container">{generalConsistencyAverage}%</span>
                <span className="font-sans text-stone-500 font-bold uppercase text-[9px] tracking-wider">Metodologia Ativa</span>
              </div>
              <p className="text-[11px] text-on-secondary-container leading-relaxed">
                Reflete a estabilidade sistemática das ações em sala de aula de acordo com os padrões andragógicos internacionais.
              </p>
            </div>
          </div>

        </section>

      </div>

      {/* Quote citation footer matching screen 1 image bottom element strictly */}
      <footer className="pt-8 border-t border-grid-line">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Award className="text-deep-teal mx-auto scale-110" size={32} />
          <p className="font-serif text-lg text-on-surface italic leading-relaxed max-w-2xl mx-auto">
            "A excelência não é um destino final, mas um processo contínuo de refinamento. Cada meta alcançada é apenas a base para o próximo ciclo de crescimento e descoberta."
          </p>
          <div className="mt-stack-md w-12 h-1 bg-[#A07830] mx-auto opacity-50"></div>
        </div>
      </footer>

    </div>
  );
}

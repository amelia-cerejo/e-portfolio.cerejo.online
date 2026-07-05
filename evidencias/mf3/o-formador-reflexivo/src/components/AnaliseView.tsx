import { useState, FormEvent } from 'react';
import { Shield, TrendingUp, Sparkles, Clock, ArrowRight, Trash2, CheckCircle } from 'lucide-react';
import { DomainData, ReflectiveDiaryEntry } from '../types';
import { REFERENCE_IMAGES } from '../data';

interface AnaliseViewProps {
  domains: DomainData[];
  diaryEntries: ReflectiveDiaryEntry[];
  setDiaryEntries: (entries: ReflectiveDiaryEntry[]) => void;
  setCurrentTab: (tab: string) => void;
}

export function AnaliseView({ 
  domains, 
  diaryEntries, 
  setDiaryEntries, 
  setCurrentTab 
}: AnaliseViewProps) {
  
  // Custom interactive State for Adding New Diary Entries
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newTags, setNewTags] = useState('');
  const [newEvidenceImage, setNewEvidenceImage] = useState(REFERENCE_IMAGES.journal);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  // Derive active percentages closely matching the screenshot (scores scale 0.0 to 5.0)
  // Let's grab specific subCriteria scores to lock in values perfectly matching the 45%, 30%, 60% visuals initially!
  const difPedScore = domains.find(d => d.id === 'pedagogical')?.subCriteria.find(s => s.id === 'ped_2')?.score || 3.7;
  const difPercentage = Math.round((difPedScore / 5) * 100);

  const avalFormScore = domains.find(d => d.id === 'reflection')?.subCriteria.find(s => s.id === 'ref_2')?.score || 3.8;
  const avalPercentage = Math.round((avalFormScore / 5) * 100);

  const regRefScore = domains.find(d => d.id === 'reflection')?.subCriteria.find(s => s.id === 'ref_1')?.score || 3.2;
  const regPercentage = Math.round((regRefScore / 5) * 100);

  // Handle Form Submission of custom diagnostic diary log
  const handleAddDiaryEntry = (e: FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    const parsedTags = newTags
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const entry: ReflectiveDiaryEntry = {
      id: `diary_user_${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      title: newTitle,
      content: newContent,
      tags: parsedTags.length > 0 ? parsedTags : ['Reflexão Extra'],
      evidenceImage: newEvidenceImage,
      domainId: 'reflection'
    };

    setDiaryEntries([entry, ...diaryEntries]);
    
    // Reset Form fields
    setNewTitle('');
    setNewContent('');
    setNewTags('');
    
    // Toast notification feedback
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  // Handle Delete diary log
  const handleDeleteDiaryEntry = (id: string) => {
    setDiaryEntries(diaryEntries.filter(entry => entry.id !== id));
  };

  const handlePrintDraft = () => {
    window.print();
  };

  return (
    <div className="animate-fade-in-up font-sans text-on-surface bg-surface min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      
      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="fixed top-24 right-6 z-50 bg-primary text-white py-3 px-5 rounded-sm shadow-xl flex items-center gap-2 text-xs font-bold animate-pulse font-sans">
          <CheckCircle size={14} className="text-secondary-fixed" />
          <span>Registo Reflexivo Adicionado ao Portfólio Digital!</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <span className="font-sans text-xs text-muted-gold uppercase tracking-widest font-bold block">
              Portfólio Pedagógico
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-deep-teal leading-tight">
              Análise Crítica e Evidências
            </h1>
            <p className="font-sans text-stone-500 text-sm md:text-base leading-relaxed">
              Uma síntese reflexiva sobre as competências consolidadas e as fronteiras de crescimento profissional no contexto da formação contemporânea.
            </p>
          </div>
          
          <div className="hidden md:flex flex-col items-end shrink-0">
            <div className="flex gap-2 mb-2 select-none">
              <span className="w-2.5 h-2.5 bg-deep-teal rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-muted-gold rounded-full"></span>
              <span className="w-2.5 h-2.5 bg-soft-teal rounded-full"></span>
            </div>
            <p className="font-sans text-[11px] font-bold text-stone-400">
              Ciclo de Reflexão 2026.1
            </p>
          </div>
        </div>

        <div className="h-0.5 w-full bg-grid-line relative mt-4 select-none">
          <div className="absolute left-0 top-0 h-full w-2/5 bg-deep-teal"></div>
        </div>
      </section>

      {/* Main Analysis Bento Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left columns - Strengths (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="text-deep-teal" size={20} />
            <h2 className="font-sans font-bold text-xs text-deep-teal uppercase tracking-widest">
              Pontos de Forte Desempenho
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strength Card 1 */}
            <div className="bg-white border border-soft-teal border-opacity-30 p-6 rounded-sm shadow-xs space-y-4">
              <div className="flex justify-between items-start">
                <span className="bg-primary/10 text-primary border border-primary/20 p-2 text-xs font-serif font-bold rounded-xs select-none">
                  Autenticidade
                </span>
                <span className="bg-primary text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Consolidado
                </span>
              </div>
              <h3 className="font-serif text-md font-bold text-deep-teal">Autenticidade Pedagógica</h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Capacidade de estabelecer relações de proximidade e confiança mútua duradoura, facilitando um clima de aprendizagem psicologicamente seguro.
              </p>
            </div>

            {/* Strength Card 2 */}
            <div className="bg-white border border-soft-teal border-opacity-30 p-6 rounded-sm shadow-xs space-y-4">
              <div className="flex justify-between items-start">
                <span className="bg-primary/10 text-primary border border-primary/20 p-2 text-xs font-serif font-bold rounded-xs select-none">
                  Inovação
                </span>
                <span className="bg-primary text-white text-[9px] font-sans font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                  Ativo
                </span>
              </div>
              <h3 className="font-serif text-md font-bold text-deep-teal">Atualização Profissional</h3>
              <p className="font-sans text-xs text-stone-600 leading-relaxed">
                Acompanhamento ágil de tendências em TIC e Inteligência Artificial generativa, incorporando novas ferramentas digitais de forma ética.
              </p>
            </div>

            {/* Strength Card 3 (Wide card spanning all cols) */}
            <div className="md:col-span-2 bg-deep-teal text-white p-6 rounded-sm shadow-xs flex flex-col sm:flex-row gap-6 items-center">
              <div className="shrink-0 bg-white/10 p-4 rounded-full border border-white/10 select-none">
                <Shield size={32} className="text-soft-teal" />
              </div>
              <div>
                <h3 className="font-serif text-md font-bold mb-2 text-stone-100">Colaboração e Partilha Ativa</h3>
                <p className="font-sans text-xs text-stone-100 leading-relaxed">
                  Participação ágil em comunidades de prática técnicas, promovendo a troca de pastas pedagógicas digitais e o co-planeamento multidisciplinar voluntário entre formadores seniores de diferentes ramos.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-2 pt-4">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-primary">Registar Nova Evidência</span>
            <div className="h-px bg-grid-line flex-grow"></div>
          </div>

          {/* Diary Submission form */}
          <form onSubmit={handleAddDiaryEntry} className="bg-white p-6 border border-soft-teal border-opacity-40 rounded-sm space-y-4">
            <div className="space-y-1">
              <label htmlFor="ref-title" className="font-sans text-xs font-bold text-stone-600 block">Título do Incidente Crítico</label>
              <input 
                id="ref-title"
                type="text" 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Exemplo: Uso do Mentimeter no Módulo de Inovação" 
                className="w-full text-xs p-3 rounded-xs border border-grid-line focus:border-deep-teal outline-none"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="ref-content" className="font-sans text-xs font-bold text-stone-600 block">Prosa Reflexiva (Evidências / Desafios)</label>
              <textarea 
                id="ref-content"
                rows={3}
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                placeholder="Descreva as reações dos formandos, ritmo do tempo de atenção técnica, e planos de intervenção decorrentes..."
                className="w-full text-xs p-3 rounded-xs border border-grid-line focus:border-deep-teal outline-none"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="ref-tags" className="font-sans text-xs font-bold text-stone-600 block">Tags Pedagógicas (vírgula-separador)</label>
                <input 
                  id="ref-tags"
                  type="text" 
                  value={newTags}
                  onChange={(e) => setNewTags(e.target.value)}
                  placeholder="Andragogia, Feedback, Slido" 
                  className="w-full text-xs p-3 rounded-xs border border-grid-line focus:border-deep-teal outline-none"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="ref-image" className="font-sans text-xs font-bold text-stone-600 block">Categoria / Imagem de Apoio</label>
                <select 
                  id="ref-image"
                  value={newEvidenceImage}
                  onChange={(e) => setNewEvidenceImage(e.target.value)}
                  className="w-full text-xs p-3 rounded-xs border border-grid-line focus:border-deep-teal outline-none bg-white"
                >
                  <option value={REFERENCE_IMAGES.journal}>Diário de Couro (Silêncio Reflexivo)</option>
                  <option value={REFERENCE_IMAGES.materials}>Diferenciação Técnica (Manuais e Tablets)</option>
                  <option value={REFERENCE_IMAGES.educator}>Interação Formador-Turma (Tablet Ativo)</option>
                  <option value={REFERENCE_IMAGES.evidence}>Workspace do Analista (Tabelas)</option>
                </select>
              </div>
            </div>

            <div className="text-right pt-2">
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-container text-white px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer select-none shadow-xs active:scale-95 transition-all"
              >
                Registar no Portfólio
              </button>
            </div>
          </form>

        </div>

        {/* Right Columns - Improvements & Evidences (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="text-muted-gold" size={20} />
            <h2 className="font-sans font-bold text-xs text-muted-gold uppercase tracking-widest">
              Áreas de Melhoria e Metas
            </h2>
          </div>

          {/* Progress indicators linked to Diagnosis score */}
          <div className="bg-white border-l-4 border-muted-gold p-6 rounded-r-xs shadow-xs space-y-6">
            
            {/* Improv 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif font-bold text-stone-800">Diferenciação Pedagógica</span>
                <span className="font-mono font-bold text-muted-gold bg-secondary-container/30 px-2 py-0.5 rounded-xs">
                  {difPercentage}%
                </span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Criação de formatos variados (visuais, orais e checklists de verificação) para cobrir ritmos de adultos desiguais.
              </p>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div 
                  className="bg-muted-gold h-full transition-all duration-700" 
                  style={{ width: `${difPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Improv 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif font-bold text-stone-800">Avaliação Formativa</span>
                <span className="font-mono font-bold text-muted-gold bg-secondary-container/30 px-2 py-0.5 rounded-xs">
                  {avalPercentage}%
                </span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Sistematização de questionários Rápidos via Slido ou Slido-anónimo no meio das dinâmicas.
              </p>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div 
                  className="bg-muted-gold h-full transition-all duration-700" 
                  style={{ width: `${avalPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Improv 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-serif font-bold text-stone-800">Registo Reflexivo</span>
                <span className="font-mono font-bold text-muted-gold bg-secondary-container/30 px-2 py-0.5 rounded-xs">
                  {regPercentage}%
                </span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Consistência na produção de anotações sistemáticas de bordo e incidentes de sala.
              </p>
              <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div 
                  className="bg-muted-gold h-full transition-all duration-700" 
                  style={{ width: `${regPercentage}%` }}
                ></div>
              </div>
            </div>

          </div>

          {/* Visual evidence preset banner */}
          <div className="relative rounded-sm overflow-hidden group border border-grid-line shadow-sm">
            <div className="absolute inset-0 bg-deep-teal opacity-25 group-hover:opacity-10 transition-opacity"></div>
            <img 
              referrerPolicy="no-referrer"
              className="w-full h-48 object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700" 
              src={REFERENCE_IMAGES.materials} 
              alt="Mesa de trabalho com tablets e recursos" 
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 rounded-xs shadow-md">
              <p className="text-[9px] font-sans font-bold text-deep-teal uppercase tracking-widest block mb-0.5">
                Evidência Fotográfica ativa
              </p>
              <p className="text-[11px] text-stone-500 italic">
                - "Interseção pragmática de relatórios com inovação."
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Diary Entries Timeline display */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#0D6B6B]">Incidentes Registados recente</span>
          <div className="h-px bg-grid-line flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diaryEntries.map((entry) => (
            <div key={entry.id} className="bg-white border border-soft-teal border-opacity-35 rounded-sm overflow-hidden shadow-xs flex flex-col justify-between hover:shadow-md transition-all">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start text-xs border-b border-grid-line pb-2.5">
                  <div className="flex items-center gap-1.5 text-stone-400">
                    <Clock size={12} />
                    <span className="font-sans text-[11px] font-bold">{entry.date}</span>
                  </div>
                  <button 
                    onClick={() => handleDeleteDiaryEntry(entry.id)}
                    className="text-stone-400 hover:text-red-600 transition-colors select-none cursor-pointer"
                    title="Excluir Diário"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-md font-bold text-deep-teal leading-tight">{entry.title}</h4>
                  <p className="font-sans text-xs text-stone-600 leading-relaxed">
                    {entry.content}
                  </p>
                </div>
              </div>

              {/* Bottom tag block inside card */}
              <div className="bg-surface-container-low/40 p-5 border-t border-grid-line flex justify-between items-center">
                <div className="flex gap-1.5 flex-wrap">
                  {entry.tags.map((tag, i) => (
                    <span key={i} className="bg-white border border-soft-teal/40 text-stone-500 text-[10px] px-2 py-0.5 uppercase tracking-wide">
                      #{tag}
                    </span>
                  ))}
                </div>
                {entry.evidenceImage && (
                  <img 
                    referrerPolicy="no-referrer"
                    src={entry.evidenceImage} 
                    alt="Evidência anexa" 
                    className="w-10 h-10 object-cover rounded-xs border border-grid-line"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Persistent Visual Anchor bar bottom */}
      <section className="pt-6">
        <div className="bg-inverse-surface text-inverse-on-surface p-6 flex flex-col md:flex-row justify-between items-center rounded-sm shadow-xl select-none gap-4">
          <div className="flex items-center gap-4">
            <span className="p-2.5 bg-white/10 text-muted-gold rounded-full border border-white/10">
              <Sparkles size={24} className="animate-spin duration-300" />
            </span>
            <div>
              <h5 className="font-sans font-bold text-xs uppercase tracking-widest text-muted-gold mb-0.5">Síntese de Evolução</h5>
              <p className="font-sans text-xs text-stone-300 leading-normal">
                Equilibrando meticulosamente o rigor técnico metodológico com a sensibilidade pedagógica.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={handlePrintDraft}
              className="px-6 py-2.5 border border-outline border-white hover:bg-white/10 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer select-none"
            >
              Exportar PDF
            </button>
            <button 
              onClick={() => setCurrentTab('plano')}
              className="px-6 py-2.5 bg-muted-gold hover:opacity-95 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xs cursor-pointer flex items-center gap-1 transition-all select-none active:scale-95"
            >
              <span>Próxima Etapa</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

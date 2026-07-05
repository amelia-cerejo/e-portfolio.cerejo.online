import { useState, useEffect } from 'react';
import { Star, Users, School, Brain, Sparkles, Wand2, Loader2, ArrowRight } from 'lucide-react';
import { DomainData, ReflectiveDiaryEntry } from '../types';

interface DiagnosticoViewProps {
  domains: DomainData[];
  setDomains: (domains: DomainData[]) => void;
  diaryEntries: ReflectiveDiaryEntry[];
  setCurrentTab: (tab: string) => void;
  setSmartGoalsStatus: (goalsStatus: any) => void;
}

export function DiagnosticoView({ 
  domains, 
  setDomains, 
  diaryEntries, 
  setCurrentTab,
  setSmartGoalsStatus 
}: DiagnosticoViewProps) {
  
  const [activeExpandedDomain, setActiveExpandedDomain] = useState<string | null>('reflection');
  const [apiLoading, setApiLoading] = useState(false);
  
  // Custom generated synthetic report states
  const [report, setReport] = useState<{
    source: string;
    conclusao: string;
    areaCritica: string;
    proximoPasso: string;
    planoSugerido: string[];
  }>({
    source: 'offline_expert_engine',
    conclusao: 'A análise aponta para uma base profissional robusta, com todos os domínios situados acima do limiar crítico de 3.5. O equilíbrio entre saberes teóricos e a prática interpessoal realça a sua maturidade pedagógica.',
    areaCritica: 'Reflexão Crítica',
    proximoPasso: 'Focar na regularidade escrita dos incidentes pós-sessão para sistematizar a reflexão.',
    planoSugerido: [
      'Produzir 1 registo reflexivo sistemático por mês detalhando avanços técnicos.',
      'Apoiar e desenhar instrumentos de co-avaliação transparentes para incidentes.',
      'Sistematizar o uso do Slido e Mentimeter para recolhas rápidas e imediatas.'
    ]
  });

  // Calculate scores derived from subcriteria averages
  const getSubAverage = (domainId: string) => {
    const domain = domains.find(d => d.id === domainId);
    if (!domain || domain.subCriteria.length === 0) return 0;
    const sum = domain.subCriteria.reduce((acc, sub) => acc + sub.score, 0);
    return parseFloat((sum / domain.subCriteria.length).toFixed(1));
  };

  // Synchronize overall scores when domain sub-criteria are updated
  const handleSubScoreChange = (domainId: string, subId: string, newValue: number) => {
    const roundedValue = parseFloat(newValue.toFixed(1));
    const updatedDomains = domains.map((domain) => {
      if (domain.id !== domainId) return domain;
      const updatedSubs = domain.subCriteria.map((sub) => {
        if (sub.id !== subId) return sub;
        return { ...sub, score: roundedValue };
      });
      
      // Recalculate domain score as mathematical average of updated subCriteria
      const newAverage = parseFloat(
        (updatedSubs.reduce((acc, s) => acc + s.score, 0) / updatedSubs.length).toFixed(1)
      );

      return { ...domain, score: newAverage, subCriteria: updatedSubs };
    });

    setDomains(updatedDomains);
  };

  // Calculators for comparative metrics
  const scoresArray = domains.map((d) => d.score);
  const minScore = Math.min(...scoresArray);
  const maxScore = Math.max(...scoresArray);
  const amplitude = parseFloat((maxScore - minScore).toFixed(1));
  
  const averageGeneral = parseFloat(
    (scoresArray.reduce((acc, val) => acc + val, 0) / scoresArray.length).toFixed(1)
  );

  let desvioPadraoText = 'Baixo';
  if (amplitude >= 1.2) {
    desvioPadraoText = 'Alto (Ação Crítica)';
  } else if (amplitude >= 0.6) {
    desvioPadraoText = 'Médio';
  }

  // Radial progress calculations (average out of 5 translated to percentage)
  const scorePercent = (averageGeneral / 5) * 100;
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scorePercent / 100) * circumference;

  // Render correct Lucide Icon matching domain icon string
  const renderDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star': return <Star size={18} />;
      case 'Users': return <Users size={18} />;
      case 'School': return <School size={18} />;
      default: return <Brain size={18} />;
    }
  };

  // POST Request to node API to analyze general results
  const handleGenerateDiagnosticsReport = async () => {
    setApiLoading(true);
    try {
      const response = await fetch('/api/analyze-diagnostics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scores: {
            professional: domains.find(d => d.id === 'professional')?.score || 4.3,
            collaboration: domains.find(d => d.id === 'collaboration')?.score || 4.0,
            pedagogical: domains.find(d => d.id === 'pedagogical')?.score || 3.8,
            reflection: domains.find(d => d.id === 'reflection')?.score || 3.5,
          },
          activeDiaryEntries: diaryEntries
        })
      });

      if (!response.ok) {
        throw new Error('API return failed');
      }

      const data = await response.json();
      setReport({
        source: data.source || 'gemini-ai',
        conclusao: data.conclusao || 'Análise gerada com sucesso.',
        areaCritica: data.areaCritica || 'Foco de Melhoria',
        proximoPasso: data.proximoPasso || 'Ajustar plano de ação.',
        planoSugerido: data.planoSugerido || []
      });

      // Update goal structure suggestions based on generated results
      if (data.planoSugerido && data.planoSugerido.length > 0) {
        setSmartGoalsStatus(data.planoSugerido);
      }

    } catch (err) {
      console.warn('Utilizando gerador interno devido à falta de chave ou erro de rede:', err);
    } finally {
      setApiLoading(false);
    }
  };

  return (
    <div className="animate-fade-in-up font-sans text-on-surface bg-surface min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      
      {/* Hero Header */}
      <header className="space-y-4 text-center md:text-left">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-deep-teal leading-tight">
          Diagnóstico da Prática Profissional
        </h1>
        <p className="font-sans text-stone-500 max-w-2xl text-sm md:text-base leading-relaxed">
          Autoavaliação contínua e dinâmica estruturada em quatro domínios da Andragogia, avaliada sob uma escala rigorosa de proficiência (0 a 5).
        </p>
      </header>

      {/* Grid Layout containing domains left and analysis right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Domain Cards Column (8 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-primary">Preenchimento Analítico</span>
            <div className="h-px bg-grid-line flex-grow"></div>
          </div>

          <div className="space-y-4">
            {domains.map((domain) => {
              const isExpanded = activeExpandedDomain === domain.id;
              const isGoldHighlight = domain.id === 'reflection';
              
              return (
                <div 
                  key={domain.id}
                  className={`border transition-all duration-300 rounded-sm overflow-hidden shadow-xs hover:shadow-md ${
                    isGoldHighlight && !isExpanded
                      ? 'bg-secondary-container/20 border-muted-gold/40' 
                      : 'bg-white border-soft-teal border-opacity-40'
                  }`}
                >
                  {/* Domain Header Card Row */}
                  <div 
                    onClick={() => setActiveExpandedDomain(isExpanded ? null : domain.id)}
                    className="p-5 flex justify-between items-center cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xs transition-colors ${
                        isGoldHighlight ? 'bg-muted-gold text-white' : 'bg-primary text-white'
                      }`}>
                        {renderDomainIcon(domain.icon)}
                      </div>
                      <div>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-stone-400 block pb-0.5">
                          {domain.shortName}
                        </span>
                        <h3 className="font-serif text-md font-bold text-on-surface hover:text-primary transition-colors">
                          {domain.name}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="font-serif text-2xl font-bold text-deep-teal">{domain.score}</span>
                        <span className="font-sans text-xs text-stone-400 font-semibold">/ 5.0</span>
                      </div>
                      <span className="text-stone-300 transform transition-transform duration-200 text-xs font-bold">
                        {isExpanded ? '▲' : '▼'}
                      </span>
                    </div>
                  </div>

                  {/* Sub-criteria Adjusters (Expandable Section) */}
                  {isExpanded && (
                    <div className="px-5 pb-6 pt-2 border-t border-grid-line bg-surface-container-low/30 space-y-5 animate-fade-in-up">
                      <p className="text-xs text-stone-500 leading-relaxed italic pr-6 pb-2">
                        {domain.description}
                      </p>

                      <div className="space-y-4">
                        {domain.subCriteria.map((sub) => (
                          <div key={sub.id} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-sans font-bold text-xs text-stone-700 pr-4">
                                {sub.name}
                              </span>
                              <span className="font-mono text-xs font-bold text-deep-teal bg-white border border-soft-teal px-2 py-0.5 rounded-xs shadow-xs">
                                {sub.score.toFixed(1)}
                              </span>
                            </div>
                            
                            {/* Input slider */}
                            <div className="flex items-center gap-4">
                              <input 
                                type="range" 
                                min="0.0" 
                                max="5.0" 
                                step="0.1" 
                                value={sub.score} 
                                onChange={(e) => handleSubScoreChange(domain.id, sub.id, parseFloat(e.target.value))}
                                className="w-full h-1.5 bg-surface-container rounded-lg appearance-none cursor-pointer accent-deep-teal"
                                aria-label={sub.name}
                              />
                            </div>
                            <p className="text-[10px] text-stone-400 leading-normal">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

        {/* Comparative Analysis Sidebar (5 cols) */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-sans font-bold text-xs uppercase tracking-widest text-[#A07830]">Métricas Consolidadas</span>
            <div className="h-px bg-grid-line flex-grow"></div>
          </div>

          {/* Radial SVG Comparative Summary Card */}
          <div className="bg-white p-6 border border-soft-teal border-opacity-40 rounded-sm shadow-xs flex flex-col items-center">
            <h4 className="font-sans font-bold text-xs text-deep-teal uppercase tracking-widest mb-6 w-full text-left">
              Síntese Comparativa
            </h4>

            {/* SVG Circular progress */}
            <div className="relative w-48 h-48 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                {/* Background circle */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  className="stroke-surface-container fill-none" 
                  strokeWidth="8"
                />
                
                {/* Foreground animated score bar */}
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  className="stroke-deep-teal stroke-linecap-round fill-none transition-all duration-700" 
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center select-none">
                <span className="font-serif text-4xl font-extrabold text-deep-teal leading-none">
                  {averageGeneral}
                </span>
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-widest font-black mt-1">
                  Média Geral
                </span>
              </div>
            </div>

            {/* Secondary Comparative statistics */}
            <div className="grid grid-cols-2 gap-4 w-full border-t border-grid-line pt-5 mt-5 text-center">
              <div>
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider block">Amplitude (mín-máx)</span>
                <span className="font-serif text-lg font-bold text-deep-teal">{amplitude} pts</span>
              </div>
              <div>
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider block">Desvio Padrão</span>
                <span className="font-serif text-lg font-bold text-deep-teal">{desvioPadraoText}</span>
              </div>
            </div>
          </div>

          {/* Pedagogical Diagnostico Report Box */}
          <div className="bg-deep-teal p-6 rounded-sm text-white shadow-md relative overflow-hidden space-y-4">
            {/* Background design glow watermark */}
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <Sparkles size={160} />
            </div>

            <div className="flex items-center gap-2">
              <Wand2 size={16} className="text-secondary-fixed text-muted-gold animate-bounce" />
              <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-[#ffffff] ">
                Conclusão Diagnóstica
              </h4>
            </div>

            <p className="font-sans text-xs md:text-sm text-stone-100 leading-relaxed opacity-95">
              {report.conclusao}
            </p>

            <div className="border-t border-white/10 pt-4 space-y-2">
              <span className="font-sans font-semibold text-[10px] text-soft-teal uppercase tracking-widest block">
                Área de Foco Prioritário: <span className="text-secondary-fixed text-white font-bold">{report.areaCritica}</span>
              </span>
              <p className="font-sans text-xs italic text-stone-100">
                "<strong>Próximo Passo Recomendado:</strong> {report.proximoPasso}"
              </p>
            </div>

            {report.planoSugerido && report.planoSugerido.length > 0 && (
              <div className="pt-2 animate-fade-in-up">
                <span className="font-sans font-semibold text-[10px] text-soft-teal uppercase tracking-widest block mb-2">
                  Metas SMART Recomendadas (IA):
                </span>
                <ul className="space-y-1.5">
                  {report.planoSugerido.map((item, id) => (
                    <li key={id} className="font-sans text-xs flex gap-2 items-start text-stone-100 leading-tight">
                      <span className="text-muted-gold font-bold">❖</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="text-[9px] font-mono text-soft-teal italic text-right">
              Gerado por: {report.source === 'gemini-ai' ? 'Gemini 3.5 AI Engine' : 'Motor de Regras Pedagógicas'}
            </div>
          </div>

          {/* Call to action generator button */}
          <button 
            disabled={apiLoading}
            onClick={handleGenerateDiagnosticsReport}
            className="w-full bg-white hover:bg-deep-teal hover:border-deep-teal text-deep-teal hover:text-white border-2 border-deep-teal font-sans font-bold text-xs uppercase tracking-wider py-4 rounded-sm flex items-center justify-center gap-2 transition-all select-none cursor-pointer group shadow-xs active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {apiLoading ? (
              <>
                <Loader2 size={14} className="animate-spin text-deep-teal group-hover:text-white" />
                <span>Analisando Metodologias...</span>
              </>
            ) : (
              <>
                <span>Gerar Plano com Coach IA</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

        </aside>

      </div>

      {/* Static developmental indicators matching screen bottom specifications */}
      <section className="border-t border-grid-line pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left select-none">
        <div className="space-y-1.5">
          <h5 className="font-sans font-bold text-xs text-muted-gold uppercase tracking-wider">01. Reflexão</h5>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            O ponto de partida inabalável para qualquer transformação andragógica e refinamento pedagógico.
          </p>
        </div>
        <div className="space-y-1.5">
          <h5 className="font-sans font-bold text-xs text-muted-gold uppercase tracking-wider">02. Evidência</h5>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            Sustentação dos avanços em relatórios, métricas digitais anónimas e incidentes reais observados.
          </p>
        </div>
        <div className="space-y-1.5">
          <h5 className="font-sans font-bold text-xs text-muted-gold uppercase tracking-wider">03. Crescimento</h5>
          <p className="text-[11px] text-stone-500 leading-relaxed">
            Evolução calibrada contínua, orientada por metas SMART auto-reguladas e co-docência ativa.
          </p>
        </div>
      </section>

    </div>
  );
}

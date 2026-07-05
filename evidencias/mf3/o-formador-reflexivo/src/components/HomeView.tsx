import { useState } from 'react';
import { Quote, Sparkles, BookOpen, Brain, ArrowRight, Sliders, Info } from 'lucide-react';
import { REFERENCE_IMAGES } from '../data';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
}

export function HomeView({ setCurrentTab }: HomeViewProps) {
  const [selectedCycleStep, setSelectedCycleStep] = useState<number | null>(null);
  const [showDocModal, setShowDocModal] = useState(false);

  const steps = [
    {
      id: 1,
      title: 'Diagnosticar',
      desc: 'Analisar as necessidades iniciais e as lacunas de competência do grupo de formandos.',
      detail: 'Mapeia saberes prévios e objetivos de carreira dos formandos antes de iniciar o curso. Ferramentas: Slido, Questionários Mentimeter.',
      icon: Sliders,
      badge: 'Fase 1'
    },
    {
      id: 2,
      title: 'Reconhecer',
      desc: 'Identificar padrões de comportamento e reações durante a prática pedagógica ativa.',
      detail: 'Faz leitura de sala, escuta ativa e linguagem corporal. Registar incidentes críticos imediatamente após as sessões técnicas.',
      icon: Brain,
      badge: 'Fase 2'
    },
    {
      id: 3,
      title: 'Planear',
      desc: 'Desenhar estratégias de intervenção corretiva e novos roteiros de aprendizagem.',
      detail: 'Metas SMART de 3, 6 e 12 meses. Diferenciação ativa de materiais (visual, escrito, prático) para múltiplos ritmos cognitivos.',
      icon: BookOpen,
      badge: 'Fase 3'
    },
    {
      id: 4,
      title: 'Evoluir',
      desc: 'Integrar as lições aprendidas para atingir um novo patamar de excelência pedagógica.',
      detail: 'Sistematização de portfólios reflexivos digitais. Mentoria mútua e co-planeamento constante com pares formativos.',
      icon: Sparkles,
      badge: 'Fase 4',
      highlighted: true
    }
  ];

  return (
    <div className="animate-fade-in-up font-sans text-on-surface bg-surface min-h-screen">
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-surface-container-low border-b border-grid-line py-20 px-6">
        <div className="absolute inset-0 diagonal-pattern opacity-25"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="font-sans text-xs uppercase tracking-widest text-primary font-bold mb-4 block animate-pulse">
            A Jornada Pedagógica
          </span>
          <h1 className="font-serif text-4xl md:text-6xl text-deep-teal mb-6 leading-tight font-bold">
            O Ciclo do Formador <span className="text-muted-gold italic block md:inline font-normal">Reflexivo</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-slate-gray max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Uma exploração estruturada sobre a prática docente, convertendo evidências práticas e autoavaliações em evolução profissional contínua.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentTab('diagnostico')}
              className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xs font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer select-none"
            >
              <span>Iniciar Diagnóstico</span>
              <ArrowRight size={14} />
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('propósito-da-reflexão');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="border border-outline text-primary bg-transparent hover:bg-soft-teal/10 px-8 py-4 rounded-xs font-semibold text-xs uppercase tracking-wider cursor-pointer transition-all select-none"
            >
              Ver Metodologia
            </button>
          </div>
        </div>

        {/* Bottom vertical golden line thread */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-muted-gold opacity-40"></div>
      </section>

      {/* Main Quote Section */}
      <section className="py-16 bg-surface-container-lowest border-b border-grid-line">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Quote className="text-muted-gold mx-auto mb-4 scale-150 rotate-180 opacity-45" size={32} />
          <blockquote className="font-serif text-xl md:text-2xl italic text-on-surface-variant mb-6 leading-relaxed">
            "Ser formador reflexivo é transformar a experiência em <span className="text-deep-teal font-bold not-italic">aprendizagem</span> e a aprendizagem em <span className="text-muted-gold font-bold not-italic">melhoria contínua</span>."
          </blockquote>
          <div className="h-0.5 w-16 bg-muted-gold mx-auto opacity-40"></div>
        </div>
      </section>

      {/* Introduction Section ("Propósito da Reflexão") */}
      <section id="propósito-da-reflexão" className="py-20 bg-surface border-b border-grid-line scrolling-mt">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative rounded-sm overflow-hidden shadow-xl aspect-video md:aspect-square group bg-stone-100">
            <img 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src={REFERENCE_IMAGES.propisito} 
              alt="Mesa pedagógica com caderno aberto e caneta tinteiro" 
            />
            <div className="absolute inset-0 bg-deep-teal mix-blend-overlay opacity-20 group-hover:opacity-10 transition-opacity"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3 rounded-sm shadow-md text-xs">
              <span className="font-serif italic text-deep-teal block">"O espaço de reflexão molda a qualidade da análise."</span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest">
              Propósito da Reflexão
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-deep-teal leading-tight font-bold">
              A Pedagogia como Prática Evolutiva
            </h2>
            <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base">
              A reflexão pedagógica não é apenas um ato de retrospectiva passiva, mas um verdadeiro motor de transformação profissional. Este portfólio digital atua como uma bússola constante para o formador, permitindo o auto-diagnóstico de competências, identificação de fricção em sala de aula e a imediata catalogação de evidências práticas de sucesso.
            </p>
            <p className="font-sans text-stone-600 leading-relaxed text-sm md:text-base">
              Ao sistematizar o registo de incidentes críticos, transitamos de uma atuação intuitiva para uma prática estritamente fundamentada, otimizando os ritmos de aprendizagem e o engajamento de turmas adultas (Andragogia).
            </p>
            
            <div className="pt-4">
              <button 
                onClick={() => setShowDocModal(true)}
                className="inline-flex items-center gap-3 group cursor-pointer text-left"
              >
                <span className="bg-secondary-container text-on-secondary-container p-3 rounded-full group-hover:scale-105 transition-transform">
                  <BookOpen size={18} className="text-muted-gold" />
                </span>
                <div>
                  <span className="font-sans font-bold text-xs uppercase tracking-wider text-primary block group-hover:underline">
                    Explorar Documentação de Suporte
                  </span>
                  <span className="font-sans text-stone-500 text-xs block">
                    Metodologias andragógicas úteis organizadas
                  </span>
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Self-Regulation Cycle */}
      <section className="py-20 bg-surface-container-low border-b border-grid-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-4xl text-deep-teal font-bold">
              Ciclo de Autorregulação
            </h2>
            <p className="font-sans text-slate-gray max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              O processo reflexivo divide-se em quatro fases interdependentes e iterativas que alimentam o progresso contínuo de facilitação. Clique em cada uma para ver detalhes.
            </p>
          </div>

          {/* Cards timeline grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedCycleStep === step.id;
              
              return (
                <div 
                  key={step.id}
                  onClick={() => setSelectedCycleStep(isSelected ? null : step.id)}
                  className={`relative p-8 border rounded-xs transition-all duration-300 cursor-pointer select-none group overflow-hidden ${
                    step.highlighted 
                      ? 'bg-deep-teal text-white border-deep-teal shadow-md' 
                      : 'bg-white text-on-surface border-soft-teal border-opacity-40 hover:shadow-lg'
                  } ${isSelected ? 'ring-2 ring-muted-gold scale-[1.01]' : 'hover:-translate-y-1'}`}
                >
                  <div className={`absolute -right-4 -top-4 text-8xl font-serif font-black select-none opacity-5 ${
                    step.highlighted ? 'text-white opacity-10' : 'text-primary'
                  }`}>
                    {idx + 1}
                  </div>

                  <div className={`w-12 h-12 rounded-xs flex items-center justify-center mb-6 shadow-xs ${
                    step.highlighted ? 'bg-white text-deep-teal' : 'bg-primary text-white'
                  }`}>
                    <Icon size={20} />
                  </div>

                  <span className={`text-[10px] uppercase font-bold tracking-widest block mb-1 ${
                    step.highlighted ? 'text-soft-teal' : 'text-muted-gold'
                  }`}>
                    {step.badge}
                  </span>

                  <h3 className="font-serif text-lg font-bold mb-3">{step.title}</h3>
                  <p className={`font-sans text-xs leading-relaxed ${
                    step.highlighted ? 'text-stone-100 opacity-95' : 'text-stone-600'
                  }`}>
                    {step.desc}
                  </p>

                  {/* Interactive expanded view */}
                  <div className={`mt-4 pt-3 border-t transition-all duration-500 overflow-hidden ${
                    isSelected ? 'max-h-36 opacity-100 block' : 'max-h-0 opacity-0 hidden'
                  } ${step.highlighted ? 'border-white/20' : 'border-grid-line'}`}>
                    <p className={`font-sans text-[11px] leading-relaxed italic ${step.highlighted ? 'text-stone-200' : 'text-primary'}`}>
                      {step.detail}
                    </p>
                  </div>

                  {/* Toggle hint */}
                  <div className="mt-4 flex items-center gap-1 font-sans text-[10px] uppercase tracking-wider font-semibold opacity-70 group-hover:opacity-100 transition-opacity">
                    <Info size={11} />
                    <span>{isSelected ? 'Ocultar detalhes' : 'Clique para ver ferramentas'}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop connectors block */}
          <div className="hidden lg:grid grid-cols-4 px-16 mt-8 opacity-25 justify-items-center">
            <ArrowRight size={24} className="text-deep-teal translate-x-20" />
            <ArrowRight size={24} className="text-deep-teal translate-x-12" />
            <ArrowRight size={24} className="text-deep-teal translate-x-4" />
            <ArrowRight size={24} className="text-deep-teal -translate-x-4 rotate-180" />
          </div>

        </div>
      </section>

      {/* Middle atmospheric section */}
      <section className="relative h-[32rem] overflow-hidden flex items-center px-6">
        <img 
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-25" 
          src={REFERENCE_IMAGES.backdrop} 
          alt="Texturas conceituais com linhas douradas" 
        />
        <div className="absolute inset-0 bg-deep-teal bg-opacity-85 mix-blend-multiply"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold">
            Pronto para impulsionar a sua prática?
          </h2>
          <p className="font-sans text-sm md:text-base text-stone-100 opacity-90 leading-relaxed max-w-xl mx-auto">
            Avalie o seu clima pedagógico, trace metas dinâmicas de 3 a 12 meses e cataloge as suas evidências na nossa matriz reflexiva baseada em dados reais e IA.
          </p>
          <div className="pt-4">
            <button 
              onClick={() => setCurrentTab('diagnostico')}
              className="bg-white hover:bg-muted-gold text-deep-teal hover:text-white px-8 py-4 rounded-xs font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xl transition-all active:scale-95 select-none"
            >
              Iniciar Autoavaliação
            </button>
          </div>
        </div>
      </section>

      {/* Support Documentation Modal */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs font-sans">
          <div className="bg-white rounded-xs border border-soft-teal w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="bg-deep-teal p-6 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-muted-gold" />
                <h3 className="font-serif text-xl font-bold">Metodologia Andragógica & Prática</h3>
              </div>
              <button 
                onClick={() => setShowDocModal(false)}
                className="text-white hover:text-muted-gold transition-colors text-xl font-bold select-none cursor-pointer"
              >
                &times;
              </button>
            </div>
            
            <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-sm text-deep-teal uppercase tracking-wider mb-2">As 4 Pilastras do Percurso Reflexivo</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Para que a formação de adultos seja transformadora, o formador deve operar não como simples transmissor de conteúdos, mas como catalisador e mediador. A reflexão estruturada pós-sessão protege o profissional contra rotinas obsoletas e burnout metodológico.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-grid-line p-4 rounded-xs bg-surface-container-low">
                  <span className="font-bold text-xs text-muted-gold uppercase block mb-1">Slido & Recolha de Expectativas</span>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Aplicado experimentalmente nos primeiros 10 minutos para auditar conhecimentos práticos anteriores, mitigando discrepâncias curriculares de imediato.
                  </p>
                </div>
                <div className="border border-grid-line p-4 rounded-xs bg-surface-container-low">
                  <span className="font-bold text-xs text-muted-gold uppercase block mb-1">Diferenciação Estrita</span>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Sessões que intercalam estímulos visuais (infográficos), estímulos verbais e roteiros práticos auto-guiados que acolhem tempos cognitivos desiguais.
                  </p>
                </div>
              </div>

              <div className="border-t border-grid-line pt-4 text-xs text-stone-500 leading-relaxed space-y-2">
                <h5 className="font-bold text-stone-700">Leituras recomendadas no portfólio:</h5>
                <ul className="list-disc list-inside space-y-1">
                  <li>Malcolm Knowles, <i>Andragogia em Ação: O Aprendizado de Adultos</i></li>
                  <li>Donald Schön, <i>O Profissional Reflexivo: Como pensam os profissionais na ação</i></li>
                </ul>
              </div>
            </div>

            <div className="bg-surface-container-low p-4 text-right border-t border-grid-line">
              <button 
                onClick={() => setShowDocModal(false)}
                className="bg-deep-teal hover:bg-primary text-white px-5 py-2 text-xs font-bold uppercase cursor-pointer"
              >
                Fechar Guia
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

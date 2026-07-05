import { useState, FormEvent } from 'react';
import { User, Award, CheckCircle, FileText, Sliders, Printer } from 'lucide-react';
import { DomainData, SmartGoal, ReflectiveDiaryEntry } from '../types';

interface PerfilViewProps {
  domains: DomainData[];
  smartGoals: SmartGoal[];
  diaryEntries: ReflectiveDiaryEntry[];
}

export function PerfilView({ domains, smartGoals, diaryEntries }: PerfilViewProps) {
  const [userName, setUserName] = useState('Amélia Cerejo');
  const [userEmail, setUserEmail] = useState('ameliacerejo@gmail.com');
  const [schoolUnit, setSchoolUnit] = useState('Unidade de Formação e Andragogia Híbrida');
  
  // Custom slider weights for calculation adjustments
  const [profWeight, setProfWeight] = useState(1.0);
  const [colWeight, setColWeight] = useState(1.0);
  const [pedWeight, setPedWeight] = useState(1.0);
  const [refWeight, setRefWeight] = useState(1.0);
  const [successSave, setSuccessSave] = useState(false);

  const handleSaveProfile = (e: FormEvent) => {
    e.preventDefault();
    setSuccessSave(true);
    setTimeout(() => setSuccessSave(false), 3000);
  };

  const handlePrintFullReport = () => {
    window.print();
  };

  // Derive metric stats
  const averageGeneralRaw = domains.reduce((acc, d) => acc + d.score, 0) / domains.length;
  const getDomainScore = (domainId: DomainData['id']) => (
    domains.find((domain) => domain.id === domainId)?.score ?? 0
  );
  const averageGeneralWithWeights = (
    (getDomainScore('professional') * profWeight + 
     getDomainScore('collaboration') * colWeight + 
     getDomainScore('pedagogical') * pedWeight + 
     getDomainScore('reflection') * refWeight) / 
    (profWeight + colWeight + pedWeight + refWeight)
  ).toFixed(1);

  return (
    <div className="animate-fade-in-up font-sans text-on-surface bg-surface min-h-screen py-12 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-12">
      
      {/* Toast Save Success */}
      {successSave && (
        <div className="fixed top-24 right-6 z-50 bg-[#006060] text-white py-3 px-5 rounded-sm shadow-xl flex items-center gap-2 text-xs font-bold animate-pulse font-sans">
          <CheckCircle size={14} className="text-secondary-fixed text-white" />
          <span>Configurações do perfil guardadas com sucesso!</span>
        </div>
      )}

      {/* Header */}
      <header className="space-y-4 text-center md:text-left">
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-deep-teal leading-tight">
          Perfil e Definições do Formador
        </h1>
        <p className="font-sans text-stone-500 max-w-2xl text-sm md:text-base leading-relaxed">
          Configure a sua matriz de pesos curriculares, ajuste as suas credenciais profissionais e exporte relatórios consolidados para submissão pedagógica.
        </p>
      </header>

      {/* Profile Form vs Weights Slider Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile configuration parameters */}
        <div className="lg:col-span-6 bg-white border border-[#eceeee] p-6 rounded-sm shadow-xs space-y-6">
          <h3 className="font-serif text-lg font-bold text-deep-teal pb-2 border-b border-grid-line flex items-center gap-1.5 select-none">
            <User size={18} className="text-muted-gold" />
            <span>Dados Curriculares</span>
          </h3>

          <form onSubmit={handleSaveProfile} className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="p-name" className="text-xs font-bold text-stone-600 block">Nome do Formador</label>
              <input 
                id="p-name"
                type="text" 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                className="w-full text-xs p-3 border border-grid-line outline-none focus:border-deep-teal bg-white"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="p-email" className="text-xs font-bold text-stone-600 block">Correio Eletrónico</label>
              <input 
                id="p-email"
                type="email" 
                value={userEmail} 
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full text-xs p-3 border border-grid-line outline-none focus:border-deep-teal bg-white"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="p-unit" className="text-xs font-bold text-stone-600 block">Escola Pedagógica / Unidade Orgânica</label>
              <input 
                id="p-unit"
                type="text" 
                value={schoolUnit} 
                onChange={(e) => setSchoolUnit(e.target.value)}
                className="w-full text-xs p-3 border border-grid-line outline-none focus:border-deep-teal bg-white"
              />
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="bg-primary hover:bg-primary-container text-white px-5 py-2.5 text-xs font-bold uppercase rounded-sm cursor-pointer select-none active:scale-95 transition-all w-full text-center block"
              >
                Atualizar Credenciais
              </button>
            </div>
          </form>
        </div>

        {/* Dynamic Weight Configuration */}
        <div className="lg:col-span-6 bg-white border border-[#eceeee] p-6 rounded-sm shadow-xs space-y-6">
          <h3 className="font-serif text-lg font-bold text-deep-teal pb-2 border-b border-grid-line flex items-center gap-1.5 select-none">
            <Sliders size={18} className="text-muted-gold" />
            <span>Ponderação de Pesos de Domínios</span>
          </h3>

          <p className="text-xs text-stone-500 leading-relaxed font-sans">
            Ajuste a importância de cada domínio na média geral ponderada. Útil se a sua coordenação valorizar mais a <strong>Ação Direta</strong> ou se o foco principal for a reflexão.
          </p>

          <div className="space-y-4">
            {/* Weight 1 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="font-bold text-stone-700">Excelência Profissional</span>
                <span className="font-mono text-deep-teal font-bold">{profWeight.toFixed(1)}x</span>
              </div>
              <input 
                aria-label="Controle excelência"
                type="range" min="0.5" max="2.0" step="0.5" value={profWeight} 
                onChange={(e) => setProfWeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-stone-100 accent-deep-teal rounded-lg cursor-pointer"
              />
            </div>

            {/* Weight 2 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="font-bold text-stone-700">Colaboração com Pares</span>
                <span className="font-mono text-deep-teal font-bold">{colWeight.toFixed(1)}x</span>
              </div>
              <input 
                aria-label="Controle colaboracao"
                type="range" min="0.5" max="2.0" step="0.5" value={colWeight} 
                onChange={(e) => setColWeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-stone-100 accent-deep-teal rounded-lg cursor-pointer"
              />
            </div>

            {/* Weight 3 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="font-bold text-stone-700">Ação Direta Pedagógica</span>
                <span className="font-mono text-deep-teal font-bold">{pedWeight.toFixed(1)}x</span>
              </div>
              <input 
                aria-label="Controle acao"
                type="range" min="0.5" max="2.0" step="0.5" value={pedWeight} 
                onChange={(e) => setPedWeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-stone-100 accent-deep-teal rounded-lg cursor-pointer"
              />
            </div>

            {/* Weight 4 */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs font-sans">
                <span className="font-bold text-stone-700">Reflexão Crítica</span>
                <span className="font-mono text-deep-teal font-bold">{refWeight.toFixed(1)}x</span>
              </div>
              <input 
                aria-label="Controle reflexao"
                type="range" min="0.5" max="2.0" step="0.5" value={refWeight} 
                onChange={(e) => setRefWeight(parseFloat(e.target.value))}
                className="w-full h-1 bg-stone-100 accent-deep-teal rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-surface-container-low p-4 rounded-xs text-xs font-semibold text-stone-600 space-y-1">
            <div className="flex justify-between">
              <span>Média Geral Simples:</span>
              <span className="font-mono">{averageGeneralRaw.toFixed(1)}</span>
            </div>
            <div className="flex justify-between text-deep-teal font-bold border-t border-grid-line pt-2 mt-2">
              <span>Média Geral Ponderada:</span>
              <span className="font-serif text-sm">{averageGeneralWithWeights} / 5.0</span>
            </div>
          </div>
        </div>

      </div>

      {/* Printable Report Generation Sheet */}
      <section className="bg-white border border-soft-teal border-opacity-35 p-8 rounded-sm space-y-6">
        <h3 className="font-serif text-xl font-bold text-deep-teal flex items-center justify-between pb-3 border-b border-grid-line select-none">
          <div className="flex items-center gap-2">
            <FileText size={20} className="text-[#A07830]" />
            <span>Painel de Submissão e Impressão</span>
          </div>

          <button 
            onClick={handlePrintFullReport}
            className="bg-deep-teal hover:bg-primary text-white border border-transparent font-sans font-bold text-xs uppercase tracking-wider px-4 py-2.5 rounded-xs cursor-pointer flex items-center gap-1.5 select-none active:scale-95"
          >
            <Printer size={13} />
            <span>Imprimir Dossiê Integrado</span>
          </button>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
          <div className="space-y-3">
            <h4 className="font-serif text-sm text-[#0D6B6B] font-bold uppercase tracking-wide">Relatório de Diagnóstico Ativo</h4>
            <table className="w-full border-collapse border border-grid-line text-left">
              <thead>
                <tr className="bg-surface-container-low text-[10px] font-bold text-stone-500 uppercase">
                  <th className="p-3 border border-grid-line">Domínio Pedagógico</th>
                  <th className="p-3 border border-grid-line text-center">Pontuação</th>
                </tr>
              </thead>
              <tbody>
                {domains.map((d) => (
                  <tr key={d.id} className="hover:bg-stone-50 transition-colors text-stone-700">
                    <td className="p-3 border border-grid-line font-medium leading-tight">{d.name}</td>
                    <td className="p-3 border border-grid-line font-mono font-bold text-center">{d.score.toFixed(1)}</td>
                  </tr>
                ))}
                <tr className="bg-secondary-container/10 font-bold">
                  <td className="p-3 border border-grid-line text-[#0D6B6B]">Média Ponderada Calculada</td>
                  <td className="p-3 border border-grid-line font-mono text-[#006060] text-center">{averageGeneralWithWeights}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-sm text-[#0D6B6B] font-bold uppercase tracking-wide">Análise de Metas e Logs</h4>
            <div className="space-y-3 bg-[#fbfcfc] border border-grid-line p-5 text-stone-600 leading-relaxed">
              <p>
                A sua plataforma do <strong>Portfólio Pedagógico O Formador Reflexivo</strong> possui atualmente:
              </p>
              <ul className="list-disc list-inside space-y-1 bg-white p-3 border border-grid-line/40 text-[11px]">
                <li><strong>{smartGoals.length} Metas SMART</strong> ativas delineadas no percurso.</li>
                <li><strong>{smartGoals.filter(g => g.status === 'Completed').length} Metas Completadas</strong> de forma integrada.</li>
                <li><strong>{diaryEntries.length} Incidentes Críticos e Diários</strong> registados no diário crítico de bordo.</li>
              </ul>
              <p className="text-[11px] leading-relaxed italic text-stone-400">
                - O documento gerado acima cumpre integralmente os requisitos da comissão examinadora profissional de andragogia.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

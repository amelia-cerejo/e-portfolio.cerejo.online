import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Plus, Trash2, Award, ChevronRight, ChevronLeft } from "lucide-react";
import { PortfolioData, ModuleDetail } from "../types";

interface ModulesSectionProps {
  portfolio: PortfolioData;
  isAdmin: boolean;
  handleUpdateModule: (moduleId: string, field: string, value: any) => void;
  showToast: (msg: string) => void;
  showIntro?: boolean;
  selectedModuleCode?: string | null;
  onSelectedModuleChange?: (moduleCode: string) => void;
}

export default function ModulesSection({
  portfolio,
  isAdmin,
  handleUpdateModule,
  showToast,
  showIntro = false,
  selectedModuleCode,
  onSelectedModuleChange
}: ModulesSectionProps) {
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const activeMod = portfolio.modules[activeModuleIndex];

  useEffect(() => {
    if (!selectedModuleCode) return;
    const nextIndex = portfolio.modules.findIndex((module) => module.code === selectedModuleCode);
    if (nextIndex >= 0) setActiveModuleIndex(nextIndex);
  }, [portfolio.modules, selectedModuleCode]);

  const selectModuleIndex = (index: number) => {
    setActiveModuleIndex(index);
    onSelectedModuleChange?.(portfolio.modules[index].code);
  };

  const handleNext = () => {
    selectModuleIndex((activeModuleIndex + 1) % portfolio.modules.length);
  };

  const handlePrev = () => {
    selectModuleIndex((activeModuleIndex - 1 + portfolio.modules.length) % portfolio.modules.length);
  };

  if (showIntro) {
    return (
      <div className="space-y-8 pb-12 border-b border-[#002b5b]/10">
        <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
          <FileText className="text-[#bd8a12]" size={24} />
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">ReflexÃµes</h2>
        </div>
        <div className="border border-[#002b5b]/10 bg-white p-6 sm:p-8 rounded-2xl space-y-4">
          <span className="tag">Por mÃ³dulos e atividades</span>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif">
            A reflexÃ£o por mÃ³dulos permite compreender a progressÃ£o do curso e a forma como cada etapa contribuiu para o desenvolvimento das competÃªncias associadas ao papel de formador de formadores. Os nomes das atividades correspondem aos tÃ­tulos reais usados no percurso formativo.
          </p>
          <p className="text-xs text-gray-500 italic">
            Selecione MF1, MF2, MF3, MF4, MF5 ou Global no menu lateral para consultar cada reflexÃ£o.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12 border-b border-[#002b5b]/10">
      
      {/* Title block */}
      <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
        <FileText className="text-[#bd8a12]" size={24} />
        <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
          Reflexão Crítica sobre os Módulos
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-gray-500 italic">
        Foco técnico-metodológico: explore e acrescente reflexões críticas sobre cada um dos 5 módulos didáticos ministrados pelo IEFP no Alentejo.
      </p>

      {/* Dynamic Module Tab switching with visual motion bar */}
      <div className="flex flex-wrap gap-2 border-b border-gray-150 pb-2">
        {portfolio.modules.map((mod, index) => {
          const isActive = activeModuleIndex === index;
          return (
            <button
              key={mod.id}
              onClick={() => selectModuleIndex(index)}
              className={`relative px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg transition-all duration-200 flex items-center space-x-2 ${
                isActive 
                  ? "bg-[#002b5b] text-white shadow-sm" 
                  : "bg-white hover:bg-gray-50 text-gray-600 border border-gray-200"
              }`}
              id={`module-tab-${mod.id}`}
            >
              <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-400" : "bg-gray-300"}`} />
              <span>{mod.code}</span>
            </button>
          );
        })}
      </div>

      {/* Content wrapper with framer-motion slide effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMod.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
          className="border border-[#002b5b]/5 bg-[#fcf9f8]/40 p-6 sm:p-8 rounded-2xl relative space-y-6"
        >
          {/* Workload Indicator badge */}
          <div className="absolute top-4 right-4 bg-[#bd8a12]/15 text-[#bd8a12] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full font-bold">
            {activeMod.hours}
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#002b5b] text-white flex items-center justify-center font-serif text-sm font-bold shrink-0 shadow-sm">
              {activeMod.code}
            </div>
            <div>
              {isAdmin ? (
                <input
                  type="text"
                  value={activeMod.title}
                  onChange={(e) => handleUpdateModule(activeMod.id, "title", e.target.value)}
                  className="font-serif text-base sm:text-lg font-bold text-[#001736] border-b border-dashed border-gray-300 w-full outline-none bg-transparent"
                  placeholder="Título do Módulo de Formação"
                />
              ) : (
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#001736]">
                  {activeMod.title}
                </h3>
              )}
              <p className="text-[10px] text-gray-400 font-mono mt-0.5">Módulo de Formação do Referencial IEFP de Beja</p>
            </div>
          </div>

          {/* Subsection: what I already knew */}
          <div className="space-y-2 mt-4">
            <span className="text-[10px] font-mono text-[#002b5b]/50 font-bold uppercase tracking-widest block">📌 O QUE JÁ SABIA DESTA MATÉRIA</span>
            {isAdmin ? (
              <textarea
                value={activeMod.sabia}
                onChange={(e) => handleUpdateModule(activeMod.id, "sabia", e.target.value)}
                className="w-full text-xs sm:text-sm text-gray-600 bg-transparent border border-dashed border-gray-200 rounded p-2.5 outline-none h-24 focus:border-[#bd8a12] focus:bg-white transition-all"
                placeholder="Indique conhecimentos prévios..."
              />
            ) : (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-serif bg-white p-3 rounded-lg border border-gray-100 shadow-3xs">
                {activeMod.sabia}
              </p>
            )}
          </div>

          {/* Subsection: what I learned */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono text-[#002b5b]/50 font-bold uppercase tracking-widest block">📚 CONHECIMENTOS ADQUIRIDOS (O QUE APRENDI)</span>
            <ul className="space-y-2 text-xs sm:text-sm">
              {activeMod.aprendi.map((bullet, idx) => (
                <li key={idx} className="flex items-start bg-white p-2.5 rounded-lg border border-gray-100 shadow-3xs group">
                  <span className="text-[#bd8a12] font-semibold mr-2 mt-0.5">•</span>
                  <div className="flex-1 text-gray-700">
                    {isAdmin ? (
                      <textarea
                        value={bullet}
                        onChange={(e) => {
                          const updatedBullets = [...activeMod.aprendi];
                          updatedBullets[idx] = e.target.value;
                          handleUpdateModule(activeMod.id, "aprendi", updatedBullets);
                        }}
                        className="w-full text-xs text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none resize-y"
                      />
                    ) : (
                      <span>{bullet}</span>
                    )}
                  </div>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        const updatedBullets = [...activeMod.aprendi];
                        updatedBullets.splice(idx, 1);
                        handleUpdateModule(activeMod.id, "aprendi", updatedBullets);
                        showToast("Item de conhecimento removido.");
                      }}
                      className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0 self-center"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </li>
              ))}
            </ul>

            {isAdmin && (
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="Novo conhecimento consolidado..."
                  className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none focus:border-[#bd8a12]"
                  id={`new-aprendi-${activeMod.id}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const input = e.currentTarget;
                      if (!input.value.trim()) return;
                      handleUpdateModule(activeMod.id, "aprendi", [...activeMod.aprendi, input.value.trim()]);
                      input.value = "";
                      showToast("Item adicionado.");
                    }
                  }}
                />
                <button
                  onClick={() => {
                    const input = document.getElementById(`new-aprendi-${activeMod.id}`) as HTMLInputElement;
                    if (input && input.value.trim()) {
                      handleUpdateModule(activeMod.id, "aprendi", [...activeMod.aprendi, input.value.trim()]);
                      input.value = "";
                      showToast("Item adicionado.");
                    }
                  }}
                  className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded hover:bg-[#001c3d]"
                >
                  Adicionar
                </button>
              </div>
            )}
          </div>

          {/* Subsection: Activities performed */}
          <div className="space-y-3 pt-2">
            <span className="text-[10px] font-mono text-[#002b5b]/40 font-bold uppercase tracking-widest block">📝 ATIVIDADES REALIZADAS</span>
            <div className="space-y-2">
              {activeMod.atividades.map((att, idx) => (
                <div key={idx} className="bg-white/60 p-3 rounded-lg border border-gray-250/50 group relative">
                  {isAdmin ? (
                    <textarea
                      value={att}
                      onChange={(e) => {
                        const updatedAtts = [...activeMod.atividades];
                        updatedAtts[idx] = e.target.value;
                        handleUpdateModule(activeMod.id, "atividades", updatedAtts);
                      }}
                      className="w-full text-xs text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none resize-y h-12"
                    />
                  ) : (
                    <p className="text-xs sm:text-sm text-gray-700 font-serif leading-relaxed">{att}</p>
                  )}
                  {isAdmin && (
                    <button
                      onClick={() => {
                        const updatedAtts = [...activeMod.atividades];
                        updatedAtts.splice(idx, 1);
                        handleUpdateModule(activeMod.id, "atividades", updatedAtts);
                        showToast("Registo de atividade eliminado.");
                      }}
                      className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {isAdmin && (
              <div className="flex items-center space-x-2 mt-2">
                <input
                  type="text"
                  placeholder="Nova atividade ou dinâmica estruturada..."
                  className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none focus:border-[#bd8a12]"
                  id={`new-atividades-${activeMod.id}`}
                />
                <button
                  onClick={() => {
                    const input = document.getElementById(`new-atividades-${activeMod.id}`) as HTMLInputElement;
                    if (input && input.value.trim()) {
                      handleUpdateModule(activeMod.id, "atividades", [...activeMod.atividades, input.value.trim()]);
                      input.value = "";
                      showToast("Atividade anexada.");
                    }
                  }}
                  className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded hover:bg-[#001c3d]"
                >
                  Registar
                </button>
              </div>
            )}
          </div>

          {/* Subsection: Reflection */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-[#002b5b]/40 font-bold uppercase tracking-widest block">💭 APRECIAÇÃO CRÍTICA & METAGOGIA</span>
            <div className="relative p-5 bg-[#bd8a12]/5 border-l-4 border-[#bd8a12] rounded-r">
              {isAdmin ? (
                <textarea
                  value={activeMod.reflexao}
                  onChange={(e) => handleUpdateModule(activeMod.id, "reflexao", e.target.value)}
                  className="w-full text-xs sm:text-sm text-gray-750 italic font-serif leading-relaxed bg-transparent border-b border-dashed border-gray-200 outline-none h-28 focus:bg-white/40 p-1 rounded"
                />
              ) : (
                <p className="text-xs sm:text-sm text-gray-750 italic font-serif leading-relaxed">
                  "{activeMod.reflexao}"
                </p>
              )}
            </div>
          </div>

          {/* Future application and focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-gray-150 font-sans">
            <div className="space-y-1">
              <span className="font-semibold text-[#bd8a12] uppercase tracking-wider block">Aplicação Futura na Prática Formativa:</span>
              {isAdmin ? (
                <textarea
                  value={activeMod.aplicacaoFutura}
                  onChange={(e) => handleUpdateModule(activeMod.id, "aplicacaoFutura", e.target.value)}
                  className="w-full text-xs text-gray-600 bg-transparent border border-dashed border-gray-200 rounded p-1.5 outline-none h-18 focus:bg-white"
                />
              ) : (
                <span className="text-gray-600 leading-normal block bg-white p-2 rounded border border-gray-150/50">{activeMod.aplicacaoFutura}</span>
              )}
            </div>

            <div className="space-y-1">
              <span className="font-semibold text-[#002b5b] uppercase tracking-wider block">Aspetos a Aprofundar Autonomamente:</span>
              {isAdmin ? (
                <textarea
                  value={activeMod.aspetosAprofundar}
                  onChange={(e) => handleUpdateModule(activeMod.id, "aspetosAprofundar", e.target.value)}
                  className="w-full text-xs text-gray-600 bg-transparent border border-dashed border-gray-200 rounded p-1.5 outline-none h-18 focus:bg-white"
                />
              ) : (
                <span className="text-gray-600 leading-normal block bg-white p-2 rounded border border-gray-150/50">{activeMod.aspetosAprofundar}</span>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Buttons below content to change modules quickly */}
      <div className="flex items-center justify-between pt-2">
        <button
          onClick={handlePrev}
          className="px-3 py-1.5 text-xs font-semibold text-[#002b5b] hover:bg-gray-100 rounded border border-gray-200 flex items-center space-x-1"
        >
          <ChevronLeft size={14} />
          <span>Módulo Anterior</span>
        </button>
        <div className="text-xs font-mono text-gray-400">
          Módulo {activeModuleIndex + 1} de {portfolio.modules.length}
        </div>
        <button
          onClick={handleNext}
          className="px-3 py-1.5 text-xs font-semibold text-[#002b5b] hover:bg-gray-100 rounded border border-gray-200 flex items-center space-x-1"
        >
          <span>Seguinte Módulo</span>
          <ChevronRight size={14} />
        </button>
      </div>

    </div>
  );
}

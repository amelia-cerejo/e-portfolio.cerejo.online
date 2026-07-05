/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  Plus,
  Trash2,
  Lock,
  Unlock,
  Check,
  Eye,
  EyeOff,
  Download,
  Users,
  Presentation,
  Award,
  BookOpen,
  Briefcase,
  Mail,
  RefreshCw,
  Compass,
  User,
  Target,
  BarChart2,
  FileText,
  Upload,
  Bookmark,
  ChevronRight,
  TrendingUp,
  FileDown,
  Info,
  Calendar,
  MapPin,
  FileCheck,
  Search,
  Star,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import { PortfolioData, TeacherMessage, CompetenceRow, BibReference } from "./types";
import { INITIAL_PORTFOLIO_DATA } from "./data";
import ModulesSection from "./components/ModulesSection";

export default function App() {
  // Persistence state
  const [portfolio, setPortfolio] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem("iefp_formadores_portfolio");
    let baseData = INITIAL_PORTFOLIO_DATA;
    if (saved) {
      try {
        baseData = JSON.parse(saved);
      } catch (e) {
        console.error("Erro ao carregar do localStorage", e);
      }
    }
    return baseData;
  });

  const [messages, setMessages] = useState<TeacherMessage[]>(() => {
    const saved = localStorage.getItem("iefp_formadores_messages");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: "msg1",
        senderName: "Ivone Silva (Coordenação Pedagógica)",
        senderEmail: "ivone.silva@iefp.pt",
        subject: "Parecer Técnico do e-Portfólio Reflexivo",
        content: "Estimada formanda Amélia Cerejo Lopes, o seu e-Portfólio reflete um percurso andragógico e metacognitivo de excelência, cumprindo na íntegra o referencial do IEFP. Destaque especial para a transição reflexiva desenhada no módulo MF2 com o recurso 'Profissão de Risco: Bombeiro'.",
        date: "2026-06-20 10:14"
      },
      {
        id: "msg2",
        senderName: "Joaquim Manuel Rodrigues Paulino (Formador)",
        senderEmail: "joaquim.paulino@formador.iefp.pt",
        subject: "Avaliação do Módulo 1 (DGERT/IEFP)",
        content: "Trabalho de nível muito elevado e rigoroso do ponto de vista técnico-pedagógico na formulação do perfil do 'Especialista em Promoção de Destinos no TikTok'. Parabéns pela profundidade crítica.",
        date: "2026-06-18 16:30"
      }
    ];
  });

  // User/Admin/Layout States
  const [isAdmin, setIsAdmin] = useState<boolean>(true); // Active author mode by default
  const [selectedChapter, setSelectedChapter] = useState<string>("capa");
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [hiddenChapters, setHiddenChapters] = useState<string[]>(() => {
    const saved = localStorage.getItem("iefp_formadores_hidden_chapters");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleChapterVisibility = (chapterId: string) => {
    if (chapterId === "capa") return;
    const isHidden = hiddenChapters.includes(chapterId);
    let updated: string[];
    if (isHidden) {
      updated = hiddenChapters.filter(id => id !== chapterId);
      showToast("Secção reatribuída como visível.");
    } else {
      updated = [...hiddenChapters, chapterId];
      showToast("Secção oculta do modo Leitor.");
    }
    setHiddenChapters(updated);
    localStorage.setItem("iefp_formadores_hidden_chapters", JSON.stringify(updated));
  };
  
  // Search query for bibliography references
  const [refSearch, setRefSearch] = useState("");
  const [selectedRefCategory, setSelectedRefCategory] = useState<string>("Todos");

  // New item draft states
  const [newBulkItem, setNewBulkItem] = useState("");
  const [newExpBullet, setNewExpBullet] = useState("");
  const [newMotBullet, setNewMotBullet] = useState("");
  const [newGoalBullet, setNewGoalBullet] = useState("");

  const [newShortTermGoal, setNewShortTermGoal] = useState("");
  const [newMediumTermGoal, setNewMediumTermGoal] = useState("");
  const [newPlannedTraining, setNewPlannedTraining] = useState("");

  const [newEvidenceTitle, setNewEvidenceTitle] = useState("");
  const [newEvidenceModule, setNewEvidenceModule] = useState("MF1");
  const [newEvidenceDesc, setNewEvidenceDesc] = useState("");

  const [newRefCategory, setNewRefCategory] = useState<BibReference["category"]>("Legislação");
  const [newRefCitation, setNewRefCitation] = useState("");

  const [newInboxSender, setNewInboxSender] = useState("");
  const [newInboxEmail, setNewInboxEmail] = useState("");
  const [newInboxSubject, setNewInboxSubject] = useState("");
  const [newInboxContent, setNewInboxContent] = useState("");

  // Clean Toast helper
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const savePortfolio = (updatedData: PortfolioData) => {
    setPortfolio(updatedData);
    localStorage.setItem("iefp_formadores_portfolio", JSON.stringify(updatedData));
  };

  const saveMessages = (updatedMsgs: TeacherMessage[]) => {
    setMessages(updatedMsgs);
    localStorage.setItem("iefp_formadores_messages", JSON.stringify(updatedMsgs));
  };

  // Reset portfolio safely to original state
  const handleResetData = () => {
    if (window.confirm("Pretende repor o portfólio académico de Amélia Cerejo Lopes com os dados padrão do e-Portfólio?")) {
      savePortfolio(INITIAL_PORTFOLIO_DATA);
      showToast("Portfólio reiniciado para o modelo académico oficial.");
    }
  };

  // Auth mode toggle
  const handleAuthToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
      showToast("Sessão terminada. Ativado o modo de Leitura Pública.");
    } else {
      setIsAdmin(true);
      showToast("Autenticado como Formadora. Modo de Edição Ativado.");
    }
  };

  // Single Field Update Helpers
  const updateField = (key: keyof PortfolioData, value: any) => {
    savePortfolio({ ...portfolio, [key]: value });
  };

  // Generic lists modifier helpers
  const handleRemoveBullet = (key: "experienceBullets" | "motivationBullets" | "portfolioGoalsBullets" | "goalsShortTerm" | "goalsMediumTerm" | "plannedTrainings" | "pontosFortes" | "areasDesenvolver", index: number) => {
    const list = [...portfolio[key]];
    list.splice(index, 1);
    updateField(key, list);
    showToast("Item removido com sucesso.");
  };

  const handleAddBullet = (key: "experienceBullets" | "motivationBullets" | "portfolioGoalsBullets" | "goalsShortTerm" | "goalsMediumTerm" | "plannedTrainings" | "pontosFortes" | "areasDesenvolver", text: string, setter: (val: string) => void) => {
    if (!text.trim()) return;
    const list = [...portfolio[key], text.trim()];
    updateField(key, list);
    setter("");
    showToast("Novo elemento adicionado.");
  };

  // Modules array modifiers
  const handleUpdateModule = (moduleId: string, field: string, value: any) => {
    const updatedModules = portfolio.modules.map(mod => {
      if (mod.id === moduleId) {
        return { ...mod, [field]: value };
      }
      return mod;
    });
    savePortfolio({ ...portfolio, modules: updatedModules });
  };

  const handleUpdateCompetence = (id: string, field: "antes" | "apos" | "name" | "evidences", value: any) => {
    const updatedRows = portfolio.competenceRows.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    savePortfolio({ ...portfolio, competenceRows: updatedRows });
  };

  // Add customized competence row
  const handleAddCompetenceRow = () => {
    const newRow: CompetenceRow = {
      id: "comp_" + Date.now(),
      name: "Nova Competência Pedagógica",
      antes: 2,
      apos: 4,
      evidences: "Novas evidências ou simulações letivas"
    };
    savePortfolio({ ...portfolio, competenceRows: [...portfolio.competenceRows, newRow] });
    showToast("Nova competência catalogada.");
  };

  const handleDeleteCompetenceRow = (id: string) => {
    const filtered = portfolio.competenceRows.filter(row => row.id !== id);
    savePortfolio({ ...portfolio, competenceRows: filtered });
    showToast("Competência removida.");
  };

  // Evidence list modifiers
  const handleAddEvidence = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEvidenceTitle.trim()) return;
    const newEv = {
      id: "ev_" + Date.now(),
      moduleCode: newEvidenceModule,
      title: newEvidenceTitle.trim(),
      description: newEvidenceDesc.trim() || "Sem descrição"
    };
    savePortfolio({ ...portfolio, evidences: [...portfolio.evidences, newEv] });
    setNewEvidenceTitle("");
    setNewEvidenceDesc("");
    showToast("Evidência adicionada.");
  };

  const handleDeleteEvidence = (id: string) => {
    const filtered = portfolio.evidences.filter(ev => ev.id !== id);
    savePortfolio({ ...portfolio, evidences: filtered });
    showToast("Evidência removida.");
  };

  // Bibliographic References modifiers
  const handleAddReference = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRefCitation.trim()) return;
    const newRef: BibReference = {
      id: "ref_" + Date.now(),
      category: newRefCategory,
      citation: newRefCitation.trim()
    };
    savePortfolio({ ...portfolio, references: [...portfolio.references, newRef] });
    setNewRefCitation("");
    showToast("Referência bibliográfica adicionada.");
  };

  const handleDeleteReference = (id: string) => {
    const filtered = portfolio.references.filter(ref => ref.id !== id);
    savePortfolio({ ...portfolio, references: filtered });
    showToast("Referência eliminada.");
  };

  // Incoming peer review messages handler
  const handleSendInboxMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInboxSender.trim() || !newInboxContent.trim()) {
      showToast("Por favor preencha o remetente e o conteúdo da reflexão.");
      return;
    }
    const newMsg: TeacherMessage = {
      id: "msg_" + Date.now(),
      senderName: newInboxSender.trim(),
      senderEmail: newInboxEmail.trim() || "colegapedagogico@iefp.pt",
      subject: newInboxSubject.trim() || "Reflexão sobre e-Portfólio",
      content: newInboxContent.trim(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };
    saveMessages([newMsg, ...messages]);
    setNewInboxSender("");
    setNewInboxEmail("");
    setNewInboxSubject("");
    setNewInboxContent("");
    showToast("Comentário académico submetido com sucesso.");
  };

  const handleDeleteMessage = (id: string) => {
    const filtered = messages.filter(m => m.id !== id);
    saveMessages(filtered);
    showToast("Comentário pedagógico arquivado.");
  };

  // Printable Export triggers
  const triggerPrint = () => {
    window.print();
  };

  // Dynamic completion metrics of the portfolio
  const calculateProgress = () => {
    let score = 0;
    const total = 8;
    if (portfolio.personalBio && portfolio.personalBio.length > 50) score++;
    if (portfolio.goalsQuote && portfolio.goalsQuote.length > 20) score++;
    if (portfolio.experienceBullets && portfolio.experienceBullets.length > 0) score++;
    if (portfolio.modules && portfolio.modules.every(m => m.reflexao && m.reflexao.length > 30)) {
      score += 2;
    } else if (portfolio.modules && portfolio.modules.some(m => m.reflexao && m.reflexao.length > 20)) {
      score += 1;
    }
    if (portfolio.competenceRows && portfolio.competenceRows.length > 0) score++;
    if (portfolio.evidences && portfolio.evidences.length > 0) score++;
    if (messages && messages.length > 0) score++;
    return Math.min(Math.round((score / total) * 100), 100);
  };

  const progressPct = calculateProgress();

  // Chapter definition for rendering and routing - completely un-numbered!
  const chapters = [
    { id: "capa", label: "Capa & Ficha Identificativa", icon: BookOpen, desc: "Capa institucional com ficha de identificação pedagógica." },
    { id: "apresentacao", label: "Apresentação Pessoal", icon: User, desc: "A biografia, percurso profissional e motivação na andragogia." },
    { id: "objetivos", label: "Objetivos do e-Portfólio", icon: Target, desc: "Fins pedagógicos, metacognitivos e autoavaliação continuada." },
    { id: "reflexao_modulos", label: "Reflexão sobre os Módulos", icon: FileText, desc: "Crítica aos cinco módulos didáticos de formador de formadores." },
    { id: "autoavaliacao", label: "Autoavaliação", icon: BarChart2, desc: "Balanço de competências comparativo (Antes vs Após) e matriz SWOT." },
    { id: "sintese_global", label: "Síntese Reflexiva", icon: Award, desc: "Consolidação e compromisso ético-pedagógico da prática formativa." },
    { id: "expectativas_futuras", label: "Metas & Projetos de Futuro", icon: TrendingUp, desc: "Objetivos de curto e médio prazo de formação profissional." },
    { id: "evidencias", label: "Repositório de Evidências", icon: Bookmark, desc: "Trabalhos práticos, recursos e simulações científicas criadas." },
    { id: "bibliografia", label: "Referências Académicas", icon: Info, desc: "Apoio legislativo, manuais e fontes teóricas do percurso." },
    { id: "inbox", label: "Pareceres & Comentários", icon: Mail, desc: "Notas críticas de formadores, colegas e coordenação técnica." }
  ];

  const visibleChapters = chapters.filter(c => isAdmin || !hiddenChapters.includes(c.id));
  const currentIdx = visibleChapters.findIndex(c => c.id === selectedChapter);
  const prevChapter = currentIdx > 0 ? visibleChapters[currentIdx - 1] : null;
  const nextChapter = currentIdx < visibleChapters.length - 1 ? visibleChapters[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-[#fcf9f8] text-[#1c1b1b] font-sans flex flex-col justify-between selection:bg-[#002b5b]/10 selection:text-[#001736]">
      
      {/* Topbar navigation bar */}
      <header className="sticky top-0 bg-[#fcf9f8]/95 backdrop-blur-md border-b border-[#002b5b]/10 z-30 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 -ml-2 text-[#002b5b] hover:bg-[#002b5b]/5 rounded-lg transition-colors cursor-pointer shrink-0"
              aria-label="Toggle menu"
              id="menu-toggle-btn"
              title="Alternar Menu Lateral (Modo Site / Modo Foco)"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div 
              onClick={() => setSelectedChapter("capa")}
              className="w-10 h-10 bg-[#002b5b] rounded text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm border border-[#002b5b]/10 cursor-pointer hover:bg-[#001c3d] transition-colors shrink-0"
            >
              EP
            </div>
            <div className="flex flex-col cursor-pointer" onClick={() => setSelectedChapter("capa")}>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#001736] hover:text-[#bd8a12] transition-colors">
                e-Portfólio
              </span>
              <span className="text-[10px] sm:text-xs text-[#002b5b]/60 hidden sm:block font-medium">
                {portfolio.formanda}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Quick jump dropdown selector - No Numbers! */}
            <div className="relative">
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="bg-white border border-[#002b5b]/15 text-[#002b5b] font-medium text-xs rounded-md px-2.5 py-1.5 focus:ring-1 focus:ring-[#bd8a12] outline-none cursor-pointer hover:bg-gray-50 max-w-[160px] sm:max-w-xs"
                id="chapter-quick-dropdown"
              >
                {chapters
                  .filter((ch) => isAdmin || !hiddenChapters.includes(ch.id))
                  .map((ch) => (
                    <option key={ch.id} value={ch.id}>
                      {hiddenChapters.includes(ch.id) ? `📝 [Oculto] ${ch.label}` : ch.label}
                    </option>
                  ))}
              </select>
            </div>

            <button
              onClick={triggerPrint}
              className="px-3 py-1.5 text-xs font-semibold bg-white text-[#002b5b] border border-[#002b5b]/20 rounded-md hover:bg-gray-50 flex items-center space-x-1.5 transition-colors"
              id="download-pdf-btn"
            >
              <FileDown size={14} />
              <span className="hidden sm:inline">Exportar / Imprimir</span>
            </button>

            <button
              onClick={handleAuthToggle}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md flex items-center space-x-1.5 transition-all ${
                isAdmin 
                  ? "bg-[#002b5b] text-white hover:bg-[#001c3d]" 
                  : "bg-white border border-[#bd8a12] text-[#bd8a12] hover:bg-amber-50"
              }`}
              id="auth-toggle-btn"
            >
              {isAdmin ? <Lock size={13} /> : <Unlock size={13} />}
              <span>{isAdmin ? "Sair" : "Entrar como Formador"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main layout container - Elegant full-canvas presentation or split-column site structure depending on sidebar state */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8 items-start relative select-none">
        
        {/* Dynamic Navigation index drawer/sidebar - NOT rigid, NOT numbered, NOT fixed, fully toggleable! */}
        {isSidebarOpen && (
          <aside
            className={`fixed inset-y-0 left-0 z-40 w-72 bg-[#fcf9f8] border-r border-[#002b5b]/10 p-6 transform transition-transform duration-305 lg:sticky lg:top-24 lg:translate-x-0 lg:p-0 lg:bg-transparent lg:border-r-0 lg:z-10 shrink-0 ${
              isSidebarOpen ? "translate-x-0 shadow-2xl lg:shadow-none" : "-translate-x-full"
            }`}
            id="academic-sidebar"
          >
            <div className="flex items-center justify-between lg:hidden mb-6">
              <span className="font-serif font-bold text-[#001736] text-base">Menu Literário</span>
              <button 
                onClick={() => setIsSidebarOpen(false)} 
                className="p-1.5 rounded-full hover:bg-[#002b5b]/5 transition-colors cursor-pointer"
                id="close-sidebar-mobile-btn"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="space-y-1.5 lg:max-h-[calc(100vh-12rem)] lg:overflow-y-auto pr-1 bg-white lg:bg-white/40 border border-[#002b5b]/15 p-4 rounded-xl shadow-xs w-full">
              <div className="text-[10px] font-mono text-[#002b5b]/50 font-bold uppercase tracking-widest px-3 mb-2">
                Roteiro do e-Portfólio
              </div>
              
              <div className="space-y-1 block">
                {chapters
                  .filter((ch) => isAdmin || !hiddenChapters.includes(ch.id))
                  .map((ch) => {
                    const IconComp = ch.icon;
                    const isActive = selectedChapter === ch.id;
                    const isHidden = hiddenChapters.includes(ch.id);
                    return (
                      <div key={ch.id} className="flex items-center group w-full justify-between gap-1">
                        <button
                          onClick={() => {
                            setSelectedChapter(ch.id);
                            if (window.innerWidth < 1024) {
                              setIsSidebarOpen(false);
                            }
                            window.scrollTo({ top: 0, behavior: "smooth" });
                            showToast(`Acedeu a: ${ch.label}`);
                          }}
                          className={`flex-1 text-left px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-155 flex items-center justify-between rounded-lg ${
                            isActive 
                              ? "bg-[#002b5b]/8 text-[#bd8a12] font-semibold border-l-4 border-[#bd8a12]" 
                              : isHidden
                                ? "text-[#002b5b]/35 hover:bg-[#002b5b]/5 hover:text-[#002b5b]/50"
                                : "text-[#002b5b]/70 hover:bg-[#002b5b]/5 hover:text-[#002b5b]"
                          }`}
                          id={`nav-link-${ch.id}`}
                        >
                          <div className="flex items-center space-x-2 w-full min-w-0">
                            <IconComp size={14} className={isActive ? "text-[#bd8a12]" : isHidden ? "text-[#002b5b]/30" : "text-[#002b5b]/50 group-hover:text-[#002b5b]"} />
                            <span className="truncate flex-1">{ch.label}</span>
                            {isHidden && (
                              <span className="text-[8px] bg-amber-100/70 text-[#bd8a12] font-mono uppercase px-1 py-0.5 rounded font-bold shrink-0 scale-90">
                                Rascunho
                              </span>
                            )}
                          </div>
                        </button>
                        
                        {isAdmin && ch.id !== "capa" && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleChapterVisibility(ch.id);
                            }}
                            className="p-1.5 text-gray-400 hover:text-[#bd8a12] hover:bg-gray-100 rounded transition-colors cursor-pointer shrink-0"
                            title={isHidden ? "Atualmente oculto para visitantes. Clique para colocar visível." : "Atualmente visível para visitantes. Clique para ocultar."}
                          >
                            {isHidden ? <EyeOff size={13} className="text-[#bd8a12]" /> : <Eye size={13} />}
                          </button>
                        )}
                      </div>
                    );
                  })}
              </div>

              <div className="pt-3 mt-3 border-t border-[#002b5b]/10 px-2 lg:block">
                <div className="p-2.5 bg-white/70 hover:bg-amber-50/40 rounded-lg border border-[#bd8a12]/15 transition-all">
                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-[#bd8a12] font-semibold uppercase tracking-wider mb-1">
                    <Award size={11} />
                    <span>Validado IEFP Beja</span>
                  </div>
                  <p className="text-[10px] text-gray-500 font-serif italic leading-relaxed">
                    Referencial homologado para Formador de Formadores.
                  </p>
                </div>
              </div>
            </nav>
          </aside>
        )}

        {/* Mobile menu backdrop shadow */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/15 z-30 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
            id="sidebar-overlay-mobile"
          />
        )}

        {/* Right workspace container - collapses centered or fits layout alongside */}
        <div className={`flex-1 w-full flex flex-col gap-6 ${isSidebarOpen ? "lg:max-w-[calc(100%-19.5rem)]" : "max-w-4xl mx-auto"}`}>
          
          {/* Dynamic Completion progress bar */}
          <div className="bg-white border border-[#002b5b]/10 rounded-xl p-4 shadow-3xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <div className="w-2.5 h-2.5 rounded-full bg-[#bd8a12] animate-pulse shrink-0" />
            <div className="text-xs">
              <span className="font-semibold text-gray-500">Progresso Metacognitivo:</span>{" "}
              <b className="text-[#002b5b] font-mono">{progressPct}%</b>
            </div>
          </div>
          <div className="w-full sm:flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#bd8a12] to-[#002b5b] rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          
          <div className="flex items-center space-x-2 shrink-0">
            {isAdmin && (
              <button
                onClick={handleResetData}
                className="text-[10px] font-semibold text-[#bd8a12] bg-[#bd8a12]/5 hover:bg-[#bd8a12]/10 border border-[#bd8a12]/15 px-2.5 py-1 rounded transition-all"
              >
                Repor Modelo
              </button>
            )}
            <div className="px-2 py-0.5 bg-green-50 text-green-700 border border-green-200 rounded text-[9px] font-mono font-bold uppercase tracking-wider">
              IEFP Beja
            </div>
          </div>
        </div>

        {/* Dynamic content rendering zone - Full Width Canvas */}
        <main className="flex-1 w-full bg-white border border-[#002b5b]/10 rounded-xl shadow-sm p-6 sm:p-10 md:p-12 relative overflow-hidden" id="workspace-canvas">
          
          {/* Subtle elegant watermarks and aesthetics to convey standard thesis aesthetics */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#002b5b]/5 to-transparent rounded-bl-full pointer-events-none" />
          
          {selectedChapter !== "capa" && (
            <div className="mb-8 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 select-none" id="chapter-top-bar">
              <button
                onClick={() => setSelectedChapter("capa")}
                className="flex items-center space-x-2 text-xs font-semibold text-[#002b5b] hover:text-[#bd8a12] transition-colors group shrink-0"
              >
                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                <span>◄ Painel de Navegação</span>
              </button>
              
              <div className="flex items-center space-x-3 text-xs">
                {prevChapter && (
                  <button
                    onClick={() => setSelectedChapter(prevChapter.id)}
                    className="px-2.5 py-1.5 text-gray-500 hover:text-[#002b5b] hover:bg-gray-50 border border-gray-200 rounded-lg text-xs transition-all flex items-center space-x-1 cursor-pointer font-medium"
                    title={`Anterior: ${prevChapter.label}`}
                  >
                    <span>◄</span>
                  </button>
                )}
                
                <span className="font-sans font-bold text-[#001736] bg-[#002b5b]/5 px-3.5 py-1.5 rounded-lg text-xs">
                  {chapters.find(c => c.id === selectedChapter)?.label}
                </span>

                {nextChapter && (
                  <button
                    onClick={() => setSelectedChapter(nextChapter.id)}
                    className="px-2.5 py-1.5 text-[#002b5b] hover:text-white hover:bg-[#002b5b] border border-gray-300 rounded-lg text-xs transition-all flex items-center space-x-1 cursor-pointer font-bold"
                    title={`Seguinte: ${nextChapter.label}`}
                  >
                    <span>Seguinte ►</span>
                  </button>
                )}
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <div className="space-y-12">
              
              {!isAdmin && hiddenChapters.includes(selectedChapter) ? (
                <motion.section
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="bg-white border border-[#002b5b]/10 rounded-2xl p-10 sm:p-16 text-center space-y-6 shadow-3xs max-w-2xl mx-auto my-12"
                  id="section-under-construction"
                >
                  <div className="mx-auto w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center border border-amber-200">
                    <FileText className="text-[#bd8a12]" size={30} />
                  </div>
                  <div className="space-y-2">
                    <h2 className="font-serif text-2xl font-bold text-[#001736]">
                      Secção em Elaboração
                    </h2>
                    <p className="text-[10px] font-mono tracking-widest text-[#bd8a12] font-bold uppercase">
                      Documento temporariamente reservado
                    </p>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm font-serif leading-relaxed max-w-md mx-auto italic">
                    "Esta secção encontra-se atualmente em fase de redação, reflexão crítica e revisão pedagógica pela autora. Estará visível assim que o módulo de formação associado for concluído com aproveitamento."
                  </p>
                  <div className="pt-4 flex justify-center pb-2">
                    <button
                      onClick={() => {
                        setSelectedChapter("capa");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="px-5 py-2.5 bg-[#002b5b] hover:bg-[#001c3d] text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer select-none"
                    >
                      Voltar à Capa Principal
                    </button>
                  </div>
                </motion.section>
              ) : selectedChapter === "capa" ? (
                <motion.section 
                  id="sec-capa" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-12 pb-12"
                >
                  <div className="text-center space-y-4 pt-4">
                    <p className="text-xs sm:text-sm font-mono tracking-widest text-[#bd8a12] font-bold uppercase">
                      {portfolio.entidadeFormadora}
                    </p>
                    <div className="h-0.5 w-16 bg-[#002b5b]/20 mx-auto" />
                    <p className="text-xs sm:text-sm font-serif tracking-wide text-gray-600">
                      {portfolio.delegacaoRegional} • {portfolio.servico}
                    </p>
                  </div>

                  <div className="py-12 text-center space-y-6">
                    {isAdmin ? (
                      <div className="max-w-2xl mx-auto space-y-3">
                        <input
                          type="text"
                          value={portfolio.title}
                          onChange={(e) => updateField("title", e.target.value)}
                          className="w-full text-center font-serif text-3xl sm:text-4xl font-extrabold text-[#001736] focus:ring-1 focus:ring-[#bd8a12] border-b border-dashed border-gray-300 pb-2 bg-transparent outline-none"
                          placeholder="Título do Portfólio"
                        />
                        <textarea
                          value={portfolio.subtitle}
                          onChange={(e) => updateField("subtitle", e.target.value)}
                          className="w-full text-center text-sm text-[#002b5b]/70 font-semibold focus:ring-1 focus:ring-[#bd8a12] border-b border-dashed border-gray-300 bg-transparent outline-none py-1 h-12 resize-none"
                          placeholder="Subtítulo do Portfólio"
                        />
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#001736] leading-tight tracking-tight">
                          {portfolio.title}
                        </h1>
                        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#002b5b]/70 font-medium">
                          {portfolio.subtitle}
                        </p>
                      </div>
                    )}
                    <span className="inline-block bg-[#002b5b]/5 text-[#002b5b] font-mono text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded">
                      Documento Científico-Pedagógico Refinado
                    </span>
                  </div>

                  {/* Structured high fidelity cover table */}
                  <div className="max-w-2xl mx-auto bg-[#fcf9f8]/80 border border-[#002b5b]/10 rounded-lg p-6 sm:p-8 space-y-4">
                    <h3 className="font-serif font-bold text-sm text-[#001736] uppercase tracking-wider border-b border-[#002b5b]/10 pb-2">
                      Ficha de Identificação Curricular
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-400 font-mono block">Formanda</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.formanda}
                            onChange={(e) => updateField("formanda", e.target.value)}
                            className="font-serif font-semibold text-sm text-[#001736] border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-serif font-bold text-sm text-[#001736]">{portfolio.formanda}</span>
                        )}
                      </div>
                      
                      <div>
                        <span className="text-gray-400 font-mono block">Curso</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.curso}
                            onChange={(e) => updateField("curso", e.target.value)}
                            className="font-semibold text-[#001736] border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-semibold text-[#001736]">{portfolio.curso}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-gray-400 font-mono block">Forma de Organização</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.formaOrganizacao}
                            onChange={(e) => updateField("formaOrganizacao", e.target.value)}
                            className="font-semibold text-gray-800 border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-semibold text-gray-800">{portfolio.formaOrganizacao}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-gray-400 font-mono block">Período de Formação</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.periodoFormacao}
                            onChange={(e) => updateField("periodoFormacao", e.target.value)}
                            className="font-semibold text-gray-800 border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-semibold text-gray-800">{portfolio.periodoFormacao}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-gray-400 font-mono block">Coordenadora Pedagógica</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.coordenadoraPedagogica}
                            onChange={(e) => updateField("coordenadoraPedagogica", e.target.value)}
                            className="font-semibold text-gray-800 border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-semibold text-gray-800">{portfolio.coordenadoraPedagogica}</span>
                        )}
                      </div>

                      <div>
                        <span className="text-gray-400 font-mono block">Detentora do Certificado CCP</span>
                        {isAdmin ? (
                          <input
                            type="text"
                            value={portfolio.ccp}
                            onChange={(e) => updateField("ccp", e.target.value)}
                            className="font-serif text-[#bd8a12] border-b border-dashed border-gray-300 w-full outline-none"
                          />
                        ) : (
                          <span className="font-serif font-semibold text-[#bd8a12]">{portfolio.ccp}</span>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <span className="text-gray-400 font-mono block">Conselho de Formadores</span>
                        <div className="space-y-1 mt-1 text-gray-800">
                           {portfolio.formadores.map((formador, fIdx) => (
                            <div key={fIdx} className="flex items-center space-x-2">
                              <span className="h-1 w-1 rounded-full bg-[#bd8a12]" />
                              {isAdmin ? (
                                <input
                                  type="text"
                                  value={formador}
                                  onChange={(e) => {
                                    const nextF = [...portfolio.formadores];
                                    nextF[fIdx] = e.target.value;
                                    updateField("formadores", nextF);
                                  }}
                                  className="font-semibold border-b border-dashed border-gray-300 w-full outline-none"
                                />
                              ) : (
                                <span className="font-semibold">{formador}</span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#002b5b]/5 text-[10px] text-gray-400 text-center font-mono uppercase tracking-wider flex items-center justify-between">
                      <span>Ref: 3.ª Edição (Janeiro 2022)</span>
                      <span>{portfolio.dataElaboracao}</span>
                    </div>
                  </div>

                  {/* PAINEL DE NAVEGAÇÃO AUTÓNOMA (EX-ÍNDICE) */}
                  <div className="pt-12 border-t border-[#002b5b]/10 space-y-6">
                    <div className="flex flex-col space-y-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#bd8a12]">Roteiro Pedagógico</span>
                      <h3 className="font-serif font-bold text-xl sm:text-2xl text-[#001736]">Dimensões do e-Portfólio</h3>
                      <p className="text-xs text-gray-500">
                        Selecione um dos capítulos estruturais do portfólio para consultar os registos e reflexões pedagógicas:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {chapters.filter(ch => ch.id !== "capa").map((ch) => {
                        const IconComp = ch.icon;
                        return (
                          <button
                            key={ch.id}
                            onClick={() => {
                              setSelectedChapter(ch.id);
                              window.scrollTo({ top: 0, behavior: "smooth" });
                              showToast(`Consultando ${ch.label}`);
                            }}
                            className="text-left bg-white border border-[#002b5b]/10 hover:border-[#bd8a12]/30 p-5 rounded-xl transition-all duration-200 group hover:shadow-sm"
                          >
                            <div className="flex items-start space-x-4">
                              <div className="p-3 bg-[#002b5b]/5 text-[#002b5b] group-hover:bg-[#bd8a12]/10 group-hover:text-[#bd8a12] rounded-lg transition-colors shrink-0">
                                <IconComp size={20} />
                              </div>
                              <div className="space-y-1">
                                <h4 className="font-serif font-bold text-[#001736] group-hover:text-[#bd8a12] transition-colors text-sm sm:text-base">
                                  {ch.label}
                                </h4>
                                <p className="text-xs text-gray-500 leading-relaxed font-light">
                                  {ch.desc}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </motion.section>
              ) : null}

              {/* SECTION 1: APRESENTAÇÃO PESSOAL */}
              {selectedChapter === "apresentacao" ? (
                <motion.section 
                  id="sec-apresentacao" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-8 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <User className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      1. Apresentação Pessoal
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-4 flex flex-col items-center p-4 bg-[#fcf9f8] rounded-xl border border-gray-150 text-center">
                      <div className="w-24 h-24 rounded-full bg-[#002b5b]/5 border-2 border-[#bd8a12] flex items-center justify-center font-serif text-3xl font-bold text-[#002b5b] shadow-inner mb-4">
                        AC
                      </div>
                      <h4 className="font-serif font-bold text-base text-[#001736]">{portfolio.formanda}</h4>
                      <p className="text-xs text-[#bd8a12] font-mono mt-1 uppercase tracking-wider">{portfolio.signatureRole}</p>
                      
                      <div className="w-full mt-6 pt-6 border-t border-gray-200 text-left space-y-3 text-xs text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin size={12} className="text-[#bd8a12]" />
                          <span>Beja, Alentejo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FileCheck size={12} className="text-[#bd8a12]" />
                          <span>CCP n.º EDF 407745/2006 DL</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar size={12} className="text-[#bd8a12]" />
                          <span>Atividade desde 2006</span>
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-3">
                        <h3 className="font-serif font-bold text-lg text-[#001736]">1.1. Identificação e Contexto Profissional</h3>
                        {isAdmin ? (
                          <textarea
                            value={portfolio.personalBio}
                            onChange={(e) => updateField("personalBio", e.target.value)}
                            className="w-full text-sm sm:text-base text-gray-700 leading-relaxed border border-dashed border-gray-300 p-3 rounded bg-transparent focus:ring-1 focus:ring-[#bd8a12] outline-none h-40"
                            placeholder="Biografia da formadora"
                          />
                        ) : (
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif">
                            {portfolio.personalBio}
                          </p>
                        )}
                      </div>

                      {/* Professional experience lists */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-mono uppercase tracking-widest text-[#002b5b]/40 font-bold">Resumo d0 Percurso</h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                          {portfolio.experienceBullets.map((bullet, idx) => (
                            <li key={idx} className="flex items-start space-x-2 bg-gray-50/50 p-2.5 rounded border border-gray-100 group">
                              <span className="text-[#bd8a12] font-bold mt-0.5">✓</span>
                              <div className="flex-1">
                                {isAdmin ? (
                                  <input
                                    type="text"
                                    value={bullet}
                                    onChange={(e) => {
                                      const updated = [...portfolio.experienceBullets];
                                      updated[idx] = e.target.value;
                                      updateField("experienceBullets", updated);
                                    }}
                                    className="w-full text-xs sm:text-sm text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none"
                                  />
                                ) : (
                                  <span>{bullet}</span>
                                )}
                              </div>
                              {isAdmin && (
                                <button
                                  onClick={() => handleRemoveBullet("experienceBullets", idx)}
                                  className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
                                >
                                  <Trash2 size={12} />
                                </button>
                              )}
                            </li>
                          ))}
                        </ul>

                        {isAdmin && (
                          <div className="flex items-center space-x-2 mt-2 pt-2">
                            <input
                              type="text"
                              value={newExpBullet}
                              onChange={(e) => setNewExpBullet(e.target.value)}
                              placeholder="Anexar detalhe do percurso profissional..."
                              className="flex-1 text-xs px-3 py-1.5 border border-gray-200 rounded outline-none focus:border-[#bd8a12]"
                            />
                            <button
                              onClick={() => handleAddBullet("experienceBullets", newExpBullet, setNewExpBullet)}
                              className="px-3 py-1.5 bg-[#bd8a12] text-white text-xs font-bold rounded hover:bg-[#ab7c0e] flex items-center space-x-1"
                            >
                              <Plus size={12} />
                              <span>Acrescentar</span>
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Motivation */}
                      <div className="space-y-4 pt-4 border-t border-gray-100">
                        <h3 className="font-serif font-bold text-lg text-[#001736]">1.2. Motivação para o Curso de Formador de Formadores</h3>
                        <p className="text-xs text-gray-500 italic">As motivações que impulsionam o investimento contínuo e técnico-pedagógico na andragogia:</p>
                        
                        <div className="space-y-3">
                          {portfolio.motivationBullets.map((bullet, idx) => (
                            <div key={idx} className="p-3 bg-amber-50/20 border-l-4 border-[#bd8a12] rounded-r group relative">
                              <span className="text-[10px] font-mono text-[#bd8a12] block mb-1 uppercase font-semibold">Motivação {idx + 1}</span>
                              {isAdmin ? (
                                <textarea
                                  value={bullet}
                                  onChange={(e) => {
                                    const updated = [...portfolio.motivationBullets];
                                    updated[idx] = e.target.value;
                                    updateField("motivationBullets", updated);
                                  }}
                                  className="w-full text-xs text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none resize-y h-16"
                                />
                              ) : (
                                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-serif">{bullet}</p>
                              )}

                              {isAdmin && (
                                <button
                                  onClick={() => handleRemoveBullet("motivationBullets", idx)}
                                  className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                  <Trash2 size={12} />
                                </button>
                              )}
                            </div>
                          ))}
                        </div>

                        {isAdmin && (
                          <div className="flex items-center space-x-2 mt-2 pt-1">
                            <input
                              type="text"
                              value={newMotBullet}
                              onChange={(e) => setNewMotBullet(e.target.value)}
                              placeholder="Acrescentar argumento motivacional..."
                              className="flex-1 text-xs px-3 py-1.5 border border-gray-200 rounded outline-none"
                            />
                            <button
                              onClick={() => handleAddBullet("motivationBullets", newMotBullet, setNewMotBullet)}
                              className="px-3 py-1.5 bg-[#bd8a12] text-white text-xs font-bold rounded hover:bg-[#ab7c0e] flex items-center space-x-1"
                            >
                              <Plus size={12} />
                              <span>Adicionar</span>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.section>
              ) : null}

              {/* SECTION 2: OBJETIVOS DO E-PORTFOLIO */}
              {selectedChapter === "objetivos" ? (
                <motion.section 
                  id="sec-objetivos" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-8 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <Target className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      2. Objetivos do e-Portfolio
                    </h2>
                  </div>

                  <div className="space-y-6">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Este e-portfólio constitui uma ferramenta andragógica de valor inestimável para estruturar a autoavaliação continuada. Ele persegue os seguintes objetivos fundamentais:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {portfolio.portfolioGoalsBullets.map((bullet, idx) => (
                        <div key={idx} className="p-4 bg-[#fcf9f8] border border-gray-150 rounded-xl flex items-start space-x-3 group hover:border-[#bd8a12]/30 transition-all">
                          <span className="w-6 h-6 rounded-full bg-[#bd8a12]/10 text-[#bd8a12] font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <div className="flex-1">
                            {isAdmin ? (
                              <textarea
                                value={bullet}
                                onChange={(e) => {
                                  const updated = [...portfolio.portfolioGoalsBullets];
                                  updated[idx] = e.target.value;
                                  updateField("portfolioGoalsBullets", updated);
                                }}
                                className="w-full text-xs text-[#001736] bg-transparent border-b border-dashed border-gray-200 outline-none resize-none h-14"
                              />
                            ) : (
                              <p className="text-xs sm:text-sm text-[#001736] font-serif leading-relaxed">
                                {bullet}
                              </p>
                            )}
                          </div>
                          {isAdmin && (
                            <button
                              onClick={() => handleRemoveBullet("portfolioGoalsBullets", idx)}
                              className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity self-center"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    {isAdmin && (
                      <div className="flex items-center space-x-2 pt-2">
                        <input
                          type="text"
                          value={newGoalBullet}
                          onChange={(e) => setNewGoalBullet(e.target.value)}
                          placeholder="Catalogar novo objetivo do instrumento de avaliação..."
                          className="flex-1 text-xs px-3 py-1.5 border border-gray-200 rounded outline-none"
                        />
                        <button
                          onClick={() => handleAddBullet("portfolioGoalsBullets", newGoalBullet, setNewGoalBullet)}
                          className="px-3 py-1.5 bg-[#bd8a12] text-white text-xs font-bold rounded hover:bg-[#ab7c0e] flex items-center space-x-1"
                        >
                          <Plus size={12} />
                          <span>Acrescentar</span>
                        </button>
                      </div>
                    )}

                    <div className="relative p-6 bg-amber-50/10 border-l-4 border-[#bd8a12] rounded-r mt-6">
                      <span className="absolute bottom-2 right-4 font-serif text-6xl text-[#bd8a12]/5 pointer-events-none">”</span>
                      {isAdmin ? (
                        <textarea
                          value={portfolio.goalsQuote}
                          onChange={(e) => updateField("goalsQuote", e.target.value)}
                          className="w-full text-xs sm:text-sm text-gray-600 italic font-serif leading-relaxed bg-transparent border-b border-dashed border-gray-200 outline-none h-14"
                        />
                      ) : (
                        <p className="text-xs sm:text-sm text-gray-650 italic font-serif leading-relaxed">
                          "{portfolio.goalsQuote}"
                        </p>
                      )}
                    </div>
                  </div>
                </motion.section>
              ) : null}

              {/* SECTION: REFLEXÃO CRÍTICA SOBRE OS MÓDULOS */}
              {selectedChapter === "reflexao_modulos" ? (
                <ModulesSection
                  portfolio={portfolio}
                  isAdmin={isAdmin}
                  handleUpdateModule={handleUpdateModule}
                  showToast={showToast}
                />
              ) : null}

              {/* SECTION 4: AUTOAVALIAÇÃO DE COMPETÊNCIAS */}
              {selectedChapter === "autoavaliacao" ? (
                <motion.section 
                  id="sec-autoavaliacao" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <BarChart2 className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      4. Autoavaliação de Competências
                    </h2>
                  </div>

                  {/* Rating comparison table */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif font-bold text-lg text-[#001736]">
                        4.1. Competências Desenvolvidas no Curso de Formador de Formadores
                      </h3>
                      {isAdmin && (
                        <button
                          onClick={handleAddCompetenceRow}
                          className="px-3 py-1.5 bg-[#bd8a12] text-white text-xs font-bold rounded hover:bg-[#ab7c0e] flex items-center space-x-1"
                        >
                          <Plus size={12} />
                          <span>Adicionar Métrica</span>
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gray-400">Classifique as competências de 1 a 5 estrelas comparando o estado técnico antes vs após o CFF:</p>

                    <div className="overflow-x-auto border border-gray-200 rounded-xl bg-white shadow-3xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-gray-50 border-b border-gray-200 text-gray-500 font-mono tracking-wider text-[10px] uppercase">
                            <th className="p-4 font-bold">Variável / Competência</th>
                            <th className="p-4 font-bold text-center w-32">Antes CFF</th>
                            <th className="p-4 font-bold text-center w-32">Após CFF</th>
                            <th className="p-4 font-bold hidden sm:table-cell">Evidências / Justificação</th>
                            {isAdmin && <th className="p-4 text-center w-12">Ações</th>}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-150">
                          {portfolio.competenceRows.map((row) => (
                            <tr key={row.id} className="hover:bg-[#fcf9f8]/30 transition-colors">
                              <td className="p-4 font-medium text-[#001736]">
                                {isAdmin ? (
                                  <input
                                    type="text"
                                    value={row.name}
                                    onChange={(e) => handleUpdateCompetence(row.id, "name", e.target.value)}
                                    className="font-medium text-[#001736] bg-transparent border-b border-dashed border-gray-300 w-full outline-none"
                                  />
                                ) : (
                                  <span>{row.name}</span>
                                )}
                              </td>
                              <td className="p-4 text-center whitespace-nowrap">
                                <div className="inline-flex space-x-0.5 justify-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                      key={star}
                                      disabled={!isAdmin}
                                      onClick={() => handleUpdateCompetence(row.id, "antes", star)}
                                      className={`p-0.5 transition-transform ${isAdmin ? "hover:scale-120 cursor-pointer" : ""}`}
                                    >
                                      <Star
                                        size={13}
                                        className={star <= row.antes ? "text-gray-400 fill-gray-300" : "text-gray-200"}
                                      />
                                    </button>
                                  ))}
                                </div>
                              </td>
                              <td className="p-4 text-center whitespace-nowrap">
                                <div className="inline-flex space-x-0.5 justify-center">
                                  {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                      key={star}
                                      disabled={!isAdmin}
                                      onClick={() => handleUpdateCompetence(row.id, "apos", star)}
                                      className={`p-0.5 transition-transform ${isAdmin ? "hover:scale-120 cursor-pointer" : ""}`}
                                    >
                                      <Star
                                        size={13}
                                        className={star <= row.apos ? "text-[#bd8a12] fill-[#bd8a12]" : "text-gray-200"}
                                      />
                                    </button>
                                  ))}
                                </div>
                              </td>
                              <td className="p-4 hidden sm:table-cell text-gray-600 max-w-xs truncate">
                                {isAdmin ? (
                                  <input
                                    type="text"
                                    value={row.evidences}
                                    onChange={(e) => handleUpdateCompetence(row.id, "evidences", e.target.value)}
                                    className="text-xs text-gray-600 bg-transparent border-b border-dashed border-gray-200 w-full outline-none"
                                  />
                                ) : (
                                  <span>{row.evidences}</span>
                                )}
                              </td>
                              {isAdmin && (
                                <td className="p-4 text-center">
                                  <button
                                    onClick={() => handleDeleteCompetenceRow(row.id)}
                                    className="text-red-400 hover:text-red-600 p-1"
                                    title="Remover indicador"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Structured Points listing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-gray-100">
                    
                    {/* Pontos fortes */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-[#002b5b]">
                        <Check size={18} className="text-[#bd8a12]" />
                        <h4 className="font-serif font-bold text-base text-[#001736]">4.2. Pontos Fortes</h4>
                      </div>
                      
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                        {portfolio.pontosFortes.map((ponto, idx) => (
                          <li key={idx} className="flex items-start bg-gray-50/70 p-3 rounded-lg border border-gray-100 group">
                            <span className="text-[#bd8a12] font-semibold mr-2 mt-0.5">✓</span>
                            <div className="flex-1">
                              {isAdmin ? (
                                <textarea
                                  value={ponto}
                                  onChange={(e) => {
                                    const updated = [...portfolio.pontosFortes];
                                    updated[idx] = e.target.value;
                                    updateField("pontosFortes", updated);
                                  }}
                                  className="w-full text-xs text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none resize-none h-14"
                                />
                              ) : (
                                <span>{ponto}</span>
                              )}
                            </div>
                            {isAdmin && (
                              <button
                                onClick={() => handleRemoveBullet("pontosFortes", idx)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0 self-center"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>

                      {isAdmin && (
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="text"
                            placeholder="Adicionar novo ponto forte..."
                            className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none"
                            id="new-ponto-forte"
                          />
                          <button
                            onClick={() => {
                              const input = document.getElementById("new-ponto-forte") as HTMLInputElement;
                              if (input && input.value.trim()) {
                                updateField("pontosFortes", [...portfolio.pontosFortes, input.value.trim()]);
                                input.value = "";
                                showToast("Novo ponto forte adicionado.");
                              }
                            }}
                            className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded"
                          >
                            Acrescentar
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Áreas a desenvolver */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-[#bd8a12]">
                        <TrendingUp size={18} className="text-[#bd8a12]" />
                        <h4 className="font-serif font-bold text-base text-[#001736]">4.3. Áreas a Desenvolver</h4>
                      </div>
                      
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                        {portfolio.areasDesenvolver.map((area, idx) => (
                          <li key={idx} className="flex items-start bg-gray-50/70 p-3 rounded-lg border border-gray-100 group">
                            <span className="text-[#bd8a12] font-semibold mr-2 mt-0.5">→</span>
                            <div className="flex-1">
                              {isAdmin ? (
                                <textarea
                                  value={area}
                                  onChange={(e) => {
                                    const updated = [...portfolio.areasDesenvolver];
                                    updated[idx] = e.target.value;
                                    updateField("areasDesenvolver", updated);
                                  }}
                                  className="w-full text-xs text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none resize-none h-14"
                                />
                              ) : (
                                <span>{area}</span>
                              )}
                            </div>
                            {isAdmin && (
                              <button
                                onClick={() => handleRemoveBullet("areasDesenvolver", idx)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0 self-center"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </li>
                        ))}
                      </ul>

                      {isAdmin && (
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="text"
                            placeholder="Anotar aspeto a cimentar profissionalmente..."
                            className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none"
                            id="new-area-desenvolver"
                          />
                          <button
                            onClick={() => {
                              const input = document.getElementById("new-area-desenvolver") as HTMLInputElement;
                              if (input && input.value.trim()) {
                                updateField("areasDesenvolver", [...portfolio.areasDesenvolver, input.value.trim()]);
                                input.value = "";
                                showToast("Novo aspeto de desenvolvimento adicionado.");
                              }
                            }}
                            className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded"
                          >
                            Acrescentar
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.section>
              ) : null}

              {/* SECTION 5: SÍNTESE REFLEXIVA GLOBAL */}
              {selectedChapter === "sintese_global" ? (
                <motion.section 
                  id="sec-sintese_global" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-8 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <Award className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      5. Síntese Reflexiva Global
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {/* Paragraph 1 - Elegant Drop cap */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono text-[#002b5b]/40 font-bold uppercase tracking-widest block">O Ponto de Viragem Letiva</span>
                      {isAdmin ? (
                        <textarea
                          value={portfolio.synthesisText1}
                          onChange={(e) => updateField("synthesisText1", e.target.value)}
                          className="w-full text-sm sm:text-base text-gray-700 leading-relaxed border border-dashed border-gray-300 p-3 rounded bg-transparent focus:ring-1 focus:ring-[#bd8a12] outline-none h-32"
                        />
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif drop-cap">
                          {portfolio.synthesisText1}
                        </p>
                      )}
                    </div>

                    {/* Paragraph 2 */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-[#002b5b]/40 font-bold uppercase tracking-widest block">A Consolidação da Praxis Andragógica</span>
                      {isAdmin ? (
                        <textarea
                          value={portfolio.synthesisText2}
                          onChange={(e) => updateField("synthesisText2", e.target.value)}
                          className="w-full text-sm sm:text-base text-gray-700 leading-relaxed border border-dashed border-gray-300 p-3 rounded bg-transparent focus:ring-1 focus:ring-[#bd8a12] outline-none h-32"
                        />
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif">
                          {portfolio.synthesisText2}
                        </p>
                      )}
                    </div>

                    {/* Paragraph 3 */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-mono text-[#002b5b]/40 font-bold uppercase tracking-widest block">Compromisso de Beja</span>
                      {isAdmin ? (
                        <textarea
                          value={portfolio.synthesisText3}
                          onChange={(e) => updateField("synthesisText3", e.target.value)}
                          className="w-full text-sm sm:text-base text-gray-700 leading-relaxed border border-dashed border-gray-300 p-3 rounded bg-transparent outline-none h-32"
                        />
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-serif pl-4 border-l-2 border-[#bd8a12]/30 italic bg-amber-50/10 py-2 rounded">
                          {portfolio.synthesisText3}
                        </p>
                      )}
                    </div>

                    {/* Scientific signatue area */}
                    <div className="pt-10 flex flex-col items-end text-right space-y-1">
                      <div className="h-0.5 w-40 bg-gray-300 mb-2" />
                      <p className="font-serif font-bold text-[#001736]">{portfolio.signatureName}</p>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">{portfolio.signatureRole}</p>
                      <p className="text-[10px] text-gray-400 font-mono">Beja, {portfolio.signatureYear}</p>
                    </div>
                  </div>
                </motion.section>
              ) : null}

              {/* SECTION 6: EXPECTATIVAS E PROJETOS FUTUROS */}
              {selectedChapter === "expectativas_futuras" ? (
                <motion.section 
                  id="sec-expectativas_futuras" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <TrendingUp className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      6. Expectativas e Projetos Futuros
                    </h2>
                  </div>

                  <p className="text-sm text-gray-700 leading-relaxed">
                    O encerramento do percurso letivo do CFF em Beja dá origem a um roteiro estruturado de metas profissionais de curto e médio prazo:
                  </p>

                  <div className="space-y-8">
                    
                    {/* Objetivos curto prazo */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#bd8a12] font-semibold">Metas de Curto Prazo (6-12 meses)</h4>
                      
                      <div className="space-y-2">
                        {portfolio.goalsShortTerm.map((goal, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-3xs group">
                            <div className="flex items-center space-x-3 flex-1">
                              <span className="w-5 h-5 rounded bg-amber-50 border border-[#bd8a12]/30 text-[#bd8a12] flex items-center justify-center font-mono text-[10px] font-bold">
                                S{idx + 1}
                              </span>
                              {isAdmin ? (
                                <input
                                  type="text"
                                  value={goal}
                                  onChange={(e) => {
                                    const updated = [...portfolio.goalsShortTerm];
                                    updated[idx] = e.target.value;
                                    updateField("goalsShortTerm", updated);
                                  }}
                                  className="text-xs sm:text-sm text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none w-full"
                                />
                              ) : (
                                <span className="text-xs sm:text-sm text-gray-700 font-medium">{goal}</span>
                              )}
                            </div>
                            
                            {isAdmin && (
                              <button
                                onClick={() => handleRemoveBullet("goalsShortTerm", idx)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      {isAdmin && (
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="text"
                            value={newShortTermGoal}
                            onChange={(e) => setNewShortTermGoal(e.target.value)}
                            placeholder="Adicionar nova meta de curto prazo..."
                            className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none"
                          />
                          <button
                            onClick={() => handleAddBullet("goalsShortTerm", newShortTermGoal, setNewShortTermGoal)}
                            className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded"
                          >
                            Anexar
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Objetivos médio prazo */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#002b5b]/50 font-bold">Estratégias de Médio Prazo (1-3 anos)</h4>
                      
                      <div className="space-y-2">
                        {portfolio.goalsMediumTerm.map((goal, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-3xs group">
                            <div className="flex items-center space-x-3 flex-1">
                              <span className="w-5 h-5 rounded bg-blue-50 border border-blue-200 text-[#002b5b] flex items-center justify-center font-mono text-[10px] font-bold">
                                M{idx + 1}
                              </span>
                              {isAdmin ? (
                                <input
                                  type="text"
                                  value={goal}
                                  onChange={(e) => {
                                    const updated = [...portfolio.goalsMediumTerm];
                                    updated[idx] = e.target.value;
                                    updateField("goalsMediumTerm", updated);
                                  }}
                                  className="text-xs sm:text-sm text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none w-full"
                                />
                              ) : (
                                <span className="text-xs sm:text-sm text-gray-700 font-medium">{goal}</span>
                              )}
                            </div>
                            
                            {isAdmin && (
                              <button
                                onClick={() => handleRemoveBullet("goalsMediumTerm", idx)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      {isAdmin && (
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="text"
                            value={newMediumTermGoal}
                            onChange={(e) => setNewMediumTermGoal(e.target.value)}
                            placeholder="Adicionar nova meta de médio prazo..."
                            className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none"
                          />
                          <button
                            onClick={() => handleAddBullet("goalsMediumTerm", newMediumTermGoal, setNewMediumTermGoal)}
                            className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded"
                          >
                            Anexar
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Investigação/Formação planeada */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-mono uppercase tracking-widest text-[#002b5b]/50 font-bold">Focos de Formação Contínua Almejados</h4>
                      
                      <div className="space-y-2">
                        {portfolio.plannedTrainings.map((train, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-[#fcf9f8]/60 border border-gray-200 rounded-lg group">
                            <div className="flex items-center space-x-3 flex-1">
                              <span className="text-[#bd8a12] font-extrabold text-[#bd8a12]">→</span>
                              {isAdmin ? (
                                <input
                                  type="text"
                                  value={train}
                                  onChange={(e) => {
                                    const updated = [...portfolio.plannedTrainings];
                                    updated[idx] = e.target.value;
                                    updateField("plannedTrainings", updated);
                                  }}
                                  className="text-xs sm:text-sm text-gray-700 bg-transparent border-b border-dashed border-gray-200 outline-none w-full"
                                />
                              ) : (
                                <span className="text-xs sm:text-sm text-gray-700 leading-normal">{train}</span>
                              )}
                            </div>
                            
                            {isAdmin && (
                              <button
                                onClick={() => handleRemoveBullet("plannedTrainings", idx)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        ))}
                      </div>

                      {isAdmin && (
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="text"
                            value={newPlannedTraining}
                            onChange={(e) => setNewPlannedTraining(e.target.value)}
                            placeholder="Adicionar curso ou conferência científica futura..."
                            className="flex-1 text-xs px-2.5 py-1.5 border border-gray-200 rounded outline-none"
                          />
                          <button
                            onClick={() => handleAddBullet("plannedTrainings", newPlannedTraining, setNewPlannedTraining)}
                            className="px-3 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded"
                          >
                            Acrescentar
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                </motion.section>
              ) : null}

              {/* SECTION 7: EVIDÊNCIAS DAS APRENDIZAGENS */}
              {selectedChapter === "evidencias" ? (
                <motion.section 
                  id="sec-evidencias" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <Bookmark className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      7. Evidências das Aprendizagens
                    </h2>
                  </div>

                  <p className="text-sm text-gray-700">
                    Repositório documental estruturado ao longo dos módulos do CFF para atestar a autenticidade e rigor científico de cada reflexão enunciada neste e-Portfólio:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {portfolio.evidences.map((ev) => (
                      <div key={ev.id} className="p-5 bg-[#fcf9f8] border border-[#002b5b]/10 rounded-xl relative space-y-3 group hover:border-[#bd8a12]/30 transition-all">
                        
                        <div className="flex items-center justify-between">
                          <span className="bg-[#002b5b]/10 text-[#002b5b] font-mono text-[9px] font-bold px-2 py-0.5 rounded">
                            {ev.moduleCode}
                          </span>
                          
                          {isAdmin && (
                            <button
                              onClick={() => handleDeleteEvidence(ev.id)}
                              className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>

                        <div className="space-y-1">
                          <h4 className="font-serif font-bold text-[#001736] text-sm sm:text-base leading-tight">
                            {ev.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {ev.description}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-gray-200/50 flex justify-between items-center text-[10px] font-mono text-gray-400">
                          <span>Dossier de Trabalho Letivo</span>
                          {ev.url ? (
                            <a
                              href={ev.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#bd8a12] font-semibold hover:text-[#8a650f]"
                            >
                              Abrir evidência
                            </a>
                          ) : (
                            <span className="text-[#bd8a12] font-semibold">Anexado Virtualmente</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {isAdmin && (
                    <form onSubmit={handleAddEvidence} className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                      <h4 className="font-serif font-bold text-sm text-[#001736]">Anexar Evidência de Trabalho Prático</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="text-[10px] font-mono block mb-1">Módulo Associado</label>
                          <select
                            value={newEvidenceModule}
                            onChange={(e) => setNewEvidenceModule(e.target.value)}
                            className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                          >
                            <option value="MF1">MF1 — Diagnóstico</option>
                            <option value="MF2">MF2 — Design Recursos</option>
                            <option value="MF3">MF3 — RVCC / ALV</option>
                            <option value="MF4">MF4 — Metodologias</option>
                            <option value="MF5">MF5 — Simulações</option>
                          </select>
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-[10px] font-mono block mb-1">Título da Evidência / Trabalho</label>
                          <input
                            type="text"
                            value={newEvidenceTitle}
                            onChange={(e) => setNewEvidenceTitle(e.target.value)}
                            placeholder="ex: Relatório de análise de lacunas"
                            className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-[10px] font-mono block mb-1">Descrição Técnico-Operacional do Recurso</label>
                        <textarea
                          value={newEvidenceDesc}
                          onChange={(e) => setNewEvidenceDesc(e.target.value)}
                          placeholder="Sumarizar os objetivos curriculares ou classificação do formador..."
                          className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded h-16"
                        />
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded hover:bg-[#001c3d]"
                      >
                        Arquivar Evidência
                      </button>
                    </form>
                  )}
                </motion.section>
              ) : null}

              {/* SECTION 8: REFERÊNCIAS BIBLIOGRÁFICAS */}
              {selectedChapter === "bibliografia" ? (
                <motion.section 
                  id="sec-bibliografia" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <Info className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      8. Referências Bibliográficas e Documentais
                    </h2>
                  </div>

                  {/* Filter and Search References */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center bg-[#fcf9f8] p-4 rounded-xl border border-gray-200">
                    <div className="relative flex-1 w-full">
                      <Search className="absolute left-2.5 top-2.5 text-gray-400" size={14} />
                      <input
                        type="text"
                        value={refSearch}
                        onChange={(e) => setRefSearch(e.target.value)}
                        placeholder="Pesquisar autor, código legislativo ou referencial..."
                        className="bg-white border text-xs border-gray-200 pl-8 pr-3 py-2 w-full rounded outline-none focus:border-[#bd8a12]"
                      />
                    </div>
                    
                    <div className="flex space-x-1 overflow-x-auto w-full sm:w-auto shrink-0">
                      {["Todos", "Legislação", "Referenciais", "Manuais", "Obras", "Instrumentos", "Recursos"].map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setSelectedRefCategory(cat)}
                          className={`px-2.5 py-1 text-[10px] font-mono rounded transition-colors ${
                            selectedRefCategory === cat 
                              ? "bg-[#bd8a12] text-white font-bold" 
                              : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* References List */}
                  <div className="space-y-4">
                    {portfolio.references
                      .filter((ref) => {
                        const matchesCat = selectedRefCategory === "Todos" || ref.category === selectedRefCategory;
                        const matchesSearch = ref.citation.toLowerCase().includes(refSearch.toLowerCase());
                        return matchesCat && matchesSearch;
                      })
                      .map((ref) => (
                        <div key={ref.id} className="p-4 bg-white border border-gray-150 rounded-lg group flex items-start justify-between relative hover:border-[#bd8a12]/20 transition-all">
                          <div className="space-y-2 flex-1">
                            <span className="inline-block bg-[#002b5b]/5 text-[#002b5b] font-mono text-[9px] font-bold px-2 py-0.5 rounded uppercase">
                              {ref.category}
                            </span>
                            {isAdmin ? (
                              <textarea
                                value={ref.citation}
                                onChange={(e) => {
                                  const updated = portfolio.references.map(r => r.id === ref.id ? { ...r, citation: e.target.value } : r);
                                  savePortfolio({ ...portfolio, references: updated });
                                }}
                                className="w-full text-xs sm:text-sm text-gray-700 font-serif bg-transparent border-b border-dashed border-gray-200 outline-none resize-y"
                              />
                            ) : (
                              <p className="text-xs sm:text-sm text-gray-700 font-serif leading-relaxed">
                                {ref.citation}
                              </p>
                            )}
                          </div>

                          {isAdmin && (
                            <button
                              onClick={() => handleDeleteReference(ref.id)}
                              className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity ml-4 shrink-0"
                              title="Remover referência"
                            >
                              <Trash2 size={13} />
                            </button>
                          )}
                        </div>
                      ))}
                  </div>

                  {isAdmin && (
                    <form onSubmit={handleAddReference} className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                      <h4 className="font-serif font-bold text-sm text-[#001736]">Inserir Nova Referência Científica / Legal</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div>
                          <label className="text-[10px] font-mono block mb-1">Categoria</label>
                          <select
                            value={newRefCategory}
                            onChange={(e) => setNewRefCategory(e.target.value as BibReference["category"])}
                            className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                          >
                            <option value="Legislação">Legislação</option>
                            <option value="Referenciais">Referenciais</option>
                            <option value="Manuais">Manuais e Guias</option>
                            <option value="Obras">Obras de Referência</option>
                            <option value="Instrumentos">Instrumentos práticos</option>
                            <option value="Recursos">Recursos Digitais</option>
                          </select>
                        </div>

                        <div className="sm:col-span-3">
                          <label className="text-[10px] font-mono block mb-1">Citação Bibliográfica Completa (ex. APA / Padrão)</label>
                          <input
                            type="text"
                            value={newRefCitation}
                            onChange={(e) => setNewRefCitation(e.target.value)}
                            placeholder="IEFP (2022). Referencial de Formação Pedagógica..."
                            className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="px-4 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded hover:bg-[#001c3d]"
                      >
                        Adicionar à Lista Geral
                      </button>
                    </form>
                  )}
                </motion.section>
              ) : null}

              {/* INBOX SECTION: COMETÁRIOS ACADÉMICOS E PARECERES */}
              {selectedChapter === "inbox" ? (
                <motion.section 
                  id="sec-inbox" 
                  initial={{ opacity: 0, y: 15 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="space-y-10 pb-12 border-b border-[#002b5b]/10"
                >
                  <div className="flex items-center space-x-3 border-b border-gray-100 pb-3">
                    <Mail className="text-[#bd8a12]" size={24} />
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#001736]">
                      Pareceres Técnicos & Comentários Científicos
                    </h2>
                  </div>

                  <p className="text-sm text-gray-700">
                    O acompanhamento mútuo compreende a apreciação constante por parte do conselho de formadores e coordenação técnica do IEFP:
                  </p>

                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="p-5 bg-amber-50/5 border border-[#bd8a12]/15 rounded-xl space-y-3 relative group">
                        
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-serif font-bold text-sm text-[#001736]">{msg.subject}</h4>
                            <p className="text-[10px] font-mono text-gray-400">{msg.senderName} • {msg.senderEmail}</p>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                            <span>{msg.date}</span>
                            {isAdmin && (
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
                                title="Arquivar parecer"
                              >
                                <Trash2 size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 leading-relaxed italic bg-white p-3 rounded-lg border border-gray-200">
                          "{msg.content}"
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Submission form for peer critique */}
                  <form onSubmit={handleSendInboxMessage} className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                    <div className="flex items-center space-x-2">
                       <Users size={16} className="text-[#bd8a12]" />
                       <h4 className="font-serif font-bold text-sm text-[#001736]">Submeter novo Parecer Pedagógico</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-[10px] font-mono block mb-1">Avaliador / Nome Científico</label>
                        <input
                          type="text"
                          value={newInboxSender}
                          onChange={(e) => setNewInboxSender(e.target.value)}
                          placeholder="Dr. Coordenador IEFP Beja"
                          className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono block mb-1">Correio Eletrónico</label>
                        <input
                          type="email"
                          value={newInboxEmail}
                          onChange={(e) => setNewInboxEmail(e.target.value)}
                          placeholder="coordenacao@iefp.pt"
                          className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] font-mono block mb-1">Assunto / Tópico</label>
                        <input
                          type="text"
                          value={newInboxSubject}
                          onChange={(e) => setNewInboxSubject(e.target.value)}
                          placeholder="Parecer complementar do módulo"
                          className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] font-mono block mb-1">Parecer Crítico Detalhado</label>
                      <textarea
                        value={newInboxContent}
                        onChange={(e) => setNewInboxContent(e.target.value)}
                        placeholder="Indique os aspetos fortes ou sugestões curriculares de melhoria para o e-Portfólio..."
                        className="bg-white border text-xs border-gray-200 outline-none p-1.5 w-full rounded h-20"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-4 py-1.5 bg-[#002b5b] text-white text-xs font-bold rounded hover:bg-[#001c3d]"
                    >
                      Registar Parecer Pedagógico
                    </button>
                  </form>
                </motion.section>
              ) : null}

              {/* Central Paulo Freire Quote footer decoration */}
              <div className="py-6 text-center text-[#002b5b]/50">
                <span className="font-serif italic text-sm">"{portfolio.quoteText}"</span>
                <span className="text-[10px] font-mono block mt-1 uppercase tracking-widest">— {portfolio.quoteAuthor}</span>
              </div>

            </div>
          </AnimatePresence>
        </main>

        </div> {/* Closes right workspace container */}
      </div> {/* Closes main layout container */}

      {/* Styled Academic Footer adhering to the user's report metadata */}
      <footer className="bg-white border-t border-[#002b5b]/10 py-8 text-center" id="academic-footer">
        <div className="max-w-7xl mx-auto px-4 text-xs space-y-3">
          <p className="font-serif font-bold text-[#001736] text-sm">
            e-Portfólio — Percurso de Formação de Formadores de Excelência
          </p>
          <p className="text-[#002b5b]/60">
            © 2026 {portfolio.formanda} • Centro de Emprego e Formação Profissional de Beja. Todos os Direitos Reservados.
          </p>
          <p className="text-[10px] text-gray-400 font-mono">
            {portfolio.referencialRef}
          </p>
          <p className="space-x-4 text-xs font-semibold py-1">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[#bd8a12] hover:underline">LinkedIn Profissional</a>
            <span className="text-gray-300">|</span>
            <a href="https://netforce.iefp.pt" target="_blank" rel="noreferrer" className="text-[#bd8a12] hover:underline">Plataforma NETFORCE</a>
            <span className="text-gray-300">|</span>
            <a href="https://fad.iefp.pt" target="_blank" rel="noreferrer" className="text-[#bd8a12] hover:underline">Moodle IEFP</a>
          </p>
        </div>
      </footer>

      {/* Modern floating toasts */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 bg-[#001736] text-white px-4 py-3 rounded-lg shadow-lg text-xs font-semibold border border-[#002b5b]/10 flex items-center space-x-2 z-50 pointer-events-none"
            id="toast-notification"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#bd8a12] animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

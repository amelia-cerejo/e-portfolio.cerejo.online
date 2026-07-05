import { useState } from 'react';
import { Compass, Sparkles, BookOpen, Activity, User, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

export function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'diagnostico', label: 'Diagnóstico', icon: Activity },
    { id: 'analise', label: 'Análise', icon: Sparkles },
    { id: 'plano', label: 'Plano', icon: BookOpen },
  ];

  return (
    <header className="bg-surface-container-lowest sticky top-0 z-50 border-b border-grid-line shadow-xs">
      <nav aria-label="Navegação principal" className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-7xl mx-auto">
        <div 
          onClick={() => setCurrentTab('home')} 
          className="font-serif text-2xl font-bold text-deep-teal cursor-pointer hover:opacity-95 flex items-center gap-2 select-none"
        >
          O Formador Reflexivo
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-sans text-xs uppercase tracking-wider font-semibold text-on-surface-variant">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => setCurrentTab(link.id)}
                className={`flex items-center gap-1.5 pb-1 cursor-pointer transition-all border-b-2 hover:text-primary ${
                  isActive 
                    ? 'text-primary border-primary font-bold' 
                    : 'text-on-surface-variant border-transparent'
                }`}
              >
                <Icon size={14} className="opacity-90" />
                <span>{link.label}</span>
              </button>
            );
          })}
          <button 
            onClick={() => setCurrentTab('perfil')}
            className={`flex items-center gap-1.5 px-5 py-2 hover:opacity-90 text-white bg-deep-teal font-sans uppercase font-bold text-xs select-none cursor-pointer tracking-wider ${
              currentTab === 'perfil' ? 'bg-primary' : ''
            }`}
          >
            <User size={14} />
            <span>Perfil</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden text-deep-teal hover:text-primary transition-colors cursor-pointer"
          aria-label="Abrir Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-grid-line bg-surface-container-lowest py-3 px-6 space-y-2 font-sans">
          {links.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentTab(link.id);
                  setMobileOpen(false);
                }}
                className={`w-full text-left py-2 px-3 block rounded-sm cursor-pointer ${
                  isActive 
                    ? 'text-primary bg-surface-container-low font-bold' 
                    : 'text-on-surface-variant hover:bg-surface-container-low'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <button 
            onClick={() => {
              setCurrentTab('perfil');
              setMobileOpen(false);
            }}
            className="w-full text-center bg-deep-teal text-white py-2 px-3 block text-sm font-bold active:scale-95 transition-transform"
          >
            Perfil do Formador
          </button>
        </div>
      )}
    </header>
  );
}

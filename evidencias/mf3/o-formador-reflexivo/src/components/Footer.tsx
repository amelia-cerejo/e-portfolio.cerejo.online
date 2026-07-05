import { Sparkles } from 'lucide-react';

interface FooterProps {
  setCurrentTab?: (tab: string) => void;
}

export function Footer({ setCurrentTab }: FooterProps) {
  return (
    <footer className="bg-deep-teal text-white py-12 px-6 md:px-12 mt-auto border-t border-grid-line select-none">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8 w-full">
        <div className="text-center md:text-left">
          <span className="font-serif text-2xl font-bold text-white block">O Formador Reflexivo</span>
          <p className="font-sans text-xs text-soft-teal mt-2">
            Desenvolvimento contínuo de competências andragógicas e prática reflexiva estruturada.
          </p>
          <p className="font-sans text-stone-300 text-[11px] mt-4">
            © 2026 O Formador Reflexivo. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-5">
          <div className="flex gap-8 font-sans text-xs uppercase tracking-wider font-semibold text-soft-teal">
            <a href="#privacidade" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#termos" className="hover:text-white transition-colors">Termos</a>
            <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-stone-300 uppercase tracking-widest font-mono">
            <Sparkles size={10} className="text-muted-gold animate-pulse" />
            <span>Excelência Pedagógica Baseada em Dados e IA</span>
          </div>
        </div>
      </div>
      
      {/* Universal bottom golden border line */}
      <div className="w-full h-1 bg-muted-gold opacity-50 max-w-7xl mx-auto mt-8 rounded-full"></div>
    </footer>
  );
}

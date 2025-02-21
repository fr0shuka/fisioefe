
import { Button } from "@/components/ui/button";

interface MainNavProps {
  onWhatsAppClick: () => void;
}

const MainNav = ({ onWhatsAppClick }: MainNavProps) => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/Fisioefe.png" alt="Fisioefe Logo" className="h-8 w-auto" />
          <h1 className="text-2xl font-bold text-primary">Fisioefe</h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Serviços</a>
          <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Sobre</a>
          <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Equipa</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contacto</a>
        </div>
        <Button 
          className="bg-primary hover:bg-primary/90"
          onClick={onWhatsAppClick}
        >
          Marcar Consulta
        </Button>
      </div>
    </nav>
  );
};

export default MainNav;


import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  isVisible: boolean;
  onWhatsAppClick: () => void;
}

const HeroSection = ({ isVisible, onWhatsAppClick }: HeroSectionProps) => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cuidados de Fisioterapia Especializados para o Seu Bem-Estar
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Tratamento profissional adaptado às suas necessidades, ajudando-o a recuperar e manter uma saúde ótima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              onClick={onWhatsAppClick}
            >
              Marcar Consulta
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6">
              Saber Mais
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mt-8">
        <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;

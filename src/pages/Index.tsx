
import { useState, useEffect } from "react";
import MainNav from "@/components/navigation/MainNav";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/navigation/Footer";

const services = [
  {
    title: "Fisioterapia Desportiva",
    description: "Tratamento especializado para lesões desportivas e melhoria de desempenho.",
  },
  {
    title: "Terapia Manual",
    description: "Técnicas manuais para tratar dor e disfunção musculoesquelética.",
  },
  {
    title: "Reabilitação",
    description: "Programas completos para recuperação pós-cirúrgica e de lesões.",
  },
];

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "351234567890";
    const message = "Olá! Gostaria de marcar uma consulta de fisioterapia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <MainNav onWhatsAppClick={handleWhatsAppClick} />
      <HeroSection isVisible={isVisible} onWhatsAppClick={handleWhatsAppClick} />
      <ServicesSection isVisible={isVisible} services={services} />
      <ContactSection isVisible={isVisible} />
      <Footer />
    </div>
  );
};

export default Index;

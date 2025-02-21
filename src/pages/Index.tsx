
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
       <h1 className="text-2xl font-bold text-primary">Fisioefe</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Serviços</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">Sobre</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Equipa</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contacto</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Marcar Consulta</Button>
        </div>
      </nav>

      {/* Hero Section */}
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
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
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

      {/* Services Section */}
      <section id="services" className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Os Nossos Serviços</h2>
            <p className="text-lg text-gray-600">Soluções completas de fisioterapia para várias condições</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contacte-nos</h2>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-lg">+351 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-lg">contacto@fisiohub.pt</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-lg">Rua da Terapia 123, Cidade da Saúde</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-primary" />
                <p className="text-lg">Seg - Sex: 9:00 - 18:00</p>
              </div>
            </motion.div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <input
                type="text"
                placeholder="O Seu Nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="O Seu Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="A Sua Mensagem"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">Enviar Mensagem</Button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">FisioHub Connect</h3>
              <p className="text-gray-600">Serviços profissionais de fisioterapia focados no seu bem-estar e recuperação.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#team" className="text-gray-600 hover:text-primary transition-colors">Equipa</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Segunda - Sexta: 9:00 - 18:00</li>
                <li>Sábado: 9:00 - 14:00</li>
                <li>Domingo: Fechado</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} FisioHub Connect. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

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

export default Index;

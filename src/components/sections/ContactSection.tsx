
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  isVisible: boolean;
}

const ContactSection = ({ isVisible }: ContactSectionProps) => {
  return (
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
  );
};

export default ContactSection;


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
          <h1 className="text-2xl font-bold text-primary">FisioHub Connect</h1>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <a href="#team" className="text-gray-600 hover:text-primary transition-colors">Team</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Book Now</Button>
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
              Expert Physiotherapy Care for Your Well-being
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional treatment tailored to your needs, helping you recover and maintain optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Book Appointment
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6">
                Learn More
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Comprehensive physiotherapy solutions for various conditions</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-primary" />
                <p className="text-lg">+1 234 567 890</p>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-primary" />
                <p className="text-lg">contact@fisiohub.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-primary" />
                <p className="text-lg">123 Therapy Street, Health City</p>
              </div>
              <div className="flex items-center space-x-4">
                <Clock className="w-6 h-6 text-primary" />
                <p className="text-lg">Mon - Fri: 9:00 - 18:00</p>
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
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
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
              <p className="text-gray-600">Professional physiotherapy services focused on your well-being and recovery.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
                <li><a href="#team" className="text-gray-600 hover:text-primary transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Working Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 - 18:00</li>
                <li>Saturday: 9:00 - 14:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/20 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} FisioHub Connect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    title: "Sports Physiotherapy",
    description: "Specialized treatment for sports-related injuries and performance enhancement.",
  },
  {
    title: "Manual Therapy",
    description: "Hands-on techniques to treat musculoskeletal pain and dysfunction.",
  },
  {
    title: "Rehabilitation",
    description: "Comprehensive programs for post-surgery and injury recovery.",
  },
];

export default Index;

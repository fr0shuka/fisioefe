
const Footer = () => {
  return (
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
  );
};

export default Footer;

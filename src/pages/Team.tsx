
import { motion } from "framer-motion";
import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Ana Silva",
      role: "Fisioterapeuta Sênior",
      specialization: "Fisioterapia Ortopédica",
      description: "Especialista em reabilitação pós-operatória e lesões desportivas com mais de 10 anos de experiência.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. João Santos",
      role: "Fisioterapeuta",
      specialization: "Fisioterapia Neurológica",
      description: "Dedicado à reabilitação neurológica e tratamento de condições crônicas, com foco em técnicas inovadoras.",
      image: "/placeholder.svg"
    },
    {
      name: "Dra. Maria Costa",
      role: "Fisioterapeuta",
      specialization: "Fisioterapia Respiratória",
      description: "Especializada em reabilitação pulmonar e tratamentos respiratórios, com experiência em atendimento hospitalar.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nossa Equipe</h1>
          <p className="text-xl text-gray-600">
            Conheça os profissionais dedicados ao seu bem-estar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="aspect-square relative bg-gray-100">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-1/3 h-1/3 text-gray-400" />
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 font-medium mb-3">
                  {member.specialization}
                </p>
                <p className="text-gray-500">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

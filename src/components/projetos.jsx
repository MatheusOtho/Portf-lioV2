import { FaExternalLinkAlt } from "react-icons/fa";
import RebecaBanner from "../assets/RebecaNails.png";
import FiberBanner from "../assets/FiberGlass.jpg";
import { motion } from "framer-motion"; // 1. Importação do Framer Motion

const projects = [
  {
    title: "Rebeca Nails",
    description: "Landing Page para profissional de manicure e pedicure. Apresenta serviços, portfólio de trabalhos e informações de contato.",
    image: RebecaBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkDeploy: "https://rebecanails.vercel.app/",
    status: "concluido",
  },
  {
    title: "FiberGlass Móveis",
    description: "Website para empresa de móveis de fibra de vidro. Apresenta catálogo de produtos e suas descrições, informações sobre a empresa e contato.",
    image: FiberBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkDeploy: "https://fiberglass-moveis.vercel.app/",
    status: "em_andamento",
  },
];

function Projects() {
  // Variantes para controlar a entrada em cascata dos cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Intervalo elegante entre a entrada de cada projeto
      },
    },
  };

  return (
    <section 
      id="projects" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[80px] animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        
        {/* Título com surgimento suave */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
        >
          Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Projetos</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 text-center max-w-2xl mb-12 text-sm sm:text-base"
        >
          Projetos selecionados que desenvolvi.
        </motion.p>

        {/* Grid transformado em motion.div para disparar a cascata de filhos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </motion.div>

      </div>

      {/* Mantendo as animações dos gradientes traseiros */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Componente Card Atualizado com Motion
const ProjectCard = ({ project }) => {
  
  const getStatusBadge = (status) => {
    switch (status) {
      case "concluido":
        return {
          text: "Concluído",
          className: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        };
      case "em_andamento":
        return {
          text: "Em Andamento",
          className: "bg-amber-500/10 text-orange-400 border-amber-500/30",
        };
      case "manutencao":
        return {
          text: "Manutenção",
          className: "bg-sky-500/10 text-sky-400 border-sky-500/30",
        };
      default:
        return null;
    }
  };

  const badge = getStatusBadge(project.status);

  // Variantes para a animação de entrada individual de cada card
  const cardItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <motion.div 
      variants={cardItemVariants}
      whileHover={{ 
        y: -8,
        borderColor: "rgba(139, 92, 246, 0.5)",
        boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)"
      }}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden transition-colors duration-300 flex flex-col h-full"
    >
      
      {/* Imagem do Projeto */}
      <div className="relative overflow-hidden h-48 sm:h-56 w-full shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlays de iluminação gradiente ao hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badge de Status */}
        {badge && (
          <span className={`absolute top-4 right-4 z-10 text-xs font-medium px-2.5 py-1 rounded-md border backdrop-blur-sm shadow-sm ${badge.className}`}>
            {badge.text}
          </span>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="relative p-6 flex flex-col flex-grow">
        {/* Título */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tecnologias Usadas */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.languages.map((lang, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1 bg-neutral-800/80 text-neutral-300 rounded-full border border-neutral-700 hover:border-violet-500/50 hover:text-white transition-colors duration-300"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Links / Botões Interativos */}
        <div className="flex gap-5 pt-2">
          <a 
            href={project.linkDeploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 group/link"
          >
            <FaExternalLinkAlt className="text-base transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 duration-300" />
            <span className="text-sm font-medium">Link do Projeto</span>
          </a>
        </div>

        {/* Barra de progresso/Glow decorativo inferior */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
          <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
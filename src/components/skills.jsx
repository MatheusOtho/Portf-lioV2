import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaJava
} from "react-icons/fa";
import { SiTailwindcss} from "react-icons/si";
import { motion } from "framer-motion"; // 1. Importação do Framer Motion

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" }
];

function Skills() {
  // Variantes para revelar os cards em sequência (Stagger Effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Janela de tempo entre a aparição de cada card
      },
    },
  };

  // Variantes de entrada individual para cada card
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section 
      id="skills" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[80px] animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        
        {/* Título animado subindo suavemente ao carregar/scroll */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
        >
          Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Stacks</span>
        </motion.h2>

        {/* Subtítulo animado com leve delay */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 text-center max-w-2xl mb-12 text-sm sm:text-base"
        >
          Tecnologias que utilizo no dia a dia.
        </motion.p>

        {/* Grid de Stacks transformado em motion.div para gerenciar os filhos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Dispara quando 10% do grid surgir na tela
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(139, 92, 246, 0.5)",
                backgroundColor: "rgba(23, 23, 23, 0.6)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative p-5 sm:p-6 bg-neutral-900/40 border border-neutral-800 rounded-xl overflow-hidden transition-colors duration-300 cursor-default"
            >
              {/* Glow de fundo ao hover controlado de forma otimizada */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ícone principal com efeito hover sutil */}
              <div className={`relative text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                <skill.icon />
              </div>
              
              {/* Nome da skill */}
              <h3 className="relative text-base sm:text-lg font-semibold text-white">
                {skill.name}
              </h3>

              {/* Barra decorativa na parte inferior */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
                <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* Mantendo os keyframes de fundo nativos */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Skills;
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaJava
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Java", icon: FaJava, color: "text-red-500", status: "Estudando" }
];

function Skills() {
  // Variantes do container principal (Stagger effect)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  };

  // Variantes de entrada dos cards individuais
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  return (
    <section 
      id="skills" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO (Animações migradas para Framer Motion para melhor performance) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
        
        {/* Orbe Violeta Superior */}
        <motion.div 
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          style={{ transformPerspective: 1000, backfaceVisibility: "hidden" }}
          className="absolute top-1/3 left-1/4 w-80 h-80 bg-violet-600/10 rounded-full mix-blend-screen filter blur-[120px]"
        />
        
        {/* Orbe Azul Inferior */}
        <motion.div 
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          style={{ transformPerspective: 1000, backfaceVisibility: "hidden" }}
          className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-600/5 rounded-full mix-blend-screen filter blur-[100px]"
        />
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 12 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 text-center tracking-tight"
        >
          Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Stacks</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-neutral-500 text-center max-w-2xl mb-16 text-sm sm:text-base font-light tracking-wide"
        >
          Tecnologias que utilizo no dia a dia.
        </motion.p>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                borderColor: skill.status ? "rgba(245, 158, 11, 0.35)" : "rgba(139, 92, 246, 0.35)",
                backgroundColor: "rgba(18, 18, 18, 0.75)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative p-5 sm:p-6 bg-neutral-900/30 border border-neutral-800/80 rounded-2xl overflow-hidden transition-colors duration-300 cursor-default flex flex-col justify-between min-h-[130px] sm:min-h-[140px]"
            >
              {/* Glow de fundo ao hover */}
              <div className={`absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                skill.status ? "from-amber-500/5" : "from-violet-500/5"
              }`}></div>
              
              {/* Ícone principal com transição suave via CSS do Tailwind */}
              <div className={`relative text-4xl sm:text-5xl transition-transform duration-300 group-hover:scale-105 w-fit ${skill.color}`}>
                <skill.icon />
              </div>
              
              {/* Bloco de textos na base do card */}
              <div className="relative z-10 space-y-0.5 mt-4">
                <h3 className="text-base sm:text-lg font-medium text-neutral-200 tracking-wide">
                  {skill.name}
                </h3>

                {/* Status "Estudando" com pulso mais suave */}
                {skill.status && (
                  <div className="flex items-center gap-1.5 pt-0.5 animate-pulse [animation-duration:2s]">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                    <span className="text-[11px] font-medium tracking-widest text-amber-500/90 uppercase font-mono">
                      {skill.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Linha decorativa inferior reativa */}
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-transparent">
                <div className={`h-full w-0 group-hover:w-full transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) bg-gradient-to-r ${
                  skill.status ? "from-amber-500 to-orange-500" : "from-violet-500 to-fuchsia-500"
                }`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
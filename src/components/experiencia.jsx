import { FaGraduationCap, FaLaptopCode, FaCode } from "react-icons/fa";
import { motion } from "framer-motion"; // 1. Importação do Framer Motion

const experiences = [
  {
    year: "2022 - 2025",
    title: "Primeiro Contato com TI",
    icon: FaCode,
    description: "No ensino médio, tive meu primeiro contato com programação através dos cursos da Alura. Lá aprendi HTML, CSS e JavaScript, e nasceu minha paixão pelo desenvolvimento web.",
  },
  {
    year: "2026 - Atualmente",
    title: "Ciência da Computação",
    icon: FaGraduationCap,
    description: "Iniciei meus estudos acadêmicos. Durante esse período, aprofundei-me em tecnologias como React, Tailwind CSS e iniciei meus estudos em Java, unindo teoria com prática.",
  },
  {
    year: "2026 - Atualmente",
    title: "Projetos Freelancer",
    icon: FaLaptopCode,
    description: "Após me aprofundar nos estudos, decidi criar soluções digitais reais. Desenvolvo websites e landing pages para clientes, colocando em prática tudo o que aprendo.",
  },
];

function Experience() {
  // Variantes para a linha vertical central surgir crescendo de cima para baixo
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1, 
      transition: { duration: 1, ease: "easeInOut" } 
    }
  };

  return (
    <section 
      id="experience" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        
        {/* Título */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
        >
          Minha <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Jornada</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-neutral-400 text-center max-w-2xl mb-12 text-sm sm:text-base"
        >
          Um pouco da minha trajetória até aqui.
        </motion.p>

        {/* Timeline Vertical */}
        <div className="relative max-w-3xl w-full">
          
          {/* Linha central com animação de escala vertical baseada no Scroll */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800 transform -translate-x-1/2 origin-top hidden sm:block"
          />

          {/* Cards Container */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index}
                  className={`relative flex items-center sm:justify-between ${
                    isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Ponto na timeline Desktop (Reage dinamicamente através do CSS herdeiro do group) */}
                  <div className="absolute left-1/2 w-3 h-3 bg-neutral-800 border border-neutral-700 rounded-full -translate-x-1/2 z-10 hidden sm:block group-hover:bg-violet-500 group-hover:border-violet-400 group-hover:scale-125 transition-all duration-300"></div>
                  
                  {/* Ponto mobile */}
                  <div className="absolute left-0 w-3 h-3 bg-violet-500 rounded-full sm:hidden"></div>

                  {/* Card com efeito de entrada lateral baseado na posição */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ 
                      y: -4,
                      borderColor: "rgba(139, 92, 246, 0.4)",
                      backgroundColor: "rgba(38, 38, 38, 0.4)" 
                    }}
                    whileTap={{ scale: 0.99 }}
                    className="ml-8 sm:ml-0 sm:w-[44%] p-5 sm:p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl transition-colors duration-300 group cursor-default"
                  >
                    {/* Ano e Ícone */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2 text-violet-400">
                        <exp.icon className="text-sm" />
                        <span className="text-xs sm:text-sm font-mono font-semibold">{exp.year}</span>
                      </div>
                      <exp.icon className="text-xl text-neutral-600 group-hover:text-violet-400 group-hover:rotate-12 transition-all duration-300" />
                    </div>

                    {/* Título */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">
                      {exp.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Barra inferior decorativa */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
                      <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Animações CSS de Fundo */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Experience;
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion"; // 1. Importação do Framer Motion

const socials = [
  { 
    name: "WhatsApp", 
    icon: FaWhatsapp, 
    color: "#25D366", 
    bg: "bg-green-500/10",
    borderColor: "border-green-500/30",
    description: "Conversar agora",
    link: "https://wa.me/5511999152699"
  },
  { 
    name: "Instagram", 
    icon: FaInstagram, 
    color: "#E1306C", 
    bg: "bg-pink-500/10",
    borderColor: "border-pink-500/30",
    description: "Ver perfil",
    link: "https://instagram.com/matheusotho"
  },
  { 
    name: "GitHub", 
    icon: FaGithub, 
    color: "#FFFFFF", 
    bg: "bg-white/10",
    borderColor: "border-white/20",
    description: "Ver projetos",
    link: "https://github.com/MatheusOtho"
  },
  { 
    name: "LinkedIn", 
    icon: FaLinkedin, 
    color: "#0077B5", 
    bg: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Conectar",
    link: "https://www.linkedin.com/in/matheus-otho/"
  },
];

function Contact() {
  // Variantes para a sequência das redes sociais
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section 
      id="contact" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full mix-blend-screen filter blur-[80px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[60px] animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">

        {/* Título com transição suave */}
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center"
        >
          Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Conversar?</span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-neutral-400 text-center max-w-xl mb-10 sm:mb-12 text-sm sm:text-base"
        >
          Estou disponível para oportunidades, parcerias ou apenas para trocar uma ideia.
        </motion.p>

        {/* Email em Destaque com efeito de expansão centralizada */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-full max-w-2xl mb-12 sm:mb-16"
        >
          <div className="relative group p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-colors duration-300">
            {/* Glow de fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4">
              <p className="text-xs sm:text-sm text-neutral-500">Email profissional</p>
              <a 
                href="mailto:matheusotho@gmail.com" 
                className="text-lg sm:text-xl lg:text-2xl font-semibold text-white hover:text-violet-400 transition-all duration-300 inline-flex items-center gap-3 group/link"
              >
                matheusotho@gmail.com
                <FaPaperPlane className="text-violet-400 text-sm lg:text-base opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
              </a>
            </div>

            {/* Barra inferior */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
              <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>
        </motion.div>

        {/* Separador Textual */}
        <motion.h3 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-base font-medium text-neutral-500 mb-8"
        >
          — Ou me encontre nas redes —
        </motion.h3>

        {/* Grid de Redes Sociais integrado ao Framer Motion */}
        <motion.div 
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          {socials.map((social, index) => (
            <SocialCard key={index} social={social} />
          ))}
        </motion.div>

      </div>

      {/* Mantendo os keyframes CSS das esferas de iluminação traseiras */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Componente Card de Rede Social com animação e tratamento físico via Motion
const SocialCard = ({ social }) => {
  const cardItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <motion.a
      variants={cardItemVariants}
      whileHover={{ 
        y: -6,
        borderColor: "rgba(139, 92, 246, 0.4)",
        boxShadow: "0 15px 30px -10px rgba(0,0,0,0.5)"
      }}
      whileTap={{ scale: 0.98 }}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-5 sm:p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden transition-colors duration-300 text-center block"
    >
      {/* Glow dinâmico de fundo correspondente à marca */}
      <div className={`absolute inset-0 ${social.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Estrutura interna flex */}
      <div className="relative flex flex-col items-center">
        {/* Caixa do Ícone */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-transform duration-300 group-hover:scale-105"
          style={{ backgroundColor: `${social.color}15` }}
        >
          <social.icon 
            className="text-2xl"
            style={{ color: social.color }}
          />
        </div>

        {/* Nome da plataforma */}
        <p className="text-base font-bold text-white mb-1">
          {social.name}
        </p>

        {/* Descrição contextual */}
        <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
          {social.description}
        </p>

        {/* Seta direcional aparecendo no canto */}
        <div className="absolute bottom-0 right-0 sm:bottom-4 sm:right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300">
          <FaArrowRight 
            className="text-xs"
            style={{ color: social.color }}
          />
        </div>
      </div>

      {/* Traço gradiente inferior decorativo */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
        <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </motion.a>
  );
};

export default Contact;
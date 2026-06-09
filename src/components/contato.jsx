import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaPaperPlane, FaArrowRight } from "react-icons/fa";

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
  return (
    <section 
      id="contact" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear_gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse-slow"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full mix-blend-screen filter blur-[80px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[60px] animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Conversar?</span>
        </h2>

        <p className="text-neutral-400 text-center max-w-xl mb-10 sm:mb-12 text-sm sm:text-base">
          Estou disponível para oportunidades, parcerias ou apenas para trocar uma ideia.
        </p>

        {/* Email em Destaque */}
        <div className="w-full max-w-2xl mb-12 sm:mb-16">
          <div className="relative group p-6 sm:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500">
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
        </div>

        {/* Título CTA */}
        <h3 className="text-base font-medium text-neutral-500 mb-8">
          — Ou me encontre nas redes —
        </h3>

        {/* Grid de Botões Sociais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
          {socials.map((social, index) => (
            <SocialCard key={index} social={social} />
          ))}
        </div>

      </div>

      {/* Animações CSS */}
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

// Componente Card Separado
const SocialCard = ({ social }) => {
  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-5 sm:p-6 bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Glow de fundo */}
      <div className={`absolute inset-0 ${social.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Conteúdo */}
      <div className="relative flex flex-col items-center">
        {/* Ícone com fundo colorido */}
        <div 
          className="w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-all duration-500 group-hover:scale-110"
          style={{ backgroundColor: `${social.color}15` }}
        >
          <social.icon 
            className="text-2xl transition-colors duration-300"
            style={{ color: social.color }}
          />
        </div>

        {/* Nome */}
        <p className="text-base font-bold text-white mb-1">
          {social.name}
        </p>

        {/* Descrição */}
        <p className="text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
          {social.description}
        </p>

        {/* Seta indicadora */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
          <FaArrowRight 
            className="text-xs"
            style={{ color: social.color }}
          />
        </div>
      </div>

      {/* Barra inferior decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
        <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </a>
  );
};

export default Contact;
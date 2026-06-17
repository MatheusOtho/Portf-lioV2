import "../App.css"; 
import FotoPerfil from "../assets/FotoFormatura.jpeg";
import { FaGithub, FaLinkedin, FaDownload} from "react-icons/fa";

const Hero = () => {
  const socialLinks = [
    { href: "https://github.com/MatheusOtho", label: "GitHub", icon: <FaGithub /> },
    { href: "https://linkedin.com/in/matheusotho", label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans selection:bg-violet-500 selection:text-white pt-20">
      
      {/* --- FUNDO DINÂMICO (Mesh Gradient + Grid) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-orbit-1"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] animate-orbit-2"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* COLUNA ESQUERDA: Imagem - AGORA VEM PRIMEIRO (Foto acima em mobile, esquerda em desktop) */}
        <div className="relative group flex justify-center lg:justify-end order-1 lg:order-1">
            <div className="relative w-64 sm:w-72 md:w-80 lg:w-[450px]">
                <div className="absolute -inset-1 bg-gradient-to-br from-violet-600 to-blue-600 rounded-2xl opacity-70 blur group-hover:opacity-100 transition duration-700 group-hover:duration-200 animate-tilt"></div>
                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[3/4] lg:aspect-[3/4]">
                    <img 
                        src={FotoPerfil} 
                        alt="Matheus Otho - Profile" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-in-out filter grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                </div>
            </div>
        </div>

        {/* COLUNA DIREITA: Conteúdo - AGORA VEM DEPOIS (Textos abaixo em mobile, direita em desktop) */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-2">
          
          {/* Título */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            Olá, eu sou <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Matheus Otho
            </span>
          </h1>

          {/* Destaque Minimalista */}
          <div className="flex flex-col items-center lg:items-start gap-4 w-full">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              <span className="text-white">Desenvolvedor</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
                Front-End
              </span>
            </h2>
            {/* Separador Visual */}
            <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-transparent rounded-full"></div>
          </div>

          {/* Descrição */}
          <p className="text-neutral-400 text-base sm:text-lg max-w-lg leading-relaxed">
            <span className="text-white font-semibold">Sou Acadêmico em Ciência da Computação</span> e atualmente sou desenvolvedor <span className="text-white font-semibold">Front-End</span>. 
            <br /><br />
            Atuo com <span className="text-violet-400">HTML, CSS, JavaScript</span> e frameworks como <span className="text-violet-400">React, Tailwind e Bootstrap</span>, criando interfaces modernas, responsivas e com foco em experiência do usuário.
            Além de estar voltando meus estudos para <span className="text-violet-400">Java</span>
            <br /><br />
            Meu objetivo é evoluir para <span className="text-white font-semibold">Full Stack</span>, unindo design, usabilidade e lógica para desenvolver aplicações completas e escaláveis.
          </p>

          {/* --- ÁREA DE BOTÕES (Interativos) --- */}
          <div className="flex flex-wrap gap-5 pt-4 w-full justify-center lg:justify-start">
            
            {/* Botão Currículo */}
            <button
              onClick={() => window.open('/Currículo - Estágio em TI - Matheus Otho.pdf', '_blank')}
              className="group relative px-8 py-3.5 bg-violet-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                <div className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-white/20 rounded-[40%] animate-rotate-shine group-hover:bg-white/30 transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
              </div>
              <span className="relative flex items-center gap-2 z-10 group-hover:-translate-y-1 transition-transform duration-300">
                <FaDownload className="animate-bounce-x" />
                <span>Baixar Currículo</span>
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-full flex items-center justify-center text-sm text-white font-medium opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
              </span>
            </button>

            {/* Botões Sociais */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <SocialButton 
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Animações CSS */}
      <style>{`
        @keyframes orbit-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes orbit-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 20px) scale(1.1); }
          66% { transform: translate(30px, 40px) scale(0.9); }
        }
        @keyframes tilt {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        @keyframes rotate-shine {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .animate-orbit-1 { animation: orbit-1 10s ease-in-out infinite; }
        .animate-orbit-2 { animation: orbit-2 12s ease-in-out infinite; }
        .animate-tilt { animation: tilt 8s ease-in-out infinite; }
        .animate-rotate-shine { animation: rotate-shine 3s linear infinite; }
        .animate-bounce-x { animation: bounce-x 2s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

// Componente SocialButton (Interativo)
const SocialButton = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white overflow-hidden transition-all duration-300 hover:w-36 hover:border-violet-500/50 hover:bg-neutral-800 active:scale-95"
    >
      {/* Ícone Central (Desaparece ao hover) */}
      <span className="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl transition-all duration-300 group-hover:scale-75 group-hover:-translate-x-10 group-hover:opacity-0">
        {icon}
      </span>

      {/* Texto Label (Aparece ao hover) */}
      <span className="absolute inset-0 flex items-center justify-center text-sm font-medium whitespace-nowrap text-white opacity-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </span>
      
      {/* Ícone Pequeno (Aparece no canto) */}
      <span className="absolute left-3 text-lg text-white opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75">
        {icon}
      </span>
    </a>
  );
};

export default Hero;

// src/components/sections/Hero.jsx
import "../App.css";
import FotoPerfil from "../assets/FotoFormatura.jpeg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-neutral-950 text-gray-100 overflow-hidden relative"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="absolute top-24 lg:top-28 left-1/2 -translate-x-1/2">
        <span className="text-xs sm:text-sm font-mono text-violet-400">
          &lt;Início/&gt;
        </span>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Coluna da Esquerda: Imagem */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-full group">
          <div className="absolute inset-0 bg-violet-600 rounded-xl translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-400 ease-out"></div>
          
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 shadow-2xl border border-neutral-800">
            <img 
              src={FotoPerfil} 
              alt="Foto de perfil - Matheus Otho" 
              className="w-full h-auto object-cover transition-transform duration-700 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Coluna da Direita: Conteúdo */}
        <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
          
          <div className="inline-block mx-auto lg:mx-0 w-fit m-0">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-violet-400 font-bold md:text-sm">
              &lt;Front-End Developer /&gt;
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-1">
            Matheus <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800">Otho</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-neutral-300">
            Desenvolvedor <span className="text-violet-500 font-semibold">Front-End</span>
          </h2>

          <p className="text-neutral-400 text-md leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:text-lg">
            Sou acadêmico em <span className="text-violet-400 font-semibold">Ciência da Computação</span> e apaixonado por criar interfaces modernas, responsivas e bem estruturadas. Trabalho com <span className="text-violet-400 font-semibold">HTML, CSS e JavaScript</span>, 
            além de ferramentas como <span className="text-violet-400 font-semibold">Tailwind, Bootstrap e React</span>,desenvolvo interfaces e landing pages com foco em experiência do usuário, 
            design limpo e código bem organizado.
          </p>
          <p className="text-neutral-400 text-md leading-relaxed max-w-2xl mx-auto lg:mx-0 lg:text-lg">
            Tenho interesse tanto na parte visual quanto na lógica do desenvolvimento, buscando sempre unir estética, usabilidade e performance em cada projeto que construo. 
            Meu objetivo é evoluir constantemente e me tornar um <span className="text-violet-400 font-semibold">desenvolvedor Full Stack</span> para criar aplicações completas e escaláveis.
          </p>
        
          {/* Botões */}
          <div className="flex flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start pt-4">
            
            {/* Botão de Download do Currículo */}
            <a 
              href="/Currículo - Estágio em TI - Matheus Otho.pdf"
              download="Currículo - Estágio em TI - Matheus Otho.pdf"
              className="group relative px-8 py-4 sm:px-10 sm:py-4 bg-violet-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
            >
              <span className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
              <span className="relative flex items-center gap-2 z-10 text-base sm:text-lg">
                Baixar Currículo <FaDownload className="text-base sm:text-lg" />
              </span>
            </a>

            {/* Botões Sociais */}
            <div className="flex gap-3 sm:gap-4">
              <SocialButton 
                href="https://github.com/seuusuario" 
                icon={<FaGithub size={24} />} 
                label="GitHub" 
              />
              <SocialButton 
                href="https://linkedin.com/in/seuusuario" 
                icon={<FaLinkedin size={24} />} 
                label="LinkedIn" 
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

// Componente para botões sociais
const SocialButton = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative p-4 sm:p-5 bg-transparent border border-neutral-700 rounded-lg text-neutral-400 hover:text-white hover:border-violet-500 hover:bg-violet-600/20 transition-all duration-300"
    >
      {icon}
      
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-violet-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};

export default Hero;
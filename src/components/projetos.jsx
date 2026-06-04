// src/components/sections/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import OthoBanner from "../assets/OthoEsculturas.png";
import RebecaBanner from "../assets/RebecaNails.png";
// import { FaFolder } from "react-icons/fa";

const projects = [
  {
    title: "Otho Esculturas",
    description: "Um site para uma Empresa de Esculturas, onde apresentam suas obras e serviços, contendo informações sobre a empresa, portfólio de trabalhos e detalhes dos serviços oferecidos, além de detalhes sobre cada obra.",
    image: OthoBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkGithub: "https://github.com/MatheusOtho/OthoEsculturas",
    linkDeploy: "https://othoesculturas.vercel.app/",
  },
  {
    title: "Rebeca Nails",
    description: "Uma Lading Page para um amiga, onde apresenta os serviços de manicure e pedicure, contendo informações sobre a profissional, portfólio de trabalhos e detalhes dos serviços oferecidos.",
    image: RebecaBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkGithub: "https://github.com/MatheusOtho/rebecanails",
    linkDeploy: "https://rebecanails.netlify.app/",
  },
  
];

function Projects() {
  return (
    <section 
      id="projects" 
      className="py-50 flex flex-col items-center justify-center px-6 py-20 bg-neutral-950 text-gray-100 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm font-mono text-violet-400">
          &lt;Projetos/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Meus <span className="text-violet-500">Projetos</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-2xl mb-12">
        Alguns dos projetos que desenvolvi ao longo da minha jornada como desenvolvedor.
      </p>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300"
          >
            {/* Imagem do Projeto */}
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-6">
              {/* Título */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                {project.title}
              </h3>

              {/* Descrição */}
              <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Linguagens Usadas */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.languages.map((lang, i) => (
                  <span 
                    key={i}
                    className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.linkGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <FaGithub />
                  <span className="text-sm">Código</span>
                </a>
                <a 
                  href={project.linkDeploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Deploy</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
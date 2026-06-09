import { FaExternalLinkAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import OthoBanner from "../assets/OthoEsculturas.png";
import RebecaBanner from "../assets/RebecaNails.png";
import FiberBanner from "../assets/fiberglass.png";

const projects = [
  {
    title: "Otho Esculturas",
    description: "Site institucional para empresa de esculturas. Apresenta portfólio de obras, serviços oferecidos e informações sobre a empresa, com diseño limpo e moderno.",
    image: OthoBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkDeploy: "https://othoesculturas.vercel.app/",
  },
  {
    title: "Rebeca Nails",
    description: "Landing Page para profissional de manicure e pedicure. Apresenta serviços, portfólio de trabalhos e informações de contato.",
    image: RebecaBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkDeploy: "https://rebecanails.netlify.app/",
  },
  {
    title: "FiberGlass Móveis",
    description: "Website para empresa de móveis de fibra de vidro. Apresenta catálogo de produtos, informações sobre a empresa e contato.",
    image: FiberBanner,
    languages: ["React", "Tailwind", "JavaScript"],
    linkDeploy: "https://rebecanails.netlify.app/",
  },
];

function Projects() {
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
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Meus <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Projetos</span>
        </h2>

        <p className="text-neutral-400 text-center max-w-2xl mb-12 text-sm sm:text-base">
          Projetos selecionados que desenvolvi.
        </p>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl w-full">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>

      {/* Animações CSS */}
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

// Componente Card Separado
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-neutral-900/60 border border-neutral-800 rounded-xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2">
      
      {/* Imagem do Projeto */}
      <div className="relative overflow-hidden h-48 sm:h-56">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay e brilho */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute inset-0 bg-violet-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Conteúdo do Card */}
      <div className="relative p-6">
        {/* Título */}
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
          {project.title}
        </h3>

        {/* Descrição */}
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Linguagens Usadas */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.languages.map((lang, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1 bg-neutral-800/80 text-neutral-300 rounded-full border border-neutral-700 hover:border-violet-500/50 hover:text-white transition-colors"
            >
              {lang}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5">
          {/* <a 
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group/link"
          >
            <FaGithub className="text-lg transition-transform group-hover/link:scale-110" />
            <span className="text-sm font-medium">Código</span>
          </a> */}
          <a 
            href={project.linkDeploy}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group/link"
          >
            <FaExternalLinkAlt className="text-lg transition-transform group-hover/link:scale-110" />
            <span className="text-sm font-medium">Deploy</span>
          </a>
        </div>

        {/* Borda inferior decorativa */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
          <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
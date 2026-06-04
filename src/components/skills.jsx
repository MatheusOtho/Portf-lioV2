// src/components/sections/Skills.jsx
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
  FaJava 
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Java", icon: FaJava, color: "text-red-500" },
];

function Skills() {
  return (
    <section 
      id="skills" 
      className="py-50 flex flex-col items-center justify-center px-6 py-20 bg-neutral-900/70 text-gray-100 relative overflow-hidden"
    >
      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm font-mono text-violet-400">
          &lt;Stacks/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Minhas <span className="text-violet-500">Stacks</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-2xl mb-12
      lg:text-lg">
        Tecnologias e ferramentas que utilizo no dia a dia para criar interfaces modernas e funcionais.
      </p>

      {/* Grid de Stacks */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group flex flex-col items-center justify-center p-6 bg-neutral-950/50 border border-neutral-900 rounded-xl hover:border-violet-500 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Ícone */}
            <div className={`text-4xl sm:text-5xl mb-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
              <skill.icon />
            </div>
            
            {/* Nome */}
            <span className="text-sm sm:text-base font-medium text-neutral-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>

            {/* Badge "Em aprendizado" para Java */}
            {skill.name === "Java" && (
              <span className="mt-2 text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded-full">
                Aprendendo
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
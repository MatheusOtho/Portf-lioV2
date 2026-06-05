// src/components/sections/Skills.jsx
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaBootstrap, 
} from "react-icons/fa";
import { SiTailwindcss, SiPython } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Python", icon: SiPython, color: "text-green-800" },
  ];

function Skills() {
  return (
    <section 
      id="skills" 
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-neutral-900 text-gray-100 relative overflow-hidden"
    >
      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm font-mono text-neutral-500">
          &lt;Stacks/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Minhas <span className="text-violet-500">Stacks</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-2xl mb-12">
        Tecnologias e ferramentas que utilizo no dia a dia.
      </p>

      {/* Grid de Stacks */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 max-w-4xl w-full">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="group flex flex-col items-center justify-center p-4 sm:p-5 lg:p-6 bg-neutral-800/40 border border-neutral-700 rounded-xl hover:border-violet-500 hover:bg-neutral-800 transition-all duration-300 hover:-translate-y-2 cursor-default"
          >
            {/* Ícone */}
            <div className={`text-3xl sm:text-4xl lg:text-4xl mb-2 sm:mb-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
              <skill.icon />
            </div>
            
            {/* Nome */}
            <span className="text-xs sm:text-sm lg:text-base font-medium text-neutral-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>

            {/* Badge "Aprendendo" para Python e Java */}
            {(skill.name === "Python" || skill.name === "Java") && (
              <span className="mt-2 text-[10px] sm:text-xs px-2 py-0.5 bg-violet-500/20 text-violet-400 rounded-full">
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
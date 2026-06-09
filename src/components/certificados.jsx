import { FaCode, FaServer, FaDatabase, FaCertificate } from "react-icons/fa";

const certifications = [
  {
    category: "Front-End",
    icon: FaCode,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    courses: [
      { name: "HTML5 e CSS3", platform: "Alura", year: "2025" },
      { name: "JavaScript", platform: "Alura", year: "2026" },
      { name: "React", platform: "DIO", year: "2026" },
    ],
  },
  {
    category: "Back-End",
    icon: FaServer,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    courses: [
      { name: "Python", platform: "DIO", year: "2026" },
    ],
  },
  {
    category: "Banco de Dados",
    icon: FaDatabase,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    courses: [
      { name: "SQL", platform: "DIO", year: "2026" },
    ],
  },
];

function Certifications() {
  return (
    <section 
      id="certifications" 
      className="relative w-full py-20 lg:py-32 flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-gray-100 font-sans"
    >
      {/* --- FUNDO DINÂMICO --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear_gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_1rem] [mask-image:radial_gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-60 h-60 bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[80px] animate-float-delayed"></div>
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
          Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Certificações</span>
        </h2>

        <p className="text-neutral-400 text-center max-w-2xl mb-12 text-sm sm:text-base">
          Cursos e certificações que fiz ao longo da jornada.
        </p>

        {/* Grid com Categorias */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>

      </div>

      {/* Animações CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Componente Card Separado
const CertificationCard = ({ cert, index }) => {
  return (
    <div className="group relative bg-neutral-900/60 border border-neutral-800 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2">
      
      {/* Header do Card */}
      <div className="relative p-6 sm:p-7 border-b border-neutral-800">
        {/* Glow de fundo */}
        <div className={`absolute inset-0 ${cert.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`p-3 ${cert.bgColor} rounded-xl border ${cert.borderColor} group-hover:scale-110 transition-transform duration-500`}>
              <cert.icon className={`text-xl ${cert.color}`} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {cert.category}
              </h3>
              <span className="text-xs text-neutral-500">
                {cert.courses.length} curso{cert.courses.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
          
          {/* Número decorativo */}
          <span className="text-5xl sm:text-6xl font-bold text-neutral-800/30 select-none">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Lista de Cursos */}
      <div className="p-5 sm:p-6">
        {cert.courses.length > 0 ? (
          <ul className="space-y-3">
            {cert.courses.map((course, i) => (
              <li 
                key={i}
                className="flex items-center justify-between p-3 bg-neutral-800/30 rounded-lg border border-neutral-800 hover:border-violet-500/50 hover:bg-neutral-800/60 transition-all duration-300 group/course cursor-default"
              >
                <div className="flex items-center gap-3">
                  <FaCertificate className={`text-sm ${cert.color} opacity-50`} />
                  <div>
                    <p className="text-sm text-neutral-300 font-medium group-hover/course:text-white transition-colors">
                      {course.name}
                    </p>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium mt-1 inline-block ${cert.bgColor} ${cert.color}`}>
                      {course.platform}
                    </span>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 font-mono">
                  {course.year}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          // Estado vazio
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <FaCertificate className="text-4xl text-neutral-700 mb-3" />
            <p className="text-neutral-500 text-sm">
              Em breve
            </p>
          </div>
        )}
      </div>

      {/* Barra inferior decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neutral-800">
        <div className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-600 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default Certifications;
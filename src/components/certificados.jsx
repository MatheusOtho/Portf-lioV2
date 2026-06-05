// src/components/sections/Certifications.jsx
const certifications = [
  {
    category: "Front-End",
    icon: "fa-code",
    color: "orange",
    courses: [
      // { name: "HTML5 e CSS3", platform: "Alura", year: "2023" },
    ],
  },
  {
    category: "Back-End",
    icon: "fa-server",
    color: "green",
    courses: [
      // { name: "Kotlin", platform: "Android Dev", year: "2024" },
    ],
  },
  {
    category: "Banco de Dados",
    icon: "fa-database",
    color: "blue",
    courses: [
      // { name: "SQL", platform: "Alura", year: "2024" },
    ],
  },
];

function Certifications() {
  return (
    <section 
      id="certifications" 
      className=" flex flex-col items-center justify-center px-6 py-20 bg-neutral-950 text-gray-100 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm lg:text-base text-center text-violet-400">
          &lt;Certificados/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Minhas <span className="text-violet-500">Certificações</span>
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-neutral-400 text-center max-w-2xl mb-12">
        Cursos e certificações que fiz ao longo da minha jornada.
      </p>

      {/* Grid com 3 Blocos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
        
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-5 lg:p-7 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Header do Bloco */}
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 lg:p-4 bg-neutral-800 group-hover:bg-violet-500/20 rounded-xl transition-colors duration-300">
                <i className={`fa-solid ${cert.icon} text-xl lg:text-2xl text-${cert.color}-500`}></i>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white">{cert.category}</h3>
                <span className="text-xs lg:text-sm text-neutral-500">{cert.courses.length} cursos</span>
              </div>
            </div>

            {/* Linha */}
            <div className="w-full h-px bg-neutral-800 mb-5 lg:mb-6"></div>

            {/* Lista de Cursos */}
            <ul className="space-y-2 lg:space-y-3">
              {cert.courses.map((course, i) => (
                <li 
                  key={i}
                  className="flex items-center justify-between p-3 lg:p-4 bg-neutral-800/30 rounded-lg border border-neutral-800 hover:bg-neutral-800 hover:border-violet-500/50 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-3">
                    <i className={`fa-solid fa-certificate text-xs lg:text-sm text-${cert.color}-500 opacity-50`}></i>
                    <div>
                      <p className="text-sm lg:text-base text-neutral-300 font-medium">{course.name}</p>
                      <span className={`text-[10px] lg:text-xs px-1.5 py-0.5 bg-${cert.color}-500/15 text-${cert.color}-400 rounded font-semibold mt-1 inline-block`}>
                        {course.platform}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs lg:text-sm text-neutral-500 font-mono">{course.year}</span>
                </li>
              ))}
            </ul>

            {/* Número decorativo */}
            <div className="absolute -bottom-4  text-7xl lg:text-9xl font-bold text-neutral-800/20 select-none">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Certifications;
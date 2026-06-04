// src/components/sections/Experience.jsx
const experiences = [
  {
    year: "2022 - 2025",
    title: "Primeiro Contato com TI",
    icon: "fa-user",
    description: "No ensino médio, tive meu primeiro contato com programação através dos cursos da Alura, disponibilizados pelo governo. Lá pude aprender HTML, CSS e JavaScript, e foi aí que nasceu minha paixão pelo desenvolvimento web.",
  },
  {
    year: "2026 - Atualmente",
    title: "Cursando Ciência da Computação",
    icon: "fa-graduation-cap",
    description: "Iniciei meus estudos acadêmicos em Ciência da Computação. Durante esse período, diveglio-me em tecnologias modernas como React, Tailwind CSS e Kotlin, sempre buscando agregar conhecimento teórico com prática.",
  },
  {
    year: "2026 - Atualmente",
    title: "Projetos como Freelancer",
    icon: "fa-laptop-code",
    description: "Após me aprofundar nos estudos, decidi aceitar o desafio de criar soluções digitais reais. Comecei a desenvolver websites e landing pages para clientes, colocando em prática tudo o que aprendi e buscando sempre entregar o melhor resultado.",
  },
];

function Experience() {
  return (
    <section 
      id="experience" 
      className="py-50 flex flex-col items-center justify-center px-6 bg-neutral-900/70 text-gray-100 relative overflow-hidden"
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm font-mono text-violet-400">
          &lt;Experiência/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Minha <span className="text-violet-500">Jornada</span>
      </h2>

      <p className="text-neutral-400 text-center max-w-2xl mb-12">
        Um pouco da minha trajetória até aqui, desde o primeiro contato com código até os projetos atuais.
      </p>

      {/* Timeline */}
      <div className="relative max-w-4xl w-full">
        {/* Linha vertical */}
        <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-neutral-800"></div>

        {/* Cards de Experiência */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 
                  ? "sm:flex-row" 
                  : "sm:flex-row-reverse"
              }`}
            >
              {/* Ponto na timeline */}
              <div className="absolute left-4 sm:left-1/2 w-3 h-3 bg-violet-500 rounded-full -translate-x-1/2 z-10"></div>

              {/* Espaço vazio para equilibrar o layout */}
              <div className="hidden sm:block w-1/2"></div>

              {/* Card */}
              <div className="ml-8 sm:ml-0 sm:w-[45%] p-6 bg-neutral-800/50 border border-neutral-700 rounded-xl hover:border-violet-500 hover:bg-neutral-800 transition-all duration-300 group">
                {/* Ano */}
                <div className="flex items-center gap-2 text-violet-400 mb-3">
                  <i className="fa-solid fa-calendar text-sm"></i>
                  <span className="text-sm font-mono font-semibold">{exp.year}</span>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                  {exp.title}
                </h3>

                {/* Ícone相关性 */}
                <div className="flex justify-end mb-2">
                  <i className={`fa-solid ${exp.icon} text-2xl text-neutral-500 group-hover:text-violet-400 transition-colors`}></i>
                </div>

                {/* Descrição */}
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
// src/components/sections/Contact.jsx
const socials = [
  { name: "WhatsApp", icon: "fa-whatsapp", color: "#25D366", bg: "bg-green-500", link: "https://wa.me/5582999999999", description: "Enviar mensagem" },
  { name: "Instagram", icon: "fa-instagram", color: "#E1306C", bg: "bg-pink-500", link: "https://instagram.com/seuusuario", description: "Ver perfil" },
  { name: "GitHub", icon: "fa-github", color: "#FFFFFF", bg: "bg-white/20", link: "https://github.com/seuusuario", description: "Ver projetos" },
  { name: "LinkedIn", icon: "fa-linkedin-in", color: "#0A66C2", bg: "bg-blue-500", link: "https://linkedin.com/in/seuusuario", description: "Conectar" },
];

function Contact() {
  return (
    <section 
      id="contact" 
      className=" flex flex-col items-center justify-center px-4 sm:px-6 py-50 bg-neutral-900/70 text-gray-100 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none select-none -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-0 right-1/4 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] bg-violet-600/5 rounded-full blur-[80px]"></div>
      </div>

      {/* Título da Seção */}
      <div className="mb-4">
        <span className="text-xs sm:text-sm lg:text-base font-mono text-violet-400">
          &lt;Contato/&gt;
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
        Vamos <span className="text-violet-500">Conversar?</span>
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-neutral-400 text-center max-w-xl mb-10 lg:mb-12">
        Estou disponível para oportunidades, parcerias ou apenas para trocar uma ideia.
      </p>

      {/* Container Principal */}
      <div className="w-full max-w-5xl">
        
        {/* Email em Destaque */}
        <div className="text-center mb-10 lg:mb-12 p-6 lg:p-8 bg-neutral-900/60 border border-neutral-800 rounded-2xl hover:border-violet-500/50 transition-all duration-500 group">
          <p className="text-xs sm:text-sm text-neutral-500 mb-2">Email profissional</p>
          <a 
            href="mailto:matheusotho@gmail.com" 
            className="text-lg sm:text-xl lg:text-2xl font-semibold text-white hover:text-violet-400 transition-all duration-300 inline-flex items-center gap-3 group-hover:gap-4"
          >
            matheusotho@gmail.com
            <i className="fa-regular fa-paper-plane text-violet-500 text-sm lg:text-base opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300"></i>
          </a>
        </div>

        {/* Título CTA */}
        <h3 className="text-base lg:text-lg font-medium text-neutral-400 text-center mb-6 lg:mb-8">
          — Ou me encontre nas redes —
        </h3>

        {/* Grid de Botões Sociais */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 lg:p-6 bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-transparent transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background gradiente no hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Brilho passando */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:shine transition-all duration-1000"></div>
              </div>

              {/* Borda colorida */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[var(--color)] transition-all duration-500" style={{ '--color': social.color }}></div>

              {/* Conteúdo */}
              <div className="relative flex flex-col items-center">
                {/* Ícone com fundo */}
                <div 
                  className="w-12 h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-xl mb-3 lg:mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${social.color}20` }}
                >
                  <i 
                    className={`fa-brands ${social.icon} text-2xl lg:text-3xl`}
                    style={{ color: social.color }}
                  ></i>
                </div>

                {/* Nome do sociais */}
                <p className="text-sm lg:text-base font-bold text-white mb-1">
                  {social.name}
                </p>

                {/* Descrição */}
                <p className="text-xs lg:text-sm text-neutral-500 group-hover:text-neutral-400 transition-colors">
                  {social.description}
                </p>

                {/* Indicador de seta no hover */}
                <div className="absolute bottom-3 lg:bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  <i className="fa-solid fa-arrow-right text-xs" style={{ color: social.color }}></i>
                </div>
              </div>

              {/* Efeito glow inferior */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{ background: `linear-gradient(to right, transparent, ${social.color}, transparent)` }}
              ></div>
            </a>
          ))}
        </div>

      </div>

      {/* Animação CSS */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        .group:hover .shine {
          animation: shine 1s;
        }
      `}</style>
    </section>
  );
}

export default Contact;
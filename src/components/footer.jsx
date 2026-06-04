// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="py-6 sm:py-8 bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
        
        {/* Direitos Autorais */}
        <p className="text-xs sm:text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} <span className="text-white font-medium">Matheus Otho</span>. Todos os direitos reservados.
        </p>

        {/* Separador (apenas no PC) */}
        <span className="hidden sm:block text-neutral-700">|</span>

        {/* Tecnologia */}
        <p className="text-xs sm:text-sm text-neutral-600 text-center">
          Desenvolvido com <span className="text-violet-400">React</span> + <span className="text-cyan-400">Tailwind</span>
        </p>

      </div>
    </footer>
  );
}

export default Footer;
// src/components/Header.jsx
import { useState, useEffect } from "react";

const navItems = [
  { name: "Início", href: "#home" },
  { name: "Stacks", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Experiência", href: "#experience" },
  { name: "Certificados", href: "#certifications" },
  { name: "Contato", href: "#contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 lg:h-18 xl:h-20 2xl:h-24 flex items-center justify-between">
        
        {/* Logo - Aumentado para telas grandes */}
        <a href="#home" className="text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold text-white hover:text-violet-400 transition-colors">
          <span className="text-violet-500">&lt;</span>
          Matheus<span className="text-violet-400">Otho</span>
          <span className="text-violet-500">/&gt;</span>
        </a>

        {/* Container direito */}
        <div className="flex items-center gap-4 xl:gap-6">
          
          {/* Links - Desktop */}
          <ul className="hidden lg:flex gap-6 xl:gap-10">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                <a 
                  href={item.href} 
                  className="text-sm xl:text-base font-medium text-neutral-400 hover:text-white transition-colors block"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden p-2 text-white hover:text-violet-400 transition-colors"
            aria-label="Abrir menu"
          >
            <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
          </button>

        </div>
      </nav>

      {/* Menu Mobile */}
      <div className={`lg:hidden absolute top-16 lg:top-18 xl:top-20 2xl:top-24 left-0 w-full bg-neutral-950 border-b border-neutral-800 shadow-2xl transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}>
        <ul className="flex flex-col p-4 gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-2 text-neutral-300 hover:text-violet-400 hover:bg-neutral-900 rounded-lg transition-all"
              >
                <span>{item.name}</span>
                <i className="fa-solid fa-chevron-right text-xs"></i>
              </a>
            </li>
          ))}
          <li className="mt-2 pt-2 border-t border-neutral-800">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center text-white font-semibold bg-violet-600 hover:bg-violet-500 rounded-lg transition-colors"
            >
              Vamos conversar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
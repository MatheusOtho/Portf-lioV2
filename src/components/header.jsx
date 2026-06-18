import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // 1. Importação do Framer Motion

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

  // Variantes para a cortina do Menu Mobile (Efeito drop-down suave)
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeOut",
        staggerChildren: 0.05, // Cria um efeito cascata nos links mobile
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  // Variantes para os itens internos do menu mobile
  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled 
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 shadow-lg shadow-black/20" 
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 lg:h-18 xl:h-20 2xl:h-24 flex items-center justify-between">
        
        {/* Logo */}
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

          {/* Botão Hambúrguer Animado com SVG Puro */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden p-2 text-white hover:text-violet-400 transition-colors focus:outline-none"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current stroke-2" strokeLinecap="round">
              <motion.line 
                x1="4" y1="6" x2="20" y2="6" 
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: "12px", originY: "6px" }}
              />
              <motion.line 
                x1="4" y1="12" x2="20" y2="12" 
                animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.line 
                x1="4" y1="18" x2="20" y2="18" 
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{ originX: "12px", originY: "18px" }}
              />
            </svg>
          </button>

        </div>
      </nav>

      {/* Menu Mobile - Envolvido por AnimatePresence para desmontagem fluida */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-16 left-0 w-full bg-neutral-950/98 backdrop-blur-lg border-b border-neutral-800 shadow-2xl lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-3 px-3 text-neutral-300 hover:text-violet-400 hover:bg-neutral-900/60 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <motion.i 
                      whileHover={{ x: 3 }}
                      className="fa-solid fa-chevron-right text-xs text-neutral-600 group-hover:text-violet-400 transition-colors"
                    ></motion.i>
                  </a>
                </motion.li>
              ))}
              
              {/* Botão de CTA no final do Menu */}
              <motion.li variants={itemVariants} className="mt-2 pt-2 border-t border-neutral-800">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center text-white text-sm font-semibold bg-violet-600 hover:bg-violet-500 rounded-lg shadow-lg shadow-violet-600/10 active:scale-[0.98] transition-all"
                >
                  Vamos conversar
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
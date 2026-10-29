import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import useMacbookStore from "../store";

const NavBar = () => {
  const { theme, toggleTheme, openDiagnosisModal } = useMacbookStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "axis-glass py-3 shadow-lg"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Lockup */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="AXIS Human Performance — Início"
        >
          <img
            src="/brand/axis-symbol.svg"
            alt="Símbolo AXIS"
            className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-[0.28em] text-gold-gradient leading-none">
              ΛXIS
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase axis-text-muted mt-0.5">
              Human Performance
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7 xl:gap-9">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                className="text-sm font-medium axis-text-sub hover:text-[#cfaf82] transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions: Theme Switcher + CTA + Mobile Trigger */}
        <div className="flex items-center gap-2.5 sm:gap-3.5">
          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Ativar Modo Claro" : "Ativar Modo Escuro"
            }
            title={
              theme === "dark" ? "Mudar para Tema Claro" : "Mudar para Tema Escuro"
            }
            className="p-2.5 rounded-full axis-surface hover:border-[#cfaf82]/60 transition-all duration-300 cursor-pointer flex items-center justify-center group"
          >
            {theme === "dark" ? (
              /* Sun Icon for switching to Light */
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#cfaf82] group-hover:rotate-45 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            ) : (
              /* Moon Icon for switching to Dark */
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-[#9a7a4f] group-hover:-rotate-12 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            )}
          </button>

          {/* Desktop & Tablet CTA */}
          <button
            type="button"
            onClick={() => openDiagnosisModal("Diagnóstico Geral")}
            className="hidden sm:inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold text-black bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-md cursor-pointer"
          >
            <span>Solicitar Diagnóstico</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir Menu de Navegação"
            className="lg:hidden p-2.5 rounded-xl axis-surface cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-5 h-5 axis-text-main"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 axis-text-main"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden axis-glass border-t border-white/10 px-6 py-6 animate-fadeIn">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className="block py-2 text-base font-medium axis-text-main hover:text-[#cfaf82] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                openDiagnosisModal("Diagnóstico Mobile");
              }}
              className="w-full py-3 rounded-full text-sm font-semibold text-black bg-gold-gradient shadow-lg flex items-center justify-center gap-2"
            >
              <span>Agendar Diagnóstico Empresarial</span>
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>

            <div className="flex items-center justify-between text-xs axis-text-muted px-1 pt-1">
              <span>Maringá — PR • CNPJ 67.828.408/0001-27</span>
              <span className="text-[#cfaf82]">AXIS OS v2.6</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;

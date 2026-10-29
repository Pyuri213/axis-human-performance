import { companyInfo, footerLinks } from "../constants";
import useMacbookStore from "../store";

const Footer = () => {
  const { openDiagnosisModal } = useMacbookStore();

  return (
    <footer
      id="footer"
      className="border-t border-white/10 pt-14 pb-10 mt-10 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3.5 mb-4">
              <img
                src="/brand/axis-symbol.svg"
                alt="AXIS Logo"
                className="w-11 h-11 object-contain"
              />
              <div>
                <span className="block text-xl font-bold tracking-[0.28em] text-gold-gradient leading-none">
                  ΛXIS
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase axis-text-muted mt-1">
                  Human Performance Diagnostic System
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm axis-text-sub max-w-md leading-relaxed mb-5">
              Transformamos empresas em negócios organizados, eficientes e
              preparados para crescer através da integração entre Pessoas,
              Estratégia, Processos e Tecnologia.
            </p>

            <div className="text-xs axis-text-muted space-y-1">
              <p>
                <strong className="axis-text-main">Razão Social:</strong>{" "}
                {companyInfo.razaoSocial}
              </p>
              <p>
                <strong className="axis-text-main">CNPJ:</strong>{" "}
                {companyInfo.cnpj}
              </p>
              <p>
                <strong className="axis-text-main">Sede:</strong>{" "}
                {companyInfo.sede}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfaf82] mb-4">
              Navegação Executiva
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="axis-text-sub hover:text-[#cfaf82] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Governance & Leadership */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfaf82] mb-4">
              Diretoria & Governança
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm axis-text-sub mb-6">
              <li>
                <strong className="axis-text-main">Michele Mattos</strong> — CEO
                & Diagnóstico Comportamental
              </li>
              <li>
                <strong className="axis-text-main">Andriely</strong> — COO /
                Operações, Processos & Comercial
              </li>
              <li>
                <strong className="axis-text-main">Pablo</strong> — CTO /
                Tecnologia & Plataforma AXIS
              </li>
            </ul>

            <button
              type="button"
              onClick={() => openDiagnosisModal("Contato via Rodapé")}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer"
            >
              Falar com a Diretoria Comercial →
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs axis-text-muted">
          <p>
            © {new Date().getFullYear()} {companyInfo.razaoSocial} Todos os
            direitos reservados.
          </p>
          <p className="tracking-wider uppercase text-[11px] text-[#cfaf82]">
            ESTRATÉGIA • TECNOLOGIA • CRESCIMENTO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

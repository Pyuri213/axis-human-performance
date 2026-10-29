import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useMacbookStore from "../store";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(() => {
    gsap.to([".bento-left", ".bento-right"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "top 85%" : "top 65%",
      },
      y: 0,
      opacity: 1,
      stagger: 0.25,
      duration: 0.9,
      ease: "power2.out",
    });
  }, [isMobile]);

  return (
    <section
      id="highlights"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Diferenciais Executivos • Por que a AXIS?
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold axis-text-main leading-tight">
          O fim do improviso na{" "}
          <span className="text-gold-gradient">gestão empresarial.</span>
        </h2>
        <h3 className="text-base sm:text-xl axis-text-sub font-normal mt-4">
          Estrutura corporativa desenhada para gerar autonomia, governança e
          escala previsível.
        </h3>
      </div>

      {/* Apple-Style Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bento-left flex flex-col justify-between gap-6 translate-y-6 opacity-0">
          {/* Card 1 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border border-[#cfaf82]/30 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <img
                src="/laptop.png"
                alt="AXIS OS"
                className="w-14 h-14 object-contain"
              />
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#cfaf82]/15 text-[#cfaf82]">
                AXIS OS
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold axis-text-main mb-3">
              Fim da dependência exclusiva do dono.
            </h4>
            <p className="text-sm sm:text-base axis-text-sub leading-relaxed">
              Documentamos processos, checklists, contratos, funil comercial e
              responsabilidades para que a empresa funcione com excelência e
              previsibilidade — e não fique presa na cabeça das pessoas.
            </p>
          </div>

          {/* Card 2 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/sun.png"
              alt="Análise Corporal e Comportamental"
              className="w-14 h-14 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#cfaf82]">
                Análise Corporal Empresarial
              </span>
              <h4 className="text-xl sm:text-2xl font-bold axis-text-main mt-1 mb-2">
                A pessoa certa na função certa.
              </h4>
              <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                Identificamos padrões comportamentais de líderes e equipes para
                resolver conflitos na raiz e destravar a produtividade.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bento-right flex flex-col justify-between gap-6 translate-y-6 opacity-0">
          {/* Card 3 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border-2 border-[#cfaf82]/50 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src="/ai.png"
              alt="Inteligência Artificial e SaaS"
              className="w-14 h-14 object-contain shrink-0"
            />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#cfaf82]">
                Tecnologia & IA Proprietária
              </span>
              <h4 className="text-xl sm:text-2xl font-bold axis-text-main mt-1 mb-2">
                Construído para{" "}
                <span className="text-gold-gradient">
                  Inteligência Empresarial.
                </span>
              </h4>
              <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                Relatórios automáticos, dashboards executivos, histórico de
                avaliações e planos de ação acompanhados em plataforma SaaS.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <img
                src="/battery.png"
                alt="Performance e Escala"
                className="w-14 h-14 object-contain"
              />
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400">
                Performance Sustentável
              </span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold axis-text-main mb-3">
              Prontidão para{" "}
              <span className="text-gold-gradient">escalar resultados</span> com
              governança.
            </h4>
            <p className="text-sm sm:text-base axis-text-sub leading-relaxed">
              Do diagnóstico inicial à recorrência tecnológica: estruturamos
              jurídico, processos, comercial e liderança para o próximo ciclo de
              expansão.
            </p>
          </div>
        </div>
      </div>

      {/* Final Master Call-To-Action Banner */}
      <div className="mt-16 sm:mt-24 rounded-3xl p-8 sm:p-12 lg:p-16 axis-surface border border-[#cfaf82]/40 text-center relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[110px] opacity-25 bg-[#cfaf82]"
        />

        <img
          src="/brand/axis-symbol.svg"
          alt="Símbolo AXIS"
          className="w-16 h-16 mx-auto mb-6 object-contain"
        />

        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Próximo Passo Estratégico
        </span>

        <h3 className="max-w-3xl mx-auto text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
          Pronto para substituir o improviso por{" "}
          <span className="text-gold-gradient">inteligência empresarial?</span>
        </h3>

        <p className="max-w-2xl mx-auto mt-4 text-sm sm:text-base lg:text-lg axis-text-sub leading-relaxed">
          Solicite o Diagnóstico Empresarial AXIS e descubra onde estão os
          gargalos humanos, operacionais e tecnológicos que impedem sua empresa
          de escalar.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => openDiagnosisModal("CTA Final - Diagnóstico Completo")}
            className="w-full sm:w-auto px-9 py-4 rounded-full text-sm sm:text-base font-bold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer shadow-xl"
          >
            Agendar Diagnóstico Empresarial Agora →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;

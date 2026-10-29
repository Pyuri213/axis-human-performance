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

      {/* Executive Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="bento-left flex flex-col justify-between gap-6 translate-y-6 opacity-0">
          {/* Card 1 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border border-[#cfaf82]/30 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#cfaf82]/15 border border-[#cfaf82]/30 flex items-center justify-center text-[#cfaf82]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                  />
                </svg>
              </div>
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
            <div className="w-12 h-12 rounded-2xl bg-[#cfaf82]/15 border border-[#cfaf82]/30 flex items-center justify-center text-[#cfaf82] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </div>
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
            <div className="w-12 h-12 rounded-2xl bg-[#cfaf82]/15 border border-[#cfaf82]/30 flex items-center justify-center text-[#cfaf82] shrink-0">
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#cfaf82]">
                Diagnóstico & Acompanhamento
              </span>
              <h4 className="text-xl sm:text-2xl font-bold axis-text-main mt-1 mb-2">
                Construído para{" "}
                <span className="text-gold-gradient">
                  Inteligência Empresarial.
                </span>
              </h4>
              <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                Relatórios executivos, indicadores claros, histórico de
                avaliações e planos de ação acompanhados de perto na sua empresa.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="axis-surface rounded-3xl p-8 sm:p-10 border border-white/10 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#cfaf82]/15 border border-[#cfaf82]/30 flex items-center justify-center text-[#cfaf82]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
              </div>
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
              Do diagnóstico inicial à escala: estruturamos processos,
              comercial, comportamento e liderança para o próximo ciclo de
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
          gargalos humanos, operacionais e estratégicos que impedem sua empresa
          de performar melhor.
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

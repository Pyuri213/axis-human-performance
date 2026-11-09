import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { beforeAfterData, operationPhases } from "../constants";

const BeforeAfter = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".ba-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".phase-card",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".phases-grid",
            start: "top 82%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Transformação Organizacional • Antes & Depois
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            A diferença entre crescer no caos e{" "}
            <span className="text-gold-gradient">escalar com método.</span>
          </h2>
        </div>

        {/* Before vs After Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-20 sm:mb-28">
          {/* Without AXIS */}
          <div className="ba-card axis-surface rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-rose-400">
                  Cenário Comum de Mercado
                </span>
                <h3 className="text-xl sm:text-2xl font-bold axis-text-main mt-1">
                  Operação no Improviso (Sem a AXIS)
                </h3>
              </div>
              <span className="w-9 h-9 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center font-bold text-sm shrink-0">
                ✕
              </span>
            </div>

            <ul className="space-y-4">
              {beforeAfterData.withoutAxis.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm axis-text-sub leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With AXIS */}
          <div className="ba-card axis-surface rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#cfaf82]/50">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cfaf82]">
                  Padrão de Inteligência Empresarial
                </span>
                <h3 className="text-xl sm:text-2xl font-bold axis-text-main mt-1">
                  Operação Estruturada (Com a AXIS)
                </h3>
              </div>
              <span className="w-9 h-9 rounded-full bg-[#cfaf82] text-black flex items-center justify-center font-bold text-sm shrink-0">
                ✓
              </span>
            </div>

            <ul className="space-y-4">
              {beforeAfterData.withAxis.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-xs sm:text-sm axis-text-main font-medium leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-full bg-[#cfaf82]/20 text-[#cfaf82] flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-bold">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Phases of Operational Construction (Section 18 of Master Report) */}
        <div className="phases-grid">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#cfaf82] mb-2">
              Jornada de Evolução • 4 Fases Operacionais
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold axis-text-main">
              As 4 Etapas de Construção da Operação
            </h3>
            <p className="mt-2 text-xs sm:text-sm axis-text-sub">
              Progredimos com segurança para que sua empresa nunca dê um passo
              maior que a estrutura.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {operationPhases.map((phaseObj) => (
              <div
                key={phaseObj.phase}
                className="phase-card axis-surface rounded-3xl p-6 sm:p-7 border border-[#cfaf82]/25 hover:border-[#cfaf82] hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#cfaf82]/15 text-[#cfaf82]">
                      {phaseObj.phase}
                    </span>
                    <span className="text-xs font-bold text-[#cfaf82]">→</span>
                  </div>
                  <h4 className="text-xl font-bold text-gold-gradient mb-1">
                    {phaseObj.name}
                  </h4>
                  <p className="text-xs font-semibold axis-text-main mb-4">
                    {phaseObj.subtitle}
                  </p>

                  <ul className="space-y-2">
                    {phaseObj.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs axis-text-sub leading-snug"
                      >
                        <span className="text-[#cfaf82] font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { pillarsData } from "../constants";
import useMacbookStore from "../store";

const Pillars = () => {
  const sectionRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(
    () => {
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="pillars"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Estrutura de Governança & Atuação
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            Os Três Pilares da{" "}
            <span className="text-gold-gradient">AXIS Human Performance</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg axis-text-sub leading-relaxed">
            Unimos inteligência comportamental, engenharia operacional e
            tecnologia proprietária sob uma liderança complementar e orientada a
            resultados.
          </p>
        </div>

        {/* 3 Pillars Grid (Responsive: 1 col Mobile, 2/3 cols Tablet/Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillarsData.map((pillar) => (
            <article
              key={pillar.id}
              className="pillar-card axis-surface rounded-3xl p-6 sm:p-8 lg:p-9 border border-[#cfaf82]/25 hover:border-[#cfaf82] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Number & Pillar Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-gold-gradient">
                    {pillar.number}
                  </span>
                  <span className="px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-[#cfaf82]/15 text-[#cfaf82] border border-[#cfaf82]/30">
                    {pillar.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold axis-text-main mb-3 leading-snug">
                  {pillar.title}
                </h3>

                {/* Leadership Badge */}
                <div className="p-3.5 rounded-2xl bg-black/15 border border-white/10 mb-5 flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-gold-gradient text-black font-bold flex items-center justify-center shrink-0 text-sm">
                    {pillar.leaderName.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold axis-text-main">
                      {pillar.leaderName}
                    </p>
                    <p className="text-xs text-[#cfaf82] font-medium">
                      {pillar.leaderRole}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm axis-text-sub leading-relaxed mb-6">
                  {pillar.summary}
                </p>

                {/* Capabilities Checklist */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] axis-text-muted">
                    Frentes de Entrega:
                  </p>
                  {pillar.capabilities.map((cap) => (
                    <div
                      key={cap}
                      className="flex items-start gap-2.5 text-xs sm:text-sm axis-text-main"
                    >
                      <span className="text-[#cfaf82] font-bold mt-0.5">•</span>
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote & Action */}
              <div className="pt-5 border-t border-white/10">
                <blockquote className="text-xs italic axis-text-sub mb-5 border-l-2 border-[#cfaf82] pl-3">
                  &ldquo;{pillar.highlightQuote}&rdquo;
                </blockquote>

                <button
                  type="button"
                  onClick={() =>
                    openDiagnosisModal(`Pilar ${pillar.number}: ${pillar.tag}`)
                  }
                  className="w-full py-3 px-5 rounded-full text-xs sm:text-sm font-semibold axis-surface hover:bg-[#cfaf82] hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-[#cfaf82]/40"
                >
                  <span>Consultar este Pilar</span>
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;


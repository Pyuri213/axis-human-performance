import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { features } from "../constants/index.js";

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Ecossistema de Performance • Metodologia & Sistema
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            Por dentro do{" "}
            <span className="text-gold-gradient">AXIS Diagnostic System.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg axis-text-sub">
            Como transformamos diagnóstico comportamental e organização de
            processos em inteligência contínua para sua empresa performar melhor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={feature.id}
              className={`feature-card axis-surface rounded-3xl p-6 sm:p-8 border border-[#cfaf82]/25 hover:border-[#cfaf82] transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-[#cfaf82]/15 border border-[#cfaf82]/30 flex items-center justify-center text-[#cfaf82] font-bold text-sm">
                    0{feature.id}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cfaf82]">
                    Camada 0{feature.id}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold axis-text-main mb-2.5">
                  {feature.highlight}
                </h3>
                <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Summary Card to complete the 3x2 grid */}
          <div className="feature-card axis-surface rounded-3xl p-6 sm:p-8 border border-[#cfaf82]/40 bg-gradient-to-br from-[#cfaf82]/10 to-transparent flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <img
                  src="/brand/axis-symbol.svg"
                  alt="AXIS"
                  className="w-9 h-9 object-contain"
                />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#cfaf82]">
                  Resultado Integrado
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold axis-text-main mb-2.5">
                Crescimento Estruturado.
              </h3>
              <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                Unimos Pessoas, Estratégia, Processos e Tecnologia para que sua
                empresa cresça com ordem, lucro e autonomia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { marketPains } from "../constants";
import useMacbookStore from "../store";
import AnimatedCounter from "./AnimatedCounter";

const Showcase = () => {
  const sectionRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(
    () => {
      gsap.fromTo(
        ".showcase-header",
        { opacity: 0, y: 24, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".pain-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      id="showcase"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 relative overflow-hidden"
    >
      {/* Subtle Architectural Axis Background Graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]"
      >
        <img
          src="/brand/axis-symbol.svg"
          alt=""
          className="w-[650px] sm:w-[900px] object-contain"
        />
      </div>

      {/* Real Business Problems vs AXIS Intelligence */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Strategic Narrative */}
          <div className="lg:col-span-5 showcase-header">
            <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#cfaf82] mb-3">
              O Conceito Central • Sem Clichês
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
              Empresas não travam por falta de esforço.{" "}
              <span className="text-gold-gradient">
                Travam por gargalos não diagnosticados.
              </span>
            </h2>

            <div className="space-y-4 mt-6 text-sm sm:text-base axis-text-sub font-normal leading-relaxed">
              <p>
                A <strong className="axis-text-main">AXIS</strong> não é uma
                consultoria tradicional de relatórios engavetados. Somos uma
                empresa de{" "}
                <strong className="text-[#cfaf82]">
                  inteligência e performance empresarial
                </strong>
                .
              </p>
              <p>
                Entramos na sua operação para identificar exatamente o que
                impede o crescimento, decodificar o comportamento de gestores e
                equipes, organizar processos no{" "}
                <strong className="axis-text-main">AXIS OS</strong> e
                transformar essas informações em estratégias e ferramentas
                práticas de escala.
              </p>
            </div>

            {/* Executive Stats Row with Animated Counters */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="p-4 rounded-2xl axis-surface">
                <p className="text-xs uppercase tracking-wider axis-text-muted">
                  Abordagem Integrada
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gold-gradient mt-1">
                  <AnimatedCounter value="3 Frentes" />
                </p>
                <p className="text-xs axis-text-sub mt-1">
                  Pessoas • Processos • Tecnologia
                </p>
              </div>

              <div className="p-4 rounded-2xl axis-surface">
                <p className="text-xs uppercase tracking-wider axis-text-muted">
                  Ciclo Completo
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-gold-gradient mt-1">
                  <AnimatedCounter value="6 Etapas" />
                </p>
                <p className="text-xs axis-text-sub mt-1">
                  Do Diagnóstico à Escala
                </p>
              </div>
            </div>
          </div>

          {/* Right Grid: The 4 Real Corporate Pains Solved by AXIS */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {marketPains.map((item, idx) => (
              <div
                key={item.id}
                className="pain-card axis-surface rounded-3xl p-6 border border-white/10 hover:border-[#cfaf82]/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#cfaf82]">
                      Gargalo Real 0{idx + 1}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#cfaf82]/60 animate-pulse" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold axis-text-main mb-2">
                    {item.symptom}
                  </h3>
                  <p className="text-xs sm:text-sm axis-text-sub leading-relaxed font-normal mb-4">
                    {item.reality}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="block text-[10px] uppercase tracking-[0.18em] text-[#cfaf82] font-bold mb-1">
                    Intervenção AXIS:
                  </span>
                  <p className="text-xs sm:text-sm axis-text-main font-medium leading-snug">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner CTA */}
        <div className="mt-12 axis-surface rounded-3xl p-6 sm:p-8 border border-[#cfaf82]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold axis-text-main">
              Sua empresa se identifica com algum desses cenários?
            </h4>
            <p className="text-xs sm:text-sm axis-text-sub mt-1 font-normal">
              Não tome decisões no escuro. Comece pelo Diagnóstico Integrado
              AXIS.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openDiagnosisModal("Diagnóstico de Gargalos")}
            className="w-full md:w-auto shrink-0 px-7 py-3.5 rounded-full text-sm font-semibold text-black bg-gold-gradient hover:brightness-110 hover:scale-[1.02] transition-all cursor-pointer shadow-lg"
          >
            Mapear Gargalos da Minha Empresa →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { methodologySteps, servicesSolutions } from "../constants";
import useMacbookStore from "../store";

const Methodology = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(
    () => {
      gsap.fromTo(
        ".method-header",
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
        ".method-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
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

  // Animate spotlight transition when activeStep changes
  useGSAP(
    () => {
      gsap.fromTo(
        ".step-spotlight",
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
    },
    { scope: sectionRef, dependencies: [activeStep] }
  );

  const progressPercentage = ((activeStep + 1) / methodologySteps.length) * 100;

  return (
    <section
      id="methodology"
      ref={sectionRef}
      className="py-20 sm:py-28 lg:py-36 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="method-header max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Metodologia Proprietária • Lógica Operacional
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            O que acontece quando sua empresa{" "}
            <span className="text-gold-gradient">contrata a AXIS?</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg axis-text-sub leading-relaxed">
            Seguimos uma engrenagem disciplinada de 6 etapas para transformar
            diagnóstico em organização real, execução assistida e escala
            tecnológica.
          </p>
        </div>

        {/* Animated Light Pulse Track Connecting All 6 Steps (Desktop & Tablet) */}
        <div className="hidden md:block mb-8">
          <div className="relative h-1.5 w-full rounded-full bg-white/10 overflow-hidden mb-5">
            {/* Active Progress Fill */}
            <div
              className="h-full bg-gold-gradient transition-all duration-500 ease-out rounded-full relative"
              style={{ width: `${progressPercentage}%` }}
            />
            {/* Continuous Travelling Light Pulse */}
            <div className="absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-pulse-beam" />
          </div>

          <div className="grid grid-cols-6 gap-3">
            {methodologySteps.map((item, index) => {
              const isSelected = activeStep === index;
              const isCompleted = index <= activeStep;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-gold-gradient text-black border-transparent shadow-xl scale-[1.03]"
                      : isCompleted
                      ? "axis-surface axis-text-main border-[#cfaf82]/50"
                      : "axis-surface axis-text-main hover:border-[#cfaf82]/40 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-bold tracking-widest ${
                        isSelected ? "text-black/75" : "text-[#cfaf82]"
                      }`}
                    >
                      ETAPA {item.step}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        isSelected
                          ? "bg-black animate-ping"
                          : isCompleted
                          ? "bg-[#cfaf82]"
                          : "bg-white/20"
                      }`}
                    />
                  </div>
                  <span className="block text-base lg:text-lg font-bold mt-1">
                    {item.verb}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Highlighted Step Spotlight (Desktop & Tablet) */}
        <div className="step-spotlight hidden md:flex axis-surface rounded-3xl p-8 lg:p-10 border border-[#cfaf82]/35 mb-14 items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#cfaf82] text-black">
                ETAPA {methodologySteps[activeStep].step} DE 06
              </span>
              <span className="text-sm font-semibold text-[#cfaf82] uppercase tracking-wider">
                {methodologySteps[activeStep].verb}
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold axis-text-main mb-3">
              {methodologySteps[activeStep].title}
            </h3>
            <p className="text-base axis-text-sub leading-relaxed">
              {methodologySteps[activeStep].description}
            </p>
          </div>

          <div className="shrink-0 p-6 rounded-2xl bg-black/20 border border-[#cfaf82]/25 min-w-[270px]">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#cfaf82] font-bold">
              Entregável Chave
            </span>
            <p className="text-base font-bold axis-text-main mt-1.5 mb-4">
              {methodologySteps[activeStep].deliverable}
            </p>
            <button
              type="button"
              onClick={() =>
                openDiagnosisModal(
                  `Etapa ${methodologySteps[activeStep].verb} - Metodologia AXIS`
                )
              }
              className="w-full py-2.5 px-4 rounded-full text-xs font-semibold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer"
            >
              Iniciar por esta Etapa →
            </button>
          </div>
        </div>

        {/* Complete 6-Step Grid (Always visible on Mobile, and as complete overview on Desktop/Tablet) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {methodologySteps.map((item, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`method-card axis-surface rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? "border-[#cfaf82] shadow-[0_0_25px_rgba(207,175,130,0.15)]"
                    : "border-white/10 hover:border-[#cfaf82]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#cfaf82]">
                      PASSO {item.step}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-[#cfaf82]/15 text-[#cfaf82]">
                      {item.verb}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold axis-text-main mb-2.5">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="axis-text-muted">Entrega:</span>
                  <span className="font-semibold text-[#cfaf82]">
                    {item.deliverable}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solutions & Business Model Section */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.22em] uppercase text-[#cfaf82] mb-2">
              Soluções & Modelos de Atuação
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold axis-text-main">
              Como a AXIS estrutura o crescimento do seu negócio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesSolutions.map((sol) => (
              <div
                key={sol.title}
                className="axis-surface rounded-3xl p-6 sm:p-8 border border-[#cfaf82]/20 hover:border-[#cfaf82]/60 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#cfaf82]">
                    {sol.category}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold axis-text-main mt-1 mb-3">
                    {sol.title}
                  </h4>
                  <p className="text-xs sm:text-sm axis-text-sub leading-relaxed mb-5">
                    {sol.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {sol.items.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-xs sm:text-sm axis-text-main"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#cfaf82]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openDiagnosisModal(sol.title)}
                  className="self-start px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer"
                >
                  Solicitar Proposta Executiva →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

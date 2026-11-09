import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { executiveFaqs } from "../constants";
import useMacbookStore from "../store";

const ExecutiveFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Esclarecimentos Estratégicos • FAQ Executivo
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            Perguntas Frequentes de{" "}
            <span className="text-gold-gradient">Sócios e Diretores</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base axis-text-sub">
            Entenda como a AXIS atua na prática dentro da sua organização.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {executiveFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`faq-item axis-surface rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#cfaf82]/60"
                    : "border-white/10 hover:border-[#cfaf82]/35"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-lg font-bold axis-text-main leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 font-bold text-sm ${
                      isOpen
                        ? "bg-gold-gradient text-black rotate-45"
                        : "bg-white/5 text-[#cfaf82]"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/10 text-xs sm:text-base axis-text-sub leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Direct Question Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl axis-surface border border-[#cfaf82]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold axis-text-main">
              Possui uma demanda específica na sua empresa?
            </h4>
            <p className="text-xs sm:text-sm axis-text-sub mt-0.5">
              Converse diretamente com nossa Diretoria de Operações para uma
              avaliação personalizada.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openDiagnosisModal("Dúvida Executiva - FAQ")}
            className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer"
          >
            Falar com Especialista →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveFAQ;

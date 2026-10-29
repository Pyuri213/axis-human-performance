import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const axisOsBlocks = [
  {
    code: "EIXO 01",
    title: "Diagnóstico Comportamental",
    desc: "Leitura de perfil de sócios, líderes e equipes para alinhar funções e eliminar conflitos.",
  },
  {
    code: "EIXO 02",
    title: "AXIS OS (Manual Operacional)",
    desc: "Processos documentados, checklists, scripts, contratos e fluxos padronizados.",
  },
  {
    code: "EIXO 03",
    title: "Estruturação Comercial & CRM",
    desc: "Jornada completa do cliente: prospecção, diagnóstico, proposta, contrato e pós-venda.",
  },
  {
    code: "EIXO 04",
    title: "Indicadores & Governança",
    desc: "Acompanhamento de entregas, metas, produtividade e saúde financeira empresarial.",
  },
];

const Performance = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".os-card",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
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
      id="performance"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Visão Panorâmica • Inteligência de Dados & Comportamento
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            Clareza absoluta sobre cada engrenagem da{" "}
            <span className="text-gold-gradient">sua organização.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base lg:text-lg axis-text-sub leading-relaxed">
            Enquanto consultorias tradicionais entregam diagnósticos estáticos
            em papel, a{" "}
            <strong className="axis-text-main">AXIS Human Performance</strong>{" "}
            integra leitura comportamental de líderes, documentação viva do{" "}
            <strong className="text-[#cfaf82]">AXIS OS</strong> e acompanhamento
            contínuo para que cada decisão gere crescimento mensurável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {axisOsBlocks.map((block) => (
            <div
              key={block.code}
              className="os-card axis-surface rounded-3xl p-6 sm:p-7 border border-[#cfaf82]/25 hover:border-[#cfaf82] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#cfaf82]/15 text-[#cfaf82] mb-4">
                  {block.code}
                </span>
                <h3 className="text-lg sm:text-xl font-bold axis-text-main mb-2.5">
                  {block.title}
                </h3>
                <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                  {block.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] axis-text-muted">
                <span>Padrão AXIS</span>
                <span className="text-[#cfaf82] font-bold">Ativo ✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;

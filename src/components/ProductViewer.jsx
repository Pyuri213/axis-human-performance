import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useMacbookStore from "../store";
import clsx from "clsx";
import { platformModules } from "../constants";
import AnimatedCounter from "./AnimatedCounter";

const diagnosticMatrixByModule = {
  humano: [
    {
      area: "Liderança & Tomada de Decisão",
      status: "Análise de Perfil Executiva",
      score: "98%",
      barPercent: 98,
      detail: "Leitura corporal e comportamental de sócios e gestores.",
    },
    {
      area: "Alinhamento de Equipes & Funções",
      status: "Mapeamento de Compatibilidade",
      score: "360°",
      barPercent: 94,
      detail: "Identificação do profissional certo para a função certa.",
    },
    {
      area: "Resolução de Conflitos Internos",
      status: "Intervenção Consultiva",
      score: "-78%",
      barPercent: 88,
      detail: "Eliminação de ruídos de comunicação e travas emocionais.",
    },
  ],
  processos: [
    {
      area: "Sistema Operacional (AXIS OS)",
      status: "Padronização & POPs",
      score: "100%",
      barPercent: 100,
      detail: "Processos documentados, checklists e manuais de rotina.",
    },
    {
      area: "Engenharia Comercial & CRM",
      status: "Funil & Pós-Venda",
      score: "2.6x",
      barPercent: 90,
      detail: "Organização de atendimento, contratos, vendas e retenção.",
    },
    {
      area: "Descentralização Operacional",
      status: "Autonomia de Gestão",
      score: "+85%",
      barPercent: 85,
      detail: "Redução da dependência exclusiva do dono na operação.",
    },
  ],
  cockpit: [
    {
      area: "Indicadores & Dashboards (KPIs)",
      status: "Monitoramento Real-Time",
      score: "24/7",
      barPercent: 96,
      detail: "Visão clara de metas, produtividade, custos e conversão.",
    },
    {
      area: "Planos de Ação Assistidos",
      status: "Inteligência Aplicada",
      score: "Ativo",
      barPercent: 92,
      detail: "Transformação de diagnósticos em planos práticos e medidos.",
    },
    {
      area: "Histórico Evolutivo da Empresa",
      status: "Comparativo de Ciclos",
      score: "SaaS",
      barPercent: 95,
      detail: "Acompanhamento longitudinal do crescimento organizacional.",
    },
  ],
};

const ProductViewer = () => {
  const { activeModule, setActiveModule, openDiagnosisModal } =
    useMacbookStore();
  const containerRef = useRef(null);

  const currentModule =
    platformModules.find((m) => m.id === activeModule) || platformModules[0];

  const matrixItems =
    diagnosticMatrixByModule[currentModule.id] ||
    diagnosticMatrixByModule.humano;

  // Animate module switch telemetry bars & cards
  useGSAP(
    () => {
      gsap.fromTo(
        ".matrix-row",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.45,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".telemetry-bar",
        { width: "0%" },
        {
          width: (i, target) => target.dataset.width || "90%",
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    },
    { scope: containerRef, dependencies: [activeModule] }
  );

  return (
    <section id="product-viewer" ref={containerRef} className="relative">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Sistema de Inteligência • Diagnóstico & Performance
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
          AXIS —{" "}
          <span className="text-gold-gradient">
            Human Performance Diagnostic System
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg axis-text-sub max-w-2xl mx-auto">
          Explore as três frentes integradas com que diagnosticamos, organizamos
          e aceleramos a performance da sua empresa.
        </p>
      </div>

      {/* Module Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-8 relative z-40">
        {platformModules.map((mod) => {
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => setActiveModule(mod.id)}
              className={clsx(
                "px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border",
                isActive
                  ? "bg-gold-gradient text-black border-transparent shadow-lg scale-105"
                  : "axis-surface axis-text-main hover:border-[#cfaf82]/60"
              )}
            >
              {mod.shortName}
            </button>
          );
        })}
      </div>

      {/* Main Grid: Interactive Diagnostic Cockpit + Active Module Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Executive Diagnostic Matrix Visualization */}
        <div className="lg:col-span-7 rounded-3xl axis-surface p-6 sm:p-8 lg:p-10 border border-[#cfaf82]/25 flex flex-col justify-between relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <img
                src="/brand/axis-symbol.svg"
                alt="AXIS"
                className="w-8 h-8 object-contain"
              />
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#cfaf82]">
                  Matriz de Diagnóstico Empresarial
                </span>
                <h4 className="text-base sm:text-lg font-bold axis-text-main">
                  {currentModule.shortName}
                </h4>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#cfaf82]/15 text-[#cfaf82] border border-[#cfaf82]/30 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#cfaf82] animate-ping" />
              Análise Ativa
            </span>
          </div>

          {/* 3 Diagnostic Indicators with Animated Telemetry Bars */}
          <div className="space-y-4 my-auto">
            {matrixItems.map((item) => (
              <div
                key={item.area}
                className="matrix-row p-4 sm:p-5 rounded-2xl bg-black/15 border border-white/10 hover:border-[#cfaf82]/40 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm sm:text-base font-bold axis-text-main">
                    {item.area}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 axis-text-sub">
                      {item.status}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-gold-gradient">
                      <AnimatedCounter value={item.score} />
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm axis-text-sub leading-relaxed mb-3">
                  {item.detail}
                </p>
                {/* Live Telemetry Progress Track */}
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    data-width={`${item.barPercent}%`}
                    className="telemetry-bar h-full rounded-full bg-gold-gradient"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs axis-text-muted">
            <span>Metodologia: Diagnosticar → Organizar → Executar → Escalar</span>
            <span className="text-[#cfaf82] font-semibold">
              AXIS Inteligência Empresarial
            </span>
          </div>
        </div>

        {/* Right Column: Active Module Details Card */}
        <div className="lg:col-span-5 axis-surface rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#cfaf82]/25 flex flex-col justify-between">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#cfaf82] mb-2">
              {currentModule.badge}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold axis-text-main">
              {currentModule.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#cfaf82] mt-1">
              Coordenação: {currentModule.leader}
            </p>

            <p className="mt-4 text-sm sm:text-base axis-text-sub leading-relaxed">
              {currentModule.description}
            </p>

            {/* Key Metrics Row with Animated Counters */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {currentModule.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 sm:p-4 rounded-2xl bg-black/15 border border-white/10 text-center"
                >
                  <span className="block text-lg sm:text-2xl font-bold text-gold-gradient">
                    <AnimatedCounter value={metric.value} />
                  </span>
                  <span className="block text-[10px] sm:text-xs axis-text-muted mt-1">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Deliverables List */}
            <ul className="space-y-2.5 mb-6">
              {currentModule.bullets.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-xs sm:text-sm axis-text-main"
                >
                  <span className="w-5 h-5 rounded-full bg-[#cfaf82]/20 text-[#cfaf82] flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            type="button"
            onClick={() => openDiagnosisModal(currentModule.title)}
            className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-black bg-gold-gradient hover:brightness-110 hover:scale-[1.02] transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
          >
            <span>Solicitar Diagnóstico nesta Frente</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;

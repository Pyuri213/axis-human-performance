import { Canvas } from "@react-three/fiber";
import useMacbookStore from "../store";
import clsx from "clsx";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import { platformModules } from "../constants";

const ProductViewer = () => {
  const {
    color,
    scale,
    setColor,
    setScale,
    activeModule,
    setActiveModule,
    openDiagnosisModal,
  } = useMacbookStore();

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const currentModule =
    platformModules.find((m) => m.id === activeModule) || platformModules[0];

  const handleSelectModule = (mod) => {
    setActiveModule(mod.id);
    setColor(mod.colorHex);
  };

  return (
    <section id="product-viewer" className="relative">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Experiência Interativa 3D • Plataforma Proprietária
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
          AXIS —{" "}
          <span className="text-gold-gradient">
            Human Performance Diagnostic System
          </span>
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg axis-text-sub max-w-2xl mx-auto">
          Gire e interaja em 3D. Explore os três módulos integrados que transformam
          diagnóstico humano e gestão de processos em tecnologia escalável (SaaS).
        </p>
      </div>

      {/* Module Selector Tabs (Desktop, Tablet & Mobile) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-6 relative z-40">
        {platformModules.map((mod) => {
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              type="button"
              onClick={() => handleSelectModule(mod)}
              className={clsx(
                "px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer border",
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

      {/* Main Grid: 3D Canvas + Live Telemetry Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        {/* 3D Canvas Column */}
        <div className="lg:col-span-7 relative rounded-3xl axis-surface overflow-hidden border border-[#cfaf82]/20">
          {/* Top-left hint badge */}
          <div className="absolute top-4 left-4 z-40 px-3.5 py-1.5 rounded-full axis-glass text-[11px] font-medium axis-text-main flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#cfaf82] animate-ping" />
            <span>Arraste para girar em 3D</span>
          </div>

          <Canvas
            id="canvas"
            dpr={[1, 2]}
            camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
          >
            <StudioLights />
            <ModelSwitcher
              scale={isMobile ? scale - 0.03 : scale}
              isMobile={isMobile}
            />
          </Canvas>

          {/* Bottom Hardware & Viewport Controls inside Canvas Card */}
          <div className="p-4 sm:px-6 sm:py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 axis-glass relative z-40">
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium axis-text-muted">
                Acabamento:
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  title="Champagne Gold AXIS"
                  onClick={() => setColor("#c5a880")}
                  className={clsx(
                    "w-6 h-6 rounded-full cursor-pointer bg-[#c5a880] transition-transform",
                    color === "#c5a880" &&
                      "ring-2 ring-offset-2 ring-[#cfaf82] scale-110"
                  )}
                />
                <button
                  type="button"
                  title="Obsidian Graphite"
                  onClick={() => setColor("#1e1e22")}
                  className={clsx(
                    "w-6 h-6 rounded-full cursor-pointer bg-[#1e1e22] border border-white/20 transition-transform",
                    color === "#1e1e22" &&
                      "ring-2 ring-offset-2 ring-[#cfaf82] scale-110"
                  )}
                />
                <button
                  type="button"
                  title="Executive Platinum"
                  onClick={() => setColor("#adb5bd")}
                  className={clsx(
                    "w-6 h-6 rounded-full cursor-pointer bg-[#adb5bd] transition-transform",
                    color === "#adb5bd" &&
                      "ring-2 ring-offset-2 ring-[#cfaf82] scale-110"
                  )}
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-medium axis-text-muted">
                Estação:
              </span>
              <div className="inline-flex rounded-full p-1 bg-black/20 border border-white/10">
                <button
                  type="button"
                  onClick={() => setScale(0.06)}
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                    scale === 0.06
                      ? "bg-[#cfaf82] text-black"
                      : "axis-text-sub"
                  )}
                >
                  Compacta 14&quot;
                </button>
                <button
                  type="button"
                  onClick={() => setScale(0.08)}
                  className={clsx(
                    "px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                    scale === 0.08
                      ? "bg-[#cfaf82] text-black"
                      : "axis-text-sub"
                  )}
                >
                  Executiva 16&quot;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Active Module Details Card */}
        <div className="lg:col-span-5 axis-surface rounded-3xl p-6 sm:p-8 border border-[#cfaf82]/25 flex flex-col justify-between">
          <div>
            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#cfaf82] mb-2">
              {currentModule.badge}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold axis-text-main">
              {currentModule.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-[#cfaf82] mt-1">
              Responsável: {currentModule.leader}
            </p>

            <p className="mt-4 text-sm sm:text-base axis-text-sub leading-relaxed">
              {currentModule.description}
            </p>

            {/* Key Metrics Row */}
            <div className="grid grid-cols-3 gap-3 my-6">
              {currentModule.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-3 sm:p-4 rounded-2xl bg-black/15 border border-white/10 text-center"
                >
                  <span className="block text-lg sm:text-2xl font-bold text-gold-gradient">
                    {metric.value}
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
            className="w-full py-3.5 px-6 rounded-full text-sm font-semibold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
          >
            <span>Solicitar Demonstração deste Módulo</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductViewer;

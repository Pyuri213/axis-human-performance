import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { companyInfo } from "../constants";
import useMacbookStore from "../store";

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.65;
    }
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 }
      )
        .fromTo(
          ".hero-logo",
          { opacity: 0, scale: 0.92 },
          { opacity: 1, scale: 1, duration: 0.9 },
          "-=0.4"
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden flex flex-col items-center justify-between"
    >
      {/* Subtle Ambient Gold Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] lg:w-[860px] h-[320px] sm:h-[420px] rounded-full blur-[130px] opacity-20 bg-gradient-to-tr from-[#9a7a4f] via-[#cfaf82] to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Top Executive Badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full axis-surface border-gold-subtle mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#cfaf82] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-gold-gradient">
            {companyInfo.tagline} • Maringá / PR
          </span>
        </div>

        {/* Official AXIS Full Logo Lockup */}
        <div className="hero-logo mb-6 sm:mb-8">
          <img
            src="/brand/axis-logo.svg"
            alt="AXIS Human Performance Diagnostic System"
            className="w-56 sm:w-72 md:w-80 lg:w-96 mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Main Value Proposition Headline */}
        <h1 className="hero-title max-w-4xl mx-auto text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] axis-text-main">
          Transformamos empresas em negócios{" "}
          <span className="text-gold-gradient">
            organizados, eficientes e preparados para crescer.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="hero-subtitle max-w-2xl mx-auto mt-5 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl axis-text-sub leading-relaxed font-normal">
          {companyInfo.heroSubheadline}
        </p>

        {/* Core Formula Pills: Pessoas + Estratégia + Processos + Tecnologia + Performance */}
        <div className="hero-actions mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {companyInfo.formula.map((item, idx) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium axis-surface axis-text-main border border-[#cfaf82]/25">
                {item}
              </span>
              {idx < companyInfo.formula.length - 1 && (
                <span className="text-[#cfaf82] font-bold text-sm sm:text-base">
                  {idx === companyInfo.formula.length - 2 ? "=" : "+"}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Video Reveal of the AXIS Hardware & Diagnostic Platform */}
        <div className="relative w-full max-w-5xl mx-auto my-6 sm:my-8 rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            muted
            playsInline
            className="w-full max-h-[420px] sm:max-h-[480px] object-cover mx-auto"
          />
          {/* Floating Telemetry Overlay Badges on Video */}
          <div className="hidden md:flex absolute bottom-4 left-4 right-4 justify-between items-center px-5 py-3 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#cfaf82]">
                Plataforma Proprietária SaaS
              </p>
              <p className="text-xs sm:text-sm text-white font-semibold">
                AXIS — Human Performance Diagnostic System
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs text-neutral-300">
              <div>
                <span className="block text-[10px] text-neutral-400">
                  Mapeamento
                </span>
                <span className="font-semibold text-white">
                  Humano & Processos
                </span>
              </div>
              <div className="h-6 w-px bg-white/15" />
              <div>
                <span className="block text-[10px] text-neutral-400">
                  Arquitetura
                </span>
                <span className="font-semibold text-[#cfaf82]">
                  Consultoria + SaaS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Primary & Secondary Call-To-Action Buttons */}
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mt-2">
          <button
            type="button"
            onClick={() => openDiagnosisModal("Hero - Diagnóstico Executivo")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-black bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-2.5"
          >
            <span>Agendar Diagnóstico Empresarial</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          <a
            href="#pillars"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold axis-surface axis-text-main hover:border-[#cfaf82] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Conhecer os 3 Pilares</span>
          </a>
        </div>

        {/* Operational Logic Bar: Diagnosticar -> Organizar -> Executar -> Medir -> Melhorar -> Escalar */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 w-full max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.22em] axis-text-muted mb-3">
            Lógica Operacional AXIS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold">
            {companyInfo.logicFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="axis-text-main hover:text-[#cfaf82] transition-colors">
                  {step}
                </span>
                {i < companyInfo.logicFlow.length - 1 && (
                  <span className="text-[#cfaf82]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

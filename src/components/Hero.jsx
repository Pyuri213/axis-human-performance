import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { companyInfo } from "../constants";
import useMacbookStore from "../store";

const Hero = () => {
  const heroRef = useRef(null);
  const logoOrbitalRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.7 }
      )
        .fromTo(
          ".hero-logo",
          { opacity: 0, scale: 0.88, filter: "blur(8px)" },
          { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 22, filter: "blur(6px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-actions",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.4"
        );
    },
    { scope: heroRef }
  );

  // Interactive 3D Parallax on Hero Logo
  const handleMouseMove = (e) => {
    if (!logoOrbitalRef.current || window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(logoOrbitalRef.current, {
      rotateY: relX * 16,
      rotateX: -relY * 16,
      x: relX * 14,
      y: relY * 10,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!logoOrbitalRef.current) return;
    gsap.to(logoOrbitalRef.current, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 sm:pt-32 lg:pt-36 pb-16 overflow-hidden flex flex-col items-center justify-center"
      style={{ perspective: "1000px" }}
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

        {/* Official AXIS Full Logo Lockup with Animated Orbital Rings */}
        <div
          ref={logoOrbitalRef}
          className="hero-logo relative mb-8 sm:mb-10 py-4 px-8 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Outer Rotating Orbital Ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border border-[#cfaf82]/15 animate-orbit-slow flex items-center justify-between"
          >
            <span className="w-2 h-2 rounded-full bg-[#cfaf82]/70 -ml-1 shadow-[0_0_12px_#cfaf82]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#cfaf82]/50 -mr-1" />
          </div>

          {/* Inner Counter-Rotating Dashed Ring */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border border-dashed border-[#cfaf82]/20 animate-orbit-reverse"
          />

          <img
            src="/brand/axis-logo.svg"
            alt="AXIS Human Performance Diagnostic System"
            className="w-56 sm:w-72 md:w-80 lg:w-96 mx-auto object-contain drop-shadow-2xl relative z-10"
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
        <div className="hero-actions mt-7 sm:mt-9 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {companyInfo.formula.map((item, idx) => (
            <div key={item} className="flex items-center gap-2 sm:gap-3">
              <span className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium axis-surface axis-text-main border border-[#cfaf82]/25 hover:border-[#cfaf82] hover:-translate-y-0.5 transition-all">
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

        {/* Primary & Secondary Call-To-Action Buttons */}
        <div className="hero-actions flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mt-9 sm:mt-11">
          <button
            type="button"
            onClick={() => openDiagnosisModal("Hero - Diagnóstico Executivo")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-black bg-gold-gradient hover:brightness-110 hover:scale-[1.03] transition-all duration-300 shadow-xl cursor-pointer flex items-center justify-center gap-2.5"
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

        {/* Operational Logic Bar with Animated Light Pulse Beam */}
        <div className="mt-12 sm:mt-14 pt-6 w-full max-w-4xl relative">
          {/* Animated Pulse Line Divider */}
          <div className="relative w-full h-px bg-white/10 overflow-hidden mb-5">
            <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#cfaf82] to-transparent animate-pulse-beam" />
          </div>

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

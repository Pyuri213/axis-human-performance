import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  performanceImages,
  performanceImgPositions,
} from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Performance = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      if (!sectionEl) return;

      gsap.fromTo(
        ".content p",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          ease: "power1.out",
          scrollTrigger: {
            trigger: ".content p",
            start: "top bottom",
            end: "top center",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );

      if (isMobile) return;

      const tl = gsap.timeline({
        defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
        scrollTrigger: {
          trigger: sectionEl,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions.forEach((item) => {
        if (item.id === "p5") return;

        const selector = `.${item.id}`;
        const vars = {};

        if (typeof item.left === "number") vars.left = `${item.left}%`;
        if (typeof item.right === "number") vars.right = `${item.right}%`;
        if (typeof item.bottom === "number") vars.bottom = `${item.bottom}%`;

        if (item.transform) vars.transform = item.transform;

        tl.to(selector, vars, 0);
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section id="performance" ref={sectionRef}>
      <div className="container mx-auto px-4 text-center mb-6">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Visão Panorâmica • Inteligência de Dados & Comportamento
        </span>
        <h2 className="max-w-3xl mx-auto text-2xl sm:text-4xl lg:text-6xl font-bold axis-text-main leading-tight">
          Clareza absoluta sobre cada engrenagem da{" "}
          <span className="text-gold-gradient">sua organização.</span>
        </h2>
      </div>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <img
            key={index}
            src={item.src}
            className={item.id}
            alt={item.label || `Diagnóstico AXIS ${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p className="axis-text-sub">
          Enquanto consultorias tradicionais entregam diagnósticos estáticos em
          papel, a{" "}
          <span className="axis-text-main font-semibold">
            AXIS Human Performance
          </span>{" "}
          integra leitura comportamental de líderes, documentação viva do{" "}
          <span className="text-[#cfaf82] font-semibold">AXIS OS</span> e
          acompanhamento tecnológico em tempo real para que cada decisão gere
          crescimento mensurável.
        </p>
      </div>
    </section>
  );
};

export default Performance;

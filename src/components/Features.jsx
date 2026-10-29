import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights.jsx";
import { features, featureSequence } from "../constants/index.js";
import clsx from "clsx";
import { Suspense, useEffect, useRef } from "react";
import { Html } from "@react-three/drei";
import MacbookModel from "./models/Macbook.jsx";
import { useMediaQuery } from "react-responsive";
import useMacbookStore from "../store/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const { setTexture } = useMacbookStore();

  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement("video");

      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInline: true,
        preload: "auto",
        crossOrigin: "anonymous",
      });

      v.load();
    });
  }, []);

  useGSAP(() => {
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#f-canvas",
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });

    if (groupRef.current) {
      modelTimeline.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        ease: "power1.inOut",
      });
    }

    timeline
      .call(() => setTexture("/videos/feature-1.mp4"))
      .to(".box1", { opacity: 1, y: 0, delay: 0.5 })

      .call(() => setTexture("/videos/feature-2.mp4"))
      .to(".box2", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-3.mp4"))
      .to(".box3", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-4.mp4"))
      .to(".box4", { opacity: 1, y: 0 })

      .call(() => setTexture("/videos/feature-5.mp4"))
      .to(".box5", { opacity: 1, y: 0 });
  }, []);

  return (
    <group ref={groupRef}>
      <Suspense
        fallback={
          <Html center>
            <div className="px-4 py-2 rounded-full axis-glass text-xs font-semibold text-[#cfaf82] uppercase tracking-widest">
              Carregando Sistema AXIS 3D...
            </div>
          </Html>
        }
      >
        <MacbookModel scale={isMobile ? 0.05 : 0.08} position={[0, -1, 0]} />
      </Suspense>
    </group>
  );
};

const Features = () => {
  return (
    <section id="features" className="relative">
      <div className="container mx-auto px-4 text-center mb-6">
        <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
          Tecnologia Escalável • SaaS Corporativo
        </span>
        <h2 className="max-w-4xl mx-auto text-2xl sm:text-4xl lg:text-6xl font-bold axis-text-main leading-tight">
          Por dentro do{" "}
          <span className="text-gold-gradient">AXIS Diagnostic System.</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg axis-text-sub max-w-2xl mx-auto">
          Role a página para explorar em 360° como nossa plataforma transforma
          consultoria comportamental e processos em inteligência contínua.
        </p>
      </div>

      <Canvas id="f-canvas" dpr={[1, 2]} camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5} />
        <ModelScroll />
      </Canvas>

      <div className="absolute inset-0 pointer-events-none">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={clsx("box", `box${index + 1}`, feature.styles)}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <img
                src={feature.icon}
                alt={feature.highlight}
                className="w-6 h-6 object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-wider text-[#cfaf82]">
                Módulo 0{feature.id}
              </span>
            </div>
            <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
              <span className="axis-text-main font-bold block mb-1">
                {feature.highlight}
              </span>
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import ProductViewer from "./components/ProductViewer";
import MaturityQuiz from "./components/MaturityQuiz";
import Pillars from "./components/Pillars";
import BeforeAfter from "./components/BeforeAfter";
import Methodology from "./components/Methodology";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
import ExecutiveFAQ from "./components/ExecutiveFAQ";
import Footer from "./components/Footer";
import DiagnosisModal from "./components/DiagnosisModal";
import ScrollToTop from "./components/ScrollToTop";
import useMacbookStore from "./store";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const { theme } = useMacbookStore();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  // Global spotlight tracker for .axis-surface cards (fine pointers only, rAF-throttled)
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let rafId = null;
    const handlePointerMove = (e) => {
      const card = e.target.closest?.(".axis-surface");
      if (!card) return;
      if (rafId) cancelAnimationFrame(rafId);
      const { clientX, clientY } = e;
      rafId = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip selection:bg-[#cfaf82] selection:text-black">
      <NavBar />
      <Hero />
      <Showcase />
      <ProductViewer />
      <MaturityQuiz />
      <Pillars />
      <BeforeAfter />
      <Methodology />
      <Performance />
      <Features />
      <Highlights />
      <ExecutiveFAQ />
      <Footer />
      <DiagnosisModal />
      <ScrollToTop />
    </main>
  );
};

export default App;

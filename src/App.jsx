import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import ProductViewer from "./components/ProductViewer";
import Pillars from "./components/Pillars";
import Methodology from "./components/Methodology";
import Performance from "./components/Performance";
import Features from "./components/Features";
import Highlights from "./components/Highlights";
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

  // Global spotlight tracker for .axis-surface cards
  useEffect(() => {
    const handlePointerMove = (e) => {
      const card = e.target.closest?.(".axis-surface");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip selection:bg-[#cfaf82] selection:text-black">
      <NavBar />
      <Hero />
      <Showcase />
      <ProductViewer />
      <Pillars />
      <Methodology />
      <Performance />
      <Features />
      <Highlights />
      <Footer />
      <DiagnosisModal />
      <ScrollToTop />
    </main>
  );
};

export default App;

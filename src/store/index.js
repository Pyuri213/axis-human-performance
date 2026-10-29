import { create } from "zustand";

const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("axis-theme");
    if (saved === "light" || saved === "dark") return saved;
  }
  return "dark";
};

const applyThemeToDOM = (theme) => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem("axis-theme", theme);
  }
};

const useMacbookStore = create((set, get) => ({
  // Hardware finish & 3D properties
  color: "#1e1e22",
  setColor: (color) => set({ color }),

  scale: 0.08,
  setScale: (scale) => set({ scale }),

  texture: "/videos/feature-1.mp4",
  setTexture: (texture) => set({ texture }),

  // Active AXIS Platform Module ("humano" | "processos" | "cockpit")
  activeModule: "humano",
  setActiveModule: (moduleId) => {
    const moduleTextures = {
      humano: "/videos/feature-1.mp4",
      processos: "/videos/feature-2.mp4",
      cockpit: "/videos/feature-4.mp4",
    };
    set({
      activeModule: moduleId,
      texture: moduleTextures[moduleId] || "/videos/feature-1.mp4",
    });
  },

  // Theme State ("dark" | "light")
  theme: getInitialTheme(),
  setTheme: (theme) => {
    applyThemeToDOM(theme);
    set({ theme });
  },
  toggleTheme: () => {
    const nextTheme = get().theme === "dark" ? "light" : "dark";
    applyThemeToDOM(nextTheme);
    set({ theme: nextTheme });
  },

  // Diagnosis Modal State
  isDiagnosisModalOpen: false,
  diagnosisPreset: "",
  openDiagnosisModal: (preset = "") =>
    set({ isDiagnosisModalOpen: true, diagnosisPreset: preset }),
  closeDiagnosisModal: () =>
    set({ isDiagnosisModalOpen: false, diagnosisPreset: "" }),

  reset: () =>
    set({
      color: "#1e1e22",
      scale: 0.08,
      texture: "/videos/feature-1.mp4",
      activeModule: "humano",
    }),
}));

export default useMacbookStore;

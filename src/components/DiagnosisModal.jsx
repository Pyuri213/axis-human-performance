import { useState, useEffect } from "react";
import useMacbookStore from "../store";
import ShinyText from "./ui/ShinyText";
import MagneticButton from "./ui/MagneticButton";

const SEGMENTS = [
  "Serviços",
  "Indústria",
  "Comércio / Varejo",
  "Saúde / Clínicas",
  "Agronegócio",
  "Tecnologia / SaaS",
  "Construção / Imobiliário",
  "Outro",
];

const ROLES = [
  "Sócio / Proprietário",
  "CEO / Diretor Executivo",
  "Diretor de Operações / COO",
  "Gestor / RH / Liderança",
];

const TEAM_SIZES = [
  "Até 10 colaboradores",
  "11 a 50 colaboradores",
  "51 a 200 colaboradores",
  "Acima de 200 colaboradores",
];

const REVENUE_RANGES = [
  "Prefiro informar na reunião",
  "Até R$ 100 mil / mês",
  "R$ 100 mil a R$ 500 mil / mês",
  "R$ 500 mil a R$ 2 mi / mês",
  "Acima de R$ 2 mi / mês",
];

const FRONTS = [
  "Pessoas & Liderança",
  "Processos & Governança",
  "Tecnologia & AXIS OS",
  "Diagnóstico Completo 360°",
];

const PAIN_POINTS = [
  "Operação dependente do dono",
  "Processos sem padrão / improviso",
  "Ruídos de comunicação e equipe desalinhada",
  "Dificuldade em contratar ou reter talentos",
  "Falta de indicadores e previsibilidade",
  "Empresa travada para escalar",
];

const URGENCY_OPTIONS = [
  "Imediato (este mês)",
  "Curto prazo (próximos 90 dias)",
  "Planejamento estratégico",
];

const formatWhatsApp = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const initialFormState = {
  name: "",
  company: "",
  segment: "Serviços",
  role: "Sócio / Proprietário",
  teamSize: "11 a 50 colaboradores",
  revenue: "Prefiro informar na reunião",
  whatsapp: "",
  fronts: ["Diagnóstico Completo 360°"],
  painPoints: [],
  urgency: "Imediato (este mês)",
  notes: "",
};

const DiagnosisModal = () => {
  const { isDiagnosisModalOpen, closeDiagnosisModal, diagnosisPreset } =
    useMacbookStore();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);
  const [errorMsg, setErrorMsg] = useState("");
  const [shakeKey, setShakeKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isDiagnosisModalOpen) {
      setStep(1);
      setErrorMsg("");
      setSubmitted(false);
    }
  }, [isDiagnosisModalOpen]);

  useEffect(() => {
    if (!isDiagnosisModalOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeDiagnosisModal();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDiagnosisModalOpen, closeDiagnosisModal]);

  if (!isDiagnosisModalOpen) return null;

  const toggleArrayItem = (field, item) => {
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      const next = exists
        ? prev[field].filter((v) => v !== item)
        : [...prev[field], item];
      return { ...prev, [field]: next };
    });
  };

  const handleNextStep = () => {
    if (
      !formData.name.trim() ||
      !formData.company.trim() ||
      formData.whatsapp.replace(/\D/g, "").length < 10
    ) {
      setErrorMsg(
        "Preencha Nome, Empresa e um WhatsApp válido com DDD para continuar."
      );
      setShakeKey((k) => k + 1);
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fronts.length === 0) {
      setErrorMsg("Selecione ao menos uma Frente de Interesse.");
      setShakeKey((k) => k + 1);
      return;
    }
    setErrorMsg("");
    setSubmitted(true);
  };

  const buildWhatsAppUrl = () => {
    const text = [
      `*SOLICITAÇÃO DE DIAGNÓSTICO EMPRESARIAL — AXIS*`,
      ``,
      `*PERFIL DA EMPRESA*`,
      `• *Nome:* ${formData.name || "Não informado"}`,
      `• *Empresa:* ${formData.company || "Não informada"}`,
      `• *Segmento:* ${formData.segment}`,
      `• *Cargo:* ${formData.role}`,
      `• *Porte:* ${formData.teamSize}`,
      formData.revenue !== "Prefiro informar na reunião"
        ? `• *Faturamento:* ${formData.revenue}`
        : "",
      `• *WhatsApp:* ${formData.whatsapp}`,
      ``,
      `*O QUE BUSCA NA AXIS*`,
      `• *Frentes:* ${formData.fronts.join(", ")}`,
      formData.painPoints.length > 0
        ? `• *Dores mapeadas:* ${formData.painPoints.join("; ")}`
        : "",
      `• *Urgência:* ${formData.urgency}`,
      formData.notes.trim() ? `• *Contexto:* ${formData.notes.trim()}` : "",
      diagnosisPreset ? `\n_Origem no site: ${diagnosisPreset}_` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/5544999999999?text=${encodeURIComponent(text)}`;
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-base sm:text-sm focus:outline-none focus:border-[#cfaf82] transition-colors";

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDiagnosisModal();
      }}
      className="t-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="t-modal-panel axis-surface w-full max-w-2xl rounded-3xl p-5 sm:p-8 lg:p-9 border border-[#cfaf82]/40 my-auto max-h-[92dvh] overflow-y-auto">
        {/* Top Bar: Brand Badge + Close Button (Flex layout prevents overlap) */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/brand/axis-symbol.svg"
              alt="AXIS"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
            />
            <ShinyText className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase leading-snug">
              Atendimento Executivo • Maringá / PR & Brasil
            </ShinyText>
          </div>

          <button
            type="button"
            onClick={closeDiagnosisModal}
            aria-label="Fechar modal"
            className="w-9 h-9 shrink-0 rounded-full axis-surface flex items-center justify-center axis-text-main hover:border-[#cfaf82] active:scale-90 transition-[transform,border-color] duration-200 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {!submitted ? (
          <>
            <h3
              id="modal-title"
              className="text-xl sm:text-2xl lg:text-3xl font-bold axis-text-main leading-tight"
            >
              Diagnóstico de Maturidade Empresarial AXIS
            </h3>
            <p className="text-xs sm:text-sm axis-text-sub mt-1.5 mb-5">
              {step === 1
                ? "Informe os dados da sua organização para iniciarmos o mapeamento executivo."
                : "Selecione os pilares e gargalos prioritários para prepararmos sua análise."}
            </p>

            {/* Step Progress Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider mb-2">
                <span className="text-[#cfaf82] tabular-nums">
                  Etapa {step} de 2
                </span>
                <span className="axis-text-muted">
                  {step === 1
                    ? "Perfil da Empresa"
                    : "O que você busca na AXIS"}
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-gold-gradient rounded-full transition-[width] duration-300 ease-out"
                  style={{ width: step === 1 ? "50%" : "100%" }}
                />
              </div>
            </div>

            {errorMsg && (
              <div
                key={shakeKey}
                className="t-shake mb-4 px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs sm:text-sm font-medium"
              >
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {step === 1 ? (
                <div key="modal-step-1" className="t-step-enter space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Ex: João Silva"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="Nome da sua empresa"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Segmento de Atuação
                      </label>
                      <select
                        value={formData.segment}
                        onChange={(e) =>
                          setFormData({ ...formData, segment: e.target.value })
                        }
                        className={inputClass}
                      >
                        {SEGMENTS.map((seg) => (
                          <option key={seg} value={seg}>
                            {seg}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Seu Cargo
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) =>
                          setFormData({ ...formData, role: e.target.value })
                        }
                        className={inputClass}
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Porte da Equipe
                      </label>
                      <select
                        value={formData.teamSize}
                        onChange={(e) =>
                          setFormData({ ...formData, teamSize: e.target.value })
                        }
                        className={inputClass}
                      >
                        {TEAM_SIZES.map((size) => (
                          <option key={size} value={size}>
                            {size}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                        Faturamento Mensal (Opcional)
                      </label>
                      <select
                        value={formData.revenue}
                        onChange={(e) =>
                          setFormData({ ...formData, revenue: e.target.value })
                        }
                        className={inputClass}
                      >
                        {REVENUE_RANGES.map((rev) => (
                          <option key={rev} value={rev}>
                            {rev}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                      WhatsApp Corporativo *
                    </label>
                    <input
                      type="tel"
                      required
                      inputMode="tel"
                      value={formData.whatsapp}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          whatsapp: formatWhatsApp(e.target.value),
                        })
                      }
                      placeholder="(44) 99999-9999"
                      className={inputClass}
                    />
                  </div>

                  <div className="pt-3 flex flex-col-reverse sm:flex-row items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={closeDiagnosisModal}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub active:scale-[0.97] transition-transform cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <MagneticButton
                      type="button"
                      onClick={handleNextStep}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 cursor-pointer shadow-lg"
                    >
                      Continuar para Diagnóstico →
                    </MagneticButton>
                  </div>
                </div>
              ) : (
                <div key="modal-step-2" className="t-step-enter space-y-5">
                  {/* Frentes de Interesse */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-2.5">
                      Frentes de Interesse (selecione uma ou mais) *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {FRONTS.map((front) => {
                        const active = formData.fronts.includes(front);
                        return (
                          <button
                            key={front}
                            type="button"
                            onClick={() => toggleArrayItem("fronts", front)}
                            aria-pressed={active}
                            className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] cursor-pointer ${
                              active
                                ? "bg-[#cfaf82]/20 border-[#cfaf82] text-[#cfaf82]"
                                : "axis-surface border-white/10 axis-text-sub hover:border-[#cfaf82]/50"
                            }`}
                          >
                            {active ? "✓ " : "+ "}
                            {front}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Principais Dores / Gargalos */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-2.5">
                      Principais Gargalos / Dores Atuais
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {PAIN_POINTS.map((pain) => {
                        const active = formData.painPoints.includes(pain);
                        return (
                          <button
                            key={pain}
                            type="button"
                            onClick={() => toggleArrayItem("painPoints", pain)}
                            aria-pressed={active}
                            className={`text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.98] cursor-pointer flex items-center gap-2 ${
                              active
                                ? "bg-[#cfaf82]/15 border-[#cfaf82] axis-text-main"
                                : "axis-surface border-white/10 axis-text-sub hover:border-[#cfaf82]/45"
                            }`}
                          >
                            <span
                              className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                                active
                                  ? "bg-[#cfaf82] text-black font-bold"
                                  : "border border-white/25"
                              }`}
                            >
                              {active ? "✓" : ""}
                            </span>
                            <span className="leading-snug">{pain}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Urgência */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-2.5">
                      Momento / Urgência de Ação
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {URGENCY_OPTIONS.map((urg) => {
                        const active = formData.urgency === urg;
                        return (
                          <button
                            key={urg}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, urgency: urg })
                            }
                            aria-pressed={active}
                            className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-medium border transition-[background-color,border-color,color,transform] duration-200 active:scale-[0.97] cursor-pointer ${
                              active
                                ? "bg-gold-gradient border-transparent text-black font-semibold"
                                : "axis-surface border-white/10 axis-text-sub hover:border-[#cfaf82]/50"
                            }`}
                          >
                            {urg}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Contexto Adicional */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                      Objetivo ou Cenário Específico (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      placeholder="Ex: queremos estruturar lideranças antes de abrir a segunda unidade..."
                      className={inputClass}
                    />
                  </div>

                  <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setErrorMsg("");
                        setStep(1);
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub active:scale-[0.97] transition-transform cursor-pointer"
                    >
                      ← Voltar
                    </button>
                    <MagneticButton
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 cursor-pointer shadow-lg"
                    >
                      Gerar Protocolo de Diagnóstico →
                    </MagneticButton>
                  </div>
                </div>
              )}
            </form>
          </>
        ) : (
          <div className="text-center py-4 sm:py-6 t-step-enter">
            <div className="t-success-circle w-16 h-16 rounded-full bg-[#cfaf82]/20 text-[#cfaf82] flex items-center justify-center mx-auto mb-5">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path className="t-success-check" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold axis-text-main mb-2">
              Protocolo Executivo Estruturado!
            </h3>
            <p className="text-sm axis-text-sub max-w-md mx-auto mb-6">
              Os dados de{" "}
              <strong className="axis-text-main">{formData.company}</strong>{" "}
              foram organizados para a diretoria de operações da AXIS (Andriely
              — COO).
            </p>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-left text-xs space-y-1.5 mb-6 max-w-lg mx-auto axis-text-sub break-words">
              <p>
                <strong className="axis-text-main">Responsável:</strong>{" "}
                {formData.name} ({formData.role})
              </p>
              <p>
                <strong className="axis-text-main">Empresa:</strong>{" "}
                {formData.company} • {formData.segment} ({formData.teamSize})
              </p>
              <p>
                <strong className="axis-text-main">Frentes:</strong>{" "}
                {formData.fronts.join(", ")}
              </p>
              {formData.painPoints.length > 0 && (
                <p>
                  <strong className="axis-text-main">Dores mapeadas:</strong>{" "}
                  {formData.painPoints.join("; ")}
                </p>
              )}
              <p>
                <strong className="axis-text-main">Urgência:</strong>{" "}
                {formData.urgency}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-black bg-gold-gradient hover:brightness-110 active:scale-[0.97] transition-[transform,filter] shadow-lg"
              >
                Enviar Direto pelo WhatsApp Comercial →
              </a>
              <button
                type="button"
                onClick={closeDiagnosisModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold axis-surface axis-text-main active:scale-[0.97] transition-transform cursor-pointer"
              >
                Concluir
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisModal;

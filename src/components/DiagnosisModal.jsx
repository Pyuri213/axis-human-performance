import { useState, useEffect, useRef } from "react";
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

  const bodyRef = useRef(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormState);
  const [fieldErrors, setFieldErrors] = useState({});
  const [shakeKey, setShakeKey] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isDiagnosisModalOpen) {
      setStep(1);
      setFieldErrors({});
      setSubmitted(false);
    }
  }, [isDiagnosisModalOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [step, submitted]);

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

  const clearFieldError = (field) => {
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const toggleArrayItem = (field, item) => {
    clearFieldError(field);
    setFormData((prev) => {
      const exists = prev[field].includes(item);
      const next = exists
        ? prev[field].filter((v) => v !== item)
        : [...prev[field], item];
      return { ...prev, [field]: next };
    });
  };

  const handleNextStep = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Informe seu nome completo.";
    }
    if (!formData.company.trim()) {
      errors.company = "Informe o nome da empresa.";
    }
    if (formData.whatsapp.replace(/\D/g, "").length < 10) {
      errors.whatsapp = "Informe um WhatsApp válido com DDD.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setShakeKey((k) => k + 1);
      return;
    }

    setFieldErrors({});
    setStep(2);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (step === 1) {
      handleNextStep();
      return;
    }
    if (formData.fronts.length === 0) {
      setFieldErrors({ fronts: "Selecione ao menos uma Frente de Interesse." });
      setShakeKey((k) => k + 1);
      return;
    }
    setFieldErrors({});
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

  const getFieldClass = (fieldName) =>
    `w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-base sm:text-sm outline-none transition-[border-color,box-shadow] duration-200 focus:border-[#cfaf82] focus:ring-2 focus:ring-[#cfaf82]/20 ${
      fieldErrors[fieldName] ? "border-amber-400/80 ring-2 ring-amber-400/20" : ""
    }`;

  const isNameValid = formData.name.trim().length >= 2;
  const isCompanyValid = formData.company.trim().length >= 2;
  const isWhatsAppValid = formData.whatsapp.replace(/\D/g, "").length >= 10;

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDiagnosisModal();
      }}
      className="t-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-6 bg-black/75 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* 3-Zone Flex Modal: Fixed Header + Scrollable Body + Fixed Footer */}
      <div className="t-modal-panel axis-surface w-full max-w-2xl rounded-3xl border border-[#cfaf82]/40 flex flex-col max-h-[90dvh] overflow-hidden">
        {/* ZONE 1: Fixed Header */}
        <div className="shrink-0 px-5 sm:px-8 pt-5 sm:pt-7 pb-4 border-b border-white/10">
          <div className="flex items-start justify-between gap-3 mb-3">
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
              className="w-10 h-10 shrink-0 rounded-full axis-surface flex items-center justify-center axis-text-main hover:border-[#cfaf82] active:scale-90 transition-[transform,border-color] duration-200 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {!submitted && (
            <>
              <h3
                id="modal-title"
                className="text-lg sm:text-2xl font-bold axis-text-main leading-tight"
              >
                Diagnóstico de Maturidade Empresarial AXIS
              </h3>
              <p className="text-xs sm:text-sm axis-text-sub mt-1">
                {step === 1
                  ? "Informe os dados da sua organização para iniciarmos o mapeamento."
                  : "Selecione os pilares e gargalos prioritários para sua análise."}
              </p>

              {/* Step Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider mb-1.5">
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
            </>
          )}
        </div>

        {/* ZONE 2: Scrollable Body */}
        <div
          ref={bodyRef}
          className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-5"
        >
          {!submitted ? (
            <form id="diagnosis-form" onSubmit={handleSubmit}>
              {step === 1 ? (
                <div key="modal-step-1" className="t-step-enter space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider axis-text-muted">
                          Seu Nome *
                        </label>
                        {isNameValid && (
                          <span className="text-[11px] font-bold text-[#cfaf82]">
                            ✓
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          clearFieldError("name");
                          setFormData({ ...formData, name: e.target.value });
                        }}
                        placeholder="Ex: João Silva"
                        className={getFieldClass("name")}
                      />
                      {fieldErrors.name && (
                        <p
                          key={`err-name-${shakeKey}`}
                          className="t-shake mt-1 text-xs text-amber-400"
                        >
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold uppercase tracking-wider axis-text-muted">
                          Empresa *
                        </label>
                        {isCompanyValid && (
                          <span className="text-[11px] font-bold text-[#cfaf82]">
                            ✓
                          </span>
                        )}
                      </div>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => {
                          clearFieldError("company");
                          setFormData({ ...formData, company: e.target.value });
                        }}
                        placeholder="Nome da sua empresa"
                        className={getFieldClass("company")}
                      />
                      {fieldErrors.company && (
                        <p
                          key={`err-company-${shakeKey}`}
                          className="t-shake mt-1 text-xs text-amber-400"
                        >
                          {fieldErrors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wider axis-text-muted">
                        WhatsApp Corporativo *
                      </label>
                      {isWhatsAppValid && (
                        <span className="text-[11px] font-bold text-[#cfaf82]">
                          ✓
                        </span>
                      )}
                    </div>
                    <input
                      type="tel"
                      inputMode="tel"
                      value={formData.whatsapp}
                      onChange={(e) => {
                        clearFieldError("whatsapp");
                        setFormData({
                          ...formData,
                          whatsapp: formatWhatsApp(e.target.value),
                        });
                      }}
                      placeholder="(44) 99999-9999"
                      className={getFieldClass("whatsapp")}
                    />
                    {fieldErrors.whatsapp && (
                      <p
                        key={`err-wa-${shakeKey}`}
                        className="t-shake mt-1 text-xs text-amber-400"
                      >
                        {fieldErrors.whatsapp}
                      </p>
                    )}
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
                        className={getFieldClass("segment")}
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
                        className={getFieldClass("role")}
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
                        className={getFieldClass("teamSize")}
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
                        className={getFieldClass("revenue")}
                      >
                        {REVENUE_RANGES.map((rev) => (
                          <option key={rev} value={rev}>
                            {rev}
                          </option>
                        ))}
                      </select>
                    </div>
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
                    {fieldErrors.fronts && (
                      <p
                        key={`err-fronts-${shakeKey}`}
                        className="t-shake mt-2 text-xs text-amber-400"
                      >
                        {fieldErrors.fronts}
                      </p>
                    )}
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
                      className={getFieldClass("notes")}
                    />
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="text-center py-4 t-step-enter">
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
              <p className="text-sm axis-text-sub max-w-md mx-auto mb-5">
                Os dados de{" "}
                <strong className="axis-text-main">{formData.company}</strong>{" "}
                foram organizados para a diretoria de operações da AXIS
                (Andriely — COO).
              </p>

              <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-left text-xs space-y-1.5 max-w-lg mx-auto axis-text-sub break-words">
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
            </div>
          )}
        </div>

        {/* ZONE 3: Fixed Footer (Always visible on Smartphone, Tablet & Desktop) */}
        <div className="shrink-0 px-5 sm:px-8 py-4 border-t border-white/10 bg-black/20 backdrop-blur-md">
          {!submitted ? (
            <div className="flex flex-col gap-2.5">
              <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-2.5">
                {step === 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={closeDiagnosisModal}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub active:scale-[0.97] transition-transform cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <MagneticButton
                      type="button"
                      onClick={handleNextStep}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 cursor-pointer shadow-lg"
                    >
                      Avançar para Etapa 2 →
                    </MagneticButton>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setFieldErrors({});
                        setStep(1);
                      }}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub active:scale-[0.97] transition-transform cursor-pointer"
                    >
                      ← Voltar
                    </button>
                    <MagneticButton
                      type="submit"
                      form="diagnosis-form"
                      className="w-full sm:w-auto px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 cursor-pointer shadow-lg"
                    >
                      Gerar Protocolo de Diagnóstico →
                    </MagneticButton>
                  </>
                )}
              </div>
              <p className="text-[11px] text-center sm:text-right axis-text-muted">
                Leva menos de 40 segundos • Atendimento 100% sigiloso
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 active:scale-[0.97] transition-[transform,filter] shadow-lg"
              >
                Enviar Direto pelo WhatsApp Comercial →
              </a>
              <button
                type="button"
                onClick={closeDiagnosisModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-main active:scale-[0.97] transition-transform cursor-pointer"
              >
                Concluir
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisModal;

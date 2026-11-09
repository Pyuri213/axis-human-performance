import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { maturityQuizQuestions } from "../constants";
import useMacbookStore from "../store";

const MaturityQuiz = () => {
  const sectionRef = useRef(null);
  const { openDiagnosisModal } = useMacbookStore();

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        ".quiz-container",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  const handleSelectOption = (questionId, option) => {
    const updated = { ...answers, [questionId]: option };
    setAnswers(updated);

    if (currentStep < maturityQuizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setAnswers({});
    setCurrentStep(0);
    setShowResult(false);
  };

  const totalScore = Math.round(
    Object.values(answers).reduce((acc, curr) => acc + (curr?.score || 0), 0) /
      maturityQuizQuestions.length
  );

  const getMaturityLevel = (score) => {
    if (score < 45) {
      return {
        badge: "NÍVEL CRÍTICO • OPERAÇÃO NO IMPROVISO",
        title: "Alta Dependência do Dono & Gargalos Ativos",
        summary:
          "Sua empresa corre sério risco de estagnação ou sobrecarga dos sócios. É urgente documentar processos no AXIS OS e alinhar o perfil comportamental da liderança.",
        colorClass: "text-amber-400",
      };
    }
    if (score < 78) {
      return {
        badge: "EM ESTRUTURAÇÃO • POTENCIAL TRAVADO",
        title: "Crescimento em Andamento, Mas Sem Padronização Total",
        summary:
          "Sua empresa já possui tração, mas perde eficiência por ruídos de comunicação, processos parcialmente soltos e falta de telemetria em tempo real.",
        colorClass: "text-[#cfaf82]",
      };
    }
    return {
      badge: "ALTA MATURIDADE • PRONTA PARA ESCALA",
      title: "Base Sólida Preparada para Multiplicação & SaaS",
      summary:
        "Sua organização já possui boa governança. O próximo passo com a AXIS é acelerar indicadores, automatizar fluxos e potencializar a alta performance dos líderes.",
      colorClass: "text-emerald-400",
    };
  };

  const levelInfo = getMaturityLevel(totalScore);
  const currentQ = maturityQuizQuestions[currentStep];

  return (
    <section
      id="maturity-quiz"
      ref={sectionRef}
      className="py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#cfaf82] mb-3">
            Ferramenta Interativa • Auto-Diagnóstico Online
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold axis-text-main leading-tight">
            Descubra em 60 segundos o{" "}
            <span className="text-gold-gradient">
              Índice de Maturidade da sua Empresa
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg axis-text-sub">
            Responda 4 perguntas rápidas e receba um diagnóstico imediato sobre
            Pessoas, Processos e Tecnologia no seu negócio.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="quiz-container max-w-4xl mx-auto axis-surface rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#cfaf82]/35">
          {!showResult ? (
            <div>
              {/* Top Progress Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#cfaf82]/15 text-[#cfaf82] border border-[#cfaf82]/30">
                  Eixo {currentStep + 1} de {maturityQuizQuestions.length}:{" "}
                  {currentQ.pillar}
                </span>
                <span className="text-xs font-semibold axis-text-muted">
                  Progresso:{" "}
                  {Math.round(
                    ((currentStep + 1) / maturityQuizQuestions.length) * 100
                  )}
                  %
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden mb-8">
                <div
                  className="h-full bg-gold-gradient transition-all duration-500 rounded-full"
                  style={{
                    width: `${
                      ((currentStep + 1) / maturityQuizQuestions.length) * 100
                    }%`,
                  }}
                />
              </div>

              {/* Question Title */}
              <h3 className="text-lg sm:text-2xl font-bold axis-text-main mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3.5">
                {currentQ.options.map((opt, idx) => {
                  const isSelected =
                    answers[currentQ.id]?.label === opt.label;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(currentQ.id, opt)}
                      className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group ${
                        isSelected
                          ? "border-[#cfaf82] bg-[#cfaf82]/15"
                          : "border-white/10 bg-black/15 hover:border-[#cfaf82]/60"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span className="w-7 h-7 rounded-full bg-[#cfaf82]/20 text-[#cfaf82] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#cfaf82] group-hover:text-black transition-colors">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-xs sm:text-base axis-text-main font-medium leading-relaxed">
                          {opt.label}
                        </span>
                      </div>
                      <span className="text-[#cfaf82] font-bold shrink-0 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Back Step Button */}
              {currentStep > 0 && (
                <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold axis-text-sub hover:text-[#cfaf82] cursor-pointer"
                  >
                    ← Voltar para pergunta anterior
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Results Screen */
            <div>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
                <div className="text-center lg:text-left max-w-xl">
                  <span
                    className={`inline-block text-xs font-bold tracking-[0.2em] uppercase mb-2 ${levelInfo.colorClass}`}
                  >
                    {levelInfo.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold axis-text-main mb-3">
                    {levelInfo.title}
                  </h3>
                  <p className="text-xs sm:text-sm axis-text-sub leading-relaxed">
                    {levelInfo.summary}
                  </p>
                </div>

                {/* Circular Score Gauge */}
                <div className="shrink-0 p-6 rounded-3xl bg-black/25 border border-[#cfaf82]/35 text-center min-w-[180px]">
                  <span className="block text-[10px] uppercase tracking-[0.2em] axis-text-muted mb-1">
                    Score de Maturidade
                  </span>
                  <span className="block text-4xl sm:text-5xl font-bold text-gold-gradient">
                    {totalScore}%
                  </span>
                  <span className="block text-[11px] text-[#cfaf82] mt-1 font-medium">
                    Índice Preliminar AXIS
                  </span>
                </div>
              </div>

              {/* Breakdown by Pillar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {maturityQuizQuestions.map((q) => {
                  const ans = answers[q.id];
                  return (
                    <div
                      key={q.id}
                      className="p-4 rounded-2xl bg-black/15 border border-white/10"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#cfaf82]">
                          {q.pillar}
                        </span>
                        <span className="text-xs font-bold axis-text-main">
                          {ans?.score || 0}%
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold axis-text-main mb-2">
                        {ans?.diagnosis}
                      </p>
                      <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full bg-gold-gradient rounded-full"
                          style={{ width: `${ans?.score || 0}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="button"
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub hover:text-white cursor-pointer"
                >
                  ↺ Refazer Avaliação
                </button>

                <button
                  type="button"
                  onClick={() =>
                    openDiagnosisModal(
                      `Score Auto-Diagnóstico: ${totalScore}% (${levelInfo.title})`
                    )
                  }
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer shadow-xl"
                >
                  Receber Plano de Ação para meu Score ({totalScore}%) →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MaturityQuiz;

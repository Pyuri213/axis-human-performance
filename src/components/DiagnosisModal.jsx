import { useState, useEffect } from "react";
import useMacbookStore from "../store";

const DiagnosisModal = () => {
  const { isDiagnosisModalOpen, closeDiagnosisModal, diagnosisPreset } =
    useMacbookStore();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    role: "Sócio / Proprietário",
    teamSize: "11 a 50 colaboradores",
    bottleneck:
      "Diagnóstico Completo 360° (Pessoas + Processos + Tecnologia)",
    whatsapp: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (diagnosisPreset) {
      setFormData((prev) => ({
        ...prev,
        bottleneck: diagnosisPreset,
      }));
    }
    setSubmitted(false);
  }, [diagnosisPreset, isDiagnosisModalOpen]);

  if (!isDiagnosisModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const buildWhatsAppUrl = () => {
    const text = [
      `*SOLICITAÇÃO DE DIAGNÓSTICO EMPRESARIAL — AXIS*`,
      ``,
      `*Nome:* ${formData.name || "Não informado"}`,
      `*Empresa:* ${formData.company || "Não informada"}`,
      `*Cargo:* ${formData.role}`,
      `*Porte:* ${formData.teamSize}`,
      `*Foco / Gargalo:* ${formData.bottleneck}`,
      `*WhatsApp:* ${formData.whatsapp}`,
      formData.notes ? `*Cenário:* ${formData.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/5544999999999?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="axis-surface w-full max-w-2xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#cfaf82]/40 relative my-auto max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={closeDiagnosisModal}
          aria-label="Fechar modal"
          className="absolute top-5 right-5 w-9 h-9 rounded-full axis-surface flex items-center justify-center axis-text-main hover:border-[#cfaf82] cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/brand/axis-symbol.svg"
                alt="AXIS"
                className="w-8 h-8 object-contain"
              />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#cfaf82]">
                Atendimento Executivo • Maringá / PR & Brasil
              </span>
            </div>

            <h3
              id="modal-title"
              className="text-xl sm:text-2xl lg:text-3xl font-bold axis-text-main"
            >
              Diagnóstico de Maturidade Empresarial AXIS
            </h3>
            <p className="text-xs sm:text-sm axis-text-sub mt-1.5 mb-6">
              Preencha os dados da sua organização para estruturarmos uma
              análise preliminar de Pessoas, Processos e Tecnologia.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
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
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                    Seu Cargo
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                  >
                    <option value="Sócio / Proprietário">
                      Sócio / Proprietário
                    </option>
                    <option value="CEO / Diretor Executivo">
                      CEO / Diretor Executivo
                    </option>
                    <option value="Diretor de Operações / COO">
                      Diretor de Operações / COO
                    </option>
                    <option value="Gestor / Liderança">
                      Gestor / Liderança
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                    Porte da Equipe
                  </label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) =>
                      setFormData({ ...formData, teamSize: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                  >
                    <option value="Até 10 colaboradores">
                      Até 10 colaboradores
                    </option>
                    <option value="11 a 50 colaboradores">
                      11 a 50 colaboradores
                    </option>
                    <option value="51 a 200 colaboradores">
                      51 a 200 colaboradores
                    </option>
                    <option value="Acima de 200 colaboradores">
                      Acima de 200 colaboradores
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                    WhatsApp Corporativo *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) =>
                      setFormData({ ...formData, whatsapp: e.target.value })
                    }
                    placeholder="(44) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                    Frente Prioritária
                  </label>
                  <input
                    type="text"
                    value={formData.bottleneck}
                    onChange={(e) =>
                      setFormData({ ...formData, bottleneck: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider axis-text-muted mb-1.5">
                  Principais Desafios ou Gargalos Atuais (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Conte brevemente sobre o momento da empresa (ex: processos centralizados no dono, alinhamento de líderes, necessidade de indicadores)..."
                  className="w-full px-4 py-3 rounded-xl axis-surface axis-text-main text-sm focus:outline-none focus:border-[#cfaf82]"
                />
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={closeDiagnosisModal}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold axis-surface axis-text-sub cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold text-black bg-gold-gradient hover:brightness-110 transition-all cursor-pointer shadow-lg"
                >
                  Gerar Protocolo de Diagnóstico →
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#cfaf82]/20 text-[#cfaf82] flex items-center justify-center mx-auto mb-5 text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-2xl font-bold axis-text-main mb-2">
              Solicitação de Diagnóstico Estruturada!
            </h3>
            <p className="text-sm axis-text-sub max-w-md mx-auto mb-6">
              Os dados de{" "}
              <strong className="axis-text-main">{formData.company}</strong>{" "}
              foram preparados para a diretoria de operações da AXIS (Andriely —
              COO).
            </p>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 text-left text-xs space-y-1.5 mb-6 max-w-md mx-auto axis-text-sub">
              <p>
                <strong className="axis-text-main">Responsável:</strong>{" "}
                {formData.name} ({formData.role})
              </p>
              <p>
                <strong className="axis-text-main">Porte:</strong>{" "}
                {formData.teamSize}
              </p>
              <p>
                <strong className="axis-text-main">Foco:</strong>{" "}
                {formData.bottleneck}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-bold text-black bg-gold-gradient hover:brightness-110 transition-all shadow-lg"
              >
                Enviar Direto pelo WhatsApp Comercial →
              </a>
              <button
                type="button"
                onClick={closeDiagnosisModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-semibold axis-surface axis-text-main cursor-pointer"
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


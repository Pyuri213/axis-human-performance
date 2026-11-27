# DESIGN.md — AXIS Human Performance

Diretrizes de **Design Engineering**, **Motion** e **Mobile-Native** consolidadas a partir de `tasteskill.dev`, `transitions.dev`, `reactbits.dev` e `emilkowalski/skills`.

---

## 1. Identidade Visual (*Obsidian & Champagne Gold*)

- **Modo Dark (padrão):**
  - `--bg-primary`: `#070709`
  - `--bg-secondary`: `#101015`
  - `--text-primary`: `#f5f5f7`
  - `--gold-primary`: `#cfaf82`
- **Modo Light:**
  - `--bg-primary`: `#f7f7fa`
  - `--bg-secondary`: `#ffffff`
  - `--text-primary`: `#111116`
  - `--gold-primary`: `#9a7a4f`
- **Regra Anti-Genérico:**
  - Evitar bordas sólidas duras em superfícies elevadas; preferir `--border-card` semitransparente + `--shadow-card`.
  - Manter hierarquia tipográfica limpa e `tabular-nums` em métricas, percentuais e scores.

---

## 2. Escala de Motion Tokens (`src/index.css`)

| Token | Valor | Uso |
| :--- | :--- | :--- |
| `--duration-instant` | `120ms` | Feedback imediato (press/tap, micro-hovers) |
| `--duration-quick` | `180ms` | Backdrop de modal, drawer mobile, troca de cor |
| `--duration-normal` | `280ms` | Acordeão FAQ, painel de modal, troca de etapa do Quiz |
| `--duration-slow` | `420ms` | Revelações principais de seção |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entradas e expansões fluidas |
| `--ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | Opacidade, cores e bordas |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Confirmações (ex: checkmark de sucesso) |

### Regras de Performance de Animação
- Animar apenas propriedades amigáveis à GPU (`transform`, `opacity`, `border-color`, `background-color`).
- Evitar `transition-all` e `filter: blur(...)` em blocos grandes de texto/imagem.
- Respeitar sempre `@media (prefers-reduced-motion: reduce)` em CSS e `gsap.matchMedia()` em GSAP.

---

## 3. Regras Mobile-Native

- **Viewport:** Usar `dvh` (`min-h-dvh`, `max-h-[92dvh]`) em vez de `vh` para evitar saltos com a barra do navegador no iOS/Android.
- **Inputs sem auto-zoom no iOS:** Campos `<input>`, `<select>` e `<textarea>` devem ter `text-base` (`16px`) em telas mobile (`text-base sm:text-sm`).
- **Sem *sticky hover*:** Efeitos de hover com spotlight ou deslocamento devem ser restritos a `@media (hover: hover) and (pointer: fine)` ou `lg:hover:*`.
- **Feedback Tátil:** Botões e opções interativas devem aplicar `active:scale-[0.97]` ou `active:scale-[0.985]` e `-webkit-tap-highlight-color: transparent`.

---

## 4. Checklist de Auditoria Visual (`1440px` / `768px` / `390px`)

- [ ] Nenhum overflow horizontal (`overflow-x: clip`).
- [ ] Margens e paddings simétricos nos 3 breakpoints.
- [ ] Contraste adequado nos modos **Dark** e **Light**.
- [ ] Modal fecha por botão, clique no backdrop e tecla `Escape`, travando o scroll do `body`.
- [ ] `prefers-reduced-motion: reduce` desativa loops contínuos e animações de entrada.

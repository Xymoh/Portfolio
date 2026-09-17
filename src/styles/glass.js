import { css } from "styled-components";

/*
 * Liquid-glass surface: translucent, blurred backdrop, a light rim on the
 * top edge and a soft sheen. `--mx` / `--my` are set by <GlassEffects /> so
 * the highlight follows the cursor while hovering.
 */
export const glass = css`
  position: relative;
  isolation: isolate;
  background: var(--glass-bg);
  -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(170%);
  backdrop-filter: blur(var(--glass-blur)) saturate(170%);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-rim), var(--glass-shadow);
  &::before,
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
  }
  &::before {
    background: radial-gradient(
        120% 70% at 18% -10%,
        rgba(255, 255, 255, 0.16) 0%,
        rgba(255, 255, 255, 0) 55%
      ),
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0) 45%,
        rgba(255, 255, 255, 0.025) 100%
      );
  }
  &::after {
    opacity: 0;
    transition: opacity 0.7s var(--ease-smooth);
    background: radial-gradient(
      280px circle at var(--mx, 50%) var(--my, 50%),
      rgba(99, 209, 191, 0.16),
      transparent 62%
    );
  }
  &:hover::after {
    opacity: 1;
  }
`;

/* Same look without backdrop-filter, for small repeated elements (chips, tags). */
export const glassLite = css`
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-rim);
`;

/* Lift and gently scale on hover, settle back on press. */
export const glassHover = css`
  transition: transform var(--hover-duration) var(--ease-smooth),
    box-shadow var(--hover-duration) var(--ease-smooth),
    border-color var(--hover-duration) var(--ease-smooth);
  &:hover {
    transform: translateY(-5px) scale(1.012);
    border-color: var(--glass-border-hover);
    box-shadow: var(--glass-rim), var(--glass-shadow-hover);
  }
  &:active {
    transform: translateY(-2px) scale(1.004);
    transition-duration: 0.25s;
  }
`;

/* Rounded icon well used at the top of cards. */
export const iconWell = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-sm);
  background: linear-gradient(
    135deg,
    rgba(99, 209, 191, 0.28),
    rgba(61, 127, 203, 0.18)
  );
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.32),
    0 8px 20px -10px rgba(99, 209, 191, 0.6);
  svg {
    color: var(--accent);
  }
`;

/* Capsule buttons. `buttonPrimary` / `buttonGlass` extend `buttonBase`. */
export const buttonBase = css`
  position: relative;
  isolation: isolate;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6em;
  font-family: "RobotoMono Regular";
  font-size: 1.7rem;
  padding: 0.8em 1.9em;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  -webkit-backdrop-filter: blur(14px) saturate(160%);
  backdrop-filter: blur(14px) saturate(160%);
  transition: transform 0.7s var(--ease-smooth), box-shadow 0.7s var(--ease-smooth),
    border-color 0.7s var(--ease-smooth), background 0.7s var(--ease-smooth);
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -1;
    border-radius: inherit;
    pointer-events: none;
    background: radial-gradient(
      120% 80% at 20% -20%,
      rgba(255, 255, 255, 0.38),
      transparent 55%
    );
  }
  &:hover {
    transform: translateY(-2px) scale(1.02);
  }
  &:active {
    transform: translateY(0) scale(0.97);
    transition-duration: 0.2s;
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const buttonPrimary = css`
  ${buttonBase}
  color: #062421;
  background: linear-gradient(135deg, #6fdccb 0%, #5ab6e0 100%);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(0, 0, 0, 0.12), 0 14px 30px -10px rgba(70, 179, 189, 0.55);
  &:hover {
    border-color: rgba(255, 255, 255, 0.6);
    background: linear-gradient(135deg, #7ee6d6 0%, #6cc3ea 100%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.55),
      inset 0 -1px 0 rgba(0, 0, 0, 0.12), 0 18px 36px -10px rgba(70, 179, 189, 0.65);
  }
`;

export const buttonGlass = css`
  ${buttonBase}
  color: var(--white);
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-rim), 0 12px 28px -14px rgba(0, 0, 0, 0.6);
  &::before {
    opacity: 0.55;
  }
  &:hover {
    border-color: var(--glass-border-hover);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: var(--glass-rim), 0 16px 32px -14px rgba(0, 0, 0, 0.65),
      0 0 0 1px rgba(99, 209, 191, 0.1);
  }
`;

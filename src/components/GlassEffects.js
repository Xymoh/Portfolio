import { useEffect } from "react";

/*
 * Tracks the pointer over any `.glass` surface and exposes its position as
 * `--mx` / `--my`, which the glass mixin uses for the cursor highlight.
 * Skipped on touch-only devices.
 */
export default function GlassEffects() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return undefined;

    const onMove = (e) => {
      const el = e.target.closest?.(".glass");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}

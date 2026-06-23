import { Keyboard, Eye, Contrast, Hand, ShieldCheck } from "lucide-react";
import { SectionLabel, SectionTitle } from "./primitives";
import { accessibilityCriteria } from "./data";

const pillars = [
  {
    icon: Eye,
    title: "Focus-visible, always",
    body: "Every interactive element shows a 2px ring at 2px offset on keyboard focus. Focus is never removed or hidden behind content.",
  },
  {
    icon: Keyboard,
    title: "Keyboard-first",
    body: "Tab, Shift+Tab, Arrow, Enter, Space, and Escape operate every component. Roving tabindex is used for composite widgets.",
  },
  {
    icon: Contrast,
    title: "Token-level contrast",
    body: "Text clears 4.5:1 and large text 3:1 against its surface token. Non-text indicators clear 3:1. Verified per token, not per screen.",
  },
  {
    icon: Hand,
    title: "Touch targets",
    body: "Controls meet the 24×24 minimum; primary mobile actions meet 44×44. Spacing prevents accidental taps.",
  },
];

export function Accessibility() {
  return (
    <section
      id="accessibility"
      aria-labelledby="accessibility-title"
      className="border-b border-hairline"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="04">Accessibility</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="accessibility-title">
            WCAG 2.2 AA, testable.
          </SectionTitle>
          <div className="flex items-center gap-2 text-[13px] text-ink-primary/70">
            <ShieldCheck className="h-4 w-4 text-link" aria-hidden />
            Every criterion maps to a pass/fail check.
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-px border border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="bg-surface-base p-6">
              <span
                className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-ink-primary"
                aria-hidden
              >
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-wordmark text-[20px] leading-tight">
                {p.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-ink-primary/65">
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Criteria table */}
        <div className="mt-12 border border-hairline">
          <div className="grid grid-cols-[80px_1fr_60px] border-b border-hairline bg-surface-muted px-5 py-3 text-ink-secondary sm:grid-cols-[100px_1.2fr_2fr_70px]">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary/60">
              SC
            </span>
            <span className="hidden font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary/60 sm:block">
              Name
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary/60">
              Acceptance check
            </span>
            <span className="text-right font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary/60">
              Level
            </span>
          </div>
          <ul>
            {accessibilityCriteria.map((c, i) => (
              <li
                key={c.id}
                className={`grid grid-cols-[80px_1fr_60px] items-start gap-3 px-5 py-4 text-ink-primary sm:grid-cols-[100px_1.2fr_2fr_70px] sm:gap-4 ${
                  i !== accessibilityCriteria.length - 1
                    ? "border-b border-hairline"
                    : ""
                }`}
              >
                <code className="font-mono text-[13px] text-link">{c.id}</code>
                <span className="hidden text-[14px] sm:block">{c.title}</span>
                <span className="text-[13px] leading-[1.45] text-ink-primary/70">
                  {c.check}
                </span>
                <span className="justify-self-end border border-hairline px-1.5 py-0.5 font-mono text-[10px] text-ink-primary/70">
                  {c.level}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Keyboard + overflow demo */}
        <div className="mt-12 grid gap-px border border-hairline lg:grid-cols-2">
          <div className="bg-surface-base p-6">
            <h3 className="text-wordmark text-[24px]">Keyboard map</h3>
            <p className="mt-2 text-[13px] text-ink-primary/65">
              Tab through the controls below — each shows a visible focus ring.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#top"
                className="inline-flex h-11 items-center bg-ink-primary px-5 text-[14px] text-surface-base focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Tab target 1
              </a>
              <button
                type="button"
                className="inline-flex h-11 items-center border border-hairline px-5 text-[14px] text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Tab target 2
              </button>
              <label className="inline-flex h-11 items-center gap-2 border border-hairline px-3 text-[13px] text-ink-primary">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[var(--teracle-ink-tertiary)]"
                />
                Tab target 3
              </label>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-[12px] text-ink-primary/60">
              <dt>Tab / Shift+Tab</dt><dd className="text-ink-primary/80">Move focus</dd>
              <dt>Enter / Space</dt><dd className="text-ink-primary/80">Activate</dd>
              <dt>Arrow keys</dt><dd className="text-ink-primary/80">Rove within group</dd>
              <dt>Escape</dt><dd className="text-ink-primary/80">Dismiss / close</dd>
            </dl>
          </div>

          <div className="bg-surface-base p-6">
            <h3 className="text-wordmark text-[24px]">Long content & overflow</h3>
            <p className="mt-2 text-[13px] text-ink-primary/65">
              Lists cap height and scroll internally; rows never break layout.
            </p>
            <ul className="teracle-scroll mt-5 max-h-56 overflow-y-auto border border-hairline">
              {Array.from({ length: 12 }).map((_, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between border-b border-hairline px-4 py-3 text-[13px] last:border-b-0 hover:bg-surface-muted hover:text-ink-secondary"
                >
                  <span className="truncate pr-3">
                    token.reference.path.component-state.variant-{i + 1}
                  </span>
                  <code className="shrink-0 font-mono text-[11px] text-ink-primary/50">
                    resolved
                  </code>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[12px] text-ink-primary/50">
              Empty state: when a list has no items, render a labeled empty slot
              with a next action — never a blank panel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

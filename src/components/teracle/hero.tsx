import { ArrowRight, ArrowUpRight, Command as CommandIcon, CornerDownLeft } from "lucide-react";
import { heroStats } from "./data";

const marqueeItems = [
  "v2.4.0 released",
  "WCAG 2.2 AA verified",
  "42 design tokens",
  "12 component families",
  "7 explicit states per control",
  "Chakra Petch · 700",
  "Keyboard-first interactions",
  "Token-driven theming",
];

export function AnnouncementBar() {
  return (
    <div className="border-b border-hairline bg-ink-tertiary text-ink-primary">
      <div className="relative flex overflow-hidden">
        <div className="teracle-marquee flex shrink-0 items-center gap-8 whitespace-nowrap py-2 pl-6 text-[13px] font-medium">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-8">
              <span aria-hidden>◆</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-hairline"
    >
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-[480px] w-[480px] bg-ink-tertiary/20 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-10 lg:pb-24 lg:pt-28">
        {/* Meta row */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-ink-primary/60">
          <span className="border border-hairline px-2 py-1">Design System</span>
          <span className="border border-hairline px-2 py-1">v2.4.0</span>
          <span className="hidden border border-hairline px-2 py-1 sm:inline">
            for technical teams
          </span>
        </div>

        <h1
          id="hero-title"
          className="text-wordmark text-[64px] leading-[0.9] sm:text-[110px] lg:text-[150px] xl:text-[200px]"
        >
          TERACLE
        </h1>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <p className="max-w-[640px] text-[18px] leading-[1.35] text-ink-primary/85 sm:text-[24px] lg:leading-[1.3]">
            An implementation-ready, token-driven design system for developer
            documentation. Built on semantic tokens, explicit component states,
            and keyboard-first accessibility at{" "}
            <span className="text-ink-primary">WCAG 2.2 AA</span>.
            <span className="teracle-caret ml-1 inline-block w-[0.5ch] -translate-y-[2px] text-link-strong">
              _
            </span>
          </p>

          <div className="flex flex-col justify-end gap-5">
            <div className="flex flex-wrap gap-3">
              <a
                href="#getting-started"
                className="group inline-flex h-12 items-center gap-2 bg-ink-primary px-5 text-[15px] text-surface-base transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Read the docs
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden />
              </a>
              <a
                href="#foundations"
                className="inline-flex h-12 items-center gap-2 border border-hairline px-5 text-[15px] text-ink-primary transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                View tokens
              </a>
            </div>
            <div className="flex items-center gap-3 text-[12px] text-ink-primary/55">
              <CommandIcon className="h-3.5 w-3.5" aria-hidden />
              <span>Press</span>
              <kbd className="border border-hairline px-1.5 py-0.5 font-mono text-[11px] text-ink-primary/80">⌘</kbd>
              <kbd className="border border-hairline px-1.5 py-0.5 font-mono text-[11px] text-ink-primary/80">K</kbd>
              <span>to search</span>
              <CornerDownLeft className="ml-auto h-3.5 w-3.5" aria-hidden />
            </div>
          </div>
        </div>

        {/* Stat strip */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-hairline lg:mt-20 lg:grid-cols-4">
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="bg-surface-base p-5 transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary sm:p-6"
            >
              <dt className="text-[12px] uppercase tracking-[0.16em] text-ink-primary/55">
                {s.label}
              </dt>
              <dd className="mt-3 text-wordmark text-[40px] leading-none sm:text-[56px]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center gap-2 text-[12px] text-ink-primary/55">
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          Trusted by architecture-led teams shipping documentation at scale
        </div>
      </div>
    </section>
  );
}

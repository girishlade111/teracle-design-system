import { ArrowUpRight } from "lucide-react";

const footerNav = [
  {
    title: "System",
    links: ["Foundations", "Components", "States lab", "Accessibility", "Changelog"],
  },
  {
    title: "Developers",
    links: ["Installation", "Token JSON", "GitHub", "Discussions", "Status"],
  },
  {
    title: "Design",
    links: ["Figma library", "Icon set", "Brand kit", "License", "Roadmap"],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline bg-surface-base">
      <div className="mx-auto w-full max-w-[1400px] px-4 py-14 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand block */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5" aria-label="Teracle home">
              <span
                aria-hidden
                className="inline-block h-6 w-6 bg-ink-primary"
                style={{ borderRadius: "2px" }}
              />
              <span className="text-wordmark text-[24px] text-ink-primary">
                TERACLE
              </span>
            </a>
            <p className="mt-4 max-w-[340px] text-[14px] leading-[1.5] text-ink-primary/65">
              An implementation-ready, token-driven design system for developer
              documentation. Concise, confident, implementation-focused.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["WCAG 2.2 AA", "Token-driven", "Keyboard-first", "v2.4.0"].map(
                (t) => (
                  <span
                    key={t}
                    className="border border-hairline px-2 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-primary/60"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="text-[12px] uppercase tracking-[0.18em] text-ink-primary/50">
                  {col.title}
                </h3>
                <ul className="mt-4 flex flex-col">
                  {col.links.map((label) => (
                    <li key={label}>
                      <a
                        href="#top"
                        className="group inline-flex w-full items-center justify-between gap-2 py-2 text-[14px] text-ink-primary/80 transition-colors duration-150 hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        <span>{label}</span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-30 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-hairline pt-6 text-[12px] text-ink-primary/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Teracle. Built on semantic tokens.</p>
          <p className="font-mono">
            font: Chakra Petch · 700 · base 16px / lh 16px
          </p>
        </div>
      </div>
    </footer>
  );
}

import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "./primitives";
import { resourceGroups } from "./data";

export function Resources() {
  const total = resourceGroups.reduce((n, g) => n + g.links.length, 0);

  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="border-b border-hairline"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="06">Resources</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="resources-title">
            Everything, linked.
          </SectionTitle>
          <p className="max-w-[460px] text-[16px] leading-[1.45] text-ink-primary/70">
            {total} curated links across documentation, components, patterns,
            and resources. Descriptive labels only — no ambiguous actions.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px border border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {resourceGroups.map((group) => (
            <div key={group.title} className="bg-surface-base p-5 sm:p-6">
              <h3 className="border-b border-hairline pb-3 text-[14px] uppercase tracking-[0.16em] text-ink-primary/60">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-col">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group flex items-center justify-between gap-2 py-2 text-[14px] text-ink-primary/80 transition-colors duration-150 hover:text-link focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-40 transition-all duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section
      id="getting-started"
      aria-labelledby="cta-title"
      className="relative overflow-hidden border-b border-hairline bg-ink-tertiary text-ink-primary"
    >
      <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto flex w-full max-w-[1400px] flex-col items-start gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-24">
        <div>
          <p className="text-[12px] uppercase tracking-[0.2em] text-ink-primary/70">
            Start building
          </p>
          <h2
            id="cta-title"
            className="mt-3 text-wordmark text-[40px] leading-[1.02] sm:text-[56px] lg:text-[72px]"
          >
            Build docs that <br className="hidden sm:block" />
            scale with your system.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
          <a
            href="#usage"
            className="inline-flex h-14 items-center justify-center gap-2 bg-ink-primary px-7 text-[16px] text-surface-base transition-opacity duration-150 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Read the docs
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#foundations"
            className="inline-flex h-14 items-center justify-center gap-2 border border-ink-primary/40 px-7 text-[16px] text-ink-primary transition-colors duration-150 hover:bg-ink-primary hover:text-ink-tertiary focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Browse tokens
          </a>
        </div>
      </div>
    </section>
  );
}

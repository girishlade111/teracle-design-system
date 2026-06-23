import { ArrowUpRight } from "lucide-react";
import { SectionLabel, SectionTitle } from "./primitives";
import { componentFamilies } from "./data";

export function ComponentCards() {
  return (
    <section
      id="components"
      aria-labelledby="components-title"
      className="border-b border-hairline"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="02">Components</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="components-title">
            Twelve families. <br className="hidden sm:block" />
            Seven states each.
          </SectionTitle>
          <p className="max-w-[460px] text-[16px] leading-[1.45] text-ink-primary/70">
            Every component ships default, hover, focus-visible, active,
            disabled, loading, and error states. No state is implicit — each is
            designed and tested.
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-px border border-hairline sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {componentFamilies.map((c, i) => (
            <li key={c.id}>
              <a
                href="#button-lab"
                className="group flex h-full flex-col gap-4 bg-surface-base p-5 transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center border border-hairline text-ink-primary transition-colors duration-150 group-hover:border-ink-secondary"
                    aria-hidden
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] text-ink-primary/40 group-hover:text-ink-secondary/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div>
                  <h3 className="text-wordmark text-[24px] leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.45] text-ink-primary/65 group-hover:text-ink-secondary/70">
                    {c.summary}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                  {c.states.map((s) => (
                    <span
                      key={s}
                      className="border border-hairline px-1.5 py-0.5 font-mono text-[10px] text-ink-primary/55 group-hover:border-ink-secondary/30 group-hover:text-ink-secondary/65"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-hairline pt-4 text-[12px] text-ink-primary/55 group-hover:text-ink-secondary/65">
                  <span>{c.variants} variants</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

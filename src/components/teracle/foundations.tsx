import { Check } from "lucide-react";
import {
  SectionLabel,
  SectionTitle,
} from "./primitives";
import {
  colorTokens,
  typeScale,
  spacingTokens,
  shapeTokens,
  motionTokens,
} from "./data";

export function Foundations() {
  return (
    <section
      id="foundations"
      aria-labelledby="foundations-title"
      className="border-b border-hairline"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="01">Foundations</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="foundations-title">
            Tokens before pixels.
          </SectionTitle>
          <p className="max-w-[460px] text-[16px] leading-[1.45] text-ink-primary/70">
            Every color, size, and space resolves to a semantic token. Components
            reference tokens, never raw hex values, so themes invert without code
            changes.
          </p>
        </div>

        {/* COLOR */}
        <div className="mt-14">
          <h3 className="mb-5 text-[14px] uppercase tracking-[0.2em] text-ink-primary/60">
            Color
          </h3>
          <div className="grid grid-cols-1 gap-px border border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {colorTokens.map((c) => (
              <div
                key={c.token}
                className="flex flex-col gap-4 p-5"
                style={{ backgroundColor: "var(--teracle-surface-base)" }}
              >
                <div
                  className="h-24 w-full border border-hairline"
                  style={{ backgroundColor: c.value }}
                  aria-hidden
                />
                <div className="flex items-baseline justify-between gap-2">
                <code className="font-mono text-[13px] text-ink-primary">
                  {c.token}
                </code>
                <code className="font-mono text-[12px] text-ink-primary/60">
                  {c.value}
                </code>
                </div>
                <p className="text-[13px] leading-[1.4] text-ink-primary/65">
                  {c.role}
                </p>
                <div className="mt-auto flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-ink-primary/50">
                  <Check className="h-3 w-3" aria-hidden />
                  on {c.onSurface}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12px] text-ink-primary/50">
            Note: <code className="font-mono">color.text.tertiary</code> (#0000ee)
            is lifted to #8b8bff on the base surface to meet 1.4.3 contrast — a
            token-level decision, not a per-component exception.
          </p>
        </div>

        {/* TYPOGRAPHY */}
        <div className="mt-16">
          <h3 className="mb-5 text-[14px] uppercase tracking-[0.2em] text-ink-primary/60">
            Typography · Chakra Petch 700
          </h3>
          <div className="border border-hairline">
            {typeScale.map((t, i) => (
              <div
                key={t.name}
                className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 ${
                  i !== typeScale.length - 1 ? "border-b border-hairline" : ""
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className={`${t.className} text-wordmark truncate text-ink-primary`}>
                    {t.name}
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-x-6 gap-y-1 font-mono text-[12px] text-ink-primary/60">
                  <span>{t.token}</span>
                  <span>{t.size}</span>
                  <span>w{t.weight}</span>
                  <span>lh {t.lineHeight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SPACING + SHAPE + MOTION */}
        <div className="mt-16 grid gap-px border border-hairline lg:grid-cols-3">
          <TokenBlock title="Spacing">
            {spacingTokens.map((s) => (
              <TokenRow key={s.token} token={s.token} value={s.value} note={s.usage}>
                <div className="flex items-center gap-2">
                  <span
                    className="inline-block h-3 bg-ink-primary"
                    style={{ width: s.value }}
                    aria-hidden
                  />
                </div>
              </TokenRow>
            ))}
          </TokenBlock>

          <TokenBlock title="Shape · Radius">
            {shapeTokens.map((s) => (
              <TokenRow key={s.token} token={s.token} value={s.value} note={s.usage}>
                <div
                  className="h-6 w-6 border border-ink-primary"
                  style={{ borderRadius: s.value }}
                  aria-hidden
                />
              </TokenRow>
            ))}
          </TokenBlock>

          <TokenBlock title="Motion">
            {motionTokens.map((s) => (
              <TokenRow key={s.token} token={s.token} value={s.value} note={s.usage}>
                <div className="h-1.5 w-12 overflow-hidden bg-hairline">
                  <div className="teracle-motion-bar h-full w-full bg-ink-tertiary" />
                </div>
              </TokenRow>
            ))}
          </TokenBlock>
        </div>
      </div>
    </section>
  );
}

function TokenBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-surface-base p-5">
      <h4 className="mb-4 text-[14px] uppercase tracking-[0.2em] text-ink-primary/60">
        {title}
      </h4>
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
}

function TokenRow({
  token,
  value,
  note,
  children,
}: {
  token: string;
  value: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex w-14 shrink-0 justify-center">{children}</div>
      <div className="min-w-0 flex-1">
        <code className="font-mono text-[13px] text-ink-primary">{token}</code>
        <p className="mt-0.5 text-[12px] text-ink-primary/55">{note}</p>
      </div>
      <code className="shrink-0 font-mono text-[12px] text-ink-primary/60">{value}</code>
    </div>
  );
}

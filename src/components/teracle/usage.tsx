"use client";

import { useState } from "react";
import { Check, Copy, Terminal, Package } from "lucide-react";
import { SectionLabel, SectionTitle } from "./primitives";

const installScript = `bun add @teracle/tokens @teracle/react`;

const tokenSnippet = `:root {
  --teracle-ink-primary: #ffffff;
  --teracle-ink-secondary: #0a0a0a;
  --teracle-ink-tertiary: #0000ee;
  --teracle-surface-base: #000000;
  --teracle-surface-muted: #fef9f3;
  --teracle-space-1: 32px;
  --teracle-space-2: 40px;
  --teracle-space-3: 60px;
  --teracle-radius-md: 2px;
  --teracle-motion-fast: 120ms ease;
}`;

const buttonSnippet = `import { Button } from "@teracle/react";

<Button variant="primary" state="default" onPress={deploy}>
  Deploy
</Button>

// states: default | hover | focus-visible | active
//         disabled | loading | error
// every state is tokenized & testable.`;

const steps = [
  {
    n: "01",
    title: "Install tokens",
    body: "Add the token package. CSS variables are emitted at :root and invert under .teracle-light.",
  },
  {
    n: "02",
    title: "Reference, don't hardcode",
    body: "Components consume semantic tokens — bg-surface-muted, text-ink-primary — never raw hex.",
  },
  {
    n: "03",
    title: "Audit states",
    body: "Use the States Lab to verify all seven states render correctly before shipping.",
  },
];

export function Usage() {
  return (
    <section
      id="usage"
      aria-labelledby="usage-title"
      className="border-b border-hairline"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="05">Usage</SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="usage-title">Ship in three steps.</SectionTitle>
          <p className="max-w-[460px] text-[16px] leading-[1.45] text-ink-primary/70">
            Install the token package, reference semantic tokens, and audit the
            seven states. No build-step magic — just CSS variables and React.
          </p>
        </div>

        <div className="mt-14 grid gap-px border border-hairline lg:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-surface-base p-6">
              <span className="font-mono text-[12px] text-link">{s.n}</span>
              <h3 className="mt-3 text-wordmark text-[24px]">{s.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.5] text-ink-primary/65">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <CodeBlock
            icon={Terminal}
            label="Install"
            code={installScript}
          />
          <CodeBlock
            icon={Package}
            label="tokens.css"
            code={tokenSnippet}
          />
        </div>

        <div className="mt-6">
          <CodeBlock icon={Package} label="Button.tsx" code={buttonSnippet} />
        </div>
      </div>
    </section>
  );
}

function CodeBlock({
  icon: Icon,
  label,
  code,
}: {
  icon: React.ElementType;
  label: string;
  code: string;
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="border border-hairline bg-surface-base">
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2.5">
        <div className="flex items-center gap-2 text-[12px] text-ink-primary/70">
          <Icon className="h-3.5 w-3.5" aria-hidden />
          <span className="font-mono">{label}</span>
        </div>
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className="inline-flex h-8 items-center gap-1.5 border border-hairline px-2.5 text-[12px] text-ink-primary/80 transition-colors duration-150 hover:bg-surface-muted hover:text-ink-secondary focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-link" aria-hidden />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden />
              Copy
            </>
          )}
        </button>
      </div>
      <pre className="teracle-scroll overflow-x-auto p-4 font-mono text-[12.5px] leading-[1.6] text-ink-primary/85">
        <code>{code}</code>
      </pre>
    </div>
  );
}

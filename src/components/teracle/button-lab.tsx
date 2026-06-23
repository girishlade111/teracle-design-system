"use client";

import { useState } from "react";
import { Loader2, ArrowRight, AlertTriangle } from "lucide-react";
import { SectionLabel, SectionTitle } from "./primitives";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { buttonVariants, buttonStates } from "./data";

type Variant = (typeof buttonVariants)[number];
type State = (typeof buttonStates)[number];

/* Renders a button visually frozen in the requested state so reviewers
   can audit every state without interacting. */
function StateButton({ variant, state }: { variant: Variant; state: State }) {
  const base =
    "relative inline-flex h-11 items-center justify-center gap-2 px-5 text-[14px] transition-colors duration-150 select-none";

  const variantClasses: Record<Variant, string> = {
    Primary: "bg-ink-primary text-surface-base",
    Secondary: "bg-ink-tertiary text-ink-primary",
    Outline: "border border-hairline text-ink-primary",
    Ghost: "text-ink-primary",
  };

  let cls = `${base} ${variantClasses[variant]}`;

  switch (state) {
    case "hover":
      cls =
        variant === "Primary"
          ? `${base} bg-ink-primary text-surface-base opacity-90`
          : variant === "Secondary"
          ? `${base} bg-ink-tertiary/85 text-ink-primary`
          : variant === "Outline"
          ? `${base} border border-ink-primary text-ink-primary bg-surface-muted/10`
          : `${base} text-ink-primary bg-surface-muted/10`;
      break;
    case "focus-visible":
      cls = `${cls} outline-2 outline-offset-2`;
      // inline style for the visible ring color
      return (
        <span
          className={cls}
          style={{ outlineStyle: "solid", outlineColor: "var(--teracle-focus)" }}
        >
          {variant}
        </span>
      );
    case "active":
      cls =
        variant === "Primary"
          ? `${base} bg-ink-primary text-surface-base translate-y-px`
          : variant === "Secondary"
          ? `${base} bg-ink-tertiary text-ink-primary translate-y-px`
          : variant === "Outline"
          ? `${base} border border-ink-primary text-ink-primary bg-surface-muted/20 translate-y-px`
          : `${base} text-ink-primary bg-surface-muted/20 translate-y-px`;
      break;
    case "disabled":
      cls = `${base} opacity-40 cursor-not-allowed ${variantClasses[variant]}`;
      break;
    case "loading":
      return (
        <span className={`${base} ${variantClasses[variant]} cursor-wait`}>
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          Loading
        </span>
      );
    case "error":
      cls =
        variant === "Primary"
          ? `${base} bg-destructive text-ink-primary`
          : variant === "Secondary"
          ? `${base} bg-destructive text-ink-primary`
          : variant === "Outline"
          ? `${base} border border-destructive text-destructive`
          : `${base} text-destructive`;
      break;
    default:
      break;
  }

  return (
    <span className={cls} aria-hidden>
      {variant}
    </span>
  );
}

export function ButtonLab() {
  const [variant, setVariant] = useState<Variant>("Primary");

  return (
    <section
      id="button-lab"
      aria-labelledby="button-lab-title"
      className="border-b border-hairline bg-surface-muted text-ink-secondary"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <SectionLabel index="03" className="text-ink-secondary/60">
          States Lab
        </SectionLabel>
        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle id="button-lab-title" className="text-ink-secondary">
            No implicit states.
          </SectionTitle>
          <p className="max-w-[480px] text-[16px] leading-[1.45] text-ink-secondary/70">
            Switch variants to audit how each of the seven required states
            renders. The matrix is frozen for review — every state is designed,
            tokenized, and testable.
          </p>
        </div>

        <Tabs
          value={variant}
          onValueChange={(v) => setVariant(v as Variant)}
          className="mt-12"
        >
          <TabsList className="h-auto grid-cols-2 gap-px border border-ink-secondary/15 bg-transparent p-0 sm:grid-cols-4">
            {buttonVariants.map((v) => (
              <TabsTrigger
                key={v}
                value={v}
                className="m-0 h-11 border border-ink-secondary/15 bg-transparent text-[14px] text-ink-secondary/70 data-[state=active]:bg-ink-secondary data-[state=active]:text-surface-muted hover:bg-ink-secondary/10"
              >
                {v}
              </TabsTrigger>
            ))}
          </TabsList>

          {buttonVariants.map((v) => (
            <TabsContent key={v} value={v} className="mt-8 focus-visible:outline-none">
              {v === variant && (
                <StatesMatrix variant={variant} />
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Sizes + icon buttons */}
        <div className="mt-12 grid gap-px border border-ink-secondary/15 lg:grid-cols-2">
          <div className="bg-surface-muted p-6">
            <h4 className="mb-5 text-[14px] uppercase tracking-[0.2em] text-ink-secondary/60">
              Sizes
            </h4>
            <div className="flex flex-wrap items-end gap-4">
              <button type="button" className="inline-flex h-8 items-center bg-ink-secondary px-3 text-[13px] text-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2">
                Small
              </button>
              <button type="button" className="inline-flex h-11 items-center bg-ink-secondary px-5 text-[14px] text-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2">
                Medium
              </button>
              <button type="button" className="inline-flex h-14 items-center bg-ink-secondary px-7 text-[16px] text-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2">
                Large
              </button>
              <button type="button" aria-label="Icon button" className="inline-flex h-11 w-11 items-center justify-center bg-ink-secondary text-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2">
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <p className="mt-4 text-[12px] text-ink-secondary/55">
              All sizes meet the 24×24 minimum target; Large meets the 44×44 mobile recommendation.
            </p>
          </div>

          <div className="bg-surface-muted p-6">
            <h4 className="mb-5 text-[14px] uppercase tracking-[0.2em] text-ink-secondary/60">
              With icon · error · loading
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="inline-flex h-11 items-center gap-2 bg-ink-secondary px-5 text-[14px] text-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2">
                Continue
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
              <button type="button" className="inline-flex h-11 items-center gap-2 bg-destructive px-5 text-[14px] text-ink-primary focus-visible:outline-2 focus-visible:outline-offset-2">
                <AlertTriangle className="h-4 w-4" aria-hidden />
                Retry
              </button>
              <button type="button" disabled className="inline-flex h-11 cursor-wait items-center gap-2 bg-ink-secondary px-5 text-[14px] text-surface-muted opacity-60">
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                Saving
              </button>
            </div>
            <p className="mt-4 text-[12px] text-ink-secondary/55">
              Loading buttons keep their label and add a spinner; they never collapse to an icon-only state.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatesMatrix({ variant }: { variant: Variant }) {
  return (
    <div className="grid grid-cols-1 gap-px border border-ink-secondary/15 sm:grid-cols-2 lg:grid-cols-4">
      {buttonStates.map((state) => (
        <div
          key={state}
          className="flex min-h-[120px] flex-col justify-between gap-4 bg-surface-muted p-5"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-secondary/55">
              {state}
            </span>
            <span className="h-1.5 w-1.5 bg-ink-tertiary" aria-hidden />
          </div>
          <div className="flex items-center justify-center py-3">
            <StateButton variant={variant} state={state} />
          </div>
          <p className="text-[11px] leading-[1.4] text-ink-secondary/50">
            {stateNote(state)}
          </p>
        </div>
      ))}
    </div>
  );
}

function stateNote(state: State): string {
  switch (state) {
    case "default":
      return "Resting state, no interaction.";
    case "hover":
      return "Pointer over target. Surface lifts.";
    case "focus-visible":
      return "Keyboard focus. 2px ring, 2px offset.";
    case "active":
      return "Pressed. 1px translate, surface fills.";
    case "disabled":
      return "Opacity 0.4, cursor not-allowed, no pointer events.";
    case "loading":
      return "Spinner + persistent label, cursor wait.";
    case "error":
      return "Destructive token, used for retry / confirm-delete.";
  }
}

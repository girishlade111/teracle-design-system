import { cn } from "@/lib/utils";

/* Section eyebrow label with index marker */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-ink-primary/60",
        className
      )}
    >
      {index && (
        <span className="inline-block border border-hairline px-1.5 py-0.5 text-[10px] text-ink-primary/80">
          {index}
        </span>
      )}
      <span>{children}</span>
      <span aria-hidden className="h-px flex-1 bg-hairline" />
    </div>
  );
}

/* Section headline at display scale */
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-wordmark text-[40px] leading-[1.02] sm:text-[48px] lg:text-[56px]",
        className
      )}
    >
      {children}
    </h2>
  );
}

/* Inline token chip */
export function TokenChip({ children }: { children: React.ReactNode }) {
  return (
    <code className="border border-hairline bg-surface-base px-1.5 py-0.5 font-mono text-[12px] text-ink-primary/80">
      {children}
    </code>
  );
}

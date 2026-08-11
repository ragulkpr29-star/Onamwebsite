export const STEP_ORDER = ["rules", "category", "team", "success"] as const;
export type StepId = (typeof STEP_ORDER)[number];

const LABELS: Record<StepId, string> = {
  rules: "Rules",
  category: "Category",
  team: "Team",
  success: "Done",
};

export function ProgressIndicator({ steps, current }: { steps: StepId[]; current: number }) {
  return (
    <ol className="flex items-center gap-2" aria-label="Registration progress">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span
            aria-current={index === current ? "step" : undefined}
            className={[
              "font-ui text-[9px] font-bold tracking-[0.18em] uppercase transition-colors sm:text-[10px]",
              index === current
                ? "text-[#e2b93b]"
                : index < current
                  ? "text-white/70"
                  : "text-white/30",
            ].join(" ")}
          >
            {LABELS[step]}
          </span>
          {index < steps.length - 1 ? (
            <span
              aria-hidden="true"
              className={[
                "h-px w-4 sm:w-6",
                index < current ? "bg-[#e2b93b]/70" : "bg-white/20",
              ].join(" ")}
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}

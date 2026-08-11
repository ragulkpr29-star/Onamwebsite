import { RULES } from "@/data/events";

export function RulesStep({
  accepted,
  onToggle,
  onBack,
  onContinue,
}: {
  accepted: boolean;
  onToggle: (value: boolean) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase">
        Step 2
      </p>
      <h1 className="font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
        Rules &amp; Regulations
      </h1>


      <ul className="mt-6 space-y-3">
        {RULES.map((rule) => (
          <li key={rule} className="flex gap-3 text-sm leading-relaxed text-white/85 md:text-base">
            <span aria-hidden="true" className="mt-1 text-[#e2b93b]">
              ✦
            </span>
            <span>{rule}</span>
          </li>
        ))}
      </ul>

      <label className="mt-7 flex cursor-pointer items-start gap-3 rounded-xl border border-white/20 bg-white/5 p-4 text-sm text-white/90 transition-colors hover:bg-white/10">
        <input
          type="checkbox"
          checked={accepted}
          onChange={(e) => onToggle(e.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 accent-[#e2b93b]"
        />
        <span>
          I confirm that I have read and agree to follow the above rules and regulations.
        </span>
      </label>

      <div className="mt-7 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10"
        >
          ← Back
        </button>
        <button
          type="button"
          disabled={!accepted}
          onClick={onContinue}
          className="font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
        >
          Continue →
        </button>
      </div>

    </div>
  );
}

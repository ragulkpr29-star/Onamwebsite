export function CategoryStep({
  categories,
  category,
  onSelect,
  onBack,
  onContinue,
}: {
  categories: string[];
  category: string | null;
  onSelect: (value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase">
        Step 3 · Tug of War
      </p>

      <h1 className="font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
        Select Category
      </h1>

      <div className="mt-7 grid max-w-md gap-3 sm:grid-cols-2">
        {categories.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={category === option}
            onClick={() => onSelect(option)}
            className={[
              "font-ui rounded-xl border py-6 text-sm font-bold tracking-[0.2em] uppercase transition-all",
              category === option
                ? "border-[#e2b93b] bg-[#e2b93b]/20 text-white ring-1 ring-[#e2b93b]/50"
                : "border-white/20 bg-white/5 text-white/80 hover:bg-white/10",
            ].join(" ")}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-7 flex items-center gap-3">
        <button
          type="button"
          onClick={onBack}
          className="font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10"
        >
          ←
        </button>
        <button
          type="button"
          disabled={!category}
          onClick={onContinue}
          className="font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

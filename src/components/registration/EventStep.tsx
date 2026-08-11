import { events } from "@/data/events";

export function EventStep({
  selectedEvent,
  counts,
  onSelect,
  onBack,
  onContinue,
}: {
  selectedEvent: string | null;
  counts: Record<string, number>;
  onSelect: (id: string) => void;
  onBack: () => void;
  onContinue: () => void;
}) {
  return (
    <div className="flex h-full flex-col justify-center">
      <p className="font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase">
        Step 1
      </p>

      <h1 className="font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
        Select Your Event
      </h1>

      <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
        {events.map((event) => {
          const full = (counts[event.id] ?? 0) >= event.maxTeams;
          const selected = selectedEvent === event.id;
          return (
            <button
              key={event.id}
              type="button"
              disabled={full}
              aria-pressed={selected}
              onClick={() => onSelect(event.id)}
              className={[
                "rounded-xl border p-3.5 text-left transition-all md:p-4",
                full
                  ? "cursor-not-allowed border-white/10 bg-white/[0.03] opacity-50"
                  : "hover:border-[#e2b93b]/60 hover:bg-white/10",
                selected
                  ? "border-[#e2b93b] bg-[#e2b93b]/15 ring-1 ring-[#e2b93b]/50"
                  : "border-white/20 bg-white/5",
              ].join(" ")}
            >
              <span className="font-display block text-base font-bold text-white md:text-lg">
                {event.name}
              </span>
              <span className="font-ui mt-1 block text-[10px] font-semibold tracking-[0.14em] text-white/60 uppercase">
                {full
                  ? "Event Full"
                  : `${event.solo ? "Solo" : `${event.maxMembers} Members`} · ${
                      event.maxTeams - (counts[event.id] ?? 0)
                    } slots left`}
              </span>
            </button>
          );
        })}
      </div>

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
          disabled={!selectedEvent}
          onClick={onContinue}
          className="font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-35"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

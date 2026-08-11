import type { OnamEvent } from "@/data/events";

type EventCardProps = {
  event: OnamEvent;
  selected: boolean;
  full?: boolean;
  onSelect: (id: string) => void;
};

export function EventCard({ event, selected, full = false, onSelect }: EventCardProps) {
  return (
    <button
      type="button"
      disabled={full}
      aria-pressed={selected}
      onClick={() => onSelect(event.id)}
      className={[
        "group relative w-full rounded-2xl border p-4 text-left transition-all md:p-5",
        full
          ? "cursor-not-allowed border-border bg-muted/60 opacity-60"
          : "hover:-translate-y-0.5 hover:shadow-lift",
        selected
          ? "border-accent bg-card shadow-lift ring-2 ring-accent/40"
          : "border-border bg-card/85 shadow-soft",
      ].join(" ")}
    >
      <span className="flex items-start justify-between gap-3">
        <span>
          <span className="font-display block text-lg font-bold text-primary md:text-xl">
            {event.name}
          </span>
          <span className="font-ui mt-1.5 block text-[10px] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            {event.solo ? "Solo" : `${event.maxMembers} Members`} · {event.maxTeams} Teams
          </span>
          {event.categories ? (
            <span className="font-ui mt-1 block text-[10px] tracking-[0.14em] text-accent uppercase">
              {event.categories.join(" · ")}
            </span>
          ) : null}
        </span>
        <span
          aria-hidden="true"
          className={[
            "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] transition-colors",
            selected
              ? "border-accent bg-accent text-accent-foreground"
              : "border-[#c9b98a] text-transparent",
          ].join(" ")}
        >
          ✓
        </span>
      </span>
      {full ? (
        <span className="font-ui mt-3 inline-block rounded-full bg-destructive/10 px-2.5 py-1 text-[9px] font-bold tracking-[0.16em] text-destructive uppercase">
          Event Full
        </span>
      ) : null}
    </button>
  );
}

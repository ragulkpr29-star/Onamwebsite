import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { events } from "@/data/events";
import { EventCard } from "@/components/EventCard";

export function EventSelector({ counts }: { counts: Record<string, number> }) {
  const [selected, setSelected] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id="register" className="scroll-mt-8 bg-background pt-16 pb-20 md:pt-24">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <div className="mb-8 text-center">
          <p className="font-ui text-[10px] font-bold tracking-[0.24em] text-accent uppercase">
            Available Events
          </p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Select Event
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              selected={selected === event.id}
              full={(counts[event.id] ?? 0) >= event.maxTeams}
              onSelect={setSelected}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            disabled={!selected}
            onClick={() =>
              navigate({ to: "/register", search: { event: selected ?? undefined } })
            }
            className="font-ui rounded-full bg-primary px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-primary-foreground uppercase shadow-lift transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
          >
            Continue to Registration →
          </button>
        </div>
      </div>
    </section>
  );
}

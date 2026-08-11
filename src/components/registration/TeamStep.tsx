import type { OnamEvent } from "@/data/events";
import {
  MemberForm,
  type MemberDraft,
} from "@/components/registration/MemberForm";

export function TeamStep({
  event,
  category,
  members,
  error,
  submitting,
  onChange,
  onBack,
  onSubmit,
}: {
  event: OnamEvent;
  category: string | null;
  members: MemberDraft[];
  error: string | null;
  submitting: boolean;
  onChange: (
    index: number,
    patch: Partial<MemberDraft>,
  ) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="w-full py-4 pb-10 sm:py-6 sm:pb-12">
      {/* Event name */}
      <p className="font-ui text-[10px] font-bold tracking-[0.24em] text-[#e2b93b] uppercase">
        {event.name}
        {category ? ` · ${category}` : ""}
      </p>

      {/* Title */}
      <h1 className="font-display mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
        Team Details
      </h1>

      {/* Member count */}
      <p className="font-ui mt-1.5 text-xs tracking-[0.12em] text-white/55 uppercase">
        {event.maxMembers} member
        {event.maxMembers > 1 ? "s" : ""} required
      </p>

      {/* ALL MEMBER FORMS */}
      <div className="mt-6 space-y-8">
        {members.map((member, index) => (
          <MemberForm
            key={index}
            index={index}
            member={member}
            onChange={onChange}
          />
        ))}
      </div>

      {/* Error */}
      {error ? (
        <p
          role="alert"
          className="mt-5 rounded-lg bg-red-500/15 px-3 py-2.5 text-sm text-red-200"
        >
          {error}
        </p>
      ) : null}

      {/* Buttons */}
      <div className="mt-7 flex items-center gap-3 pb-4">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="font-ui rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white/80 uppercase transition-colors hover:bg-white/10 disabled:opacity-40"
        >
          ←
        </button>

        <button
          type="button"
          onClick={onSubmit}
          disabled={submitting}
          className="font-ui rounded-full bg-[#e2b93b] px-8 py-3.5 text-xs font-bold tracking-[0.18em] text-[#1a1408] uppercase transition-all hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {submitting ? "Registering…" : "Submit"}
        </button>
      </div>
    </div>
  );
}
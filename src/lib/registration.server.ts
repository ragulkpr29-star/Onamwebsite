import { events, getEvent } from "@/data/events";
import { deriveMember, isValidRollNo, normalizeRollNo, isValidEmail, isValidPhone } from "@/lib/roll";
import {
  registrationInputSchema,
  type RegistrationInput,
  type RegistrationResult,
} from "@/lib/registration.schema";

const makeRegistrationCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `ONAM26-${code}`;
};

/** Server-side validation. Never trusts client-supplied department/year. */
export async function createRegistration(
  input: RegistrationInput,
): Promise<RegistrationResult> {
  const parsed = registrationInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "Please complete all fields correctly." };
  }
  const data = parsed.data;

  const event = getEvent(data.eventId);
  if (!event) return { ok: false, error: "Please select a valid event." };

  const category = event.categories ? (data.category ?? null) : null;
  if (event.categories && (!category || !event.categories.includes(category))) {
    return { ok: false, error: "Please select a category." };
  }

  if (data.members.length !== event.maxMembers) {
    return {
      ok: false,
      error: `${event.name} requires exactly ${event.maxMembers} member(s).`,
    };
  }

  const members = [];
  const seen = new Set<string>();
  for (let i = 0; i < data.members.length; i += 1) {
    const raw = data.members[i]!;
    const rollNo = normalizeRollNo(raw.rollNo);
    if (!isValidRollNo(rollNo)) {
      return { ok: false, error: `Member ${i + 1}: please enter a valid roll number.` };
    }
    if (seen.has(rollNo)) {
      return { ok: false, error: "This student is already included in this team." };
    }
    seen.add(rollNo);
    // Department and year are always recalculated server-side from the roll number.
    const { department, year } = deriveMember(rollNo);

    let email: string | null = null;
    let phone: string | null = null;
    if (i === 0) {
      email = (raw.email ?? "").trim();
      phone = (raw.phone ?? "").trim();
      if (!isValidEmail(email)) return { ok: false, error: "Please enter a valid email address." };
      if (!isValidPhone(phone)) {
        return { ok: false, error: "Please enter a valid 10-digit phone number." };
      }
    }

    members.push({
      member_index: i + 1,
      name: raw.name.trim(),
      roll_no: rollNo,
      department,
      year,
      email,
      phone,
    });
  }

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { count, error: countError } = await supabaseAdmin
    .from("registrations")
    .select("id", { count: "exact", head: true })
    .eq("event_id", event.id);

  if (countError) return { ok: false, error: "Registration is temporarily unavailable." };
  if ((count ?? 0) >= event.maxTeams) {
    return { ok: false, error: "This event is currently full." };
  }

  const { data: clash, error: clashError } = await supabaseAdmin
    .from("registration_members")
    .select("roll_no")
    .eq("event_id", event.id)
    .in(
      "roll_no",
      members.map((m) => m.roll_no),
    );

  if (clashError) return { ok: false, error: "Registration is temporarily unavailable." };
  if (clash && clash.length > 0) {
    return {
      ok: false,
      error: `${clash[0]!.roll_no} is already registered for ${event.name}.`,
    };
  }

  const registrationId = makeRegistrationCode();
  const { data: inserted, error: insertError } = await supabaseAdmin
    .from("registrations")
    .insert({
      registration_id: registrationId,
      event_id: event.id,
      event_name: event.name,
      category,
      rules_accepted: true,
    })
    .select("id")
    .single();

  if (insertError || !inserted) {
    return { ok: false, error: "Could not save your registration. Please try again." };
  }

  const { error: membersError } = await supabaseAdmin.from("registration_members").insert(
    members.map((m) => ({
      registration_ref: inserted.id,
      event_id: event.id,
      ...m,
    })),
  );

  if (membersError) {
    await supabaseAdmin.from("registrations").delete().eq("id", inserted.id);
    const duplicate = membersError.code === "23505";
    return {
      ok: false,
      error: duplicate
        ? "One of these students is already registered for this event."
        : "Could not save your registration. Please try again.",
    };
  }

  return { ok: true, registrationId };
}

export async function readEventCounts(): Promise<Record<string, number>> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const counts: Record<string, number> = {};
  for (const event of events) {
    const { count } = await supabaseAdmin
      .from("registrations")
      .select("id", { count: "exact", head: true })
      .eq("event_id", event.id);
    counts[event.id] = count ?? 0;
  }
  return counts;
}

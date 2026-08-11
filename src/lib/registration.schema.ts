import { z } from "zod";

export const memberInputSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(80, "Name is too long"),
  rollNo: z.string().trim().min(5).max(12),
  email: z.string().trim().max(120).optional().nullable(),
  phone: z.string().trim().max(15).optional().nullable(),
});

export const registrationInputSchema = z.object({
  eventId: z.string().trim().min(1),
  category: z.string().trim().max(20).nullable().optional(),
  rulesAccepted: z.literal(true),
  members: z.array(memberInputSchema).min(1).max(10),
});

export type RegistrationInput = z.infer<typeof registrationInputSchema>;

export type RegistrationResult =
  | { ok: true; registrationId: string }
  | { ok: false; error: string };

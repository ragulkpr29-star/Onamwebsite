import { createServerFn } from "@tanstack/react-start";
import { registrationInputSchema } from "@/lib/registration.schema";

export const submitRegistration = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => registrationInputSchema.parse(data))
  .handler(async ({ data }) => {
    const { createRegistration } = await import("@/lib/registration.server");
    return createRegistration(data);
  });

export const getEventCounts = createServerFn({ method: "GET" }).handler(async () => {
  const { readEventCounts } = await import("@/lib/registration.server");
  return readEventCounts();
});

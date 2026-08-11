
CREATE TABLE public.registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id TEXT NOT NULL UNIQUE,
  event_id TEXT NOT NULL,
  event_name TEXT NOT NULL,
  category TEXT,
  rules_accepted BOOLEAN NOT NULL DEFAULT false,
  registered_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.registration_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_ref UUID NOT NULL REFERENCES public.registrations(id) ON DELETE CASCADE,
  event_id TEXT NOT NULL,
  position INT NOT NULL,
  name TEXT NOT NULL,
  roll_no TEXT NOT NULL,
  department TEXT NOT NULL,
  year TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT registration_members_unique_per_event UNIQUE (event_id, roll_no)
);

CREATE INDEX idx_registrations_event ON public.registrations(event_id);
CREATE INDEX idx_members_registration ON public.registration_members(registration_ref);

GRANT ALL ON public.registrations TO service_role;
GRANT ALL ON public.registration_members TO service_role;

ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.registration_members ENABLE ROW LEVEL SECURITY;

CREATE POLICY "no direct client access to registrations"
  ON public.registrations FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);
CREATE POLICY "no direct client access to members"
  ON public.registration_members FOR ALL TO anon, authenticated USING (false) WITH CHECK (false);

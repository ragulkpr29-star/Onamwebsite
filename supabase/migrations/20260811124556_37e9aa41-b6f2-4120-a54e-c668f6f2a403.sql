ALTER TABLE public.registration_members RENAME COLUMN position TO member_index;
ALTER TABLE public.registration_members ADD COLUMN IF NOT EXISTS email text;
ALTER TABLE public.registration_members ADD COLUMN IF NOT EXISTS phone text;
-- Apply once in the PimpSEO Supabase project before enabling production traffic.
-- The existing table remains the source of truth; these fields make retries idempotent and auditable.
alter table public.rank_rent_leads add column if not exists submission_id text;
alter table public.rank_rent_leads add column if not exists consent_at timestamptz;
alter table public.rank_rent_leads add column if not exists vud_ping_accept boolean;
alter table public.rank_rent_leads add column if not exists vud_ping_recommande boolean;
alter table public.rank_rent_leads add column if not exists vud_ping_cpl numeric;
alter table public.rank_rent_leads add column if not exists vud_ping_ecpl numeric;
alter table public.rank_rent_leads add column if not exists vud_ping_buyers integer;
alter table public.rank_rent_leads add column if not exists vud_cpl numeric;
create unique index if not exists rank_rent_leads_submission_id_key on public.rank_rent_leads (submission_id) where submission_id is not null;

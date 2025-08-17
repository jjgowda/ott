# WebView Starter (SvelteKit + Supabase, No Widevine)

Minimal, fast WebView-ready frontend. Uses SvelteKit + Tailwind + Supabase.
Plays HLS via HTML5 video or native Android (ExoPlayer) bridge. **No DRM/Widevine.**

## Quick Start
1) Clone & install
```bash
npm i # or pnpm i / yarn
cp .env.example .env.local
# fill VITE_SUPABASE_URL & VITE_SUPABASE_ANON_KEY
npm run dev
```

2) Minimal Supabase SQL (public read)
```sql
create table if not exists movies (
  id bigint generated always as identity primary key,
  title text not null,
  poster text,
  hls_url text not null
);
alter table movies enable row level security;
create policy "public read movies" on movies for select using (true);
```

3) Deploy to Vercel
- New Project → Import your repo.
- Framework: **SvelteKit**.
- Add env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.
- Build command: `vite build`
- Output dir: `.svelte-kit/output/client` (Vercel auto-detects). If not, use adapter-auto; Vercel will handle it.

4) Android Native Bridge (optional)
See `android-sample/README-ANDROID.md` for a tiny WebView + ExoPlayer example (no DRM).

## Notes
- Bundles are tuned small (no manualChunks) for better WebView startup.
- WebView often lags Chrome; avoid heavy libs and inline eval.
- HLS recommended (.m3u8). For MP4, it still works.
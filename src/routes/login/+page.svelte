<script lang="ts">
  import { supabase } from '$lib/supabaseClient';
  let email = '';
  let msg: string | null = null;
  let loading = false;

  const sendMagicLink = async () => {
    loading = true; msg = null;
    const { error } = await supabase.auth.signInWithOtp({ email });
    loading = false;
    msg = error ? error.message : 'Check your email for the login link.';
  };
</script>

<div class="max-w-sm mx-auto space-y-4">
  <h2 class="text-xl font-semibold">Login</h2>
  <input class="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2" bind:value={email} placeholder="you@example.com" type="email" />
  <button on:click={sendMagicLink} class="w-full rounded-xl bg-white text-black py-2 disabled:opacity-50" disabled={loading}>
    {loading ? 'Sending…' : 'Send Magic Link'}
  </button>
  {#if msg}<p class="text-sm opacity-80">{msg}</p>{/if}
</div>
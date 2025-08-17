<script lang="ts">
  import { onMount } from 'svelte';
  import { supabase } from '$lib/supabaseClient';
  import { page } from '$app/stores';
  let id = '';
  let title = '';
  let poster = '';
  let hls_url = '';
  let error: string | null = null;

  $: id = $page.params.id;

  onMount(async () => {
    const { data, error: e } = await supabase
      .from('movies')
      .select('id,title,poster,hls_url')
      .eq('id', id)
      .maybeSingle();
    if (e || !data) { error = e?.message ?? 'Not found'; return; }
    ({ title, poster, hls_url } = data);
  });

  function playNative() {
    if (typeof window !== 'undefined' && (window as any).Android?.playHls) {
      (window as any).Android.playHls(hls_url, title, poster);
    } else {
      alert('Native bridge not available; falling back to HTML5 video.');
      const v = document.getElementById('html5') as HTMLVideoElement | null;
      v?.play();
    }
  }
</script>

{#if error}
  <p class="text-red-400">{error}</p>
{:else}
  <div class="space-y-4">
    <div class="rounded-2xl overflow-hidden border border-white/10">
      <video id="html5" class="w-full aspect-video" poster={poster} controls preload="metadata">
        <source src={hls_url} type="application/vnd.apple.mpegURL" />
      </video>
    </div>
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold truncate" title={title}>{title}</h2>
      <button on:click={playNative} class="rounded-xl bg-white text-black px-3 py-1.5">Play Native</button>
    </div>
  </div>
{/if}
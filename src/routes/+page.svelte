<script>
  const features = [
    { h: 'Fast', p: 'Tiny bundles, instant paint on WebView.'},
    { h: 'Offline-first', p: 'Cache-first fetches and safe fallbacks.'},
    { h: 'Native video', p: 'Hand off HLS to ExoPlayer via bridge.'}
  ];
</script>
<section class="space-y-6">
  <h2 class="text-2xl font-bold">Welcome</h2>
  <p class="opacity-80">WebView-optimized SvelteKit starter.</p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {#each features as f}
      <div class="rounded-2xl border border-white/10 p-4">
        <h3 class="font-semibold mb-1">{f.h}</h3>
        <p class="text-sm opacity-80">{f.p}</p>
      </div>
    {/each}
  </div>
</section>
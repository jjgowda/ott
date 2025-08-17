<script lang="ts">
  export let title = 'JKFLIX';
</script>
<header class="sticky top-0 z-20 backdrop-blur bg-black/50 border-b border-white/10">
  <div class="mx-auto max-w-screen-md px-4 py-3 flex items-center justify-between">
    <h1 class="text-lg font-semibold tracking-wide">{title}</h1>
    <nav class="text-sm flex gap-4">
      <a href="/movies" class="opacity-80 hover:opacity-100">Movies</a>
      <a href="/login" class="opacity-80 hover:opacity-100">Login</a>
    </nav>
  </div>
</header>
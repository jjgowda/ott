<script lang="ts">
  export let data: { movies: any[]; error: string | null };
</script>

{#if data.error}
  <p class="text-red-400">{data.error}</p>
{/if}

<div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
  {#each data.movies as m}
    <a href={`/player/${m.id}`} class="block rounded-2xl overflow-hidden border border-white/10">
      <img src={m.poster} alt={m.title} class="aspect-[2/3] w-full object-cover" loading="lazy" />
      <div class="p-2 text-sm flex items-center justify-between">
        <span class="truncate" title={m.title}>{m.title}</span>
      </div>
    </a>
  {/each}
</div>
<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
</script>

<Header />
<main class="mx-auto max-w-screen-md px-4 py-4">
  <slot />
</main>
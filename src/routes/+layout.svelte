<script>
  import Grid from "$lib/components/fun/Grid.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Navigation from "$lib/components/layout/Navigation.svelte";
  import "../app.css";
</script>

<Grid />

<Navigation />

<main class="text-gray-200 p-8 relative z-10 pt-32">
  <slot></slot>
</main>

<Footer />

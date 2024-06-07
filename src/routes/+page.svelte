<script>
  import HomeHeader from "$lib/components/home/HomeHeader.svelte";
  import HomeQuickAbout from "$lib/components/home/HomeQuickAbout.svelte";
  import HomeLatest from "$lib/components/home/HomeLatest.svelte";
  import HomeContent from "$lib/components/home/HomeContent.svelte";
  import HomeAbout from "$lib/components/home/HomeAbout.svelte";
</script>

<div class="max-w-4xl mx-auto px-4">
  <HomeHeader />
  <HomeQuickAbout />
  <HomeLatest />
  <HomeContent />
  <HomeAbout />
</div>

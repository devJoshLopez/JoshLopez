<script>
  import HomeHeader from "$lib/components/home/HomeHeader.svelte";
  import HomeQuickAbout from "$lib/components/home/HomeQuickAbout.svelte";
  import HomeLatest from "$lib/components/home/HomeLatest.svelte";
  import HomeContent from "$lib/components/home/HomeContent.svelte";
  import HomeAbout from "$lib/components/home/HomeAbout.svelte";

  let { data } = $props();

  const sortedPosts = $derived(
    data.posts
      .filter((/** @type {{ published: any; }} */ post) => post.published)
      // @ts-ignore
      .toSorted((a, b) => new Date(b.date) - new Date(a.date)),
  );

  const latestPost = $derived(sortedPosts[0]);
  const recentPosts = $derived(sortedPosts.slice(1, 5));
</script>

<div class="mx-auto max-w-4xl">
  <HomeHeader />
  <HomeQuickAbout />
  <HomeLatest {latestPost} />
  <HomeContent {recentPosts} />
  <HomeAbout />
</div>

<script>
  import HomeHeader from "$lib/components/home/HomeHeader.svelte";
  import HomeQuickAbout from "$lib/components/home/HomeQuickAbout.svelte";
  import HomeLatest from "$lib/components/home/HomeLatest.svelte";
  import HomeContent from "$lib/components/home/HomeContent.svelte";
  import HomeAbout from "$lib/components/home/HomeAbout.svelte";

  export let data;

  // Get the latest post that is published
  const publishedPosts = data.posts.filter(
    (/** @type {{ published: any; }} */ post) => post.published,
  );

  const sortedPosts = publishedPosts.sort(
    // @ts-ignore
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const latestPost = sortedPosts[0];
  // get the last 4 posts minus the latest post
  const recentPosts = sortedPosts.slice(1, 5);
</script>

<div class="mx-auto max-w-4xl">
  <HomeHeader />
  <HomeQuickAbout />
  <HomeLatest {latestPost} />
  <HomeContent {recentPosts} />
  <HomeAbout />
</div>

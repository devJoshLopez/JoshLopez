<script>
  import delorean from "$lib/images/delorean.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";

  export let recentPosts;
</script>

<section class="section-glass relative mt-32 rounded-md p-8 text-white">
  <h2 class="mb-4 text-3xl">
    "Roads? Where We're Going, We Don't Need Roads."
  </h2>
  <div class="more-content">
    {#each recentPosts as post}
      <h3 class="mt-4 text-2xl">{post.title}</h3>
      {#each post.categories as category}
        <span class="mr-2 rounded-md bg-gray-800 px-2 py-1 text-sm"
          >{category}</span
        >
      {/each}
      <p class="mt-4">{post.description}</p>
      <div class="mt-4">
        <a href="/writings/{post.slug}" class="btn btn-primary">Read More</a>
      </div>
    {/each}
  </div>

  <Floaty className="delorean-floaty">
    <img src={delorean} alt="Delorean from Back to the Future" />
  </Floaty>
</section>

<style>
  :global(.delorean-floaty) {
    position: absolute;
    z-index: -1;
    top: -25px;
    right: -50px;
    width: 120px;
  }
</style>

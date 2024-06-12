<script>
  import delorean from "$lib/images/delorean.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";

  export let recentPosts;
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
  <h2 class="text-3xl mb-4">
    "Roads? Where We're Going, We Don't Need Roads."
  </h2>
  <div class="more-content">
    {#each recentPosts as post}
      <h3 class="text-2xl mt-4">{post.title}</h3>
      <p class="text-sm">{post.date}</p>
      {#each post.categories as category}
        <span class="text-sm bg-gray-800 px-2 py-1 rounded-md mr-2">{category}</span>
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

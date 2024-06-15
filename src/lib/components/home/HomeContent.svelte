<script>
  import { showModal } from "$lib/stores/modalStore";
  import delorean from "$lib/images/delorean.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import RetroButton from "../fun/RetroButton.svelte";
  import VideoPlayer from "../fun/VideoPlayer.svelte";

  export let recentPosts;

  const openModal = () => {
    // @ts-ignore
    showModal(VideoPlayer);
  };
</script>

<section class="section-glass relative mt-32 rounded-md text-white">
  <div class="relative overflow-hidden rounded-md p-8">
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
  </div>

  <Floaty className="delorean-floaty">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src={delorean}
      alt="Delorean from Back to the Future"
      on:click={openModal}
    />
  </Floaty>
</section>

<style>
  :global(.delorean-floaty) {
    position: absolute;
    z-index: 0;
    top: -42px;
    right: -50px;
    width: 120px;
  }
</style>

<script>
  import { showModal } from "$lib/stores/modalStore";
  import delorean from "$lib/images/delorean.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import RetroButton from "../fun/RetroButton.svelte";
  import VideoPlayer from "../fun/VideoPlayer.svelte";

  export let recentPosts;

  const openModal = () => {
    // @ts-ignore
    showModal(VideoPlayer, {
      urls: [
        "https://i.giphy.com/AAB8uJshCNsuk.webp",
        "https://i.giphy.com/WmKrOMrTFFhPW.webp",
        "https://i.giphy.com/xsF1FSDbjguis.webp",
      ],
    });
  };
</script>

<section class="section-glass relative mt-32 rounded-md text-white">
  <div class="relative overflow-hidden rounded-md p-8">
    <h2 class="mb-4 text-3xl">
      "Roads? Where We're Going, We Don't Need Roads."
    </h2>
    <div class="more-content flex flex-row gap-8 max-md:flex-col">
      {#each recentPosts as post}
        <div
          class="w-1/2 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:w-full max-md:border-none max-md:bg-none max-md:p-0 lg:grid-cols-4 lg:gap-0 lg:py-12"
        >
          {#if post.image}
            <div class="relative h-64 overflow-hidden rounded-md">
              {#if post.categories}
                <div
                  class="absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2"
                >
                  {#each post.categories as category}
                    <span
                      class="whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black"
                    >
                      {category}
                    </span>
                  {/each}
                </div>
              {/if}
              <img
                src={post.image}
                alt={post.title}
                class="h-full w-full object-cover object-top shadow-2xl"
              />
            </div>
          {/if}
          <h3 class="mt-4 text-2xl">{post.title}</h3>

          <p class="mt-4">{post.description}</p>
          <div class="mt-4">
            <RetroButton
              url="/writings/{post.slug}"
              label="Read More"
              size="200px"
            />
          </div>
        </div>
      {/each}
    </div>
    <div class="mt-14 flex items-center justify-center gap-4">
      <RetroButton url="/writings" label="View All Posts" size="250px" />
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

  h3 {
    font-family: "Teenage Dreams Bold", sans-serif;
    text-transform: capitalize;
    line-height: 1.2;
  }
</style>

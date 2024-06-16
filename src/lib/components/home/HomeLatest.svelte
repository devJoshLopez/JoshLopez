<script>
  import RetroButton from "../fun/RetroButton.svelte";
  import Floaty from "../fun/Floaty.svelte";
  import johnny5 from "$lib/images/johnny_5_short_circuit.png";
  import { showModal } from "$lib/stores/modalStore";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";

  export let latestPost;

  const openModal = () => {
    console.log("Open modal button clicked");
    // @ts-ignore
    showModal(VideoPlayer, {
      urls: [
        "https://i.giphy.com/DwrnYsZCXspu8.webp",
        "https://i.giphy.com/o2ITDLRkP2oGk.webp",
        "https://i.giphy.com/27P3eknARh4c.webp",
      ],
    });
  };
</script>

<section class="section-glass relative mt-32 rounded-md p-8 text-white">
  <h2 class="mb-4 text-3xl">"Number 5 is Alive!"</h2>

  <div
    class="grid grid-cols-1 items-center gap-0 gap-y-6 rounded-xl border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0 lg:grid-cols-4 lg:gap-0 lg:py-12"
  >
    <div class="col-span-2">
      <h3 class="text-4xl max-md:text-xl">
        {latestPost.title}
      </h3>
      <p class="mt-4">{latestPost.description}</p>

      <div class="mt-4">
        <RetroButton
          url="/writings/{latestPost.slug}"
          label="Read More"
          size="200px"
        />
      </div>
    </div>

    {#if latestPost.image}
      <div
        class="relative order-first h-64 overflow-hidden rounded-md lg:col-span-2 lg:translate-x-[-15%]"
      >
        {#if latestPost.categories}
          <div class="absolute left-2 top-2 z-10">
            {#each latestPost.categories as category}
              <span class="mr-2 rounded-md bg-gray-800 px-2 py-1 text-sm">
                {category}
              </span>
            {/each}
          </div>
        {/if}
        <img
          src={latestPost.image}
          alt={latestPost.title}
          class="h-full w-full object-cover object-top shadow-2xl"
        />
      </div>
    {/if}

    <!-- {#if latestPost.image}
      <div
        class="relative order-first mx-auto w-full max-w-full overflow-hidden rounded-xl opacity-90 shadow-2xl lg:-order-1 lg:col-span-2 lg:translate-x-[-15%] lg:pt-0"
      >
        {#if latestPost.categories}
          <div class="mt-4 flex flex-wrap gap-2">
            {#each latestPost.categories as category}
              <span class="rounded-md bg-gray-800 px-2 py-1 text-xs"
                >{category}</span
              >
            {/each}
          </div>
        {/if}
        <img
          src={latestPost.image}
          alt={latestPost.title}
          class="absolute inset-0 h-full max-w-full object-cover"
        />
      </div>
    {/if} -->
  </div>

  <Floaty className="johnny5-floaty">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img src={johnny5} alt="Johnny 5 from Short Circuit" on:click={openModal} />
  </Floaty>
</section>

<style>
  :global(.johnny5-floaty) {
    position: absolute;
    z-index: 0;
    top: -25px;
    left: -50px;
    width: 84px;
  }

  h3 {
    font-family: "Teenage Dreams Bold", sans-serif;
    text-transform: capitalize;
    line-height: 1.2;
  }
</style>

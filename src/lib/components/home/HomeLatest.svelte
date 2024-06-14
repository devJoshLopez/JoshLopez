<script>
  import RetroButton from "../fun/RetroButton.svelte";
  import Floaty from "../fun/Floaty.svelte";
  import johnny5 from "$lib/images/johnny_5_short_circuit.png";

  export let latestPost;
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
  <h2 class="text-3xl mb-4">"Number 5 is Alive!"</h2>

  <div
    class="latest-content card flex flex-col-reverse md:flex-row justify-between gap-4"
  >
    <div class="w-full md:w-2/3">
      <h3 class="text-4xl">
        {latestPost.title}
      </h3>
      {#each latestPost.categories as category}
        <span class="text-xs bg-gray-800 px-2 py-1 rounded-md mr-2"
          >{category}</span
        >
      {/each}
      <p class="mt-4">{latestPost.description}</p>

      <div class="mt-4">
        <!-- <a
          href="/writings/{latestPost.slug}"
          class="keyboard-button mt-4 inline-block"
        >
          Read More
        </a> -->
        <RetroButton
          url="/writings"
          label="Read More"
          size="lg"
         />
      </div>
    </div>

    {#if latestPost.image}
      <div class="w-full md:w-1/3">
        <img
          src={latestPost.image}
          alt={latestPost.title}
          class="rounded-md mt-4"
        />
      </div>
    {/if}
  </div>

  <Floaty className="johnny5-floaty">
    <img src={johnny5} alt="Johnny 5 from Short Circuit" />
  </Floaty>
</section>

<style>
  :global(.johnny5-floaty) {
    position: absolute;
    z-index: -1;
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

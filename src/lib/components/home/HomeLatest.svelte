<script>
  import Floaty from "../fun/Floaty.svelte";
  import johnny5 from "$lib/images/johnny_5_short_circuit.png";

  export let latestPost;
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
  <h2 class="text-3xl mb-4">"Number 5 is Alive!"</h2>
  <div class="latest-content flex flex-col md:flex-row justify-between gap-4">
    <div class="w-full md:w-2/3">
      <h3 class="text-2xl mt-4">{latestPost.title}</h3>
      {#each latestPost.categories as category}
        <span class="text-sm bg-gray-800 px-2 py-1 rounded-md mr-2"
          >{category}</span
        >
      {/each}
      <p class="mt-4">{latestPost.description}</p>
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
  <div class="mt-4">
    <a href="/writings/{latestPost.slug}" class="btn btn-primary">Read More</a>
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
</style>

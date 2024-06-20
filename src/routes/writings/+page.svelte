<script>
  import RetroButton from "$lib/components/fun/RetroButton.svelte";
  export let data;

  // Function to generate random grid span classes
  function randomSpan() {
    const spans = [
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-2",
      "col-span-2 row-span-2",
    ];
    return spans[Math.floor(Math.random() * spans.length)];
  }
</script>

<div class="mx-auto max-w-4xl px-4">
  <section
    class="section-glass relative mb-32 mt-3 grid grid-flow-row-dense auto-rows-auto grid-cols-1 gap-4 rounded-md p-8 text-white sm:grid-cols-2 lg:grid-cols-3"
  >
    <h1 class="col-span-full text-4xl font-bold">Writings</h1>
    {#each data.posts as post}
      <div class="relative rounded-md bg-gray-800 p-4 {randomSpan()}">
        {#if post.image}
          <div class="relative mb-6 overflow-hidden rounded-md">
            {#if post.categories}
              <div
                class="absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2"
              >
                {#each post.categories as category}
                  <span
                    class="mr-2 whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black"
                  >
                    {category}
                  </span>
                {/each}
              </div>
            {/if}
            <img
              src={post.image.startsWith(".")
                ? post.image.substring(1)
                : post.image}
              alt={post.title}
              class="h-48 w-full rounded-md object-cover"
            />
          </div>
        {/if}

        <h2 class="mt-4 text-xl font-bold">{post.title}</h2>
        <p class="mt-2">
          {post.description}
        </p>
        <!-- show the button on the bottom of the post when the description is small -->
        <div class="mt-4">
          <RetroButton url={`/writings/${post.slug}`} label="Read more" />
        </div>
      </div>
    {/each}
  </section>
</div>

<style>
</style>

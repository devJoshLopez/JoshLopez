<script>
  import RetroButton from "$lib/components/fun/RetroButton.svelte";
  import vhsOverlay from "$lib/images/vhs-overlay.png";
  export let data;

  /**
   * @param {any[]} posts
   */
  function getLayout(posts) {
    const count = posts.length;
    if (count === 1) return ["md:col-span-3"];
    if (count === 2) return ["md:col-span-2", "md:col-span-1"];
    if (count === 3) return ["md:col-span-2", "md:col-span-1", "md:col-span-3"];
    if (count === 4)
      return [
        "md:col-span-2",
        "md:col-span-1",
        "md:col-span-1",
        "md:col-span-2",
      ];
    const basePattern = [
      "md:col-span-2",
      "md:col-span-1",
      "md:col-span-1",
      "md:col-span-2",
      "md:col-span-1",
    ];
    return posts.map((_, index) => basePattern[index % basePattern.length]);
  }

  $: layout = getLayout(data.posts);
</script>

<div class="mx-auto max-w-4xl">
  <section
    class="section-glass relative mb-32 mt-3 grid grid-cols-1 gap-4 rounded-md p-8 text-white max-md:gap-16 md:grid-cols-3"
  >
    <h1 class="col-span-full mb-6 text-4xl font-bold">Writings</h1>
    {#each data.posts as post, index}
      <div
        class="relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0 {layout[
          index
        ]}"
      >
        {#if post.image}
          <div
            class="relative mb-4 flex-shrink-0 overflow-hidden rounded-md"
            style="padding-top: 56.25%;"
          >
            {#if post.categories}
              <div
                class="absolute left-2 top-2 z-10 flex flex-wrap items-center gap-2"
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
              src={post.image.startsWith(".")
                ? post.image.substring(1)
                : post.image}
              alt={post.title}
              class="absolute left-0 top-0 h-full w-full rounded-md object-cover"
            />
            <div
              class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md opacity-30 mix-blend-overlay"
              style="background-image: url({vhsOverlay}); background-size: cover;"
            ></div>
          </div>
        {/if}

        <h2 class="post-title mb-2 text-2xl font-bold">{post.title}</h2>
        <p class="mb-4 flex-grow">
          {post.description}
        </p>
        <div class="mt-auto">
          <RetroButton url={`/writings/${post.slug}`} label="Read more" />
        </div>
      </div>
    {/each}
  </section>
</div>

<style>
  .post-title {
    font-family: "Teenage Dreams Bold", sans-serif;
    line-height: 1.2;
    text-transform: capitalize;
    filter: drop-shadow(2px 3px 0 #000000);
  }
</style>

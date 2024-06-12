<script>
  export let data;
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="max-w-4xl mx-auto px-4">
  <hgroup class="mb-4">
    <h1 class="text-4xl">
      {data.meta.title}
    </h1>
    <p class="text-gray-600">
      Published at {data.meta.date}
    </p>
  </hgroup>

  <div class="categories mb-4">
    {#each data.meta.categories as category}
      <span class="category">
        &num;{category}
      </span>
    {/each}
  </div>

  <div class="prose">
    <svelte:component this={data.content} />
  </div>
</article>

<pre>
    {JSON.stringify(data, null, 2)}
</pre>

<style>
  .categories {
    display: flex;
    gap: 0.5rem;
  }

  .category {
    background-color: rgba(17, 24, 39, 0.42);
    color: #8f8f8f;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
  }

  :global(.prose h1) {
    text-transform: uppercase;
  }
</style>

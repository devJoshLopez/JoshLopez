<script>
  import { onMount } from "svelte";
  import Giscus from "@giscus/svelte";
  import RetroButton from "$lib/components/fun/RetroButton.svelte";

  export let data;

  /**
   * @type {string}
   */
  let pathname;

  onMount(() => {
    pathname = window.location.pathname;
  });
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="mx-auto max-w-4xl">
  <section class="section-glass relative mb-20 mt-3 rounded-md p-8 text-white">
    <article>
      {#if data.meta.image}
        <div class="relative mb-6 h-80 overflow-hidden rounded-md">
          {#if data.meta.categories}
            <div
              class="absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2"
            >
              {#each data.meta.categories as category}
                <span
                  class="mr-2 whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black"
                >
                  {category}
                </span>
              {/each}
            </div>
          {/if}
          <img
            src={data.meta.image.startsWith(".")
              ? data.meta.image.substring(1)
              : data.meta.image}
            alt={data.meta.title}
            class="h-full w-full object-cover object-center shadow-2xl"
          />
        </div>
      {/if}

      <hgroup class="mb-4">
        <h1 class="post-title text-5xl">
          {data.meta.title}
        </h1>
        <p class="text-gray-600">
          Published on {data.meta.date}
        </p>
      </hgroup>

      <div class="prose">
        <svelte:component this={data.content} />
      </div>
    </article>
  </section>

  <div class="mb-20 flex w-full justify-center">
    <RetroButton url="/writings" label="Back to Writings" size="252px" />
  </div>
</div>

{#if pathname}
  <div class="mx-auto max-w-4xl">
    <section
      class="section-glass relative mb-32 mt-3 rounded-md p-8 text-white max-md:gap-16 md:grid-cols-3"
    >
      <h1 class="col-span-full mb-6 text-4xl font-bold">Comments</h1>
      <div>
        <Giscus
          id="comments"
          term="pathname"
          repo="devJoshLopez/JoshLopez"
          repoId="MDEwOlJlcG9zaXRvcnkxNjg4OTA0MjQ="
          category="Comments"
          categoryId="DIC_kwDOChEQOM4CgU6h"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      </div>
    </section>
  </div>
{/if}

<style>
  .post-title {
    font-family: "Teenage Dreams Bold", sans-serif;
    line-height: 1.2;
    text-transform: capitalize;
  }
  :global(.prose h1),
  :global(.prose h2),
  :global(.prose h3) {
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 0.3rem;
  }

  :global(.prose h1) {
    font-size: 3.75rem;
    line-height: 1;
  }
  :global(.prose h2) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  :global(.prose h3) {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
  :global(.prose h4) {
    font-size: 1.25rem;
  }
  :global(.prose h5) {
    font-size: 1rem;
  }

  :global(.prose p) {
    margin-bottom: 1.5rem;
  }

  :global(.prose a) {
    color: #fbbf24;
    text-decoration: underline;
  }

  :global(.prose a:hover) {
    text-decoration: none;
  }

  :global(.prose img) {
    max-width: 100%;
    height: auto;
  }

  :global(.prose blockquote) {
    border-left: 4px solid #fbbf24;
    padding-left: 1rem;
    margin-left: 0;
  }

  :global(.prose pre) {
    background-color: #1a202c;
    color: #fbbf24;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
  }

  :global(.prose code) {
    background-color: #1a202c;
    color: #fbbf24;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
  }

  :global(.prose ul) {
    list-style-type: disc;
    margin-left: 1.5rem;
  }

  :global(.prose ol) {
    list-style-type: decimal;
    margin-left: 1.5rem;
  }

  :global(.prose li) {
    margin-bottom: 0.5rem;
  }

  :global(.prose em) {
    font-style: italic;
    color: #fbbf24;
    text-shadow: 0 0 0.1rem #000000;
  }
</style>

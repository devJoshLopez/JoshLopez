<script>
  import { onMount } from "svelte";
  import Giscus from "@giscus/svelte";

  /**
   * @type {string}
   */
  let pathname;

  onMount(() => {
    pathname = window.location.pathname;
  });
</script>

<div class="mx-auto max-w-4xl">
  <section
    class="section-glass relative mb-32 mt-3 rounded-md p-8 text-white max-md:gap-16 md:grid-cols-3"
  >
    <h1 class="mb-6 text-4xl font-bold">Connect</h1>
    <p class="mb-6 text-sm italic">
      All Questions and Answers are public. If you would like to talk in private
      please email me at devJoshLopez@gmail.com but be warned that I don't check
      my email often.
    </p>
    <div>
      {#if pathname}
        <Giscus
          id="connect"
          term="pathname"
          repo="devJoshLopez/JoshLopez"
          repoId="MDEwOlJlcG9zaXRvcnkxNjg4OTA0MjQ="
          category="Connect"
          categoryId="DIC_kwDOChEQOM4CgU7q"
          mapping="pathname"
          strict="0"
          reactionsEnabled="0"
          emitMetadata="0"
          inputPosition="top"
          theme="dark"
          lang="en"
          loading="lazy"
        />
      {/if}
    </div>
  </section>
</div>

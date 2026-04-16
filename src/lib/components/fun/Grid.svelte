<script>
  import { onMount } from "svelte";
  import bgNoise from "$lib/images/bgnoise.webp";

  const ITEM_SIZE = 100;

  let cols = $state(0);
  let rows = $state(0);
  let hoveredIndex = $state(/** @type {number | null} */ (null));

  const total = $derived(cols * rows);

  function computeSize() {
    cols = Math.ceil(window.innerWidth / ITEM_SIZE);
    rows = Math.ceil(window.innerHeight / ITEM_SIZE);
  }

  /** @param {MouseEvent} event */
  function handleMouseMove(event) {
    const col = Math.floor(event.clientX / ITEM_SIZE);
    const row = Math.floor(event.clientY / ITEM_SIZE);
    const index = row * cols + col;
    if (index !== hoveredIndex) hoveredIndex = index;
  }

  onMount(() => {
    computeSize();

    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(computeSize, 150);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });
</script>

<div
  class="grid-container pointer-events-none fixed inset-0 z-0"
  style="background-image: url({bgNoise}); grid-template-columns: repeat({cols}, {ITEM_SIZE}px); grid-template-rows: repeat({rows}, {ITEM_SIZE}px);"
>
  {#each Array(total), i (i)}
    <div class="grid-item" class:highlight={i === hoveredIndex}></div>
  {/each}
</div>

<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import bgNoise from "$lib/images/bgnoise.webp";

  let gridItems = [];
  let cols, rows;
  let lastIndex = null;

  // Function to create grid items dynamically
  function createGrid() {
    const container = document.querySelector(".grid-container");
    const width = window.innerWidth;
    const height = window.innerHeight;
    const itemSize = 100;
    cols = Math.ceil(width / itemSize);
    rows = Math.ceil(height / itemSize);
    const numItems = cols * rows;

    container.style.gridTemplateColumns = `repeat(${cols}, ${itemSize}px)`;
    container.style.gridTemplateRows = `repeat(${rows}, ${itemSize}px)`;

    for (let i = 0; i < numItems; i++) {
      const div = document.createElement("div");
      div.classList.add("grid-item");
      container.appendChild(div);
      gridItems.push(div);
    }
  }

  // Function to highlight the grid item under the mouse
  function highlightGridItem(event) {
    const x = event.clientX;
    const y = event.clientY;
    const col = Math.floor(x / 100);
    const row = Math.floor(y / 100);
    const index = row * cols + col;

    if (index !== lastIndex) {
      if (lastIndex !== null && gridItems[lastIndex]) {
        gridItems[lastIndex].classList.remove("highlight");
      }
      if (gridItems[index]) {
        gridItems[index].classList.add("highlight");
      }
      lastIndex = index;
    }
  }

  // Run the code on the client side only
  onMount(() => {
    createGrid();

    window.onresize = () => {
      document.querySelector(".grid-container").innerHTML = "";
      gridItems = [];
      lastIndex = null; // Reset lastIndex to prevent accessing an old index
      createGrid();
    };

    window.addEventListener("mousemove", highlightGridItem);
  });
</script>

<!-- Grid container for background effect -->
<div
  class="grid-container pointer-events-none fixed inset-0 z-0"
  style="background-image: url({bgNoise})"
></div>

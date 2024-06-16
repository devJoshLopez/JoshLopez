<script>
  import joshImage from "$lib/images/josh-lopez.webp";
  import hackersFloppy from "$lib/images/hackers-floppy.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import { showModal } from "$lib/stores/modalStore";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";

  const openModal = () => {
    console.log("Open modal button clicked");
    // @ts-ignore
    showModal(VideoPlayer, {
      urls: [
        "https://i.giphy.com/Q2W4hziDOyzu0.webp",
        "https://i.giphy.com/FnGJfc18tDDHy.webp",
        "https://i.giphy.com/B1VDck3WaK6GFgXxW8.webp",
      ],
    });
  };
</script>

<section
  class="section-glass relative mt-3 flex items-center justify-between rounded-md p-8 text-white max-sm:flex-col-reverse max-sm:items-start"
>
  <div class="max-w-xl max-sm:w-full">
    <h1 class="text-6xl">Hack The Planet</h1>
    <p class="mb-4 text-lg font-bold">
      Josh Lopez: Code Samurai, Support Sage, Unapologetic Geek.
    </p>
    <p>
      Crafting digital delights, cracking human codes, and preserving the 80s
      spirit. Join me in forging a future where tech remains refreshingly human.
    </p>
  </div>
  <div class="relative h-48 w-48 max-sm:mb-6 max-sm:self-center">
    <svg width="100%" height="100%" viewBox="0 0 200 200" class="circle-josh">
      <defs>
        <clipPath id="circleClip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <image
        href={joshImage}
        width="200"
        height="200"
        clip-path="url(#circleClip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <circle cx="100" cy="100" r="100" fill="none" />
    </svg>
    <!-- SVG Shapes -->
    <Floaty className="circle-floaty">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" />
      </svg>
    </Floaty>

    <Floaty className="octagon-floaty">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          transform="rotate(45 50 50)"
        />
      </svg>
    </Floaty>

    <Floaty className="triangle-floaty">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <polygon points="50,0 100,100 0,100" />
      </svg>
    </Floaty>

    <Floaty className="squigly-floaty">
      <svg width="40" height="40" viewBox="0 0 100 100">
        <polyline
          points="0,40 20,60 40,40 60,60 80,40 100,60"
          stroke-width="10"
          fill="none"
          stroke="currentColor"
        />
      </svg>
    </Floaty>
  </div>

  <div class="absolute -bottom-32 -left-10 -z-10 h-48 w-48 -rotate-12">
    <Floaty className="floppy-disk">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <img src={hackersFloppy} alt="Hackers floppy disk" on:click={openModal} />
    </Floaty>
  </div>
</section>

<style>
  .circle-josh {
    position: relative;
    z-index: 2;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  :global(.circle-floaty) {
    top: -10px;
    left: -10px;
    fill: #ff00ff;
    transform: rotate(20deg);
    z-index: 0;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  :global(.octagon-floaty) {
    bottom: -10px;
    right: -10px;
    fill: #00ffff;
    transform: rotate(-20deg);
    z-index: 2;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  :global(.triangle-floaty) {
    bottom: 20px;
    left: -10px;
    fill: #ffff00;
    transform: rotate(10deg);
    z-index: 3;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  :global(.squigly-floaty) {
    top: 40px;
    right: -10px;
    fill: #00ff00;
    transform: rotate(-10deg);
    z-index: 4;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }

  :global(.floppy-disk) {
    position: absolute;
    z-index: 0;
    width: 84px;
  }
</style>

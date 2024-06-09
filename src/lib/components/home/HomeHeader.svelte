<script>
  import { base } from "$app/paths";
  import imageUrl from "$lib/images/josh-lopez.webp";
</script>

<section
  class="flex items-center justify-between bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8"
>
  <div class="max-w-lg">
    <h1 class="text-4xl">Hack The Planet</h1>
    <p class="text-lg">
      Josh Lopez: Code Samurai, Support Sage, Unapologetic Geek.
    </p>
    <p>
      Crafting web wonders, solving human puzzles, and keeping the radical vibes alive. Join me in forging a future where tech remains refreshingly human.
    </p>
  </div>
  <div class="relative w-48 h-48">
    <svg width="100%" height="100%" viewBox="0 0 200 200" class="shape shape0">
      <defs>
        <clipPath id="circleClip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <image
        href={imageUrl}
        width="200"
        height="200"
        clip-path="url(#circleClip)"
        preserveAspectRatio="xMidYMid slice"
      />
      <circle cx="100" cy="100" r="100" fill="none" />
    </svg>
    <!-- SVG Shapes -->
    <svg class="shape shape1" width="40" height="40" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" />
    </svg>
    <svg class="shape shape2" width="40" height="40" viewBox="0 0 100 100">
      <rect x="0" y="0" width="100" height="100" transform="rotate(45 50 50)" />
    </svg>
    <svg class="shape shape3" width="40" height="40" viewBox="0 0 100 100">
      <polygon points="50,0 100,100 0,100" />
    </svg>
    <svg class="shape shape4" width="40" height="40" viewBox="0 0 100 100">
      <polyline
        points="0,40 20,60 40,40 60,60 80,40 100,60"
        stroke-width="10"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  </div>
</section>

<style>
  .shape {
    position: absolute;
  }
  .shape0 {
    z-index: 1;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  .shape1 {
    top: -10px;
    left: -10px;
    fill: #ff00ff;
    transform: rotate(20deg);
    z-index: 0;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  .shape2 {
    bottom: -10px;
    right: -10px;
    fill: #00ffff;
    transform: rotate(-20deg);
    z-index: 2;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  .shape3 {
    bottom: 20px;
    left: -10px;
    fill: #ffff00;
    transform: rotate(10deg);
    z-index: 3;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
  .shape4 {
    top: 40px;
    right: -10px;
    fill: #00ff00;
    transform: rotate(-10deg);
    z-index: 4;
    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */
  }
</style>

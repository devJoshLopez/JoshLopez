<script>
  import { onMount } from "svelte";
  import imageUrl from "$lib/images/josh-lopez.webp";

  /**
   * @param {number} min
   * @param {number} max
   */
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * @param {number} shape
   */
  function createKeyframes(shape) {
    const randomDuration = getRandom(8, 15); // Slower animation
    const initialRotation = getRandom(-10, 10);
    const keyframes = `
      @keyframes float${shape} {
        0%, 100% {
          transform: translate(0, 0) rotate(${initialRotation}deg);
        }
        25% {
          transform: translate(${getRandom(-10, 10)}px, ${getRandom(-10, 10)}px) rotate(${getRandom(-10, 10)}deg);
        }
        50% {
          transform: translate(${getRandom(-10, 10)}px, ${getRandom(-10, 10)}px) rotate(${getRandom(-10, 10)}deg);
        }
        75% {
          transform: translate(${getRandom(-10, 10)}px, ${getRandom(-10, 10)}px) rotate(${getRandom(-10, 10)}deg);
        }
      }
    `;
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    return randomDuration;
  }

  function applyRandomAnimation() {
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape, index) => {
      if (index !== 0) {
        const duration = createKeyframes(index);
        // @ts-ignore
        shape.style.animation = `float${index} ${duration}s ease-in-out infinite`;
      }
    });
  }

  function applyCursorAvoidance() {
    const shapes = document.querySelectorAll(".shape");
    const bufferDistance = 160; // Adjust this value as needed
    let isAnimating = false;
    let offsets = Array.from({ length: shapes.length }, () => ({ x: 0, y: 0 }));

    /**
     * @param {{ clientX: any; clientY: any; }} event
     */
    function handleMouseMove(event) {
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(() => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          shapes.forEach((shape, index) => {
            if (index !== 0) {
              const rect = shape.getBoundingClientRect();
              const shapeX = rect.left + rect.width / 2;
              const shapeY = rect.top + rect.height / 2;
              const distance = Math.hypot(shapeX - mouseX, shapeY - mouseY);

              if (distance < bufferDistance) {
                const angle = Math.atan2(shapeY - mouseY, shapeX - mouseX);
                const maxOffset = 30;
                const offsetFactor = 1 - distance / bufferDistance;
                const offsetX = Math.cos(angle) * maxOffset * offsetFactor;
                const offsetY = Math.sin(angle) * maxOffset * offsetFactor;

                const easing = 0.1;
                offsets[index].x += (offsetX - offsets[index].x) * easing;
                offsets[index].y += (offsetY - offsets[index].y) * easing;

                const maxRotation = 10;
                const rotationFactor = 1 - distance / bufferDistance;
                const rotation = getRandom(-maxRotation, maxRotation) * rotationFactor;

                // @ts-ignore
                shape.style.transition = "transform 0.5s ease-out";
                // @ts-ignore
                shape.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px) rotate(${rotation}deg)`;
                shape.classList.add("no-animation");
              } else {
                const easing = 0.05;
                offsets[index].x += (0 - offsets[index].x) * easing;
                offsets[index].y += (0 - offsets[index].y) * easing;

                // @ts-ignore
                shape.style.transition = "transform 0.5s ease-out";
                // @ts-ignore
                shape.style.transform = `translate(${offsets[index].x}px, ${offsets[index].y}px)`;
                setTimeout(() => {
                  shape.classList.remove("no-animation");
                }, 500);
              }
            }
          });

          isAnimating = false;
        });
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
  }


  onMount(() => {
    applyRandomAnimation();
    applyCursorAvoidance();
  });
</script>

<section
  class="relative flex items-center justify-between max-sm:flex-col-reverse max-sm:items-start text-white p-8 rounded-md section-glass mt-3"
>
  <div class="max-w-xl max-sm:w-full">
    <h1 class="text-6xl">Hack The Planet</h1>
    <p class="text-lg mb-4 font-bold">
      Josh Lopez: Code Samurai, Support Sage, Unapologetic Geek.
    </p>
    <p>
      Crafting digital delights, cracking human codes, and preserving the 80s
      spirit. Join me in forging a future where tech remains refreshingly human.
    </p>
  </div>
  <div class="relative w-48 h-48 max-sm:self-center max-sm:mb-6">
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
    transition: transform 0.5s ease-out; /* Smoother transition for avoidance */
  }
  :global(.shape.no-animation) {
    animation: none !important;
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

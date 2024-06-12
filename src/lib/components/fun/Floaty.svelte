<script>
  import { onMount } from "svelte";

  export let className = "";

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

  /**
   * @param {Element | null} node
   */
  function applyRandomAnimation(node) {
    const duration = createKeyframes(0); // Assuming one element per HoverComponent
    // @ts-ignore
    node.style.animation = `float0 ${duration}s ease-in-out infinite`;
  }

  /**
   * @param {Element | null} node
   */
  function applyCursorAvoidance(node) {
    const bufferDistance = 160; // Adjust this value as needed
    let isAnimating = false;
    let offsetX = 0;
    let offsetY = 0;

    /**
     * @param {{ clientX: any; clientY: any; }} event
     */
    function handleMouseMove(event) {
      if (!isAnimating) {
        isAnimating = true;
        requestAnimationFrame(() => {
          const mouseX = event.clientX;
          const mouseY = event.clientY;

          // @ts-ignore
          const rect = node.getBoundingClientRect();
          const shapeX = rect.left + rect.width / 2;
          const shapeY = rect.top + rect.height / 2;
          const distance = Math.hypot(shapeX - mouseX, shapeY - mouseY);

          if (distance < bufferDistance) {
            const angle = Math.atan2(shapeY - mouseY, shapeX - mouseX);
            const maxOffset = 30;
            const offsetFactor = 1 - distance / bufferDistance;
            const newOffsetX = Math.cos(angle) * maxOffset * offsetFactor;
            const newOffsetY = Math.sin(angle) * maxOffset * offsetFactor;

            const easing = 0.1;
            offsetX += (newOffsetX - offsetX) * easing;
            offsetY += (newOffsetY - offsetY) * easing;

            const maxRotation = 10;
            const rotationFactor = 1 - distance / bufferDistance;
            const rotation =
              getRandom(-maxRotation, maxRotation) * rotationFactor;

            // @ts-ignore
            node.style.transition = "transform 0.5s ease-out";
            // @ts-ignore
            node.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`;
            // @ts-ignore
            node.classList.add("no-animation");
          } else {
            const easing = 0.05;
            offsetX += (0 - offsetX) * easing;
            offsetY += (0 - offsetY) * easing;

            // @ts-ignore
            node.style.transition = "transform 0.5s ease-out";
            // @ts-ignore
            node.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
            setTimeout(() => {
              // @ts-ignore
              node.classList.remove("no-animation");
            }, 500);
          }

          isAnimating = false;
        });
      }
    }

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }

  onMount(() => {
    const node = document.querySelector(`.${className}`);
    applyRandomAnimation(node);
    applyCursorAvoidance(node);
  });
</script>

<div class="floaty-container {className}">
  <slot />
</div>

<style>
  :global(.no-animation) {
    animation: none !important;
  }

  .floaty-container {
    position: absolute;
    display: inline-block;
  }

  .floaty-container > * {
    position: absolute;
    transition: transform 0.5s ease-out; /* Smoother transition for avoidance */
  }
</style>

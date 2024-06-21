<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  export let className = "";

  /**
   * @param {number} min
   * @param {number} max
   */
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  /**
   * @param {gsap.TweenTarget} node
   */
  function createFloatingAnimation(node) {
    const duration = getRandom(8, 15);
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(node, {
      x: () => getRandom(-10, 10),
      y: () => getRandom(-10, 10),
      rotation: () => getRandom(-10, 10),
      duration: duration / 2,
      ease: "sine.inOut",
    });

    return tl;
  }

  /**
   * @param {gsap.TweenTarget} node
   */
  function applyCursorAvoidance(node) {
    const bufferDistance = 160;
    /**
     * @type {{ pause: () => void; play: () => void; kill: () => void; }}
     */
    let floatingAnimation;
    let isAvoiding = false;

    const avoidanceTween = gsap.to(node, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });

    /**
     * @param {{ clientX: any; clientY: any; }} event
     */
    function handleMouseMove(event) {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      // @ts-ignore
      const rect = node.getBoundingClientRect();
      const shapeX = rect.left + rect.width / 2;
      const shapeY = rect.top + rect.height / 2;
      const distance = Math.hypot(shapeX - mouseX, shapeY - mouseY);

      if (distance < bufferDistance) {
        if (!isAvoiding) {
          isAvoiding = true;
          if (floatingAnimation) floatingAnimation.pause();
        }

        const angle = Math.atan2(shapeY - mouseY, shapeX - mouseX);
        const maxOffset = 30;
        const offsetFactor = Math.max(0, 1 - distance / bufferDistance);
        const newOffsetX = Math.cos(angle) * maxOffset * offsetFactor;
        const newOffsetY = Math.sin(angle) * maxOffset * offsetFactor;

        const maxRotation = 10;
        const rotationFactor = Math.max(0, 1 - distance / bufferDistance);
        const rotation = getRandom(-maxRotation, maxRotation) * rotationFactor;

        gsap.to(node, {
          x: newOffsetX,
          y: newOffsetY,
          rotation: rotation,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (isAvoiding) {
        isAvoiding = false;
        avoidanceTween.play();
        avoidanceTween.eventCallback("onComplete", () => {
          if (floatingAnimation) floatingAnimation.play();
        });
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return {
      destroy() {
        document.removeEventListener("mousemove", handleMouseMove);
        if (floatingAnimation) floatingAnimation.kill();
        avoidanceTween.kill();
      },
      /**
       * @param {gsap.core.Timeline} animation
       */
      setFloatingAnimation(animation) {
        floatingAnimation = animation;
      },
    };
  }

  onMount(() => {
    const node = document.querySelector(`.${className}`);
    const floatingAnimation = createFloatingAnimation(node);
    const avoidance = applyCursorAvoidance(node);
    avoidance.setFloatingAnimation(floatingAnimation);

    return () => {
      avoidance.destroy();
    };
  });
</script>

<div class="floaty-container {className}">
  <slot />
</div>

<style>
  .floaty-container {
    position: absolute;
    display: inline-block;
  }

  .floaty-container > * {
    position: absolute;
  }

  :global(.floaty-container img) {
    cursor: pointer;
  }
</style>

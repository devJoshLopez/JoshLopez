<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  /** @type {{ className?: string, children?: import("svelte").Snippet }} */
  let { className = "", children } = $props();

  /** @type {HTMLDivElement | undefined} */
  let container = $state();

  /**
   * @param {number} min
   * @param {number} max
   */
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  onMount(() => {
    if (!container) return;

    const bufferDistance = 160;
    let isAvoiding = false;

    const floatingAnimation = gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(container, {
        x: () => getRandom(-10, 10),
        y: () => getRandom(-10, 10),
        rotation: () => getRandom(-10, 10),
        duration: getRandom(4, 7.5),
        ease: "sine.inOut",
      });

    const avoidanceTween = gsap.to(container, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });

    /** @param {MouseEvent} event */
    function handleMouseMove(event) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const shapeX = rect.left + rect.width / 2;
      const shapeY = rect.top + rect.height / 2;
      const distance = Math.hypot(
        shapeX - event.clientX,
        shapeY - event.clientY,
      );

      if (distance < bufferDistance) {
        if (!isAvoiding) {
          isAvoiding = true;
          floatingAnimation.pause();
        }

        const angle = Math.atan2(
          shapeY - event.clientY,
          shapeX - event.clientX,
        );
        const offsetFactor = Math.max(0, 1 - distance / bufferDistance);
        const maxOffset = 30;
        const maxRotation = 10;

        gsap.to(container, {
          x: Math.cos(angle) * maxOffset * offsetFactor,
          y: Math.sin(angle) * maxOffset * offsetFactor,
          rotation: getRandom(-maxRotation, maxRotation) * offsetFactor,
          duration: 0.3,
          ease: "power2.out",
        });
      } else if (isAvoiding) {
        isAvoiding = false;
        avoidanceTween.play();
        avoidanceTween.eventCallback("onComplete", () => {
          floatingAnimation.play();
        });
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      floatingAnimation.kill();
      avoidanceTween.kill();
    };
  });
</script>

<div bind:this={container} class="floaty-container {className}">
  {@render children?.()}
</div>

<style>
  .floaty-container {
    position: absolute;
    display: inline-block;
  }

  :global(.floaty-container > *) {
    position: absolute;
  }

  :global(.floaty-container img) {
    cursor: pointer;
  }

  :global(.floaty-container .floaty-btn) {
    all: unset;
    display: block;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  :global(.floaty-container .floaty-btn:focus-visible) {
    outline: 2px solid #03fcf0;
    outline-offset: 4px;
  }

  :global(.floaty-container .floaty-btn img) {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>

<script>
  // @ts-nocheck
  import { tick, onDestroy } from "svelte";
  import { gsap, Power1, Power2 } from "gsap";
  import { closeModal } from "$lib/stores/modalStore";
  import colorStatic from "$lib/images/color-static.gif";

  export let show = false;
  export let content = null;
  export let props = {};

  let isClosing = false;
  let isAnimating = false;
  let isInitialized = false;
  let wasShow = false;
  /**
   * @type {gsap.core.Timeline}
   */
  let timeline;

  const SELECTOR_MODAL_ELEMENT = ".modal";
  const SELECTOR_MODAL_CLOSE_BUTTON = ".close-btn";
  const SELECTOR_CONTENT_ELEMENT = ".modal-content";

  // Watcher for show changes
  $: if (show !== wasShow) {
    wasShow = show;
    handleShowChange();
  }

  // Handle show changes
  function handleShowChange() {
    if (show && !isAnimating) {
      if (!isInitialized) {
        tick().then(() => {
          initializeTimeline();
          toggleModalAnimation();
        });
      } else {
        toggleModalAnimation();
      }
    } else if (!show && isClosing && !isAnimating) {
      toggleModalAnimation();
    }
  }

  // Initialize GSAP timeline
  function initializeTimeline() {
    timeline = gsap.timeline({ paused: true });

    timeline
      .to(SELECTOR_CONTENT_ELEMENT, {
        duration: 0.2,
        opacity: 0,
        width: "0",
        height: "0",
      })
      .to(SELECTOR_MODAL_ELEMENT, {
        duration: 0.2,
        width: "100vw",
        height: "2px",
        background: "#ffffff",
        backgroundImage: "none",
        ease: Power2.easeOut,
      })
      .to(SELECTOR_MODAL_ELEMENT, {
        duration: 0.3,
        backgroundImage: `url(${colorStatic})`,
        ease: Power2.easeOut,
      })
      .to(SELECTOR_MODAL_ELEMENT, {
        duration: 0.2,
        height: "100vh",
        ease: Power2.easeInOut,
      })
      .to(SELECTOR_MODAL_ELEMENT, {
        duration: 0.2,
        width: "100vw",
        height: "100vh",
      })
      .to(SELECTOR_CONTENT_ELEMENT, {
        duration: 0.2,
        width: "auto",
        height: "auto",
      })
      .to(SELECTOR_CONTENT_ELEMENT, {
        duration: 0.4,
        opacity: 1,
        ease: Power1.easeIn,
      })
      .to(SELECTOR_MODAL_CLOSE_BUTTON, {
        duration: 0.2,
        opacity: 1,
        ease: Power1.easeIn,
      });

    isInitialized = true;
  }

  // Toggle modal animation
  function toggleModalAnimation() {
    if (!timeline) return;
    isAnimating = true;

    if (!isClosing) {
      document.body.style.overflow = "hidden";
      timeline.play().then(() => {
        isAnimating = false;
      });
    } else {
      document.body.style.overflow = "auto";
      timeline.reverse().then(() => {
        resetModalState();
        closeModal();
      });
    }
  }

  // Close modal and toggle animation
  function toggleClose() {
    isClosing = true;
    toggleModalAnimation();
  }

  // Reset modal state
  function resetModalState() {
    isClosing = false;
    isAnimating = false;
    isInitialized = false;
    show = false;
  }

  // Clean up on destroy
  onDestroy(() => {
    if (timeline) {
      timeline.kill();
    }
  });
</script>

{#if show}
  <div class="modal">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="modal-backdrop" on:click={toggleClose}></div>
    <button class="close-btn" on:click={toggleClose}> Close </button>
    <div class="modal-content">
      {#if content}
        <svelte:component this={content} {...props} />
      {/if}
    </div>
  </div>
{/if}

<style>
  .modal {
    background-color: #e1eef6;
    position: fixed;
    z-index: 1000;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    transform: translate(-50%, -50%);
    transform-origin: center;
    content: " ";
    overflow: hidden;
    background-size: cover !important;
    background-origin: border-box;
    color: #e1eef6;
    transition:
      width 0.2s,
      height 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .modal-backdrop {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
  }

  .close-btn {
    position: absolute;
    top: 42px;
    right: 42px;
    background: transparent;
    border: none;
    color: #e1eef6;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
  }

  .modal-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    color: #e1eef6;
    opacity: 0;
    width: 0;
    height: 100%;
  }
</style>

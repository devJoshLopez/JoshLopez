<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { gsap, Power1, Power2 } from "gsap";
  import { createEventDispatcher } from "svelte";

  export let isOpen = false;
  export let isClosing = false;
  const dispatch = createEventDispatcher();

  const SELECTOR_MODAL_ELEMENT = ".modal";
  const SELECTOR_CONTENT_ELEMENT = ".modal-content";

  let timeline;

  function buildTimeline() {
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
        ease: Power2.easeOut,
      })
      .to(SELECTOR_MODAL_ELEMENT, {
        duration: 0.2,
        backgroundImage: "url(https://cldup.com/gn3s3Fg75t.gif)",
        ease: Power2.easeInOut,
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
        duration: 0.3,
        opacity: 1,
        ease: Power1.easeInOut,
      });
  }

  function toggleSwitcherTV() {
    if (!timeline) return;
    if (isClosing) {
      timeline.reverse();
      // wait for the animation to finish before closing the modal
      setTimeout(() => {
        dispatch("close");
      }, 800);
    } else {
      timeline.play();
    }
  }

  function closeModal() {
    isClosing = true;
  }

  $: if (isOpen) {
    toggleSwitcherTV();
  } else if (timeline && !isClosing) {
    timeline.reverse();
  }

  $: onMount(() => {
    buildTimeline();
  });
</script>

<dialog class="modal" open={isOpen}>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-backdrop" on:click={closeModal}></div>
  <div class="modal-content">
    <button class="close-btn" on:click={closeModal}> Close </button>
    <slot />
  </div>
</dialog>

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
    background: #16222a;
    background: -webkit-linear-gradient(to left, #16222a, #3a6073);
    background: linear-gradient(to left, #16222a, #3a6073);
    background-size: cover !important;
    background-image: url(https://cldup.com/gn3s3Fg75t.gif);
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

  .modal-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    background-color: #16222a;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: #e1eef6;
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>

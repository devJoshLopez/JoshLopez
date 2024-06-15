<script>
  // @ts-nocheck
  import { onMount, tick, onDestroy } from "svelte";
  import { gsap, Power1, Power2 } from "gsap";

  export let show = false;
  export let closeModal;
  export let content = null;
  export let props = {};
  let isClosing = false;

  const SELECTOR_MODAL_ELEMENT = ".modal";
  const SELECTOR_CONTENT_ELEMENT = ".modal-content";

  let timeline;
  let timelineInitialized = false;

  onMount(() => {});

  onDestroy(() => {
    if (timeline) {
      timeline.kill();
    }
  });

  function buildTimeline() {
    console.log("Building timeline");
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

    console.log("Timeline built");
    timelineInitialized = true;
  }

  function toggleSwitcherTV() {
    console.log("Toggling switcher TV");
    if (!timeline) return;
    console.log("Timeline exists");
    if (!isClosing) {
      console.log("Modal is opening");
      document.body.style.overflow = "hidden";
      isClosing = true;
      timeline.play().then(() => {
        isClosing = false;
      });
    } else {
      console.log("Modal is closing");
      document.body.style.overflow = "auto";
      timeline.reverse().then(() => {
        isClosing = false;
      });
    }
  }

  $: if (show && !isClosing) {
    console.log("Modal is open");
    if (!timelineInitialized) {
      tick().then(() => {
        buildTimeline();
        toggleSwitcherTV();
      });
    } else {
      console.log("Timeline already initialized");
      toggleSwitcherTV();
    }
  } else if (!show && isClosing) {
    console.log("Modal is closing");
    toggleSwitcherTV();
  }
</script>

{#if show}
  <div class="modal" open={show}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="modal-backdrop" on:click={closeModal}></div>
    <div class="modal-content">
      <button class="close-btn" on:click={closeModal}> Close </button>
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
    background: #16222a;
    background: -webkit-linear-gradient(to left, #16222a, #3a6073);
    background: linear-gradient(to left, #16222a, #3a6073);
    background-size: cover !important;
    background-image: url(https://cldup.com/gn3s3Fg75t.gif);
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

  .modal-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    /* background-color: #16222a; */
    /* border-radius: 10px; */
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
    color: #e1eef6;
    opacity: 0;
    width: 0;
    height: 0;
  }
</style>

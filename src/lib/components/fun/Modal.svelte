<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { gsap, Power2 } from "gsap";

  export let isOpen = false;

  const dispatch = createEventDispatcher();
  /**
   * @type {HTMLDialogElement}
   */
  let dialog;
  let showPowerOn = false;
  let showPowerOff = false;

  let isTurnedOn = false;
  /**
   * @type {gsap.core.Timeline}
   */
  let timeline;

  onMount(() => {
    buildTimeline();

    if (isOpen) {
      dialog.showModal();
      showPowerOn = true;
    }
  });

  function buildTimeline() {
    timeline = gsap.timeline({ paused: true });

    timeline
      .to(".modal", {
        duration: 0.2,
        width: "100vw",
        height: "2px",
        background: "#ffffff",
        ease: Power2.easeOut,
      })
      .to(".modal", {
        duration: 0.2,
        width: "0",
        height: "0",
        background: "#ffffff",
      });
  }

  function closeModal() {
    showPowerOff = true;
    setTimeout(() => {
      dialog.close();
      dispatch("close");
      showPowerOff = false;
    }, 1000); // duration of the power-off animation
  }

  $: if (dialog) {
    if (isOpen) {
      dialog.showModal();
      showPowerOn = true;
      showPowerOff = false;
      if (!isTurnedOn) {
        timeline.reverse();
        isTurnedOn = true;
      }
    } else if (dialog.open) {
      showPowerOff = true;
      setTimeout(() => {
        dialog.close();
        showPowerOff = false;
        if (isTurnedOn) {
          timeline.restart();
          isTurnedOn = false;
        }
      }, 1000); // duration of the power-off animation
    }
  }
</script>

<dialog
  bind:this={dialog}
  class="modal {showPowerOn ? 'power-on' : ''} {showPowerOff
    ? 'power-off'
    : ''}"
>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="modal-backdrop" on:click={closeModal}></div>
  <div class="modal-content {showPowerOn ? 'content-fade-in' : ''}">
    <button class="close-btn" on:click={closeModal}>✖</button>
    <slot></slot>
  </div>
</dialog>

<style>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: none;
    overflow: hidden;
    z-index: 1000;
    opacity: 0;
    transform: scale(0);
  }

  .modal.power-on {
    animation: powerOn 1s forwards;
  }

  .modal.power-off {
    animation: powerOff 1s forwards;
  }

  @keyframes powerOn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    50% {
      opacity: 1;
      transform: scale(1);
      clip-path: circle(0%);
    }
    100% {
      opacity: 1;
      transform: scale(1);
      clip-path: circle(100%);
    }
  }

  @keyframes powerOff {
    0% {
      opacity: 1;
      transform: scale(1);
      clip-path: circle(100%);
    }
    50% {
      opacity: 1;
      transform: scale(1);
      clip-path: circle(0%);
    }
    100% {
      opacity: 0;
      transform: scale(0);
    }
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-image: url(https://cldup.com/gn3s3Fg75t.gif);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    opacity: 0.5;
  }

  .modal-backdrop::before {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    z-index: 1000;
    opacity: 0;
  }

  .modal-content.content-fade-in {
    animation: fadeIn 1s forwards;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

<script>
  // @ts-nocheck

  import { modalStore } from "$lib/stores/modalStore";
  import Grid from "$lib/components/fun/Grid.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Navigation from "$lib/components/layout/Navigation.svelte";
  import "../app.css";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";
  import { showModal } from "$lib/stores/modalStore";

  import { onMount, onDestroy } from "svelte";
  import Modal from "$lib/components/fun/Modal.svelte";

  let show = false;
  /**
   * @type {any}
   */
  let content = null;
  let props = {};

  const unsubscribe = modalStore.subscribe((value) => {
    show = value.show;
    content = value.content;
    props = value.props;
  });

  // konami code sequence to rickroll the user
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];
  let konamiCodePosition = 0;

  onDestroy(() => {
    unsubscribe();
  });

  // Randomize the order of the animations for all h1 and h2 by setting a custom property on each element of --animation-order with a random number
  onMount(() => {
    document.querySelectorAll("h1, h2").forEach((el) => {
      // Generate a random animation duration between 1985 and 4000 seconds
      const animationDuration = 1985 + Math.floor(Math.random() * 2016);
      // Generate a random animation delay between 0 and the animation duration
      const animationDelay = Math.floor(Math.random() * animationDuration);
      // Generate a random background position between 0% and 1000%
      const backgroundPosition = Math.floor(Math.random() * 1001);

      // @ts-ignore
      el.style.animationDuration = `${animationDuration}s`;
      // @ts-ignore
      el.style.animationDelay = `-${animationDelay}s`;
      // @ts-ignore
      el.style.backgroundPosition = `${backgroundPosition}% 50%`;
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
          // @ts-ignore
          showModal(VideoPlayer, {
            urls: [
              "https://i.giphy.com/kFgzrTt798d2w.webp",
              "https://i.giphy.com/lW9XPLjNXyDDO.webp",
              "https://i.giphy.com/Em78SsD46oFeo.webp",
              "https://i.giphy.com/Ju7l5y9osyymQ.webp",
            ],
          });
          konamiCodePosition = 0;
        }
      } else {
        konamiCodePosition = 0;
      }
    });
  });
</script>

<Grid />

<Navigation />

<main
  class="relative z-10 w-screen overflow-hidden p-8 pt-24 text-gray-200 md:pt-32"
>
  <slot />
</main>

<Footer />

<Modal {show} {content} {props} />

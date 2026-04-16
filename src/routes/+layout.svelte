<script>
  import { modalStore } from "$lib/stores/modalStore";
  import Grid from "$lib/components/fun/Grid.svelte";
  import Footer from "$lib/components/layout/Footer.svelte";
  import Navigation from "$lib/components/layout/Navigation.svelte";
  import "../app.css";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";
  import { showModal } from "$lib/stores/modalStore";

  import { onMount } from "svelte";
  import Modal from "$lib/components/fun/Modal.svelte";

  let { children } = $props();

  const modalState = $derived($modalStore);

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

  onMount(() => {
    // Randomize heading gradient animation via CSS custom properties
    document.querySelectorAll("h1, h2").forEach((el) => {
      const duration = 1985 + Math.floor(Math.random() * 2016);
      const delay = Math.floor(Math.random() * duration);
      const backgroundPosition = Math.floor(Math.random() * 1001);
      const html = /** @type {HTMLElement} */ (el);
      html.style.setProperty("--heading-anim-duration", `${duration}s`);
      html.style.setProperty("--heading-anim-delay", `-${delay}s`);
      html.style.setProperty(
        "--heading-bg-position",
        `${backgroundPosition}% 50%`,
      );
    });

    /** @param {KeyboardEvent} e */
    const handleKeydown = (e) => {
      if (e.key === konamiCode[konamiCodePosition]) {
        konamiCodePosition++;
        if (konamiCodePosition === konamiCode.length) {
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
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });
</script>

<Grid />

<Navigation />

<main
  class="relative z-10 w-screen overflow-hidden p-8 pt-24 text-gray-200 md:pt-32"
>
  {@render children?.()}
</main>

<Footer />

<Modal
  show={modalState.show}
  content={modalState.content}
  props={modalState.props}
/>

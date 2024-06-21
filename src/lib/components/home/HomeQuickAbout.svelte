<script>
  import spidermanFace from "$lib/images/spider-man-face.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import { showModal } from "$lib/stores/modalStore";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";

  const openModal = () => {
    // @ts-ignore
    showModal(VideoPlayer, {
      urls: [
        "https://i.giphy.com/MCZ39lz83o5lC.webp",
        "https://i.giphy.com/bcrOR2stk6tKIxqPOZ.webp",
        "https://i.giphy.com/786qVQHXMJhnO.webp",
      ],
    });
  };
</script>

<section class="section-glass relative mt-32 rounded-md p-8 text-white">
  <h2 class="mb-4 text-3xl">“With Great Power Comes Great Responsibility”</h2>

  <p class="mb-4">
    By day, I craft intuitive tools at <a
      href="https://www.memberstack.com"
      target="_blank">Memberstack</a
    > and lead a squad of support heroes. By night, I'm immersed in movies, music,
    comics, and tech. From my Montana basecamp, I balance coding quests with being
    a devoted dad and husband.
  </p>

  <Floaty className="spiderman-floaty">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img src={spidermanFace} alt="Spider-Man face" on:click={openModal} />
  </Floaty>
</section>

<style>
  :global(.spiderman-floaty) {
    position: absolute;
    z-index: 0;
    bottom: -25px;
    right: -50px;
    width: 50px;
  }
</style>

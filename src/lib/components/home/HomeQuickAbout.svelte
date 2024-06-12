<script>
  import spidermanFace from "$lib/images/spider-man-face.png";
  import Floaty from "$lib/components/fun/Floaty.svelte";
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
  <h2 class="text-3xl mb-4">
    “With Great Power Comes Great Responsibility”
  </h2>

  <p class="mb-4">
    By day, I craft intuitive tools at <a
      href="https://www.memberstack.com"
      target="_blank">Memberstack</a
    > and lead a squad of support heroes. By night, I'm immersed in movies, music, comics,
    and tech. From my Montana basecamp, I balance coding quests with being a devoted
    dad and husband.
  </p>

  <Floaty className="spiderman-floaty">
    <img src={spidermanFace} alt="Spider-Man face" />
  </Floaty>
</section>

<style>
  :global(.spiderman-floaty) {
    position: absolute;
    z-index: -1;
    bottom: -25px;
    right: -50px;
    width: 50px;
  }
</style>
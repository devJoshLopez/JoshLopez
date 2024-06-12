<script>
   import delorean from "$lib/images/delorean.png";
    import Floaty from "$lib/components/fun/Floaty.svelte";
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
    <h2 class="text-3xl mb-4">"Roads? Where We're Going, We Don't Need Roads."</h2>
    <div class="more-content">
      [Insert list of more content to watch or read here]
    </div>

    <Floaty className="delorean-floaty">
      <img src={delorean} alt="Delorean from Back to the Future" />
    </Floaty>
</section>

<style>
  :global(.delorean-floaty) {
    position: absolute;
    z-index: -1;
    top: -25px;
    right: -50px;
    width: 120px;
  }
</style>
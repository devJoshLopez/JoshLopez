<script>
  import Floaty from "../fun/Floaty.svelte";
  import johnny5 from "$lib/images/johnny_5_short_circuit.png";

</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32">
    <h2 class="text-3xl mb-4">"Number 5 is Alive!"</h2>
    <div class="latest-content">
      [Insert latest piece of content here]
    </div>

    <Floaty className="johnny5-floaty">
      <img src={johnny5} alt="Johnny 5 from Short Circuit" />
    </Floaty>
</section>

<style>
  :global(.johnny5-floaty) {
    position: absolute;
    z-index: -1;
    top: -25px;
    left: -50px;
    width: 84px;
  }
</style>
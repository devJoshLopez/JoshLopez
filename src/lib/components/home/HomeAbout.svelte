<script>
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import lastStarfighter from "$lib/images/last-starfighter.png";
  import { showModal } from "$lib/stores/modalStore";
  import VideoPlayer from "$lib/components/fun/VideoPlayer.svelte";

  const openModal = () => {
    // @ts-ignore
    showModal(VideoPlayer, {
      urls: [
        "https://media1.tenor.com/m/_IKIV9nEcwsAAAAC/the-last-starfighter-intro.gif",
        "https://media1.tenor.com/m/rqHmJAE2O8oAAAAC/the-last-starfighter-last-starfighter.gif",
        "https://media1.tenor.com/m/hPpK50hO4roAAAAC/last-starfighter-startled.gif",
      ],
    });
  };
</script>

<section class="section-glass relative mb-12 mt-32 rounded-md p-8 text-white">
  <h2 class="mb-4 text-3xl">
    "Greetings, Starfighter. <br />You Have Been Recruited"
  </h2>

  <p class="mb-4">Hey there, digital ally! 👋</p>

  <p class="mb-4">
    I'm Josh Lopez - the hoodie-wearing, JavaScript-wrangling, user-enigma
    decoder dude writing all this.
  </p>

  <h3 class="mb-4 text-2xl">Welcome to my digital dojo</h3>

  <p class="mb-4">Here, I:</p>
  <ul class="mb-4 ml-6 mt-2 list-inside list-disc">
    <li>Share tales from the tech trenches and customer success frontlines</li>
    <li>Ponder life's mysteries and everyday magic</li>
    <li>Showcase cutting-edge projects (like Rey, my AI sidekick)</li>
    <li>Dive into movies, music, and comics that shape my soul</li>
    <li>Write about my personal thoughts and opinions on, well, everything!</li>
  </ul>

  <h3 class="mb-4 text-2xl">By day...</h3>

  <p class="mb-4">At Memberstack, I'm a jack-of-all-trades:</p>
  <ul class="mb-4 ml-6 mt-2 list-inside list-disc">
    <li>Forging pre-built modals for seamless user experiences</li>
    <li>Leveling up Rey, our AI sage</li>
    <li>Crafting help guides that turn "Game Over" into "Extra Life!"</li>
  </ul>

  <p class="mb-4">
    But my true calling? Leading our merry band of support heroes, giving every
    user their "You're All That and a Bag of Chips" moment.
  </p>

  <h3 class="mb-4 text-2xl">Inspired by the greats</h3>

  <p class="mb-4">I channel:</p>
  <ul class="mb-4 ml-6 mt-2 list-inside list-disc">
    <li>Marty McFly's drive to brighten the future</li>
    <li>Ninja Turtles' unique skill blend</li>
    <li>Neo's quest for deeper truths</li>
    <li>Spider-Man's balance of power and responsibility</li>
  </ul>

  <h3 class="mb-4 text-2xl">Off the clock</h3>

  <p class="mb-4">
    Find me in Big Sky Country (Montana), my personal Hoth, plotting benevolent
    world-changes from the local cinema. The 80s and 90s aren't just history;
    they're my operating system.
  </p>

  <h3 class="mb-4 text-2xl">My mission</h3>

  <p class="mb-4">
    I'm on a quest to make tech more human - less "Skynet", more "WOPR". Whether
    you're here to level up your customer success game, uncover soulful living
    secrets, geek out over pop culture, or explore AI's frontiers, you've found
    a fellow adventurer.
  </p>

  <p class="mb-4">
    As Ferris Bueller said, "Life moves pretty fast. If you don't stop and look
    around once in a while, you could miss it."
  </p>

  <p class="mb-4">
    Join me in making every moment a chance for growth, connection, and 8-bit
    magic. We're all just players navigating this great game called life. 🕹️
  </p>

  <p class="mb-4 max-md:hidden">
    Press ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️ to continue this adventure... 🚀
  </p>

  <p class="mt-4">
    <em class="text-xs"
      >Incoming transmission... 📡 <br />
      To my son: Every word, line of code, and late-night movie analysis here is
      part of our story. As you navigate your life, may these musings inspire you
      to live boldly, love deeply, and stay forever curious. My love for you is as
      timeless as a classic NES game – and way more complex than any JavaScript I've
      ever written.</em
    >
  </p>

  <Floaty className="last-starfighter-floaty">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <img
      src={lastStarfighter}
      alt="The Last Starfighter"
      on:click={openModal}
    />
  </Floaty>
</section>

<style>
  :global(.last-starfighter-floaty) {
    position: absolute;
    z-index: 0;
    top: -25px;
    left: -50px;
    width: 84px;
  }
</style>

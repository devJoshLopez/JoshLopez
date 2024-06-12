<script>
  import Floaty from "$lib/components/fun/Floaty.svelte";
  import lastStarfighter from "$lib/images/last-starfighter.png";
</script>

<section class="relative text-white p-8 rounded-md section-glass mt-32 mb-12">
  <h2 class="text-3xl mb-4">
    "Greetings, Starfighter. <br />You Have Been Recruited"
  </h2>
  <p class="mb-4">👋 Hey there, digital ally!</p>

  <p class="mb-4">
    That's me up there, sporting a hoodie because why get fancy when you're
    wrangling JavaScript and decoding user enigmas?
  </p>

  <p class="mb-4">Welcome to my digital dojo, where:</p>
  <ul class="list-disc list-inside ml-6 mt-2">
    <li class="mb-2">
      I share tales from the tech trenches and customer success frontlines
    </li>
    <li class="mb-2">
      Ponder life's great mysteries and the magic of everyday moments
    </li>
    <li class="mb-2">
      Showcase cutting-edge projects like Rey, my AI compadre
    </li>
    <li class="mb-2">
      Dive deep into the movies, music, and comics that shape my soul
    </li>
  </ul>

  <p class="mb-4">
    At Memberstack, I'm a jack-of-all-trades. I forge pre-built modals that make
    signing up, logging in, and managing memberships a breeze. I also level up
    our AI sidekick, Rey, to dispense wisdom like a sage Game Genie. And when
    I'm not crafting code, I'm penning help guides that turn "Game Over" into
    "Extra Life!"
  </p>

  <p class="mb-4">
    But my true calling? Leading our merry band of support heroes. Together, we
    don't just fix issues; we give every user their "You're All That and a Bag
    of Chips" moment.
  </p>

  <p class="mb-4">
    In all things, I strive to be like the heroes who guided my youth:
  </p>

  <ul class="list-disc list-inside ml-6 mt-2">
    <li class="mb-2">
      🌟 Like Marty McFly, I aim to make the future brighter.
    </li>
    <li class="mb-2">
      🐢 Like the Ninja Turtles, I blend unique skills to help others.
    </li>
    <li class="mb-2">🕴️ Like Neo, I question reality to find deeper truths.</li>
    <li class="mb-2">
      🕷️ Like Spider-Man, I balance power and responsibility.
    </li>
  </ul>

  <p class="mb-4">
    Off the clock, you'll find me in Big Sky Country (Montana), my own personal
    Hoth, plotting benevolent world-changes from my local cinema throne. The 80s
    and 90s aren't just history; they're my OS.
  </p>

  <p class="mb-4">
    I believe great tech, like great stories, speaks to the human heart. That's
    why I'm on a quest to make the digital realm a little less "Skynet" and a
    little more "WOPR" - less cold calculations, more warm connections.
  </p>

  <p class="mb-4">
    So whether you're here to level up your customer success game, uncover
    secrets of soulful living, geek out over pop culture, or explore the
    uncharted lands of AI, know that you've found a fellow adventurer.
  </p>

  <p class="mb-4">
    In the immortal words of Ferris Bueller, "Life moves pretty fast. If you
    don't stop and look around once in a while, you could miss it."
  </p>

  <p class="mb-4">
    Join me in making every moment, online and off, a chance for growth,
    connection, and a little 8-bit magic. Because in the end, we're all just
    players trying to navigate this great game called life. 🕹️
  </p>

  <p class="mb-4">
    Press ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️ to continue this adventure... 🚀
  </p>

  <p class="mb-4">
    Incoming transmission... 📡 <br />
    Son, if you're reading this someday, know that every word, every line of code,
    every late-night movie analysis was a love letter to you. May my stories and
    passions inspire you to live boldly, love deeply, and always stay curious. Though
    time may pass, my love for you is as timeless as a classic NES game.
  </p>

  <p class="mb-4">
    [Hidden Easter Egg: Clicking this text plays the "Never Gonna Give You Up"
    8-bit tune 🎵]
  </p>

  <Floaty className="last-starfighter-floaty">
    <img src={lastStarfighter} alt="The Last Starfighter" />
  </Floaty>
</section>

<style>
  :global(.last-starfighter-floaty) {
    position: absolute;
    z-index: -1;
    top: -25px;
    left: -50px;
    width: 84px;
  }
  </style>
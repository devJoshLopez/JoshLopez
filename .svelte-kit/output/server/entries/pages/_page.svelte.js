import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const imageUrl = "/sveltekit-github-pages/_app/immutable/assets/josh-lopez.DEFJ6kSQ.webp";
const css = {
  code: ".shape.svelte-ac4xd{position:absolute}.shape0.svelte-ac4xd{z-index:1;filter:drop-shadow(10px 10px 0 #000000)}.shape1.svelte-ac4xd{top:-10px;left:-10px;fill:#ff00ff;transform:rotate(20deg);z-index:0;filter:drop-shadow(10px 10px 0 #000000)}.shape2.svelte-ac4xd{bottom:-10px;right:-10px;fill:#00ffff;transform:rotate(-20deg);z-index:2;filter:drop-shadow(10px 10px 0 #000000)}.shape3.svelte-ac4xd{bottom:20px;left:-10px;fill:#ffff00;transform:rotate(10deg);z-index:3;filter:drop-shadow(10px 10px 0 #000000)}.shape4.svelte-ac4xd{top:40px;right:-10px;fill:#00ff00;transform:rotate(-10deg);z-index:4;filter:drop-shadow(10px 10px 0 #000000)}",
  map: '{"version":3,"file":"HomeHeader.svelte","sources":["HomeHeader.svelte"],"sourcesContent":["<script>\\n  import imageUrl from \\"$lib/images/josh-lopez.webp\\";\\n<\/script>\\n\\n<section\\n  class=\\"flex items-center justify-between bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8\\"\\n>\\n  <div class=\\"max-w-lg\\">\\n    <h1 class=\\"text-4xl\\">Hack The Planet</h1>\\n    <p class=\\"text-lg\\">\\n      Josh Lopez: Code Samurai, Support Sage, Unapologetic Geek.</p>\\n    <p>\\n      Crafting web wonders, solving human puzzles, and keeping the 80s & 90s\\n      alive. Join my quest for tech that feels like a warm hug.\\n    </p>\\n  </div>\\n  <div class=\\"relative w-48 h-48\\">\\n    <svg width=\\"100%\\" height=\\"100%\\" viewBox=\\"0 0 200 200\\" class=\\"shape shape0\\">\\n      <defs>\\n        <clipPath id=\\"circleClip\\">\\n          <circle cx=\\"100\\" cy=\\"100\\" r=\\"100\\" />\\n        </clipPath>\\n      </defs>\\n      <image\\n        href={imageUrl}\\n        width=\\"200\\"\\n        height=\\"200\\"\\n        clip-path=\\"url(#circleClip)\\"\\n        preserveAspectRatio=\\"xMidYMid slice\\"\\n      />\\n      <circle cx=\\"100\\" cy=\\"100\\" r=\\"100\\" fill=\\"none\\" />\\n    </svg>\\n    <!-- SVG Shapes -->\\n    <svg class=\\"shape shape1\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 100 100\\">\\n      <circle cx=\\"50\\" cy=\\"50\\" r=\\"50\\" />\\n    </svg>\\n    <svg class=\\"shape shape2\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 100 100\\">\\n      <rect x=\\"0\\" y=\\"0\\" width=\\"100\\" height=\\"100\\" transform=\\"rotate(45 50 50)\\" />\\n    </svg>\\n    <svg class=\\"shape shape3\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 100 100\\">\\n      <polygon points=\\"50,0 100,100 0,100\\" />\\n    </svg>\\n    <svg class=\\"shape shape4\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 100 100\\">\\n      <polyline\\n        points=\\"0,40 20,60 40,40 60,60 80,40 100,60\\"\\n        stroke-width=\\"10\\"\\n        fill=\\"none\\"\\n        stroke=\\"currentColor\\"\\n      />\\n    </svg>\\n  </div>\\n</section>\\n\\n<style>\\n  .shape {\\n    position: absolute;\\n  }\\n  .shape0 {\\n    z-index: 1;\\n    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */\\n  }\\n  .shape1 {\\n    top: -10px;\\n    left: -10px;\\n    fill: #ff00ff;\\n    transform: rotate(20deg);\\n    z-index: 0;\\n    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */\\n  }\\n  .shape2 {\\n    bottom: -10px;\\n    right: -10px;\\n    fill: #00ffff;\\n    transform: rotate(-20deg);\\n    z-index: 2;\\n    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */\\n  }\\n  .shape3 {\\n    bottom: 20px;\\n    left: -10px;\\n    fill: #ffff00;\\n    transform: rotate(10deg);\\n    z-index: 3;\\n    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */\\n  }\\n  .shape4 {\\n    top: 40px;\\n    right: -10px;\\n    fill: #00ff00;\\n    transform: rotate(-10deg);\\n    z-index: 4;\\n    filter: drop-shadow(10px 10px 0 #000000); /* More pronounced shadow */\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsDE,mBAAO,CACL,QAAQ,CAAE,QACZ,CACA,oBAAQ,CACN,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,YAAY,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CACzC,CACA,oBAAQ,CACN,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,CACX,IAAI,CAAE,OAAO,CACb,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,YAAY,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CACzC,CACA,oBAAQ,CACN,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,KAAK,CACZ,IAAI,CAAE,OAAO,CACb,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,YAAY,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CACzC,CACA,oBAAQ,CACN,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,KAAK,CACX,IAAI,CAAE,OAAO,CACb,SAAS,CAAE,OAAO,KAAK,CAAC,CACxB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,YAAY,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CACzC,CACA,oBAAQ,CACN,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,KAAK,CACZ,IAAI,CAAE,OAAO,CACb,SAAS,CAAE,OAAO,MAAM,CAAC,CACzB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,YAAY,IAAI,CAAC,IAAI,CAAC,CAAC,CAAC,OAAO,CACzC"}'
};
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section class="flex items-center justify-between bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8" data-svelte-h="svelte-1d634yj"><div class="max-w-lg"><h1 class="text-4xl">Hack The Planet</h1> <p class="text-lg">Josh Lopez: Code Samurai, Support Sage, Unapologetic Geek.</p> <p>Crafting web wonders, solving human puzzles, and keeping the 80s &amp; 90s
      alive. Join my quest for tech that feels like a warm hug.</p></div> <div class="relative w-48 h-48"><svg width="100%" height="100%" viewBox="0 0 200 200" class="shape shape0 svelte-ac4xd"><defs><clipPath id="circleClip"><circle cx="100" cy="100" r="100"></circle></clipPath></defs><image${add_attribute("href", imageUrl)} width="200" height="200" clip-path="url(#circleClip)" preserveAspectRatio="xMidYMid slice"></image><circle cx="100" cy="100" r="100" fill="none"></circle></svg>  <svg class="shape shape1 svelte-ac4xd" width="40" height="40" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50"></circle></svg> <svg class="shape shape2 svelte-ac4xd" width="40" height="40" viewBox="0 0 100 100"><rect x="0" y="0" width="100" height="100" transform="rotate(45 50 50)"></rect></svg> <svg class="shape shape3 svelte-ac4xd" width="40" height="40" viewBox="0 0 100 100"><polygon points="50,0 100,100 0,100"></polygon></svg> <svg class="shape shape4 svelte-ac4xd" width="40" height="40" viewBox="0 0 100 100"><polyline points="0,40 20,60 40,40 60,60 80,40 100,60" stroke-width="10" fill="none" stroke="currentColor"></polyline></svg></div> </section>`;
});
const HomeQuickAbout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `  <section class="max-w-4xl mx-auto px-4 py-8" data-svelte-h="svelte-7mk5jd"><h2 class="text-3xl mb-4">“With Great Power Comes Great Responsibility”</h2> <p class="mb-4">By day, I craft intuitive tools at <a href="https://www.memberstack.com" target="_blank">Memberstack</a> and lead a squad of support heroes. By night, I&#39;m immersed in movies, comics,
    and tech. From my Montana basecamp, I balance coding quests with being a devoted
    dad and husband.</p> <p>Let&#39;s make the digital world as rad as our mixtapes. 💾🎶</p></section>`;
});
const HomeLatest = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="max-w-4xl mx-auto px-4 py-8" data-svelte-h="svelte-1pf7kce"><h2 class="text-3xl mb-4">&quot;Number 5 is Alive!&quot;</h2> <div class="latest-content">[Insert latest piece of content here]</div></section>`;
});
const HomeContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="max-w-4xl mx-auto px-4 py-8" data-svelte-h="svelte-1shqjv9"><h2 class="text-3xl mb-4">&quot;Roads? Where We&#39;re Going, We Don&#39;t Need Roads.&quot;</h2> <div class="more-content">[Insert list of more content to watch or read here]</div></section>`;
});
const HomeAbout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="max-w-4xl mx-auto px-4 py-8" data-svelte-h="svelte-hojm5x"><h2 class="text-3xl mb-4">&quot;Greetings, Starfighter. You Have Been Recruited&quot;</h2> <p class="mb-4">👋 Hey there, digital ally!</p> <p class="mb-4">That&#39;s me up there, sporting a tee and hoodie because why get fancy when
      you&#39;re wrangling JavaScript and decoding user enigmas? 👕💻</p> <p class="mb-4">I&#39;m Josh, and I&#39;m rewiring the internet to feel less like SkyNet and more
      like your neighborhood arcade. 🕹️🌟</p> <p class="mb-4">At Memberstack, I&#39;m a digital MacGyver. One moment, I&#39;m architecting modals
      that guide users like friendly NPCs. The next, I&#39;m upgrading our AI, Rey, to
      dispense wisdom with the accuracy of a cheat code. When I&#39;m not immersed in
      these side quests, I&#39;m authoring lore scrolls (help docs) that turn &quot;Game
      Over&quot; moments into &quot;New High Score!&quot; epiphanies. 🚀📚🔧</p> <p class="mb-4">But my favorite power-up? Leading our Guild of Support Heroes. We don&#39;t just
      troubleshoot; we turn rage-quits into standing ovations. Every ticket is a
      boss battle, and we don&#39;t rest until our users are dancing like they just
      saved Princess Toadstool. 🍄🎉</p> <p class="mb-4">Off the clock, you&#39;ll find me in Big Sky Country (Montana), my own personal
      Hoth base, plotting benevolent world-changes from my local cinema throne.
      The 80s and 90s aren&#39;t just history; they&#39;re my OS. 🌄🎬</p> <p class="mb-4">This site? It&#39;s my DeLorean, my phone booth, my hot tub time machine. Here,
      I share:</p> <ul class="mb-4"><li class="mb-2">💡 Code chronicles &amp; help desk heroics</li> <li class="mb-2">🎨 Projects proving beautiful code isn&#39;t a myth</li> <li class="mb-2">🎬 Essays on why &quot;Hackers&quot; is the WOPR of movies</li> <li class="mb-2">🦸‍♂️ How Peter Parker&#39;s web-slinging rivals Sveltekit</li></ul> <p class="mb-4">I believe the best tech is indistinguishable from magic—but the Gandalf
      kind, not the &quot;you shall not pass&quot; firewall kind. Every function, every
      tutorial, every movie quote here is a step towards that Shire.</p> <p class="mb-4">So, whether you&#39;re untangling spaghetti code, reciting &quot;Short Circuit&quot; for
      the 256th time (binary humor!), or hunting for tech that sparks joy, grab a
      beanbag. Shell is optional, but rad is mandatory.</p> <p class="mb-4">Together, let&#39;s code a future as awesome as our mixtapes. 💾🎶</p> <p class="mb-4">Press ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️🅱️🅰️ to initiate launch sequence...</p></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-4xl mx-auto px-4">${validate_component(HomeHeader, "HomeHeader").$$render($$result, {}, {}, {})} ${validate_component(HomeQuickAbout, "HomeQuickAbout").$$render($$result, {}, {}, {})} ${validate_component(HomeLatest, "HomeLatest").$$render($$result, {}, {}, {})} ${validate_component(HomeContent, "HomeContent").$$render($$result, {}, {}, {})} ${validate_component(HomeAbout, "HomeAbout").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};

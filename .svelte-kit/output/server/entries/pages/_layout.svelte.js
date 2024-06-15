import { c as create_ssr_component, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
const bgNoise = "/_app/immutable/assets/bgnoise.Bs-ruk1u.webp";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="grid-container pointer-events-none fixed inset-0 z-0" style="${"background-image: url(" + escape(bgNoise, true) + ")"}"></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="fixed bottom-0 z-20 w-full border-t-4 border-pink-600 bg-gray-900 p-4 text-center text-white" data-svelte-h="svelte-14tokr1">© Copyright 1985 Josh Lopez.</footer>`;
});
const css = {
  code: "@media(max-width: 768px){.nav-menu.svelte-mjmoau.svelte-mjmoau{flex-direction:column;background-color:#1a202c;position:absolute;top:100%;right:16px;width:auto;padding:1rem}.nav-menu.svelte-mjmoau a.svelte-mjmoau{margin-bottom:0.5rem}}",
  map: '{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script>\\n  let menuOpen = false;\\n\\n  function toggleMenu() {\\n    menuOpen = !menuOpen;\\n  }\\n<\/script>\\n\\n<header\\n  class=\\"fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white\\"\\n>\\n  <a href=\\"/\\"><h1 class=\\"text-4xl\\">Josh Lopez</h1></a>\\n  <button on:click={toggleMenu} class=\\"text-pink-600 md:hidden\\">\\n    <svg\\n      class=\\"h-8 w-8\\"\\n      fill=\\"none\\"\\n      stroke=\\"currentColor\\"\\n      viewBox=\\"0 0 24 24\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n    >\\n      <path\\n        stroke-linecap=\\"round\\"\\n        stroke-linejoin=\\"round\\"\\n        stroke-width=\\"2\\"\\n        d=\\"M4 6h16M4 12h16M4 18h16\\"\\n      ></path>\\n    </svg>\\n  </button>\\n  <nav\\n    class={`nav-menu ${menuOpen ? \\"\\" : \\"hidden\\"} flex rounded-b-md md:flex md:space-x-4`}\\n    aria-label=\\"Main Navigation\\"\\n  >\\n    <a\\n      href=\\"/videos\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Videos</a\\n    >\\n    <a\\n      href=\\"/writings\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Writings</a\\n    >\\n    <a\\n      href=\\"/projects\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Projects</a\\n    >\\n    <a\\n      href=\\"/connect\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Connect</a\\n    >\\n  </nav>\\n</header>\\n\\n<style>\\n  @media (max-width: 768px) {\\n    .nav-menu {\\n      flex-direction: column;\\n      background-color: #1a202c; /* Same as the header background */\\n      position: absolute;\\n      top: 100%;\\n      right: 16px;\\n      width: auto;\\n      padding: 1rem;\\n    }\\n\\n    .nav-menu a {\\n      margin-bottom: 0.5rem;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwDE,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,cAAc,CAAE,MAAM,CACtB,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACX,CAEA,uBAAS,CAAC,eAAE,CACV,aAAa,CAAE,MACjB,CACF"}'
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white"><a href="/" data-svelte-h="svelte-uwitc5"><h1 class="text-4xl">Josh Lopez</h1></a> <button class="text-pink-600 md:hidden" data-svelte-h="svelte-6nxtal"><svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <nav class="${escape(null_to_empty(`nav-menu ${"hidden"} flex rounded-b-md md:flex md:space-x-4`), true) + " svelte-mjmoau"}" aria-label="Main Navigation"><a href="/videos" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-1tghdp9">Videos</a> <a href="/writings" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-19akqof">Writings</a> <a href="/projects" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-wvl4ad">Projects</a> <a href="/connect" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-1ika4j1">Connect</a></nav> </header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main class="relative z-10 w-screen overflow-hidden p-8 pt-24 text-gray-200 md:pt-32">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

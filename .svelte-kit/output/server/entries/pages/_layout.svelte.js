import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="grid-container pointer-events-none fixed inset-0 z-0"></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="bg-gray-900 text-white border-t-4 border-pink-600 p-4 text-center fixed bottom-0 w-full z-20" data-svelte-h="svelte-1dji289">© Copyright 1985 Josh Lopez.</footer>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header class="bg-gray-900 text-white border-b-4 border-pink-600 p-4 text-center fixed top-0 w-full z-20" data-svelte-h="svelte-15bcbbt"><h1 class="text-4xl">Josh Lopez</h1> <nav class="mt-4"><a href="/" class="text-pink-600 hover:text-teal-400 mx-4 glow-on-hover">Home</a> <a href="/videos" class="text-pink-600 hover:text-teal-400 mx-4 glow-on-hover">Videos</a> <a href="/writings" class="text-pink-600 hover:text-teal-400 mx-4 glow-on-hover">Writings</a> <a href="/projects" class="text-pink-600 hover:text-teal-400 mx-4 glow-on-hover">Projects</a> <a href="/connect" class="text-pink-600 hover:text-teal-400 mx-4 glow-on-hover">Connect</a></nav></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main class="text-gray-200 p-8 relative z-10 pt-32">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};

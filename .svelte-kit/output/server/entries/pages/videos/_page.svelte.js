import { c as create_ssr_component, j as each, i as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { R as RetroButton } from "../../../chunks/RetroButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let videos = [];
  return `<div class="mx-auto max-w-4xl"><section class="section-glass relative mb-32 mt-3 gap-4 rounded-md p-8 text-white"><h1 class="mb-6 text-4xl font-bold" data-svelte-h="svelte-bwqu26">Videos</h1>  <div class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 md:grid-cols-3">${each(videos, (video) => {
    return `<div class="relative flex flex-col gap-3 rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0"><div><img${add_attribute("src", video.thumbnail, 0)}${add_attribute("alt", video.title, 0)} class="mb-3 h-auto w-full rounded-md object-cover object-top shadow-2xl"></div> <h2 class="text-1xl">${escape(video.title)}</h2>  <div class="mt-auto">${validate_component(RetroButton, "RetroButton").$$render(
      $$result,
      {
        url: video.url,
        label: "Watch Video",
        size: "200px"
      },
      {},
      {}
    )}</div> </div>`;
  })}</div></section></div>`;
});
export {
  Page as default
};

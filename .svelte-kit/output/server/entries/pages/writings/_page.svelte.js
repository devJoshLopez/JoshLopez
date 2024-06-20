import { c as create_ssr_component, j as each, e as escape, i as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { R as RetroButton } from "../../../chunks/RetroButton.js";
function randomSpan() {
  const spans = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-2",
    "col-span-2 row-span-2"
  ];
  return spans[Math.floor(Math.random() * spans.length)];
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mx-auto max-w-4xl px-4"><section class="section-glass relative mb-32 mt-3 grid grid-flow-row-dense auto-rows-auto grid-cols-1 gap-4 rounded-md p-8 text-white sm:grid-cols-2 lg:grid-cols-3"><h1 class="col-span-full text-4xl font-bold" data-svelte-h="svelte-1itn174">Writings</h1> ${each(data.posts, (post) => {
    return `<div class="${"relative rounded-md bg-gray-800 p-4 " + escape(randomSpan(), true)}">${post.image ? `<div class="relative mb-6 overflow-hidden rounded-md">${post.categories ? `<div class="absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2">${each(post.categories, (category) => {
      return `<span class="mr-2 whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black">${escape(category)} </span>`;
    })} </div>` : ``} <img${add_attribute(
      "src",
      post.image.startsWith(".") ? post.image.substring(1) : post.image,
      0
    )}${add_attribute("alt", post.title, 0)} class="h-48 w-full rounded-md object-cover"> </div>` : ``} <h2 class="mt-4 text-xl font-bold">${escape(post.title)}</h2> <p class="mt-2">${escape(post.description)}</p>  <div class="mt-4">${validate_component(RetroButton, "RetroButton").$$render(
      $$result,
      {
        url: `/writings/${post.slug}`,
        label: "Read more"
      },
      {},
      {}
    )}</div> </div>`;
  })}</section> </div>`;
});
export {
  Page as default
};

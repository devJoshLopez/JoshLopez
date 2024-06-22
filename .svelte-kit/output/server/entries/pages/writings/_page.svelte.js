import { c as create_ssr_component, j as each, e as escape, i as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { R as RetroButton } from "../../../chunks/RetroButton.js";
const vhsOverlay = "/_app/immutable/assets/vhs-overlay.DbwPLnA4.png";
const css = {
  code: '.post-title.svelte-1arxdyr{font-family:"Teenage Dreams Bold", sans-serif;line-height:1.2;text-transform:capitalize;filter:drop-shadow(2px 3px 0 #000000)}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import RetroButton from \\"$lib/components/fun/RetroButton.svelte\\";\\n  import vhsOverlay from \\"$lib/images/vhs-overlay.png\\";\\n  export let data;\\n\\n  /**\\n   * @param {any[]} posts\\n   */\\n  function getLayout(posts) {\\n    const count = posts.length;\\n    if (count === 1) return [\\"md:col-span-3\\"];\\n    if (count === 2) return [\\"md:col-span-2\\", \\"md:col-span-1\\"];\\n    if (count === 3) return [\\"md:col-span-2\\", \\"md:col-span-1\\", \\"md:col-span-3\\"];\\n    if (count === 4)\\n      return [\\n        \\"md:col-span-2\\",\\n        \\"md:col-span-1\\",\\n        \\"md:col-span-1\\",\\n        \\"md:col-span-2\\",\\n      ];\\n    const basePattern = [\\n      \\"md:col-span-2\\",\\n      \\"md:col-span-1\\",\\n      \\"md:col-span-1\\",\\n      \\"md:col-span-2\\",\\n      \\"md:col-span-1\\",\\n    ];\\n    return posts.map((_, index) => basePattern[index % basePattern.length]);\\n  }\\n\\n  $: layout = getLayout(data.posts);\\n<\/script>\\n\\n<div class=\\"mx-auto max-w-4xl\\">\\n  <section\\n    class=\\"section-glass relative mb-32 mt-3 grid grid-cols-1 gap-4 rounded-md p-8 text-white max-md:gap-16 md:grid-cols-3\\"\\n  >\\n    <h1 class=\\"col-span-full mb-6 text-4xl font-bold\\">Writings</h1>\\n    {#each data.posts as post, index}\\n      <div\\n        class=\\"relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0 {layout[\\n          index\\n        ]}\\"\\n      >\\n        {#if post.image}\\n          <div\\n            class=\\"relative mb-4 flex-shrink-0 overflow-hidden rounded-md\\"\\n            style=\\"padding-top: 56.25%;\\"\\n          >\\n            {#if post.categories}\\n              <div\\n                class=\\"absolute left-2 top-2 z-10 flex flex-wrap items-center gap-2\\"\\n              >\\n                {#each post.categories as category}\\n                  <span\\n                    class=\\"whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black\\"\\n                  >\\n                    {category}\\n                  </span>\\n                {/each}\\n              </div>\\n            {/if}\\n            <img\\n              src={post.image.startsWith(\\".\\")\\n                ? post.image.substring(1)\\n                : post.image}\\n              alt={post.title}\\n              class=\\"absolute left-0 top-0 h-full w-full rounded-md object-cover\\"\\n            />\\n            <div\\n              class=\\"pointer-events-none absolute left-0 top-0 h-full w-full rounded-md opacity-30 mix-blend-overlay\\"\\n              style=\\"background-image: url({vhsOverlay}); background-size: cover;\\"\\n            ></div>\\n          </div>\\n        {/if}\\n\\n        <h2 class=\\"post-title mb-2 text-2xl font-bold\\">{post.title}</h2>\\n        <p class=\\"mb-4 flex-grow\\">\\n          {post.description}\\n        </p>\\n        <div class=\\"mt-auto\\">\\n          <RetroButton url={`/writings/${post.slug}`} label=\\"Read more\\" />\\n        </div>\\n      </div>\\n    {/each}\\n  </section>\\n</div>\\n\\n<style>\\n  .post-title {\\n    font-family: \\"Teenage Dreams Bold\\", sans-serif;\\n    line-height: 1.2;\\n    text-transform: capitalize;\\n    filter: drop-shadow(2px 3px 0 #000000);\\n  }\\n</style>\\n"],"names":[],"mappings":"AAyFE,0BAAY,CACV,WAAW,CAAE,qBAAqB,CAAC,CAAC,UAAU,CAC9C,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,UAAU,CAC1B,MAAM,CAAE,YAAY,GAAG,CAAC,GAAG,CAAC,CAAC,CAAC,OAAO,CACvC"}'
};
function getLayout(posts) {
  const count = posts.length;
  if (count === 1)
    return ["md:col-span-3"];
  if (count === 2)
    return ["md:col-span-2", "md:col-span-1"];
  if (count === 3)
    return ["md:col-span-2", "md:col-span-1", "md:col-span-3"];
  if (count === 4)
    return ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];
  const basePattern = [
    "md:col-span-2",
    "md:col-span-1",
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-1"
  ];
  return posts.map((_, index) => basePattern[index % basePattern.length]);
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let layout;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  layout = getLayout(data.posts);
  return `<div class="mx-auto max-w-4xl"><section class="section-glass relative mb-32 mt-3 grid grid-cols-1 gap-4 rounded-md p-8 text-white max-md:gap-16 md:grid-cols-3"><h1 class="col-span-full mb-6 text-4xl font-bold" data-svelte-h="svelte-8amls2">Writings</h1> ${each(data.posts, (post, index) => {
    return `<div class="${"relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0 " + escape(layout[index], true) + " svelte-1arxdyr"}">${post.image ? `<div class="relative mb-4 flex-shrink-0 overflow-hidden rounded-md" style="padding-top: 56.25%;">${post.categories ? `<div class="absolute left-2 top-2 z-10 flex flex-wrap items-center gap-2">${each(post.categories, (category) => {
      return `<span class="whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black">${escape(category)} </span>`;
    })} </div>` : ``} <img${add_attribute(
      "src",
      post.image.startsWith(".") ? post.image.substring(1) : post.image,
      0
    )}${add_attribute("alt", post.title, 0)} class="absolute left-0 top-0 h-full w-full rounded-md object-cover"> <div class="pointer-events-none absolute left-0 top-0 h-full w-full rounded-md opacity-30 mix-blend-overlay" style="${"background-image: url(" + escape(vhsOverlay, true) + "); background-size: cover;"}"></div> </div>` : ``} <h2 class="post-title mb-2 text-2xl font-bold svelte-1arxdyr">${escape(post.title)}</h2> <p class="mb-4 flex-grow">${escape(post.description)}</p> <div class="mt-auto">${validate_component(RetroButton, "RetroButton").$$render(
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

import { c as create_ssr_component, e as escape, i as add_attribute, j as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
const css = {
  code: ".categories.svelte-1cryy7w{display:flex;gap:0.5rem}.category.svelte-1cryy7w{background-color:rgba(17, 24, 39, 0.42);color:#8f8f8f;border-radius:0.25rem;padding:0.25rem 0.5rem}.prose h1{text-transform:uppercase}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  export let data;\\n<\/script>\\n\\n<svelte:head>\\n  <title>{data.meta.title}</title>\\n  <meta property=\\"og:type\\" content=\\"article\\" />\\n  <meta property=\\"og:title\\" content={data.meta.title} />\\n</svelte:head>\\n\\n<article class=\\"max-w-4xl mx-auto px-4\\">\\n  <hgroup class=\\"mb-4\\">\\n    <h1 class=\\"text-4xl\\">\\n      {data.meta.title}\\n    </h1>\\n    <p class=\\"text-gray-600\\">\\n      Published at {data.meta.date}\\n    </p>\\n  </hgroup>\\n\\n  <div class=\\"categories mb-4\\">\\n    {#each data.meta.categories as category}\\n      <span class=\\"category\\">\\n        &num;{category}\\n      </span>\\n    {/each}\\n  </div>\\n\\n  <div class=\\"prose\\">\\n    <svelte:component this={data.content} />\\n  </div>\\n</article>\\n\\n<pre>\\n    {JSON.stringify(data, null, 2)}\\n</pre>\\n\\n<style>\\n  .categories {\\n    display: flex;\\n    gap: 0.5rem;\\n  }\\n\\n  .category {\\n    background-color: rgba(17, 24, 39, 0.42);\\n    color: #8f8f8f;\\n    border-radius: 0.25rem;\\n    padding: 0.25rem 0.5rem;\\n  }\\n\\n  :global(.prose h1) {\\n    text-transform: uppercase;\\n  }\\n</style>\\n"],"names":[],"mappings":"AAsCE,0BAAY,CACV,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,MACP,CAEA,wBAAU,CACR,gBAAgB,CAAE,KAAK,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,EAAE,CAAC,CAAC,IAAI,CAAC,CACxC,KAAK,CAAE,OAAO,CACd,aAAa,CAAE,OAAO,CACtB,OAAO,CAAE,OAAO,CAAC,MACnB,CAEQ,SAAW,CACjB,cAAc,CAAE,SAClB"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1hjcmj9_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-1hjcmj9_END -->`, ""} <article class="max-w-4xl mx-auto px-4"><hgroup class="mb-4"><h1 class="text-4xl">${escape(data.meta.title)}</h1> <p class="text-gray-600">Published at ${escape(data.meta.date)}</p></hgroup> <div class="categories mb-4 svelte-1cryy7w">${each(data.meta.categories, (category) => {
    return `<span class="category svelte-1cryy7w">#${escape(category)} </span>`;
  })}</div> <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article> <pre>    ${escape(JSON.stringify(data, null, 2))}
</pre>`;
});
export {
  Page as default
};

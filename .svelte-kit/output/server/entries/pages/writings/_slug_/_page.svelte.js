import { c as create_ssr_component, e as escape, i as add_attribute, j as each, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { R as RetroButton } from "../../../../chunks/RetroButton.js";
const css = {
  code: ".prose h1,.prose h2,.prose h3{text-transform:uppercase;margin-top:2rem;margin-bottom:0.3rem}.prose h1{font-size:3.75rem;line-height:1}.prose h2{font-size:2.25rem;line-height:2.5rem}.prose h3{font-size:1.5rem;line-height:1.75rem}.prose h4{font-size:1.25rem}.prose h5{font-size:1rem}.prose p{margin-bottom:1.5rem}.prose a{color:#fbbf24;text-decoration:underline}.prose a:hover{text-decoration:none}.prose img{max-width:100%;height:auto}.prose blockquote{border-left:4px solid #fbbf24;padding-left:1rem;margin-left:0}.prose pre{background-color:#1a202c;color:#fbbf24;padding:1rem;border-radius:0.5rem;overflow-x:auto}.prose code{background-color:#1a202c;color:#fbbf24;padding:0.25rem 0.5rem;border-radius:0.25rem}.prose ul{list-style-type:disc;margin-left:1.5rem}.prose ol{list-style-type:decimal;margin-left:1.5rem}.prose li{margin-bottom:0.5rem}.prose em{font-style:italic;color:#fbbf24;text-shadow:0 0 0.1rem #000000}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n  import RetroButton from \\"$lib/components/fun/RetroButton.svelte\\";\\n\\n  export let data;\\n<\/script>\\n\\n<svelte:head>\\n  <title>{data.meta.title}</title>\\n  <meta property=\\"og:type\\" content=\\"article\\" />\\n  <meta property=\\"og:title\\" content={data.meta.title} />\\n</svelte:head>\\n\\n<div class=\\"mx-auto max-w-4xl\\">\\n  <section class=\\"section-glass relative mb-20 mt-3 rounded-md p-8 text-white\\">\\n    <article>\\n      {#if data.meta.image}\\n        <div class=\\"relative mb-6 h-80 overflow-hidden rounded-md\\">\\n          {#if data.meta.categories}\\n            <div\\n              class=\\"absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2\\"\\n            >\\n              {#each data.meta.categories as category}\\n                <span\\n                  class=\\"mr-2 whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black\\"\\n                >\\n                  {category}\\n                </span>\\n              {/each}\\n            </div>\\n          {/if}\\n          <img\\n            src={data.meta.image.startsWith(\\".\\")\\n              ? data.meta.image.substring(1)\\n              : data.meta.image}\\n            alt={data.meta.title}\\n            class=\\"h-full w-full object-cover object-center shadow-2xl\\"\\n          />\\n        </div>\\n      {/if}\\n\\n      <hgroup class=\\"mb-4\\">\\n        <h1 class=\\"text-6xl\\">\\n          {data.meta.title}\\n        </h1>\\n        <p class=\\"text-gray-600\\">\\n          Published on {data.meta.date}\\n        </p>\\n      </hgroup>\\n\\n      <div class=\\"prose\\">\\n        <svelte:component this={data.content} />\\n      </div>\\n    </article>\\n  </section>\\n\\n  <div class=\\"mb-20 flex w-full justify-center\\">\\n    <RetroButton url=\\"/writings\\" label=\\"Back to Writings\\" size=\\"252px\\" />\\n  </div>\\n</div>\\n\\n<style>\\n  :global(.prose h1),\\n  :global(.prose h2),\\n  :global(.prose h3) {\\n    text-transform: uppercase;\\n    margin-top: 2rem;\\n    margin-bottom: 0.3rem;\\n  }\\n\\n  :global(.prose h1) {\\n    font-size: 3.75rem;\\n    line-height: 1;\\n  }\\n  :global(.prose h2) {\\n    font-size: 2.25rem;\\n    line-height: 2.5rem;\\n  }\\n  :global(.prose h3) {\\n    font-size: 1.5rem;\\n    line-height: 1.75rem;\\n  }\\n  :global(.prose h4) {\\n    font-size: 1.25rem;\\n  }\\n  :global(.prose h5) {\\n    font-size: 1rem;\\n  }\\n\\n  :global(.prose p) {\\n    margin-bottom: 1.5rem;\\n  }\\n\\n  :global(.prose a) {\\n    color: #fbbf24;\\n    text-decoration: underline;\\n  }\\n\\n  :global(.prose a:hover) {\\n    text-decoration: none;\\n  }\\n\\n  :global(.prose img) {\\n    max-width: 100%;\\n    height: auto;\\n  }\\n\\n  :global(.prose blockquote) {\\n    border-left: 4px solid #fbbf24;\\n    padding-left: 1rem;\\n    margin-left: 0;\\n  }\\n\\n  :global(.prose pre) {\\n    background-color: #1a202c;\\n    color: #fbbf24;\\n    padding: 1rem;\\n    border-radius: 0.5rem;\\n    overflow-x: auto;\\n  }\\n\\n  :global(.prose code) {\\n    background-color: #1a202c;\\n    color: #fbbf24;\\n    padding: 0.25rem 0.5rem;\\n    border-radius: 0.25rem;\\n  }\\n\\n  :global(.prose ul) {\\n    list-style-type: disc;\\n    margin-left: 1.5rem;\\n  }\\n\\n  :global(.prose ol) {\\n    list-style-type: decimal;\\n    margin-left: 1.5rem;\\n  }\\n\\n  :global(.prose li) {\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  :global(.prose em) {\\n    font-style: italic;\\n    color: #fbbf24;\\n    text-shadow: 0 0 0.1rem #000000;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA6DU,SAAU,CACV,SAAU,CACV,SAAW,CACjB,cAAc,CAAE,SAAS,CACzB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,MACjB,CAEQ,SAAW,CACjB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,CACf,CACQ,SAAW,CACjB,SAAS,CAAE,OAAO,CAClB,WAAW,CAAE,MACf,CACQ,SAAW,CACjB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,OACf,CACQ,SAAW,CACjB,SAAS,CAAE,OACb,CACQ,SAAW,CACjB,SAAS,CAAE,IACb,CAEQ,QAAU,CAChB,aAAa,CAAE,MACjB,CAEQ,QAAU,CAChB,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,SACnB,CAEQ,cAAgB,CACtB,eAAe,CAAE,IACnB,CAEQ,UAAY,CAClB,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,IACV,CAEQ,iBAAmB,CACzB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,CACf,CAEQ,UAAY,CAClB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,MAAM,CACrB,UAAU,CAAE,IACd,CAEQ,WAAa,CACnB,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,OAAO,CAAC,MAAM,CACvB,aAAa,CAAE,OACjB,CAEQ,SAAW,CACjB,eAAe,CAAE,IAAI,CACrB,WAAW,CAAE,MACf,CAEQ,SAAW,CACjB,eAAe,CAAE,OAAO,CACxB,WAAW,CAAE,MACf,CAEQ,SAAW,CACjB,aAAa,CAAE,MACjB,CAEQ,SAAW,CACjB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,MAAM,CAAC,OAC1B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1hjcmj9_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", data.meta.title, 0)}><!-- HEAD_svelte-1hjcmj9_END -->`, ""} <div class="mx-auto max-w-4xl"><section class="section-glass relative mb-20 mt-3 rounded-md p-8 text-white"><article>${data.meta.image ? `<div class="relative mb-6 h-80 overflow-hidden rounded-md">${data.meta.categories ? `<div class="absolute left-2 top-2 z-10 flex w-full flex-wrap items-center gap-2">${each(data.meta.categories, (category) => {
    return `<span class="mr-2 whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black">${escape(category)} </span>`;
  })}</div>` : ``} <img${add_attribute(
    "src",
    data.meta.image.startsWith(".") ? data.meta.image.substring(1) : data.meta.image,
    0
  )}${add_attribute("alt", data.meta.title, 0)} class="h-full w-full object-cover object-center shadow-2xl"></div>` : ``} <hgroup class="mb-4"><h1 class="text-6xl">${escape(data.meta.title)}</h1> <p class="text-gray-600">Published on ${escape(data.meta.date)}</p></hgroup> <div class="prose">${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div></article></section> <div class="mb-20 flex w-full justify-center">${validate_component(RetroButton, "RetroButton").$$render(
    $$result,
    {
      url: "/writings",
      label: "Back to Writings",
      size: "252px"
    },
    {},
    {}
  )}</div> </div>`;
});
export {
  Page as default
};

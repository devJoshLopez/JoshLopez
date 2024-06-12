import { g as getContext, c as create_ssr_component, d as subscribe, e as escape } from "../../chunks/ssr.js";
import "../../chunks/exports.js";
import "devalue";
function get(key, parse = JSON.parse) {
  try {
    return parse(sessionStorage[key]);
  } catch {
  }
}
const SNAPSHOT_KEY = "sveltekit:snapshot";
const SCROLL_KEY = "sveltekit:scroll";
get(SCROLL_KEY) ?? {};
get(SNAPSHOT_KEY) ?? {};
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const css = {
  code: ".error.svelte-lsmpu9{display:flex;justify-content:center;align-items:center;height:100%;font-size:2rem}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n    import { page } from '$app/stores';\\n<\/script>\\n\\n<div class=\\"error\\">\\n    <h1>{$page.status}: {$page.error?.message}</h1>\\n</div>\\n\\n<style>\\n    .error {\\n        display: flex;\\n        justify-content: center;\\n        align-items: center;\\n        height: 100%;\\n        font-size: 2rem;\\n    }\\n</style>"],"names":[],"mappings":"AASI,oBAAO,CACH,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IACf"}`
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="error svelte-lsmpu9"><h1>${escape($page.status)}: ${escape($page.error?.message)}</h1> </div>`;
});
export {
  Error$1 as default
};

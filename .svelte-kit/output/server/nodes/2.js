import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Cgva2CYW.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.Cdh9PmV-.js","_app/immutable/chunks/modalStore.DKNI9u9Y.js","_app/immutable/chunks/index.Bro0tGjg.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.ClLmapaq.css"];
export const fonts = [];

import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BsQCCpio.js","_app/immutable/chunks/scheduler.Bmh_k5fe.js","_app/immutable/chunks/index.BKbk7uBP.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/index.BDRQX5nV.js"];
export const stylesheets = ["_app/immutable/assets/2.Bswxu_4T.css"];
export const fonts = [];

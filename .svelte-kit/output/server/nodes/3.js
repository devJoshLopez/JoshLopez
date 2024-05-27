import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.yVMnq9dK.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.BVyiaWq_.js","_app/immutable/chunks/paths.BVEtIFn6.js"];
export const stylesheets = [];
export const fonts = [];

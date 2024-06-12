import * as universal from '../entries/pages/writings/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.RfsDGxFU.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.ZRKh8J5S.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/7.B8k6o8WA.css"];
export const fonts = [];

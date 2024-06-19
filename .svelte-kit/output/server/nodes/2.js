import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.Bk4Pa3gv.js","_app/immutable/chunks/scheduler.CG3d4uC7.js","_app/immutable/chunks/index.CB3eX9QC.js","_app/immutable/chunks/VideoPlayer.BLM2l8hd.js","_app/immutable/chunks/index.BNrqEaC0.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.DRIdpDqR.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css"];
export const fonts = [];

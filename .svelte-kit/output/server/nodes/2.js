import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CH6BZI2T.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js","_app/immutable/chunks/VideoPlayer.Bsz9-ghZ.js","_app/immutable/chunks/index.CBTiSKxm.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.DRIdpDqR.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css"];
export const fonts = [];

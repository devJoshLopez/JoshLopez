import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BmyTMPLX.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js","_app/immutable/chunks/VideoPlayer.BOeCsEuZ.js","_app/immutable/chunks/index.YqLmEJqg.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/RetroButton.C4x639Yv.js"];
export const stylesheets = ["_app/immutable/assets/2.CgtjwWvK.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css","_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

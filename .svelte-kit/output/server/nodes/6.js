import * as universal from '../entries/pages/writings/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+page.js";
export const imports = ["_app/immutable/nodes/6.Cqe04Kcw.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.ZNtmCr2w.js","_app/immutable/chunks/RetroButton.DDUIwJA_.js","_app/immutable/chunks/vhs-overlay.CwZ0r_dR.js"];
export const stylesheets = ["_app/immutable/assets/4.DLS8MOib.css","_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

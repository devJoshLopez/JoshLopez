import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.C0x79ji8.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js","_app/immutable/chunks/index.BI2zJIZs.js","_app/immutable/chunks/index.YqLmEJqg.js","_app/immutable/chunks/vhs-overlay.CwZ0r_dR.js","_app/immutable/chunks/RetroButton.DvEY9uQB.js"];
export const stylesheets = ["_app/immutable/assets/2.D6yf5UJ4.css","_app/immutable/assets/index.DnFM-b4H.css","_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

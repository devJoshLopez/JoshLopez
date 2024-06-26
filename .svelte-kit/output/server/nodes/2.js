import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DbebSEYH.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.DRR7xu6-.js","_app/immutable/chunks/index.BGlxmFLo.js","_app/immutable/chunks/index.YqLmEJqg.js","_app/immutable/chunks/vhs-overlay.CwZ0r_dR.js","_app/immutable/chunks/RetroButton.CW5aqiH6.js"];
export const stylesheets = ["_app/immutable/assets/2.xkud_nH9.css","_app/immutable/assets/index.BhS5JRwh.css","_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

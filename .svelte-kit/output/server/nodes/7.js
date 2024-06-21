import * as universal from '../entries/pages/writings/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.CmDX5Zuc.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js","_app/immutable/chunks/RetroButton.DvEY9uQB.js"];
export const stylesheets = ["_app/immutable/assets/7.BvRrVI78.css","_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

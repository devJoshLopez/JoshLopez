import * as universal from '../entries/pages/writings/_slug_/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/7.CtpGpcFg.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.CG3d4uC7.js","_app/immutable/chunks/index.D9ahzFLw.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/7.BfyLWAo0.css"];
export const fonts = [];

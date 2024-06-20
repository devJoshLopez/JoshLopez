import * as universal from '../entries/pages/writings/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+page.js";
export const imports = ["_app/immutable/nodes/6.XikRXaFu.js","_app/immutable/chunks/scheduler.CG3d4uC7.js","_app/immutable/chunks/index.D9ahzFLw.js"];
export const stylesheets = [];
export const fonts = [];

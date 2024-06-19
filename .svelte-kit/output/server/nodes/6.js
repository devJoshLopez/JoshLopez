import * as universal from '../entries/pages/writings/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+page.js";
export const imports = ["_app/immutable/nodes/6.j7ECQiXx.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js"];
export const stylesheets = [];
export const fonts = [];

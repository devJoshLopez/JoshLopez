import * as universal from '../entries/pages/writings/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+page.js";
export const imports = ["_app/immutable/nodes/6.EAMEyXdv.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.Fk4y0WPQ.js"];
export const stylesheets = [];
export const fonts = [];

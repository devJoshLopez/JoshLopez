import * as universal from '../entries/pages/writings/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+page.js";
export const imports = ["_app/immutable/nodes/6.DRSNzf4u.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.TWFM-j0h.js"];
export const stylesheets = [];
export const fonts = [];

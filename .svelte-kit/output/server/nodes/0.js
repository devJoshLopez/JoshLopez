import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BB9JCt0p.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.UQYxIaCD.js","_app/immutable/chunks/index.bkSADwua.js","_app/immutable/chunks/index.YqLmEJqg.js","_app/immutable/chunks/vhs-overlay.CwZ0r_dR.js"];
export const stylesheets = ["_app/immutable/assets/0.7WXZ5Ekq.css","_app/immutable/assets/index.BhS5JRwh.css"];
export const fonts = [];

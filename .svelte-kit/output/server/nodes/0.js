import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DopsxWMU.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Gfjij8qg.js","_app/immutable/chunks/paths.CMsQ-vnx.js"];
export const stylesheets = ["_app/immutable/assets/0.R-Lo9YzY.css"];
export const fonts = [];

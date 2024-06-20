import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.z3JUx-0w.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js","_app/immutable/chunks/VideoPlayer.BOeCsEuZ.js","_app/immutable/chunks/index.YqLmEJqg.js"];
export const stylesheets = ["_app/immutable/assets/0.C2oJxap1.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css"];
export const fonts = [];

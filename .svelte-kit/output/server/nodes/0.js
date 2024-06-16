import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D53YqpI_.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.Cdh9PmV-.js","_app/immutable/chunks/modalStore.DKNI9u9Y.js","_app/immutable/chunks/index.Bro0tGjg.js"];
export const stylesheets = ["_app/immutable/assets/0.DK4fvHp5.css"];
export const fonts = [];

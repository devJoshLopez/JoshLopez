import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.hn6VoPah.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.Fk4y0WPQ.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = ["_app/immutable/assets/2.BguONZaQ.css"];
export const fonts = [];

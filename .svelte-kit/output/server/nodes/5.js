

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B7dihn9T.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CuXz7UdB.js"];
export const stylesheets = [];
export const fonts = [];

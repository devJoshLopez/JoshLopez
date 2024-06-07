

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.B7dihn9T.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.CuXz7UdB.js"];
export const stylesheets = [];
export const fonts = [];

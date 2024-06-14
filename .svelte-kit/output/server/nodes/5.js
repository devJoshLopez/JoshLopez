

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B0eC-ple.js","_app/immutable/chunks/scheduler.Bmh_k5fe.js","_app/immutable/chunks/index.BKbk7uBP.js"];
export const stylesheets = [];
export const fonts = [];

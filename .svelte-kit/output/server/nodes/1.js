

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CYf8I3E8.js","_app/immutable/chunks/scheduler.CtbWrGNo.js","_app/immutable/chunks/index.DRXGOTEa.js","_app/immutable/chunks/entry.BUVpuQ2y.js"];
export const stylesheets = [];
export const fonts = [];

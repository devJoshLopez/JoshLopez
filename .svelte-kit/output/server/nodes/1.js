

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1._YxUalqI.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.DphpNzGg.js","_app/immutable/chunks/entry.qy7f59Qk.js"];
export const stylesheets = [];
export const fonts = [];

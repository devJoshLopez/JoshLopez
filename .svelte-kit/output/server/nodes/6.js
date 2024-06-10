

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.BAQXJnKg.js","_app/immutable/chunks/scheduler.Bv6yFrMh.js","_app/immutable/chunks/index.DphpNzGg.js"];
export const stylesheets = [];
export const fonts = [];

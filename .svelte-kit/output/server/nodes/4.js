

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DqrpzGKa.js","_app/immutable/chunks/scheduler.CG3d4uC7.js","_app/immutable/chunks/index.D9ahzFLw.js"];
export const stylesheets = [];
export const fonts = [];

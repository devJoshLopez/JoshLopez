

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.I46udUiE.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js"];
export const stylesheets = [];
export const fonts = [];

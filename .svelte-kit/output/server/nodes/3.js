

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.I46udUiE.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js"];
export const stylesheets = [];
export const fonts = [];

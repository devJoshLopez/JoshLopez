

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.I46udUiE.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js"];
export const stylesheets = [];
export const fonts = [];

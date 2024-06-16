

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ChOvocQJ.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.Cdh9PmV-.js"];
export const stylesheets = [];
export const fonts = [];

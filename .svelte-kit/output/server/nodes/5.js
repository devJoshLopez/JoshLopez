

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.ChOvocQJ.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.Cdh9PmV-.js"];
export const stylesheets = [];
export const fonts = [];

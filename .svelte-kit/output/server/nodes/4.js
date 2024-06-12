

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BIMGO67H.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.ZRKh8J5S.js"];
export const stylesheets = [];
export const fonts = [];

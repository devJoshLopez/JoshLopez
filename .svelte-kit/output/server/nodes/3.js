

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BIMGO67H.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.ZRKh8J5S.js"];
export const stylesheets = [];
export const fonts = [];

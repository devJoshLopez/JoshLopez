

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BIMGO67H.js","_app/immutable/chunks/scheduler.CPmbweew.js","_app/immutable/chunks/index.ZRKh8J5S.js"];
export const stylesheets = [];
export const fonts = [];

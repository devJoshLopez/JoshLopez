

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DB7713DY.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.BVyiaWq_.js","_app/immutable/chunks/index.M7WuUczP.js"];
export const stylesheets = ["_app/immutable/assets/2.Cs8KR-Bb.css"];
export const fonts = [];

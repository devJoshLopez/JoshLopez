

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9jBJU8NS.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Gfjij8qg.js","_app/immutable/chunks/entry.BbNv5aJG.js"];
export const stylesheets = [];
export const fonts = [];

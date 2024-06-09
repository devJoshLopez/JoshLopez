

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B6jdPlNu.js","_app/immutable/chunks/scheduler.Ce_0Mfso.js","_app/immutable/chunks/index.Gfjij8qg.js","_app/immutable/chunks/paths.D4JLd3a9.js"];
export const stylesheets = ["_app/immutable/assets/2.BstnU2TH.css"];
export const fonts = [];

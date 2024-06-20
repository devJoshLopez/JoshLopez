

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.VIgj0ki6.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js"];
export const stylesheets = [];
export const fonts = [];

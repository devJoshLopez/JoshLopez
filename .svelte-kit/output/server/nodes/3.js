

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.VIgj0ki6.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.Djk3OmZN.js"];
export const stylesheets = [];
export const fonts = [];

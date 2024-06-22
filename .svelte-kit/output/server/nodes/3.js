

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/connect/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.Bj209k8H.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.ZNtmCr2w.js"];
export const stylesheets = [];
export const fonts = [];

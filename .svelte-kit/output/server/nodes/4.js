

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.Bsa_qbzf.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.UQYxIaCD.js"];
export const stylesheets = [];
export const fonts = [];

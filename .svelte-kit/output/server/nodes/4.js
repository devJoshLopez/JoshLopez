

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.BY-r0dD7.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.tKwpkyaA.js","_app/immutable/chunks/RetroButton.h6n5BI52.js"];
export const stylesheets = ["_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];



export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/videos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.DItz8ubA.js","_app/immutable/chunks/scheduler.kLU6lpw6.js","_app/immutable/chunks/index.ZNtmCr2w.js","_app/immutable/chunks/RetroButton.DDUIwJA_.js"];
export const stylesheets = ["_app/immutable/assets/RetroButton.BLvV9hBT.css"];
export const fonts = [];

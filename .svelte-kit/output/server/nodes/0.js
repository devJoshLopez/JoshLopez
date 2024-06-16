import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DlExujDV.js","_app/immutable/chunks/scheduler.CG3d4uC7.js","_app/immutable/chunks/index.CB3eX9QC.js","_app/immutable/chunks/VideoPlayer.BLM2l8hd.js","_app/immutable/chunks/index.BNrqEaC0.js"];
export const stylesheets = ["_app/immutable/assets/0.DxJjwxvw.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css"];
export const fonts = [];

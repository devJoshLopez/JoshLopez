import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CzYIL09K.js","_app/immutable/chunks/scheduler.BLvUSRo-.js","_app/immutable/chunks/index.Dy_QpUvw.js","_app/immutable/chunks/VideoPlayer.Bsz9-ghZ.js","_app/immutable/chunks/index.CBTiSKxm.js"];
export const stylesheets = ["_app/immutable/assets/0.D5V-DLjc.css","_app/immutable/assets/VideoPlayer.DnFM-b4H.css"];
export const fonts = [];

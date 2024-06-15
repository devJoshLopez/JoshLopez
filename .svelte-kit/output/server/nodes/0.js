import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DG71cVT1.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.fMHAmEEo.js","_app/immutable/chunks/modalStore.D1hby5Np.js","_app/immutable/chunks/index.Bro0tGjg.js"];
export const stylesheets = ["_app/immutable/assets/0.DzNqNbxw.css"];
export const fonts = [];

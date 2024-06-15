import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.C_wxGdZk.js","_app/immutable/chunks/scheduler.CkB-c2t4.js","_app/immutable/chunks/index.fMHAmEEo.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/modalStore.D1hby5Np.js","_app/immutable/chunks/index.Bro0tGjg.js"];
export const stylesheets = ["_app/immutable/assets/2.D8EiEGSS.css"];
export const fonts = [];

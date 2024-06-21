import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const prerender = true;
async function load({ params }) {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/ai-mirror-to-our-humanity.md": () => import("../../../../chunks/ai-mirror-to-our-humanity.js"), "../../../posts/how-video-games-shaped-my-childhood.md": () => import("../../../../chunks/how-video-games-shaped-my-childhood.js"), "../../../posts/mythological-quests-support-training.md": () => import("../../../../chunks/mythological-quests-support-training.js") }), `../../../posts/${params.slug}.md`, 5);
    return {
      content: post.default,
      meta: post.metadata
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
export {
  load,
  prerender
};

import { error } from "@sveltejs/kit";

export const prerender = true;

/** @param {string | undefined} path */
function normalizeImagePath(path) {
  if (!path) return path;
  return path.startsWith(".") ? path.substring(1) : path;
}

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    const meta = /** @type {App.Post} */ (post.metadata);

    return {
      content: post.default,
      meta: { ...meta, image: normalizeImagePath(meta.image) },
    };
  } catch (e) {
    console.error(`Failed to load post "${params.slug}":`, e);
    error(404, `Could not find ${params.slug}`);
  }
}

import rawPosts from "../../posts.json";

/** @param {string | undefined} path */
function normalize(path) {
  if (!path) return path;
  return path.startsWith(".") ? path.substring(1) : path;
}

export function load() {
  const posts = /** @type {App.Post[]} */ (rawPosts).map((p) => ({
    ...p,
    image: normalize(p.image),
  }));
  return { posts };
}

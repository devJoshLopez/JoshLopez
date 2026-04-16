import posts from "../posts.json";

export function load() {
  return { posts: /** @type {App.Post[]} */ (posts) };
}

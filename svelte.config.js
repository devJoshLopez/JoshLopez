import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { getHighlighter } from "shiki";
import { resolve } from "path";
import fs from "fs";
import path from "path";

const postsPath = path.resolve('src', 'posts.json');
const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await getHighlighter({
        themes: ["synthwave-84"],
        langs: [
          "javascript",
          "html",
          "css",
          "json",
          "markdown",
          "text",
          "svelte",
        ],
      });
      await highlighter.loadLanguage("javascript");
      const html = escapeSvelte(
        highlighter.codeToHtml(code, { lang, theme: "synthwave-84" })
      );
      return `{@html \`${html}\`}`;
    },
  },
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    paths: {
      base: "",
    },
    prerender: {
      entries: posts.map((post) => `/writings/${post.slug}`),
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore errors related to /api/posts and /rss.xml
        if (path.startsWith('/api/posts') || path === '/rss.xml') {
          return;
        }
        // Throw an error for all other cases
        throw new Error(message);
      }
    },
  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  extensions: [".svelte", ".md"],
};

export default config;

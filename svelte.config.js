import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { escapeSvelte, mdsvex } from "mdsvex";
import { createHighlighter } from "shiki";
import { readFileSync } from "fs";

const posts = JSON.parse(
  readFileSync(new URL("./src/posts.json", import.meta.url), "utf-8"),
);

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: async (code, lang = "text") => {
      const highlighter = await createHighlighter({
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
        highlighter.codeToHtml(code, { lang, theme: "synthwave-84" }),
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
    },
  },
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  extensions: [".svelte", ".md"],
};

export default config;

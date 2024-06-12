import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "First Post",
  "description": "This is my first post",
  "date": "2024-4-14",
  "categories": ["Tech", "Programming"],
  "published": true
};
const First_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-lcwr7c">This is my first post</h2> <p data-svelte-h="svelte-tk0uc3">This is the content of my first post</p> <!-- HTML_TAG_START -->${`<pre class="shiki synthwave-84" style="background-color:#262335;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#FF7EDB">console</span><span style="color:#BBBBBB">.</span><span style="color:#36F9F6">log</span><span style="color:#BBBBBB">(</span><span style="color:#FF8B39">'Hello World'</span><span style="color:#BBBBBB">)</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
});
export {
  First_post as default,
  metadata
};

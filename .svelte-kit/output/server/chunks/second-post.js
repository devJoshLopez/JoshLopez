import { c as create_ssr_component } from "./ssr.js";
const metadata = {
  "title": "Second Post",
  "description": "This is my second post",
  "date": "2024-4-15",
  "categories": ["Tech", "Monkey Business"],
  "published": true
};
const Second_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-jtsrra">This is my second post</h2> <p data-svelte-h="svelte-ovvu7h">This is the content of my second post</p> <!-- HTML_TAG_START -->${`<pre class="shiki synthwave-84" style="background-color:#262335;color:#bbbbbb" tabindex="0"><code><span class="line"><span style="color:#FF7EDB">console</span><span style="color:#BBBBBB">.</span><span style="color:#36F9F6">log</span><span style="color:#BBBBBB">(</span><span style="color:#FF8B39">'Hello World 2'</span><span style="color:#BBBBBB">)</span></span></code></pre>`}<!-- HTML_TAG_END -->`;
});
export {
  Second_post as default,
  metadata
};

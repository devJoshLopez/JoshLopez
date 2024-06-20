import { c as create_ssr_component, i as add_attribute, e as escape } from "./ssr.js";
const css = {
  code: '.retro-wrapper.svelte-s4d38t.svelte-s4d38t{position:relative;display:inline-block}.retro-butn.svelte-s4d38t.svelte-s4d38t{text-transform:uppercase;background:0 0}.retro-butn.svelte-s4d38t .butn.svelte-s4d38t{-webkit-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box;display:inline-block;vertical-align:middle;padding-top:3px;position:relative;cursor:pointer;font-weight:600;font-family:inherit;font-style:normal;letter-spacing:0;text-rendering:auto;text-decoration:none;text-align:center;transition:opacity 0.1s ease-out;z-index:5;-webkit-font-smoothing:antialiased;width:200px;height:42px;font-size:15px;line-height:1.5;background-color:transparent;text-decoration-color:initial;border-color:initial;-webkit-tap-highlight-color:transparent;text-shadow:0 1px 1px rgba(255, 255, 255, 0.1)}.retro-butn.svelte-s4d38t .butn.svelte-s4d38t:hover{color:#ebf1f8;text-shadow:0 1px 1px rgba(255, 255, 255, 0.1)}.retro-butn.svelte-s4d38t .butn.svelte-s4d38t,.retro-butn.svelte-s4d38t .butn.svelte-s4d38t:focus{outline-color:0;outline-style:none;outline-width:0}.retro-butn.svelte-s4d38t .butn:hover .butn-content-inner.svelte-s4d38t:before{background-color:rgba(13, 13, 13, 0.1)}.retro-butn.svelte-s4d38t .butn.svelte-s4d38t:before{content:" ";background-color:rgba(13, 13, 13, 0.3);width:calc(100% - 2px);height:calc(100% - 4px);bottom:-1px;left:1px;position:absolute;border-radius:3px;z-index:1;transition:transform 0.12s ease-out,\n      background 0.12s ease-out}.retro-butn .butn.butn-left:before{transform:skewY(1deg) translate3d(0, -0.5px, 0)}.retro-butn.svelte-s4d38t .butn.butn-left .butn-content.svelte-s4d38t{transform:skewY(-1deg)}.retro-butn .butn.butn-right:before{transform:skewY(-1deg) translate3d(0, -0.5px, 0)}.retro-butn.svelte-s4d38t .butn.butn-right .butn-content.svelte-s4d38t{transform:skewY(1deg)}.retro-butn .butn.butn-center:before{transform:translate3d(0, -1px, 0)}.retro-butn.svelte-s4d38t .butn.butn-center .butn-content.svelte-s4d38t{transform:translate3d(0, 1px, 0)}.retro-butn.svelte-s4d38t .butn.butn-active .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t{transition:transform 0.12s ease-out,\n      background 0.12s ease-out,\n      color 0.12s ease-out;transform:translate3d(0, 2px, 0)}.retro-butn.svelte-s4d38t .butn.butn-active .butn-inner .butn-content-wrapper .butn-content .butn-content-inner.svelte-s4d38t{opacity:0.1}.retro-butn .butn.butn-active:before{transform:translate3d(0, -3px, 0)}.retro-butn.svelte-s4d38t .butn .butn-inner.svelte-s4d38t{display:block;height:100%}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper.svelte-s4d38t{position:relative;font-family:inherit;display:flex;align-items:stretch;width:100%;height:calc(100% - 3px);margin-top:-3px}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper.svelte-s4d38t:after,.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper.svelte-s4d38t:before,.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:after,.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:before,.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content .butn-content-inner.svelte-s4d38t:before{display:block;position:absolute;width:100%;height:100%;top:0;left:0}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper.svelte-s4d38t:before{background-image:initial;background-color:#752330;content:" ";border-radius:3px;top:auto;bottom:-3px;z-index:1;transition:transform 0.185s ease-out,\n      background 0.185s ease-out}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper.svelte-s4d38t:after{background-color:rgba(13, 13, 13, 0.15);content:" ";border-radius:3px;z-index:3;width:0;top:2px}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t{background-image:initial;background-color:#e94560;color:#ebf1f8;position:relative;display:flex;flex:1;align-items:center;justify-content:center;border-radius:3px;text-indent:0;z-index:3;overflow:hidden;padding:0 16px;transition:border 0.185s ease-out,\n      transform 0.185s ease-out,\n      background 0.185s ease-out,\n      color 0.185s ease-out}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:before,.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:after{display:flex;align-items:center;justify-content:center;color:rgba(255, 255, 255, 0.8);opacity:0;transition:transform 0.185s ease-out 0.05s,\n      opacity 0.1125s ease-out 0.05s}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:before{content:" ";transform:translate3d(0, 50%, 0)}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content.svelte-s4d38t:after{content:" ";transform:translate3d(0, -50%, 0)}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content .butn-content-inner.svelte-s4d38t{display:block;transition:opacity 75ms ease-out 0.1125s}.retro-butn.svelte-s4d38t .butn .butn-inner .butn-content-wrapper .butn-content .butn-content-inner.svelte-s4d38t:before{content:attr(data-label);padding-top:9.5px;font-size:0.8em;font-family:"Press Start 2P", cursive;letter-spacing:0.06em;transition:opacity 0.3s ease-out,\n      background-color 0.1125s ease-in;opacity:1;z-index:-1}',
  map: '{"version":3,"file":"RetroButton.svelte","sources":["RetroButton.svelte"],"sourcesContent":["<script>\\n  import { onMount } from \\"svelte\\";\\n\\n  export let url = \\"#\\";\\n  export let label = \\"Click Me\\";\\n  export let size = \\"200px\\";\\n\\n  onMount(() => {\\n    document.querySelectorAll(\\".butn\\").forEach((button) => {\\n      // Click events\\n      button.addEventListener(\\"mousedown\\", () =>\\n        button.classList.add(\\"butn-active\\"),\\n      );\\n      button.addEventListener(\\"mouseup\\", () =>\\n        button.classList.remove(\\"butn-active\\"),\\n      );\\n\\n      // Hover events\\n      button.addEventListener(\\"mouseleave\\", () => {\\n        button.classList.remove(\\n          \\"butn-center\\",\\n          \\"butn-right\\",\\n          \\"butn-left\\",\\n          \\"butn-active\\",\\n        );\\n      });\\n\\n      button.addEventListener(\\"mousemove\\", (e) => {\\n        const leftOffset = button.getBoundingClientRect().left;\\n        // @ts-ignore\\n        const butnWidth = button.offsetWidth;\\n        // @ts-ignore\\n        const myPosX = e.pageX;\\n        let newClass = \\"\\";\\n\\n        if (myPosX < leftOffset + 0.3 * butnWidth) {\\n          newClass = \\"butn-left\\";\\n        } else if (myPosX > leftOffset + 0.65 * butnWidth) {\\n          newClass = \\"butn-right\\";\\n        } else {\\n          newClass = \\"butn-center\\";\\n        }\\n\\n        button.classList.remove(\\"butn-center\\", \\"butn-right\\", \\"butn-left\\");\\n        button.classList.add(newClass);\\n      });\\n    });\\n  });\\n<\/script>\\n\\n<div class=\\"retro-wrapper\\">\\n  <div role=\\"button\\" class=\\"retro-butn\\">\\n    <!-- svelte-ignore a11y-missing-attribute -->\\n    <a class=\\"butn\\" href={url} style=\\"width: {size}\\">\\n      <span class=\\"butn-inner\\">\\n        <span class=\\"butn-content-wrapper\\">\\n          <span class=\\"butn-content\\">\\n            <span class=\\"butn-content-inner\\" data-label={label} />\\n          </span>\\n        </span>\\n      </span>\\n    </a>\\n  </div>\\n</div>\\n\\n<style>\\n  .retro-wrapper {\\n    position: relative;\\n    display: inline-block;\\n  }\\n  .retro-butn {\\n    text-transform: uppercase;\\n    background: 0 0;\\n  }\\n\\n  .retro-butn .butn {\\n    -webkit-user-select: none;\\n    -moz-user-select: none;\\n    user-select: none;\\n    box-sizing: border-box;\\n    display: inline-block;\\n    vertical-align: middle;\\n    padding-top: 3px;\\n    position: relative;\\n    cursor: pointer;\\n    font-weight: 600;\\n    font-family: inherit;\\n    font-style: normal;\\n    letter-spacing: 0;\\n    text-rendering: auto;\\n    text-decoration: none;\\n    text-align: center;\\n    transition: opacity 0.1s ease-out;\\n    z-index: 5;\\n    -webkit-font-smoothing: antialiased;\\n    width: 200px;\\n    height: 42px;\\n    font-size: 15px;\\n    line-height: 1.5;\\n    background-color: transparent;\\n    text-decoration-color: initial;\\n    border-color: initial;\\n    -webkit-tap-highlight-color: transparent;\\n    /* add a faint inner text shaddow to resemble depth */\\n    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\\n  }\\n  .retro-butn .butn:hover {\\n    color: #ebf1f8;\\n    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);\\n  }\\n  .retro-butn .butn,\\n  .retro-butn .butn:focus {\\n    outline-color: 0;\\n    outline-style: none;\\n    outline-width: 0;\\n  }\\n  .retro-butn .butn:hover .butn-content-inner:before {\\n    background-color: rgba(13, 13, 13, 0.1);\\n  }\\n  .retro-butn .butn:before {\\n    content: \\" \\";\\n    background-color: rgba(13, 13, 13, 0.3);\\n    width: calc(100% - 2px);\\n    height: calc(100% - 4px);\\n    bottom: -1px;\\n    left: 1px;\\n    position: absolute;\\n    border-radius: 3px;\\n    z-index: 1;\\n    transition:\\n      transform 0.12s ease-out,\\n      background 0.12s ease-out;\\n  }\\n  :global(.retro-butn .butn.butn-left:before) {\\n    transform: skewY(1deg) translate3d(0, -0.5px, 0);\\n  }\\n  .retro-butn .butn.butn-left .butn-content {\\n    transform: skewY(-1deg);\\n  }\\n  :global(.retro-butn .butn.butn-right:before) {\\n    transform: skewY(-1deg) translate3d(0, -0.5px, 0);\\n  }\\n  .retro-butn .butn.butn-right .butn-content {\\n    transform: skewY(1deg);\\n  }\\n  :global(.retro-butn .butn.butn-center:before) {\\n    transform: translate3d(0, -1px, 0);\\n  }\\n  .retro-butn .butn.butn-center .butn-content {\\n    transform: translate3d(0, 1px, 0);\\n  }\\n  .retro-butn\\n    .butn.butn-active\\n    .butn-inner\\n    .butn-content-wrapper\\n    .butn-content {\\n    transition:\\n      transform 0.12s ease-out,\\n      background 0.12s ease-out,\\n      color 0.12s ease-out;\\n    transform: translate3d(0, 2px, 0);\\n  }\\n  .retro-butn\\n    .butn.butn-active\\n    .butn-inner\\n    .butn-content-wrapper\\n    .butn-content\\n    .butn-content-inner {\\n    opacity: 0.1;\\n  }\\n  :global(.retro-butn .butn.butn-active:before) {\\n    transform: translate3d(0, -3px, 0);\\n  }\\n  .retro-butn .butn .butn-inner {\\n    display: block;\\n    height: 100%;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper {\\n    position: relative;\\n    font-family: inherit;\\n    display: flex;\\n    align-items: stretch;\\n    width: 100%;\\n    height: calc(100% - 3px);\\n    margin-top: -3px;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper:after,\\n  .retro-butn .butn .butn-inner .butn-content-wrapper:before,\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after,\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before,\\n  .retro-butn\\n    .butn\\n    .butn-inner\\n    .butn-content-wrapper\\n    .butn-content\\n    .butn-content-inner:before {\\n    display: block;\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper:before {\\n    background-image: initial;\\n    background-color: #752330;\\n    content: \\" \\";\\n    border-radius: 3px;\\n    top: auto;\\n    bottom: -3px;\\n    z-index: 1;\\n    transition:\\n      transform 0.185s ease-out,\\n      background 0.185s ease-out;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper:after {\\n    background-color: rgba(13, 13, 13, 0.15);\\n    content: \\" \\";\\n    border-radius: 3px;\\n    z-index: 3;\\n    width: 0;\\n    top: 2px;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content {\\n    background-image: initial;\\n    background-color: #e94560;\\n    color: #ebf1f8;\\n    position: relative;\\n    display: flex;\\n    flex: 1;\\n    align-items: center;\\n    justify-content: center;\\n    border-radius: 3px;\\n    text-indent: 0;\\n    z-index: 3;\\n    overflow: hidden;\\n    padding: 0 16px;\\n    transition:\\n      border 0.185s ease-out,\\n      transform 0.185s ease-out,\\n      background 0.185s ease-out,\\n      color 0.185s ease-out;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before,\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    color: rgba(255, 255, 255, 0.8);\\n    opacity: 0;\\n    transition:\\n      transform 0.185s ease-out 0.05s,\\n      opacity 0.1125s ease-out 0.05s;\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before {\\n    content: \\" \\";\\n    transform: translate3d(0, 50%, 0);\\n  }\\n  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {\\n    content: \\" \\";\\n    transform: translate3d(0, -50%, 0);\\n  }\\n  .retro-butn\\n    .butn\\n    .butn-inner\\n    .butn-content-wrapper\\n    .butn-content\\n    .butn-content-inner {\\n    display: block;\\n    transition: opacity 75ms ease-out 0.1125s;\\n  }\\n  .retro-butn\\n    .butn\\n    .butn-inner\\n    .butn-content-wrapper\\n    .butn-content\\n    .butn-content-inner:before {\\n    content: attr(data-label);\\n    padding-top: 9.5px;\\n    font-size: 0.8em;\\n    font-family: \\"Press Start 2P\\", cursive;\\n    letter-spacing: 0.06em;\\n    transition:\\n      opacity 0.3s ease-out,\\n      background-color 0.1125s ease-in;\\n    opacity: 1;\\n    z-index: -1;\\n  }\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const RetroButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { url = "#" } = $$props;
  let { label = "Click Me" } = $$props;
  let { size = "200px" } = $$props;
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="retro-wrapper svelte-s4d38t"><div role="button" class="retro-butn svelte-s4d38t"> <a class="butn svelte-s4d38t"${add_attribute("href", url, 0)} style="${"width: " + escape(size, true)}"><span class="butn-inner svelte-s4d38t"><span class="butn-content-wrapper svelte-s4d38t"><span class="butn-content svelte-s4d38t"><span class="butn-content-inner svelte-s4d38t"${add_attribute("data-label", label, 0)}></span></span></span></span></a></div> </div>`;
});
export {
  RetroButton as R
};

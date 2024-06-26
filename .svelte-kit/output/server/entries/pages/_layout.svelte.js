import { a as set_current_component, r as run_all, b as current_component, c as create_ssr_component, e as escape, n as null_to_empty, o as onDestroy, v as validate_component, m as missing_component } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                                                     */
import { gsap, Power2, Power1 } from "gsap";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const modalStore = writable({
  show: false,
  content: null,
  props: {}
});
const bgNoise = "/_app/immutable/assets/bgnoise.Bs-ruk1u.webp";
const Grid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="grid-container pointer-events-none fixed inset-0 z-0" style="${"background-image: url(" + escape(bgNoise, true) + ")"}"></div>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="fixed bottom-0 z-20 w-full border-t-4 border-pink-600 bg-gray-900 p-4 text-center text-white" data-svelte-h="svelte-14tokr1">© Copyright 1985 Josh Lopez.</footer>`;
});
const css$1 = {
  code: "@media(max-width: 768px){.nav-menu.svelte-mjmoau.svelte-mjmoau{flex-direction:column;background-color:#1a202c;position:absolute;top:100%;right:16px;width:auto;padding:1rem}.nav-menu.svelte-mjmoau a.svelte-mjmoau{margin-bottom:0.5rem}}",
  map: '{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script>\\n  let menuOpen = false;\\n\\n  function toggleMenu() {\\n    menuOpen = !menuOpen;\\n  }\\n<\/script>\\n\\n<header\\n  class=\\"fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white\\"\\n>\\n  <a href=\\"/\\"><h1 class=\\"text-4xl\\">Josh Lopez</h1></a>\\n  <button on:click={toggleMenu} class=\\"text-pink-600 md:hidden\\">\\n    <svg\\n      class=\\"h-8 w-8\\"\\n      fill=\\"none\\"\\n      stroke=\\"currentColor\\"\\n      viewBox=\\"0 0 24 24\\"\\n      xmlns=\\"http://www.w3.org/2000/svg\\"\\n    >\\n      <path\\n        stroke-linecap=\\"round\\"\\n        stroke-linejoin=\\"round\\"\\n        stroke-width=\\"2\\"\\n        d=\\"M4 6h16M4 12h16M4 18h16\\"\\n      ></path>\\n    </svg>\\n  </button>\\n  <nav\\n    class={`nav-menu ${menuOpen ? \\"\\" : \\"hidden\\"} flex rounded-b-md md:flex md:space-x-4`}\\n    aria-label=\\"Main Navigation\\"\\n  >\\n    <a\\n      href=\\"/videos\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Videos</a\\n    >\\n    <a\\n      href=\\"/writings\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Writings</a\\n    >\\n    <a\\n      href=\\"/projects\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Projects</a\\n    >\\n    <a\\n      href=\\"/connect\\"\\n      class=\\"glow-on-hover font-bold text-pink-600 hover:text-teal-400\\"\\n      >Connect</a\\n    >\\n  </nav>\\n</header>\\n\\n<style>\\n  @media (max-width: 768px) {\\n    .nav-menu {\\n      flex-direction: column;\\n      background-color: #1a202c; /* Same as the header background */\\n      position: absolute;\\n      top: 100%;\\n      right: 16px;\\n      width: auto;\\n      padding: 1rem;\\n    }\\n\\n    .nav-menu a {\\n      margin-bottom: 0.5rem;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AAwDE,MAAO,YAAY,KAAK,CAAE,CACxB,qCAAU,CACR,cAAc,CAAE,MAAM,CACtB,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACX,CAEA,uBAAS,CAAC,eAAE,CACV,aAAa,CAAE,MACjB,CACF"}'
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<header class="fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white"><a href="/" data-svelte-h="svelte-uwitc5"><h1 class="text-4xl">Josh Lopez</h1></a> <button class="text-pink-600 md:hidden" data-svelte-h="svelte-6nxtal"><svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <nav class="${escape(null_to_empty(`nav-menu ${"hidden"} flex rounded-b-md md:flex md:space-x-4`), true) + " svelte-mjmoau"}" aria-label="Main Navigation"><a href="/videos" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-1tghdp9">Videos</a> <a href="/writings" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-19akqof">Writings</a> <a href="/projects" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-wvl4ad">Projects</a> <a href="/connect" class="glow-on-hover font-bold text-pink-600 hover:text-teal-400 svelte-mjmoau" data-svelte-h="svelte-1ika4j1">Connect</a></nav> </header>`;
});
const colorStatic = "/_app/immutable/assets/color-static.CqWN2tCz.gif";
const css = {
  code: '.modal.svelte-lxvqtz{background-color:#e1eef6;position:fixed;z-index:1000;top:50%;left:50%;width:0;height:0;transform:translate(-50%, -50%);transform-origin:center;content:" ";overflow:hidden;background-size:cover !important;background-origin:border-box;color:#e1eef6;transition:width 0.2s,\n      height 0.2s;display:flex;flex-direction:column;justify-content:center;align-items:center}.modal-backdrop.svelte-lxvqtz{position:fixed;z-index:0;top:0;left:0;width:100vw;height:100vh}.close-btn.svelte-lxvqtz{position:absolute;top:42px;right:42px;background:transparent;border:none;color:#e1eef6;font-size:1.5rem;cursor:pointer;opacity:0}.modal-content.svelte-lxvqtz{position:relative;z-index:1;padding:20px;color:#e1eef6;opacity:0;width:0;height:100%}',
  map: '{"version":3,"file":"Modal.svelte","sources":["Modal.svelte"],"sourcesContent":["<script>\\n  // @ts-nocheck\\n  import { tick, onDestroy } from \\"svelte\\";\\n  import { gsap, Power1, Power2 } from \\"gsap\\";\\n  import { closeModal } from \\"$lib/stores/modalStore\\";\\n  import colorStatic from \\"$lib/images/color-static.gif\\";\\n\\n  export let show = false;\\n  export let content = null;\\n  export let props = {};\\n\\n  let isClosing = false;\\n  let isAnimating = false;\\n  let isInitialized = false;\\n  let wasShow = false;\\n  /**\\n   * @type {gsap.core.Timeline}\\n   */\\n  let timeline;\\n\\n  const SELECTOR_MODAL_ELEMENT = \\".modal\\";\\n  const SELECTOR_MODAL_CLOSE_BUTTON = \\".close-btn\\";\\n  const SELECTOR_CONTENT_ELEMENT = \\".modal-content\\";\\n\\n  // Watcher for show changes\\n  $: if (show !== wasShow) {\\n    wasShow = show;\\n    handleShowChange();\\n  }\\n\\n  // Handle show changes\\n  function handleShowChange() {\\n    if (show && !isAnimating) {\\n      if (!isInitialized) {\\n        tick().then(() => {\\n          initializeTimeline();\\n          toggleModalAnimation();\\n        });\\n      } else {\\n        toggleModalAnimation();\\n      }\\n    } else if (!show && isClosing && !isAnimating) {\\n      toggleModalAnimation();\\n    }\\n  }\\n\\n  // Initialize GSAP timeline\\n  function initializeTimeline() {\\n    timeline = gsap.timeline({ paused: true });\\n\\n    timeline\\n      .to(SELECTOR_CONTENT_ELEMENT, {\\n        duration: 0.2,\\n        opacity: 0,\\n        width: \\"0\\",\\n        height: \\"0\\",\\n      })\\n      .to(SELECTOR_MODAL_ELEMENT, {\\n        duration: 0.2,\\n        width: \\"100vw\\",\\n        height: \\"2px\\",\\n        background: \\"#ffffff\\",\\n        backgroundImage: \\"none\\",\\n        ease: Power2.easeOut,\\n      })\\n      .to(SELECTOR_MODAL_ELEMENT, {\\n        duration: 0.3,\\n        backgroundImage: `url(${colorStatic})`,\\n        ease: Power2.easeOut,\\n      })\\n      .to(SELECTOR_MODAL_ELEMENT, {\\n        duration: 0.2,\\n        height: \\"100vh\\",\\n        ease: Power2.easeInOut,\\n      })\\n      .to(SELECTOR_MODAL_ELEMENT, {\\n        duration: 0.2,\\n        width: \\"100vw\\",\\n        height: \\"100vh\\",\\n      })\\n      .to(SELECTOR_CONTENT_ELEMENT, {\\n        duration: 0.2,\\n        width: \\"auto\\",\\n        height: \\"auto\\",\\n      })\\n      .to(SELECTOR_CONTENT_ELEMENT, {\\n        duration: 0.4,\\n        opacity: 1,\\n        ease: Power1.easeIn,\\n      })\\n      .to(SELECTOR_MODAL_CLOSE_BUTTON, {\\n        duration: 0.2,\\n        opacity: 1,\\n        ease: Power1.easeIn,\\n      });\\n\\n    isInitialized = true;\\n  }\\n\\n  // Toggle modal animation\\n  function toggleModalAnimation() {\\n    if (!timeline) return;\\n    isAnimating = true;\\n\\n    if (!isClosing) {\\n      document.body.style.overflow = \\"hidden\\";\\n      timeline.play().then(() => {\\n        isAnimating = false;\\n      });\\n    } else {\\n      document.body.style.overflow = \\"auto\\";\\n      timeline.reverse().then(() => {\\n        resetModalState();\\n        closeModal();\\n      });\\n    }\\n  }\\n\\n  // Close modal and toggle animation\\n  function toggleClose() {\\n    isClosing = true;\\n    toggleModalAnimation();\\n  }\\n\\n  // Reset modal state\\n  function resetModalState() {\\n    isClosing = false;\\n    isAnimating = false;\\n    isInitialized = false;\\n    show = false;\\n  }\\n\\n  // Clean up on destroy\\n  onDestroy(() => {\\n    if (timeline) {\\n      timeline.kill();\\n    }\\n  });\\n<\/script>\\n\\n{#if show}\\n  <div class=\\"modal\\">\\n    <!-- svelte-ignore a11y-click-events-have-key-events -->\\n    <!-- svelte-ignore a11y-no-static-element-interactions -->\\n    <div class=\\"modal-backdrop\\" on:click={toggleClose}></div>\\n    <button class=\\"close-btn\\" on:click={toggleClose}> Close </button>\\n    <div class=\\"modal-content\\">\\n      {#if content}\\n        <svelte:component this={content} {...props} />\\n      {/if}\\n    </div>\\n  </div>\\n{/if}\\n\\n<style>\\n  .modal {\\n    background-color: #e1eef6;\\n    position: fixed;\\n    z-index: 1000;\\n    top: 50%;\\n    left: 50%;\\n    width: 0;\\n    height: 0;\\n    transform: translate(-50%, -50%);\\n    transform-origin: center;\\n    content: \\" \\";\\n    overflow: hidden;\\n    background-size: cover !important;\\n    background-origin: border-box;\\n    color: #e1eef6;\\n    transition:\\n      width 0.2s,\\n      height 0.2s;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .modal-backdrop {\\n    position: fixed;\\n    z-index: 0;\\n    top: 0;\\n    left: 0;\\n    width: 100vw;\\n    height: 100vh;\\n  }\\n\\n  .close-btn {\\n    position: absolute;\\n    top: 42px;\\n    right: 42px;\\n    background: transparent;\\n    border: none;\\n    color: #e1eef6;\\n    font-size: 1.5rem;\\n    cursor: pointer;\\n    opacity: 0;\\n  }\\n\\n  .modal-content {\\n    position: relative;\\n    z-index: 1;\\n    padding: 20px;\\n    color: #e1eef6;\\n    opacity: 0;\\n    width: 0;\\n    height: 100%;\\n  }\\n</style>\\n"],"names":[],"mappings":"AA2JE,oBAAO,CACL,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,GAAG,CACR,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,IAAI,CAAC,CAChC,gBAAgB,CAAE,MAAM,CACxB,OAAO,CAAE,GAAG,CACZ,QAAQ,CAAE,MAAM,CAChB,eAAe,CAAE,KAAK,CAAC,UAAU,CACjC,iBAAiB,CAAE,UAAU,CAC7B,KAAK,CAAE,OAAO,CACd,UAAU,CACR,KAAK,CAAC,IAAI,CAAC;AACjB,MAAM,MAAM,CAAC,IAAI,CACb,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CAEA,6BAAgB,CACd,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,CAAC,CACV,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KACV,CAEA,wBAAW,CACT,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CACX,CAEA,4BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IACV"}'
};
const SELECTOR_MODAL_ELEMENT = ".modal";
const SELECTOR_MODAL_CLOSE_BUTTON = ".close-btn";
const SELECTOR_CONTENT_ELEMENT = ".modal-content";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false } = $$props;
  let { content = null } = $$props;
  let { props = {} } = $$props;
  let isClosing = false;
  let isAnimating = false;
  let isInitialized = false;
  let wasShow = false;
  let timeline;
  function handleShowChange() {
    if (show && !isAnimating) {
      if (!isInitialized) {
        tick().then(() => {
          initializeTimeline();
          toggleModalAnimation();
        });
      } else {
        toggleModalAnimation();
      }
    } else if (!show && isClosing && !isAnimating) {
      toggleModalAnimation();
    }
  }
  function initializeTimeline() {
    timeline = gsap.timeline({ paused: true });
    timeline.to(SELECTOR_CONTENT_ELEMENT, {
      duration: 0.2,
      opacity: 0,
      width: "0",
      height: "0"
    }).to(SELECTOR_MODAL_ELEMENT, {
      duration: 0.2,
      width: "100vw",
      height: "2px",
      background: "#ffffff",
      backgroundImage: "none",
      ease: Power2.easeOut
    }).to(SELECTOR_MODAL_ELEMENT, {
      duration: 0.3,
      backgroundImage: `url(${colorStatic})`,
      ease: Power2.easeOut
    }).to(SELECTOR_MODAL_ELEMENT, {
      duration: 0.2,
      height: "100vh",
      ease: Power2.easeInOut
    }).to(SELECTOR_MODAL_ELEMENT, {
      duration: 0.2,
      width: "100vw",
      height: "100vh"
    }).to(SELECTOR_CONTENT_ELEMENT, {
      duration: 0.2,
      width: "auto",
      height: "auto"
    }).to(SELECTOR_CONTENT_ELEMENT, {
      duration: 0.4,
      opacity: 1,
      ease: Power1.easeIn
    }).to(SELECTOR_MODAL_CLOSE_BUTTON, {
      duration: 0.2,
      opacity: 1,
      ease: Power1.easeIn
    });
    isInitialized = true;
  }
  function toggleModalAnimation() {
    if (!timeline)
      return;
    isAnimating = true;
    {
      document.body.style.overflow = "hidden";
      timeline.play().then(() => {
        isAnimating = false;
      });
    }
  }
  onDestroy(() => {
    if (timeline) {
      timeline.kill();
    }
  });
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  $$result.css.add(css);
  {
    if (show !== wasShow) {
      wasShow = show;
      handleShowChange();
    }
  }
  return `${show ? `<div class="modal svelte-lxvqtz">  <div class="modal-backdrop svelte-lxvqtz"></div> <button class="close-btn svelte-lxvqtz" data-svelte-h="svelte-1418bbg">Close</button> <div class="modal-content svelte-lxvqtz">${content ? `${validate_component(content || missing_component, "svelte:component").$$render($$result, Object.assign({}, props), {}, {})}` : ``}</div></div>` : ``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let show = false;
  let content = null;
  let props = {};
  const unsubscribe = modalStore.subscribe((value) => {
    show = value.show;
    content = value.content;
    props = value.props;
  });
  onDestroy(() => {
    unsubscribe();
  });
  return `${validate_component(Grid, "Grid").$$render($$result, {}, {}, {})} ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})} <main class="relative z-10 w-screen overflow-hidden p-8 pt-24 text-gray-200 md:pt-32">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${validate_component(Modal, "Modal").$$render($$result, { show, content, props }, {}, {})}`;
});
export {
  Layout as default
};

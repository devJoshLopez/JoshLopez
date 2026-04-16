<script>
  /** @type {{ url?: string, label?: string, size?: string }} */
  let { url = "#", label = "Click Me", size = "200px" } = $props();

  /** @type {HTMLAnchorElement | undefined} */
  let button = $state();

  /** @type {"left" | "center" | "right" | null} */
  let position = $state(null);
  let active = $state(false);

  /** @param {MouseEvent} e */
  function handleMouseMove(e) {
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    if (relativeX < 0.3 * rect.width) position = "left";
    else if (relativeX > 0.65 * rect.width) position = "right";
    else position = "center";
  }

  function handleMouseLeave() {
    position = null;
    active = false;
  }
</script>

<div class="retro-wrapper">
  <div class="retro-butn">
    <!-- url accepts both internal SvelteKit routes and external URLs;
         callers resolve() internal paths themselves. -->
    <a
      bind:this={button}
      class="butn"
      class:butn-left={position === "left"}
      class:butn-center={position === "center"}
      class:butn-right={position === "right"}
      class:butn-active={active}
      href={url}
      style="width: {size}"
      aria-label={label}
      onmousemove={handleMouseMove}
      onmouseleave={handleMouseLeave}
      onmousedown={() => (active = true)}
      onmouseup={() => (active = false)}
    >
      <span class="butn-inner">
        <span class="butn-content-wrapper">
          <span class="butn-content">
            <span class="butn-content-inner" data-label={label}></span>
          </span>
        </span>
      </span>
    </a>
  </div>
</div>

<style>
  .retro-wrapper {
    position: relative;
    display: inline-block;
  }
  .retro-butn {
    text-transform: uppercase;
    background: 0 0;
  }

  .retro-butn .butn {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    padding-top: 3px;
    position: relative;
    cursor: pointer;
    font-weight: 600;
    font-family: inherit;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: auto;
    text-decoration: none;
    text-align: center;
    -webkit-transition: opacity 0.1s ease-out;
    transition: opacity 0.1s ease-out;
    z-index: 5;
    -webkit-font-smoothing: antialiased;
    width: 200px;
    height: 42px;
    font-size: 15px;
    line-height: 1.5;
    background-color: transparent;
    text-decoration-color: initial;
    border-color: initial;
    -webkit-tap-highlight-color: transparent;
    /* add a faint inner text shadow to resemble depth */
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  .retro-butn .butn:hover {
    color: #ebf1f8;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
  }
  .retro-butn .butn,
  .retro-butn .butn:focus {
    outline-color: 0;
    outline-style: none;
    outline-width: 0;
  }
  .retro-butn .butn:focus-visible {
    outline: 2px solid #03fcf0;
    outline-offset: 4px;
  }
  .retro-butn .butn:hover .butn-content-inner:before {
    background-color: rgba(13, 13, 13, 0.1);
  }
  .retro-butn .butn:before {
    content: " ";
    background-color: rgba(13, 13, 13, 0.3);
    width: calc(100% - 2px);
    height: calc(100% - 4px);
    bottom: -1px;
    left: 1px;
    position: absolute;
    border-radius: 3px;
    z-index: 1;
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out;
  }
  .retro-butn .butn.butn-left:before {
    transform: skewY(1deg) translate3d(0, -0.5px, 0);
  }
  .retro-butn .butn.butn-left .butn-content {
    transform: skewY(-1deg);
  }
  .retro-butn .butn.butn-right:before {
    transform: skewY(-1deg) translate3d(0, -0.5px, 0);
  }
  .retro-butn .butn.butn-right .butn-content {
    transform: skewY(1deg);
  }
  .retro-butn .butn.butn-center:before {
    transform: translate3d(0, -1px, 0);
  }
  .retro-butn .butn.butn-center .butn-content {
    transform: translate3d(0, 1px, 0);
  }
  .retro-butn
    .butn.butn-active
    .butn-inner
    .butn-content-wrapper
    .butn-content {
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out,
      color 0.12s ease-out;
    transform: translate3d(0, 2px, 0);
  }
  .retro-butn
    .butn.butn-active
    .butn-inner
    .butn-content-wrapper
    .butn-content
    .butn-content-inner {
    opacity: 0.1;
  }
  .retro-butn .butn.butn-active:before {
    transform: translate3d(0, -3px, 0);
  }
  .retro-butn .butn .butn-inner {
    display: block;
    height: 100%;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper {
    position: relative;
    font-family: inherit;
    display: flex;
    align-items: stretch;
    width: 100%;
    height: calc(100% - 3px);
    margin-top: -3px;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper:after,
  .retro-butn .butn .butn-inner .butn-content-wrapper:before,
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after,
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before,
  .retro-butn
    .butn
    .butn-inner
    .butn-content-wrapper
    .butn-content
    .butn-content-inner:before {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper:before {
    background-color: #752330;
    content: " ";
    border-radius: 3px;
    top: auto;
    bottom: -3px;
    z-index: 1;
    transition:
      transform 0.185s ease-out,
      background 0.185s ease-out;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper:after {
    background-color: rgba(13, 13, 13, 0.15);
    content: " ";
    border-radius: 3px;
    z-index: 3;
    width: 0;
    top: 2px;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content {
    background-color: #e94560;
    color: #ebf1f8;
    position: relative;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    text-indent: 0;
    z-index: 3;
    overflow: hidden;
    padding: 0 16px;
    transition:
      border 0.185s ease-out,
      transform 0.185s ease-out,
      background 0.185s ease-out,
      color 0.185s ease-out;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before,
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    transition:
      transform 0.185s ease-out 0.05s,
      opacity 0.1125s ease-out 0.05s;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before {
    content: " ";
    transform: translate3d(0, 50%, 0);
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {
    content: " ";
    transform: translate3d(0, -50%, 0);
  }
  .retro-butn
    .butn
    .butn-inner
    .butn-content-wrapper
    .butn-content
    .butn-content-inner {
    display: block;
    transition: opacity 75ms ease-out 0.1125s;
  }
  .retro-butn
    .butn
    .butn-inner
    .butn-content-wrapper
    .butn-content
    .butn-content-inner:before {
    content: attr(data-label);
    padding-top: 9.5px;
    font-size: 0.8em;
    font-family: "Press Start 2P", cursive;
    letter-spacing: 0.06em;
    transition:
      opacity 0.3s ease-out,
      background-color 0.1125s ease-in;
    opacity: 1;
    z-index: -1;
  }
</style>

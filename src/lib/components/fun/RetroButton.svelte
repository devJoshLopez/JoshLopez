<script>
  import { onMount } from "svelte";

  export let url = "#";
  export let label = "Click Me";
  export let size = "200px";

  onMount(() => {
    document.querySelectorAll(".butn").forEach((button) => {
      // Click events
      button.addEventListener("mousedown", () =>
        button.classList.add("butn-active")
      );
      button.addEventListener("mouseup", () =>
        button.classList.remove("butn-active")
      );

      // Hover events
      button.addEventListener("mouseleave", () => {
        button.classList.remove(
          "butn-center",
          "butn-right",
          "butn-left",
          "butn-active"
        );
      });

      button.addEventListener("mousemove", (e) => {
        const leftOffset = button.getBoundingClientRect().left;
        // @ts-ignore
        const butnWidth = button.offsetWidth;
        // @ts-ignore
        const myPosX = e.pageX;
        let newClass = "";

        if (myPosX < leftOffset + 0.3 * butnWidth) {
          newClass = "butn-left";
        } else if (myPosX > leftOffset + 0.65 * butnWidth) {
          newClass = "butn-right";
        } else {
          newClass = "butn-center";
        }

        button.classList.remove("butn-center", "butn-right", "butn-left");
        button.classList.add(newClass);
      });
    });
  });
</script>

<div class="retro-wrapper">
  <div role="button" class="retro-butn">
    <!-- svelte-ignore a11y-missing-attribute -->
    <a class="butn" href={url} style="width: {size}">
      <span class="butn-inner">
        <span class="butn-content-wrapper">
          <span class="butn-content">
            <span class="butn-content-inner" data-label={label} />
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
    /* add a faint inner text shaddow to resemble depth */
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
    -webkit-transition:
      background 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
    transition:
      background 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out;
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
  }
  .retro-butn .butn.butn-left:before {
    -webkit-transform: skewY(1deg) translate3d(0, -0.5px, 0);
    transform: skewY(1deg) translate3d(0, -0.5px, 0);
  }
  .retro-butn .butn.butn-left .butn-content {
    -webkit-transform: skewY(-1deg);
    transform: skewY(-1deg);
  }
  .retro-butn .butn.butn-right:before {
    -webkit-transform: skewY(-1deg) translate3d(0, -0.5px, 0);
    transform: skewY(-1deg) translate3d(0, -0.5px, 0);
  }
  .retro-butn .butn.butn-right .butn-content {
    -webkit-transform: skewY(1deg);
    transform: skewY(1deg);
  }
  .retro-butn .butn.butn-center:before {
    -webkit-transform: translate3d(0, -1px, 0);
    transform: translate3d(0, -1px, 0);
  }
  .retro-butn .butn.butn-center .butn-content {
    -webkit-transform: translate3d(0, 1px, 0);
    transform: translate3d(0, 1px, 0);
  }
  .retro-butn
    .butn.butn-active
    .butn-inner
    .butn-content-wrapper
    .butn-content {
    -webkit-transition:
      background 0.12s ease-out,
      color 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
    transition:
      background 0.12s ease-out,
      color 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out,
      color 0.12s ease-out;
    transition:
      transform 0.12s ease-out,
      background 0.12s ease-out,
      color 0.12s ease-out,
      -webkit-transform 0.12s ease-out;
    -webkit-transform: translate3d(0, 2px, 0);
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
    -webkit-transform: translate3d(0, -3px, 0);
    transform: translate3d(0, -3px, 0);
  }
  .retro-butn .butn .butn-inner {
    display: block;
    height: 100%;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper {
    position: relative;
    font-family: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
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
    background-image: initial;
    background-color: #752330;
    content: " ";
    border-radius: 3px;
    top: auto;
    bottom: -3px;
    z-index: 1;
    -webkit-transition:
      background 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
    transition:
      background 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
    transition:
      transform 0.185s ease-out,
      background 0.185s ease-out;
    transition:
      transform 0.185s ease-out,
      background 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
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
    background-image: initial;
    background-color: #e94560;
    color: #ebf1f8;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 3px;
    text-indent: 0;
    z-index: 3;
    overflow: hidden;
    padding: 0 16px;
    -webkit-transition:
      border 0.185s ease-out,
      background 0.185s ease-out,
      color 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
    transition:
      border 0.185s ease-out,
      background 0.185s ease-out,
      color 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
    transition:
      border 0.185s ease-out,
      transform 0.185s ease-out,
      background 0.185s ease-out,
      color 0.185s ease-out;
    transition:
      border 0.185s ease-out,
      transform 0.185s ease-out,
      background 0.185s ease-out,
      color 0.185s ease-out,
      -webkit-transform 0.185s ease-out;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before,
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.8);
    opacity: 0;
    -webkit-transition:
      opacity 0.1125s ease-out 0.05s,
      -webkit-transform 0.185s ease-out 0.05s;
    transition:
      opacity 0.1125s ease-out 0.05s,
      -webkit-transform 0.185s ease-out 0.05s;
    transition:
      transform 0.185s ease-out 0.05s,
      opacity 0.1125s ease-out 0.05s,
      -webkit-transform 0.185s ease-out 0.05s;
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:before {
    content: " ";
    -webkit-transform: translate3d(0, 50%, 0);
    transform: translate3d(0, 50%, 0);
  }
  .retro-butn .butn .butn-inner .butn-content-wrapper .butn-content:after {
    content: " ";
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
  .retro-butn
    .butn
    .butn-inner
    .butn-content-wrapper
    .butn-content
    .butn-content-inner {
    display: block;
    -webkit-transition: opacity 75ms ease-out 0.1125s;
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
    -webkit-transition:
      opacity 0.3s ease-out,
      background-color 0.1125s ease-in;
    transition:
      opacity 0.3s ease-out,
      background-color 0.1125s ease-in;
    opacity: 1;
    z-index: -1;
  }
</style>

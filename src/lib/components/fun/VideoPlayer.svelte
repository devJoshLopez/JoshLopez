<script>
  import staticGIF from "$lib/images/static.gif";
  import vhsOverlay from "$lib/images/vhs-overlay.png";
  import oldTV from "$lib/images/80s-tv.png";

  const STATIC_FLASH_MS = 333;
  const MESSAGE_VISIBLE_MS = 2000;

  const fallbackURLs = [
    "https://i.giphy.com/Q2W4hziDOyzu0.webp",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117878/space-stallions_zmueag.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/dancing-bears-small_v4oqvi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117881/trippy-rick_a42hyj.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/psychedelic-reindeer_an5vsi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117877/jake-the-dog_scm4bi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571120920/the-regular-show_pwt1gp.gif",
  ];

  /** @type {{ urls?: string[] }} */
  let { urls = [] } = $props();

  const channels = $derived(urls.length ? urls : fallbackURLs);

  let currentIndex = $state(0);
  let displaySrc = $derived(channels[currentIndex]);
  let message = $state("");
  let messageActive = $state(false);

  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let flashTimer;
  /** @type {ReturnType<typeof setTimeout> | undefined} */
  let messageTimer;

  /** @param {"up" | "down"} direction */
  function changeChannel(direction) {
    clearTimeout(flashTimer);
    clearTimeout(messageTimer);

    const next =
      direction === "up"
        ? (currentIndex + 1) % channels.length
        : (currentIndex - 1 + channels.length) % channels.length;

    displaySrc = staticGIF;
    message = `CH ${String(next + 1).padStart(2, "0")}`;
    messageActive = true;

    flashTimer = setTimeout(() => {
      currentIndex = next;
    }, STATIC_FLASH_MS);

    messageTimer = setTimeout(() => {
      messageActive = false;
    }, MESSAGE_VISIBLE_MS);
  }

  /** @param {MouseEvent} e */
  function handleContextMenu(e) {
    e.preventDefault();
    changeChannel("down");
  }
</script>

<section class="section gutter">
  <div class="wrapper">
    <div class="gif-tv">
      <div class="viewport">
        <img class="video" src={displaySrc} alt="" />
        <div class="pixels" style="background-image: url('{vhsOverlay}')"></div>
        <div class="meta-left">
          <span class:active={messageActive} class="text-5xl max-md:text-lg"
            >{message}</span
          >
        </div>
      </div>
      <img class="tv" src={oldTV} alt="" />
      <button
        type="button"
        class="dial"
        title="Change channel (right-click for previous)"
        aria-label="Change channel"
        onclick={() => changeChannel("up")}
        oncontextmenu={handleContextMenu}
      ></button>
    </div>
  </div>
</section>

<style>
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .gutter {
    padding-right: 2rem;
    padding-left: 2rem;
  }
  .wrapper {
    max-width: 840px;
    min-width: 300px;
    width: 100%;
    margin: auto;
  }
  .gif-tv {
    position: relative;
  }
  .gif-tv .viewport {
    position: absolute;
    top: 9%;
    right: 26%;
    bottom: 15%;
    left: 7%;
    background: #161616;
    z-index: -1;
    overflow: hidden;
  }
  .gif-tv .viewport .video {
    z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gif-tv .viewport .pixels {
    z-index: 1;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .gif-tv .viewport .meta-left {
    display: flex;
    flex-flow: column;
    position: absolute;
    z-index: 2;
    top: 0;
    bottom: 0;
    width: 75%;
    padding: 4% 6%;
    align-items: flex-start;
    left: 0;
  }
  .gif-tv .viewport span {
    text-shadow: 0 0 3px #888;
    font-family: "Press Start 2P", system-ui;
  }
  .gif-tv .viewport span:not(.active) {
    display: none;
  }
  .gif-tv .viewport span.active {
    display: block;
  }
  .gif-tv button.dial {
    display: block;
    position: absolute;
    left: 85.6%;
    top: 56.3%;
    transform: translateY(-50%);
    padding: 0;
    border-radius: 50%;
    border: #dfddd1 solid 3px;
    background-color: transparent;
    width: 10.2%;
    line-height: 0;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    animation: dial-pulse 3s infinite;
  }
  .gif-tv button.dial:hover,
  .gif-tv button.dial:focus {
    outline: none;
  }
  .gif-tv button.dial:hover {
    border-color: #0af !important;
    animation: none;
  }
  .gif-tv button.dial:focus-visible {
    border-color: #03fcf0;
    outline: 2px solid #03fcf0;
    outline-offset: 4px;
  }
  .gif-tv button.dial:active {
    border-color: #007fff;
  }
  .gif-tv button.dial::before {
    display: block;
    width: 100%;
    padding-top: 100%;
    content: "";
  }

  @keyframes dial-pulse {
    0% {
      border-color: #dfddd183;
    }
    50% {
      border-color: rgba(0, 170, 255, 0.646);
    }
    100% {
      border-color: #dfddd183;
    }
  }
</style>

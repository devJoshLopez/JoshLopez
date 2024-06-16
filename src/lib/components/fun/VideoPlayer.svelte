<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  /**
   * @type {any}
   */
  export let urls = [];

  const gifTVURLs = [
    "https://i.giphy.com/Q2W4hziDOyzu0.webp",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117878/space-stallions_zmueag.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/dancing-bears-small_v4oqvi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117881/trippy-rick_a42hyj.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117882/psychedelic-reindeer_an5vsi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571117877/jake-the-dog_scm4bi.gif",
    "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571120920/the-regular-show_pwt1gp.gif",
  ];

  /**
   * @type {HTMLElement | null}
   */
  let gifTV;
  let message = writable("");
  let messageActive = writable(false);

  class GifTV {
    constructor(channels = [urls[0]]) {
      this.channels = channels;
      this.staticGIF =
        "https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571155222/giphy_n0r827.gif";
      this.currentChannelURL = this.channels[0];
      this.currentIndex = 0;
    }

    displayStatic() {
      // @ts-ignore
      gifTV.src = this.staticGIF;
    }

    displayChannel() {
      // @ts-ignore
      gifTV.src = this.currentChannelURL;
    }

    /**
     * @param {string} direction
     */
    changeChannel(direction) {
      this.displayStatic();
      if (direction === "up") {
        this.currentIndex = (this.currentIndex + 1) % this.channels.length;
      } else {
        this.currentIndex =
          (this.currentIndex - 1 + this.channels.length) % this.channels.length;
      }
      this.currentChannelURL = this.channels[this.currentIndex];
      message.set(`CH ${String(this.currentIndex + 1).padStart(2, "0")}`);
      messageActive.set(true);
      setTimeout(() => {
        this.displayChannel();
      }, 333);
      setTimeout(() => {
        messageActive.set(false);
      }, 2000);
    }
  }

  onMount(() => {
    gifTV = document.getElementById("gif_tv_video");
    const gifTVInstance = new GifTV(urls.length ? urls : gifTVURLs);
    gifTVInstance.displayChannel();
    // @ts-ignore
    document
      .getElementById("gif_tv_button_channel")
      .addEventListener("click", () => gifTVInstance.changeChannel("up"));
    // @ts-ignore
    document
      .getElementById("gif_tv_button_channel")
      .addEventListener("contextmenu", (e) => {
        e.preventDefault();
        gifTVInstance.changeChannel("down");
      });
  });
</script>

<section class="section gutter">
  <div class="wrapper">
    <div class="gif-tv">
      <div id="gif_tv_viewport" class="viewport">
        <img
          id="gif_tv_video"
          class="video"
          src="/video-url-goes-here/"
          alt="meowza"
        />
        <div
          id="gif_tv_pixels"
          class="pixels"
          style="background-image: url('https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571119227/vhs-overlay_zpzs7x.png')"
        ></div>
        <div class="meta-left">
          <span
            id="gif_tv_message_channel"
            class:active={$messageActive}
            class="text-5xl max-md:text-lg">{$message}</span
          >
        </div>
      </div>
      <!-- svelte-ignore a11y-missing-attribute -->
      <img
        class="tv"
        src="https://res.cloudinary.com/cyborgspaceviking/image/upload/v1571119227/80s-tv_ekkex2.png"
      />
      <button
        id="gif_tv_button_channel"
        class="dial"
        title="Change the Channels"
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
    /* margin-right: 1rem; */
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
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
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
    /* font-size: 4rem; */
    font-family: "Press Start 2P", system-ui;
    /* font-family: VT323; */
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
    transform: translateY(-50%);
    padding: 0;
    border-radius: 50%;
    border: #dfddd1 solid 3px;
    background-color: transparent;
    width: 10.2%;
    line-height: 0;
    cursor: pointer;
    transition: all 200ms ease-in-out;
  }
  .gif-tv button.dial:hover,
  .gif-tv button.dial:focus {
    outline: none;
  }
  .gif-tv button.dial:hover {
    border-color: #0af;
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
  .gif-tv button#gif_tv_button_channel {
    top: 56.3%;
  }
</style>

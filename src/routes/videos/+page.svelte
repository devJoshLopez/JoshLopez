<script>
  import { onMount } from "svelte";
  import RetroButton from "$lib/components/fun/RetroButton.svelte";

  const youtubeAPIKey = "AIzaSyBCczuoSB1SwWrB6JasEjtKY-zIvmFRxTk";
  const youtubeChannelID = "UCuAXFkgsw1L7xaCfnd5JJOw";
  const youtubeAPIURL = `https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&channelId=${youtubeChannelID}&part=snippet,id&order=date&maxResults=10`;

  /**
   * @type {any[]}
   */
  let videos = [];

  onMount(async () => {
    const response = await fetch(youtubeAPIURL);
    const data = await response.json();
    videos = data.items.map(
      (
        /** @type {{ snippet: { title: any; }; id: { videoId: any; }; }} */ item,
      ) => ({
        title: item.snippet.title,
        url: `https://www.youtube.com/embed/${item.id.videoId}`,
        // @ts-ignore
        thumbnail: item.snippet.thumbnails.default.url,
      }),
    );
  });
</script>

<div class="mx-auto max-w-4xl px-4">
  <section
    class="section-glass relative mb-32 mt-3 gap-4 rounded-md p-8 text-white"
  >
    <h1 class="mb-6 text-4xl font-bold">Videos</h1>
    <!-- make the flex box have 4 columns that wrap and max-md: set it to only 1 column -->
    <div
      class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 md:grid-cols-3"
    >
      {#each videos as video}
        <div
          class="relative flex flex-col gap-3 rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 max-md:border-none max-md:bg-none max-md:p-0"
        >
          <div>
            <img
              src={video.thumbnail}
              alt={video.title}
              class="mb-3 h-auto w-full rounded-md object-cover object-top shadow-2xl"
            />
          </div>
          <h2 class="text-1xl">{video.title}</h2>
          <!-- force the button to stay on the bottom of the div even when the title is really short -->
          <div class="mt-auto">
            <RetroButton url={video.url} label="Watch Video" size="200px" />
          </div>
        </div>
      {/each}
    </div>
  </section>
</div>

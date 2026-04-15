<script>
  import RetroButton from "$lib/components/fun/RetroButton.svelte";
  import projectsData from "$lib/data/projects.json";

  /**
   * @typedef {{
   *   title: string;
   *   status: string;
   *   about: string;
   *   link?: string;
   *   icon: { type: "svg"; path: string } | { type: "image"; url: string };
   * }} Project
   */

  const currentProjects = /** @type {Project[]} */ (projectsData.current);
  const futureProjects = /** @type {Project[]} */ (projectsData.future);
</script>

<div class="mx-auto max-w-4xl">
  <section
    class="section-glass relative mt-3 mb-32 gap-4 rounded-md p-8 text-white"
  >
    <h1 class="mb-6 text-4xl font-bold">Projects</h1>

    <div class="p-6 text-white max-md:mb-16 max-md:p-0">
      <h2 class="text-2x mb-4">Current Projects</h2>
      <div
        class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 max-md:gap-6 md:grid-cols-2"
      >
        {#each currentProjects as project (project.title)}
          <div
            class="relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-linear-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 shadow-lg transition-all hover:shadow-xl max-md:border-none max-md:bg-none max-md:p-0 max-md:shadow-none max-md:hover:shadow-none"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <h3 class="post-title text-2xl leading-tight font-bold">
                {project.title}
              </h3>
              {#if project.icon.type === "svg"}
                <svg
                  class="h-8 w-8 shrink-0 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d={project.icon.path}></path>
                </svg>
              {:else if project.icon.type === "image"}
                <img
                  src={project.icon.url}
                  alt={`${project.title} icon`}
                  class="h-10 w-10 shrink-0 object-contain"
                />
              {/if}
            </div>

            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span
                class="rounded-md bg-violet-50/50 px-2 py-1 text-xs whitespace-nowrap text-black"
              >
                {project.status}
              </span>
            </div>

            <p class="mb-4 text-gray-300">{project.about}</p>
            {#if project.link}
              <div class="mt-auto">
                <RetroButton
                  url={project.link}
                  label="View Project"
                  size="200px"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <div class="p-6 text-white max-md:p-0">
      <h2 class="text-2x mb-4">Future Projects & Ideas</h2>
      <div
        class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 max-md:gap-6 md:grid-cols-2"
      >
        {#each futureProjects as project (project.title)}
          <div
            class="relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-linear-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 shadow-lg transition-all hover:shadow-xl max-md:border-none max-md:bg-none max-md:p-0 max-md:shadow-none max-md:hover:shadow-none"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <h3 class="post-title text-2xl leading-tight font-bold">
                {project.title}
              </h3>
              {#if project.icon.type === "svg"}
                <svg
                  class="h-8 w-8 shrink-0 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d={project.icon.path}></path>
                </svg>
              {:else if project.icon.type === "image"}
                <img
                  src={project.icon.url}
                  alt={`${project.title} icon`}
                  class="h-10 w-10 shrink-0 object-contain"
                />
              {/if}
            </div>

            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span
                class="rounded-md bg-violet-50/50 px-2 py-1 text-xs whitespace-nowrap text-black"
              >
                {project.status}
              </span>
            </div>

            <p class="mb-4 text-gray-300">{project.about}</p>
            {#if project.link}
              <div class="mt-auto">
                <RetroButton
                  url={project.link}
                  label="View Project"
                  size="200px"
                />
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>

<style>
  .post-title {
    font-family: "Teenage Dreams Bold", sans-serif;
    line-height: 1.2;
    text-transform: capitalize;
    filter: drop-shadow(2px 3px 0 #000000);
  }
</style>

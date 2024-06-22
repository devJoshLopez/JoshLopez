<script>
  // @ts-nocheck
  import RetroButton from "$lib/components/fun/RetroButton.svelte";
  import ReyIcon from "$lib/images/rey-icon-cropped.png";

  const currentProjects = [
    {
      title: "Quantum's Curse",
      status: "In Progress",
      about:
        "A high-stakes thriller exploring the ethical dilemmas of a visionary physicist caught between scientific discovery and dangerous ambition.",
      icon: {
        type: "svg",
        path: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
      },
    },
    {
      title: "cStar",
      status: "In Development",
      about:
        "A revolutionary customer support tool for small businesses, built with SvelteKit, Prisma ORM, and Neon database.",
      icon: {
        type: "svg",
        path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      },
    },
    {
      title: "joshlopez.me - This Site",
      status: "Ongoing",
      about:
        "Personal website built with SvelteKit, running on GitHub Pages. An outlet for self-expression and creativity.",
      link: "https://joshlopez.me",
      icon: {
        type: "svg",
        path: "M12 2a10 10 0 1 0 0 20 10 10 0 1 0 0-20z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
      },
    },
    {
      title: "Rey - AI Customer Support",
      status: "Active",
      about:
        "A conversational AI chatbot for Memberstack, built with GPT-4 API, Vercel's AI SDK, and Pinecone for RAG setup.",
      link: "https://rey.memberstack.com",
      icon: { type: "image", url: ReyIcon },
    },
  ];

  const futureProjects = [
    {
      title: "Personal Robot Assistant",
      status: "Research Phase",
      about:
        "Dream project to build a personal robot assistant inspired by Johnny 5 and R2D2 that can help with physical tasks and daily routines.",
      icon: {
        type: "svg",
        path: "M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z M9 11v2 M15 11v2 M9 15h6",
      },
    },
    {
      title: "AI Assistant (Jarvis/Friday)",
      status: "Planning",
      about:
        "Developing a personal AI assistant inspired by popular sci-fi AI systems like Jarvis and Friday to help research, coding, and daily tasks.",
      icon: {
        type: "svg",
        path: "M4 4h16v16H4z M9 9h6v6H9z M4 9h2 M4 15h2 M18 9h2 M18 15h2 M9 4v2 M15 4v2 M9 18v2 M15 18v2",
      },
    },
    {
      title: "YouTube Channel",
      status: "Content Planning",
      about:
        "Creating video content about projects, tutorials, and tech interests.",
      link: "https://www.youtube.com/channel/UC3ffC775QA3VtYvT",
      icon: {
        type: "svg",
        path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z M9.75 15.02l5.75-3.27-5.75-3.27v6.54z",
      },
    },
  ];
</script>

<div class="mx-auto max-w-4xl">
  <section
    class="section-glass relative mb-32 mt-3 gap-4 rounded-md p-8 text-white"
  >
    <h1 class="mb-6 text-4xl font-bold">Projects</h1>

    <div class="p-6 text-white">
      <h2 class="text-2x mb-4">Current Projects</h2>
      <div
        class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 md:grid-cols-2"
      >
        {#each currentProjects as project}
          <div
            class="relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 shadow-lg transition-all hover:shadow-xl max-md:border-none max-md:bg-none max-md:p-0"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <h3 class="text-2xl font-bold leading-tight">{project.title}</h3>
              {#if project.icon.type === "svg"}
                <svg
                  class="h-8 w-8 flex-shrink-0 text-white"
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
                  class="h-10 w-10 flex-shrink-0 object-contain"
                />
              {/if}
            </div>

            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span
                class="whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black"
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

    <div class="p-6 text-white">
      <h2 class="text-2x mb-4">Future Projects & Ideas</h2>
      <div
        class="grid grid-cols-1 gap-4 rounded-md text-white max-md:grid-cols-1 md:grid-cols-2"
      >
        {#each futureProjects as project}
          <div
            class="relative col-span-1 flex flex-col rounded-md border border-violet-50/20 bg-gradient-to-b from-gray-50/15 to-gray-50/5 px-8 py-8 shadow-lg transition-all hover:shadow-xl max-md:border-none max-md:bg-none max-md:p-0"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <h3 class="text-2xl font-bold leading-tight">{project.title}</h3>
              {#if project.icon.type === "svg"}
                <svg
                  class="h-8 w-8 flex-shrink-0 text-white"
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
                  class="h-10 w-10 flex-shrink-0 object-contain"
                />
              {/if}
            </div>

            <div class="mb-3 flex flex-wrap items-center gap-3">
              <span
                class="whitespace-nowrap rounded-md bg-violet-50/50 px-2 py-1 text-xs text-black"
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

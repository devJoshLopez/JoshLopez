<script>
  import { resolve } from "$app/paths";

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header
  class="fixed top-0 z-20 flex w-full items-center justify-between border-b-4 border-pink-600 bg-gray-900 p-4 text-white"
>
  <a href={resolve("/")}><h1 class="text-4xl">Josh Lopez</h1></a>
  <button
    on:click={toggleMenu}
    class="text-pink-600 md:hidden"
    aria-label="Toggle navigation menu"
    aria-expanded={menuOpen}
  >
    <svg
      class="h-8 w-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
  <nav
    class={`nav-menu ${menuOpen ? "" : "hidden"} flex rounded-b-md md:flex md:space-x-4`}
    aria-label="Main Navigation"
  >
    <a
      href={resolve("/videos")}
      class="glow-on-hover font-bold text-pink-600 hover:text-teal-400"
      >Videos</a
    >
    <a
      href={resolve("/writings")}
      class="glow-on-hover font-bold text-pink-600 hover:text-teal-400"
      >Writings</a
    >
    <a
      href={resolve("/projects")}
      class="glow-on-hover font-bold text-pink-600 hover:text-teal-400"
      >Projects</a
    >
    <a
      href={resolve("/connect")}
      class="glow-on-hover font-bold text-pink-600 hover:text-teal-400"
      >Connect</a
    >
  </nav>
</header>

<style>
  @media (max-width: 768px) {
    .nav-menu {
      flex-direction: column;
      background-color: #1a202c; /* Same as the header background */
      position: absolute;
      top: 100%;
      right: 16px;
      width: auto;
      padding: 1rem;
    }

    .nav-menu a {
      margin-bottom: 0.5rem;
    }
  }
</style>

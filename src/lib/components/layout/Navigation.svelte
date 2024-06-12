<script>
  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<header
  class="bg-gray-900 text-white border-b-4 border-pink-600 p-4 fixed top-0 w-full z-20 flex justify-between items-center"
>
  <a href="/"><h1 class="text-4xl">Josh Lopez</h1></a>
  <button on:click={toggleMenu} class="text-pink-600 md:hidden">
    <svg
      class="w-8 h-8"
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
    class={`nav-menu ${menuOpen ? "" : "hidden"} flex md:flex md:space-x-4 rounded-b-md`}
    aria-label="Main Navigation"
  >
    <a
      href="/videos"
      class="text-pink-600 hover:text-teal-400 font-bold glow-on-hover"
      >Videos</a
    >
    <a
      href="/writings"
      class="text-pink-600 hover:text-teal-400 font-bold glow-on-hover"
      >Writings</a
    >
    <a
      href="/projects"
      class="text-pink-600 hover:text-teal-400 font-bold glow-on-hover"
      >Projects</a
    >
    <a
      href="/connect"
      class="text-pink-600 hover:text-teal-400 font-bold glow-on-hover"
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

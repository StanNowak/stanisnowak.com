<!-- Navbar.svelte -->
<script>
  import { goto } from '$app/navigation';
</script>

<nav>
  <ul>
    <li><button on:click={() => goto('/')}>Home</button></li>
    <li><button on:click={() => goto('/about')}>About</button></li>
    <li><button on:click={() => goto('/publications')}>Publications</button></li>
    <li><button on:click={() => goto('/projects')}>Research Projects</button></li>
    <li><button on:click={() => goto('/cv')}>CV</button></li>
  </ul>
</nav>
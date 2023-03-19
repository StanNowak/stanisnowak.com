<!-- src/routes/+layout.svelte -->
<script>
  import { browser } from '$app/environment';
  import '../app.css';
</script>

<style>
  :root {
    --bg-color: #1a1a1a;
    --text-color: #f5f5f5;
    --primary-color: #ff9800;
    --menu-color: #333333;
    --link-hover-color: #ffa726;
  }

  body {
    font-family: "Helvetica Neue", sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    margin: 0;
    padding: 0;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    font-weight:600;
    font-size: 21px;
    align-items: center;
    background-color: var(--menu-color);
    padding: 15px 25px;
  }

  .logo-link,
  .menu-link {
    color: var(--text-color);
    text-decoration: none;
    margin-right: 15px;
  }

  .logo-link:hover,
  .menu-link:hover {
    color: var(--link-hover-color);
  }

  .menu {
    display: flex;
  }
</style>

<header>
  <div class="navbar">
    <div class="logo">
      <a href="/" class="logo-link">Stan Nowak</a>
    </div>
    <div class="menu">
      <a href="/publications" class="menu-link">Publications</a>
      <!-- <a href="/cv" class="menu-link">CV</a> -->
    </div>
  </div>
</header>

<main>
  <slot></slot>
</main>

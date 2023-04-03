<!-- src/routes/+layout.svelte -->
<script>
  import { browser } from '$app/environment';
  import '../app.css';
</script>

<svelte:head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-9MEDMN3QKR"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-9MEDMN3QKR', {
  'page_title': document.title,
  'page_path': window.location.pathname + window.location.search
});

  </script>
</svelte:head>

<style>
  :root {
    --bg-color: #1a1a1a;
    --text-color: #f5f5f5;
    --primary-color: #ff9800;
    --menu-color: #333333;
    --link-hover-color: #ffa726;
  }

  body {
    font-family: 'Fira Sans', sans-serif;
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

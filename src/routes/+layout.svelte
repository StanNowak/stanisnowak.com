<script>
  import { page } from '$app/stores';
  import '../app.css';
</script>

<svelte:head>
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

<div class="site">
  <header>
    <nav>
      <a href="/" class="wordmark" class:active={$page.url.pathname === '/'}>Stan Nowak</a>
      <div class="nav-links">
        <a href="/publications" class:active={$page.url.pathname === '/publications'}>Publications</a>
        <a href="/cv" class:active={$page.url.pathname === '/cv'}>CV</a>
      </div>
    </nav>
  </header>

  <main>
    <slot />
  </main>

  <footer>
    <div class="footer-inner">
      <span class="mono">&copy; {new Date().getFullYear()}</span>
      <span class="dot">&middot;</span>
      <span>Stan Nowak</span>
    </div>
  </footer>
</div>

<style>
  .site {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    border-bottom: 1px solid var(--line);
  }

  nav {
    max-width: var(--measure);
    margin: 0 auto;
    padding: 1.25rem var(--page-pad);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .wordmark {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.05rem;
    letter-spacing: var(--tracking-tight);
    color: var(--ink);
    text-decoration: none;
  }

  .wordmark:hover {
    color: var(--accent);
  }

  .nav-links {
    display: flex;
    gap: 1.75rem;
  }

  .nav-links a {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--muted-ink);
    text-decoration: none;
    padding-bottom: 2px;
    border-bottom: 1.5px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease;
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--ink);
    border-bottom-color: var(--accent);
  }

  main {
    flex: 1;
    max-width: var(--measure);
    width: 100%;
    margin: 0 auto;
    padding: 3rem var(--page-pad) 4rem;
  }

  footer {
    border-top: 1px solid var(--line);
    margin-top: auto;
  }

  .footer-inner {
    max-width: var(--measure);
    margin: 0 auto;
    padding: 1.25rem var(--page-pad);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--muted-ink);
  }

  .mono {
    font-family: var(--font-mono);
    font-size: 0.75rem;
  }

  .dot {
    opacity: 0.4;
  }
</style>

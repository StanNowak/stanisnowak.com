<script>
  import { page } from '$app/stores';
  import '../app.css';
  import TopoBackground from '$lib/TopoBackground.svelte';

  let bgMode = 0; // 0: topo lines, 1: dot grid, 2: off
  const MODE_LABELS = ['◈', '◇', '○'];

  function cycleBg() {
    bgMode = (bgMode + 1) % 3;
  }
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
      <button
        class="easter-egg"
        class:active={bgMode < 2}
        on:click={cycleBg}
        aria-label="Cycle generative background"
        title="Try clicking around"
      >{MODE_LABELS[bgMode]}</button>
    </div>
  </footer>
</div>

<TopoBackground mode={bgMode} />

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

  .easter-egg {
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.15rem;
    color: var(--muted-ink);
    padding: 0.35rem;
    line-height: 1;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
    animation: breathe 3.5s ease-in-out infinite;
  }

  @keyframes breathe {
    0%, 100% { opacity: 0.45; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.12); }
  }

  .easter-egg:hover {
    color: var(--accent);
    opacity: 1;
    animation: none;
    transform: rotate(45deg) scale(1.2);
    text-shadow: 0 0 6px rgba(178, 34, 34, 0.3);
  }

  .easter-egg.active {
    color: var(--accent);
    opacity: 1;
    animation: spin-breathe 3.5s ease-in-out infinite;
  }

  @keyframes spin-breathe {
    0%, 100% { opacity: 0.65; transform: rotate(0deg) scale(1); }
    50% { opacity: 1; transform: rotate(180deg) scale(1.15); }
  }
</style>

<script>
  const pdfUrl = '/StanNowakCV.pdf';
  let headshot = '/Portrait.jpeg';
</script>

<svelte:head>
  <title>Stan Nowak — Cognition + Interactive Data</title>
  <meta name="description" content="Principal Designer & Researcher bridging cognition and interactive data analysis." />
</svelte:head>

<section class="hero">
  <div class="intro-row">
    <div class="intro-text">
      <h1>Stan Nowak</h1>
      <p class="tagline">Design &middot; Research &middot; Visualization</p>
    </div>
    <img src={headshot} alt="Stan Nowak" class="headshot" />
  </div>

  <hr />

  <p class="lead">
    I bridge <strong>human cognition</strong> and <strong>interactive data
    systems</strong> — helping people reason through complex, ambiguous
    problems.
  </p>
</section>

<section>
  <h2>Currently</h2>
  <p>
    Principal Designer &amp; Researcher at
    <a href="https://avalanche.ca">Avalanche Canada</a> — the lead designer
    responsible for all digital products. The tools I design and build are
    used by the public and avalanche professionals across Canada and the
    United States, including the Colorado Avalanche Information Center and
    Parks Canada.
  </p>
  <p>
    I design, prototype, code, and conduct research.
  </p>
</section>

<section>
  <h2>Background</h2>
  <p>
    PhD in visual analytics and HCI from Simon Fraser University. BA in
    Cognitive Systems from UBC. Previously at Autodesk, the Vancouver
    Institute for Visual Analytics, and independent visualization consulting.
  </p>
</section>

<section class="cta-row">
  <a href="/publications" class="cta">Publications &rarr;</a>
  <a href={pdfUrl} class="cta secondary">Download CV</a>
  <span class="meta">Last updated Feb 2026</span>
</section>

<style>
  .hero {
    margin-bottom: 2.5rem;
  }

  .intro-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .intro-text {
    flex: 1;
  }

  h1 {
    margin-bottom: 0.25rem;
  }

  .tagline {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 1.05rem;
    color: var(--muted-ink);
    margin: 0;
  }

  .headshot {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid var(--line);
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  hr {
    border: none;
    border-top: 1px solid var(--line);
    margin: 1.75rem 0;
  }

  .lead {
    font-size: 1.1rem;
    line-height: 1.75;
    color: var(--ink);
  }

  .lead strong {
    font-weight: 500;
  }

  section {
    margin-bottom: 2.25rem;
  }

  section h2 {
    margin-bottom: 0.6rem;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid var(--line);
  }

  section p {
    max-width: 60ch;
  }

  .cta-row {
    display: flex;
    align-items: baseline;
    gap: 1.25rem;
    flex-wrap: wrap;
  }

  .cta {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 0.01em;
    color: var(--ink);
    text-decoration: none;
    padding: 0.5rem 1.1rem;
    border: 1.5px solid var(--ink);
    transition: background 0.2s ease, color 0.2s ease;
  }

  .cta:hover {
    background: var(--ink);
    color: var(--canvas);
  }

  .cta.secondary {
    border-color: var(--line);
    color: var(--muted-ink);
  }

  .cta.secondary:hover {
    border-color: var(--ink);
    background: var(--ink);
    color: var(--canvas);
  }

  .meta {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--muted-ink);
    opacity: 0.7;
  }

  @media (max-width: 520px) {
    .intro-row {
      flex-direction: column-reverse;
      align-items: flex-start;
      gap: 1rem;
    }

    .headshot {
      width: 80px;
      height: 80px;
    }
  }
</style>

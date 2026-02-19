import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero.svelte-a2nlzs.svelte-a2nlzs{margin-bottom:2.5rem}.intro-row.svelte-a2nlzs.svelte-a2nlzs{display:flex;justify-content:space-between;align-items:flex-start;gap:2rem}.intro-text.svelte-a2nlzs.svelte-a2nlzs{flex:1}h1.svelte-a2nlzs.svelte-a2nlzs{margin-bottom:0.25rem}.tagline.svelte-a2nlzs.svelte-a2nlzs{font-family:var(--font-display);font-weight:400;font-size:1.05rem;color:var(--muted-ink);margin:0}.headshot.svelte-a2nlzs.svelte-a2nlzs{width:110px;height:110px;border-radius:50%;object-fit:cover;border:1px solid var(--line);flex-shrink:0;margin-top:0.25rem}hr.svelte-a2nlzs.svelte-a2nlzs{border:none;border-top:1px solid var(--line);margin:1.75rem 0}.lead.svelte-a2nlzs.svelte-a2nlzs{font-size:1.1rem;line-height:1.75;color:var(--ink)}.lead.svelte-a2nlzs strong.svelte-a2nlzs{font-weight:500}section.svelte-a2nlzs.svelte-a2nlzs{margin-bottom:2.25rem}section.svelte-a2nlzs h2.svelte-a2nlzs{margin-bottom:0.6rem;padding-bottom:0.35rem;border-bottom:1px solid var(--line)}section.svelte-a2nlzs p.svelte-a2nlzs{max-width:60ch}.cta-row.svelte-a2nlzs.svelte-a2nlzs{display:flex;align-items:baseline;gap:1.25rem;flex-wrap:wrap}.cta.svelte-a2nlzs.svelte-a2nlzs{font-family:var(--font-display);font-weight:600;font-size:0.875rem;letter-spacing:0.01em;color:var(--ink);text-decoration:none;padding:0.5rem 1.1rem;border:1.5px solid var(--ink);transition:background 0.2s ease, color 0.2s ease}.cta.svelte-a2nlzs.svelte-a2nlzs:hover{background:var(--ink);color:var(--canvas)}.cta.secondary.svelte-a2nlzs.svelte-a2nlzs{border-color:var(--line);color:var(--muted-ink)}.cta.secondary.svelte-a2nlzs.svelte-a2nlzs:hover{border-color:var(--ink);background:var(--ink);color:var(--canvas)}.meta.svelte-a2nlzs.svelte-a2nlzs{font-family:var(--font-mono);font-size:0.75rem;color:var(--muted-ink);opacity:0.7}@media(max-width: 520px){.intro-row.svelte-a2nlzs.svelte-a2nlzs{flex-direction:column-reverse;align-items:flex-start;gap:1rem}.headshot.svelte-a2nlzs.svelte-a2nlzs{width:80px;height:80px}}",
  map: null
};
const pdfUrl = "/StanNowakCV.pdf";
let headshot = "/Portrait.jpeg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-i92k74_START -->${$$result.title = `<title>Stan Nowak — Cognition + Interactive Data</title>`, ""}<meta name="description" content="Principal Designer & Researcher bridging cognition and interactive data analysis."><!-- HEAD_svelte-i92k74_END -->`, ""}

<section class="hero svelte-a2nlzs"><div class="intro-row svelte-a2nlzs"><div class="intro-text svelte-a2nlzs"><h1 class="svelte-a2nlzs">Stan Nowak</h1>
      <p class="tagline svelte-a2nlzs">Design · Research · Visualization</p></div>
    <img${add_attribute("src", headshot, 0)} alt="Stan Nowak" class="headshot svelte-a2nlzs"></div>

  <hr class="svelte-a2nlzs">

  <p class="lead svelte-a2nlzs">I bridge <strong class="svelte-a2nlzs">human cognition</strong> and <strong class="svelte-a2nlzs">interactive data
    systems</strong> — helping people reason through complex, ambiguous
    problems.
  </p></section>

<section class="svelte-a2nlzs"><h2 class="svelte-a2nlzs">Currently</h2>
  <p class="svelte-a2nlzs">Principal Designer &amp; Researcher at
    <a href="https://avalanche.ca">Avalanche Canada</a> — the lead designer
    responsible for all digital products. The tools I design and build are
    used by the public and avalanche professionals across Canada and the
    United States, including the Colorado Avalanche Information Center and
    Parks Canada.
  </p>
  <p class="svelte-a2nlzs">I design, prototype, code, and conduct research.
  </p></section>

<section class="svelte-a2nlzs"><h2 class="svelte-a2nlzs">Background</h2>
  <p class="svelte-a2nlzs">PhD in visual analytics and HCI from Simon Fraser University. BA in
    Cognitive Systems from UBC. Previously at Autodesk, the Vancouver
    Institute for Visual Analytics, and independent visualization consulting.
  </p></section>

<section class="cta-row svelte-a2nlzs"><a href="/publications" class="cta svelte-a2nlzs">Publications →</a>
  <a${add_attribute("href", pdfUrl, 0)} class="cta secondary svelte-a2nlzs">Download CV</a>
  <span class="meta svelte-a2nlzs">Last updated Feb 2026</span>
</section>`;
});
export {
  Page as default
};

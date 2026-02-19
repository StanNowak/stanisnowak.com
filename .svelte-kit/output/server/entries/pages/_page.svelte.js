import { h as head, ad as attr } from "../../chunks/index.js";
function _page($$renderer) {
  const pdfUrl = "/StanNowakCV.pdf";
  let headshot = "/Portrait.jpeg";
  head("1uha8ag", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Stan Nowak — Cognition + Interactive Data</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Principal Designer &amp; Researcher bridging cognition and interactive data analysis."/>`);
  });
  $$renderer.push(`<section class="hero svelte-1uha8ag"><div class="intro-row svelte-1uha8ag"><div class="intro-text svelte-1uha8ag"><h1 class="svelte-1uha8ag">Stan Nowak</h1> <p class="tagline svelte-1uha8ag">Design · Research · Visualization</p></div> <img${attr("src", headshot)} alt="Stan Nowak" class="headshot svelte-1uha8ag"/></div> <hr class="svelte-1uha8ag"/> <p class="lead svelte-1uha8ag">I bridge <strong class="svelte-1uha8ag">human cognition</strong> and <strong class="svelte-1uha8ag">interactive data
    systems</strong> — helping people reason through complex, ambiguous
    problems.</p></section> <section class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">Currently</h2> <p class="svelte-1uha8ag">Principal Designer &amp; Researcher at <a href="https://avalanche.ca">Avalanche Canada</a> — the lead designer
    responsible for all digital products. The tools I design and build are
    used by the public and avalanche professionals across Canada and the
    United States, including the Colorado Avalanche Information Center and
    Parks Canada.</p> <p class="svelte-1uha8ag">I design, prototype, code, and conduct research.</p></section> <section class="svelte-1uha8ag"><h2 class="svelte-1uha8ag">Background</h2> <p class="svelte-1uha8ag">PhD in visual analytics and HCI from Simon Fraser University. BA in
    Cognitive Systems from UBC. Previously at Autodesk, the Vancouver
    Institute for Visual Analytics, and independent visualization consulting.</p></section> <section class="cta-row svelte-1uha8ag"><a href="/publications" class="cta svelte-1uha8ag">Publications →</a> <a${attr("href", pdfUrl)} class="cta secondary svelte-1uha8ag">Download CV</a> <span class="meta svelte-1uha8ag">Last updated Feb 2026</span></section>`);
}
export {
  _page as default
};

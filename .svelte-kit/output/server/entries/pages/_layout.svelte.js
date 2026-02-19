import { g as getContext, c as create_ssr_component, o as onDestroy, b as add_attribute, d as subscribe, e as escape, v as validate_component } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const app = "";
const TopoBackground_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".topo-canvas.svelte-7k1vjb{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;display:none}.topo-canvas.visible.svelte-7k1vjb{display:block}",
  map: null
};
function hexToRgb(hex) {
  return [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16)
  ];
}
const TopoBackground = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { mode = 0 } = $$props;
  let canvas;
  let ripples = [];
  let time = 0;
  const COLORS = ["#B22222", "#2E86AB", "#A23B72", "#F18F01", "#C73E1D", "#1B998B"];
  function resize() {
    return;
  }
  function handleMouseMove(e) {
    e.clientX;
    e.clientY;
  }
  function handleClick(e) {
    if (mode >= 2)
      return;
    if (e.target.closest(".easter-egg"))
      return;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    ripples.push({
      x: e.clientX,
      y: e.clientY,
      radius: 0,
      color,
      rgb: hexToRgb(color),
      birth: time
    });
    if (ripples.length > 10)
      ripples.shift();
  }
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    }
  });
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  $$result.css.add(css$1);
  return `<canvas class="${["topo-canvas svelte-7k1vjb", mode < 2 ? "visible" : ""].join(" ").trim()}"${add_attribute("this", canvas, 0)}></canvas>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".site.svelte-n9t3co.svelte-n9t3co{display:flex;flex-direction:column;min-height:100vh}header.svelte-n9t3co.svelte-n9t3co{border-bottom:1px solid var(--line)}nav.svelte-n9t3co.svelte-n9t3co{max-width:var(--measure);margin:0 auto;padding:1.25rem var(--page-pad);display:flex;justify-content:space-between;align-items:baseline}.wordmark.svelte-n9t3co.svelte-n9t3co{font-family:var(--font-display);font-weight:600;font-size:1.05rem;letter-spacing:var(--tracking-tight);color:var(--ink);text-decoration:none}.wordmark.svelte-n9t3co.svelte-n9t3co:hover{color:var(--accent)}.nav-links.svelte-n9t3co.svelte-n9t3co{display:flex;gap:1.75rem}.nav-links.svelte-n9t3co a.svelte-n9t3co{font-family:var(--font-display);font-weight:500;font-size:0.875rem;letter-spacing:0.02em;text-transform:uppercase;color:var(--muted-ink);text-decoration:none;padding-bottom:2px;border-bottom:1.5px solid transparent;transition:color 0.2s ease, border-color 0.2s ease}.nav-links.svelte-n9t3co a.svelte-n9t3co:hover,.nav-links.svelte-n9t3co a.active.svelte-n9t3co{color:var(--ink);border-bottom-color:var(--accent)}main.svelte-n9t3co.svelte-n9t3co{flex:1;max-width:var(--measure);width:100%;margin:0 auto;padding:3rem var(--page-pad) 4rem}footer.svelte-n9t3co.svelte-n9t3co{border-top:1px solid var(--line);margin-top:auto}.footer-inner.svelte-n9t3co.svelte-n9t3co{max-width:var(--measure);margin:0 auto;padding:1.25rem var(--page-pad);display:flex;align-items:center;gap:0.5rem;font-size:0.8rem;color:var(--muted-ink)}.mono.svelte-n9t3co.svelte-n9t3co{font-family:var(--font-mono);font-size:0.75rem}.dot.svelte-n9t3co.svelte-n9t3co{opacity:0.4}.easter-egg.svelte-n9t3co.svelte-n9t3co{margin-left:auto;background:none;border:1px solid var(--line);border-radius:100px;cursor:pointer;display:flex;align-items:center;gap:0.35rem;padding:0.3rem 0.65rem 0.3rem 0.5rem;line-height:1;color:var(--muted-ink);font-family:var(--font-mono);transition:all 0.3s ease;animation:svelte-n9t3co-nudge 4s ease-in-out infinite}.ee-icon.svelte-n9t3co.svelte-n9t3co{font-size:0.9rem;transition:transform 0.3s ease}.ee-label.svelte-n9t3co.svelte-n9t3co{font-size:0.65rem;letter-spacing:0.04em;text-transform:uppercase}@keyframes svelte-n9t3co-nudge{0%,100%{opacity:0.5;border-color:var(--line)}50%{opacity:0.85;border-color:var(--muted-ink)}}.easter-egg.svelte-n9t3co.svelte-n9t3co:hover{animation:none;opacity:1;color:var(--accent);border-color:var(--accent);background:rgba(178, 34, 34, 0.04)}.easter-egg.svelte-n9t3co:hover .ee-icon.svelte-n9t3co{transform:rotate(90deg)}.easter-egg.active.svelte-n9t3co.svelte-n9t3co{color:var(--accent);border-color:rgba(178, 34, 34, 0.25)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLanding;
  let effectiveMode;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let bgMode = 0;
  const MODE_ICONS = ["◈", "◇", "○"];
  const MODE_NAMES = ["terrain", "dots", "off"];
  $$result.css.add(css);
  isLanding = $page.url.pathname === "/";
  effectiveMode = isLanding ? bgMode : 2;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1i1yfm9_START --><script async src="https://www.googletagmanager.com/gtag/js?id=G-9MEDMN3QKR"><\/script><script>window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9MEDMN3QKR', {
      'page_title': document.title,
      'page_path': window.location.pathname + window.location.search
    });
  <\/script><!-- HEAD_svelte-1i1yfm9_END -->`, ""}

<div class="site svelte-n9t3co"><header class="svelte-n9t3co"><nav class="svelte-n9t3co"><a href="/" class="${["wordmark svelte-n9t3co", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}">Stan Nowak</a>
      <div class="nav-links svelte-n9t3co"><a href="/publications" class="${["svelte-n9t3co", $page.url.pathname === "/publications" ? "active" : ""].join(" ").trim()}">Publications</a>
        <a href="/cv" class="${["svelte-n9t3co", $page.url.pathname === "/cv" ? "active" : ""].join(" ").trim()}">CV</a></div></nav></header>

  <main class="svelte-n9t3co">${slots.default ? slots.default({}) : ``}</main>

  <footer class="svelte-n9t3co"><div class="footer-inner svelte-n9t3co"><span class="mono svelte-n9t3co">© ${escape((/* @__PURE__ */ new Date()).getFullYear())}</span>
      <span class="dot svelte-n9t3co">·</span>
      <span>Stan Nowak</span>
      ${isLanding ? `<button class="${["easter-egg svelte-n9t3co", "active"].join(" ").trim()}" aria-label="Cycle generative background" title="Click anywhere on the page too"><span class="ee-icon svelte-n9t3co">${escape(MODE_ICONS[bgMode])}</span>
          <span class="ee-label svelte-n9t3co">${escape(MODE_NAMES[bgMode])}</span></button>` : ``}</div></footer></div>

${validate_component(TopoBackground, "TopoBackground").$$render($$result, { mode: effectiveMode }, {}, {})}`;
});
export {
  Layout as default
};

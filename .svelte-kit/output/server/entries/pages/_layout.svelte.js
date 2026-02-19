import { n as noop, g as getContext, f as fallback, a as attr_class, b as bind_props, c as store_get, h as head, d as slot, e as escape_html, u as unsubscribe_stores } from "../../chunks/index.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/root.js";
import { o as onDestroy } from "../../chunks/index-server.js";
const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
if (is_legacy) {
  ({
    data: {},
    form: null,
    error: null,
    params: {},
    route: { id: null },
    state: {},
    status: -1,
    url: new URL("https://example.com")
  });
}
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
function TopoBackground($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let mode = fallback($$props["mode"], 0);
    let ripples = [];
    let time = 0;
    const COLORS = [
      "#B22222",
      "#2E86AB",
      "#A23B72",
      "#F18F01",
      "#C73E1D",
      "#1B998B"
    ];
    function hexToRgb(hex) {
      return [
        parseInt(hex.slice(1, 3), 16),
        parseInt(hex.slice(3, 5), 16),
        parseInt(hex.slice(5, 7), 16)
      ];
    }
    function resize() {
      return;
    }
    function handleMouseMove(e) {
      e.clientX;
      e.clientY;
    }
    function handleClick(e) {
      if (mode >= 2) return;
      if (e.target.closest(".easter-egg")) return;
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        color,
        rgb: hexToRgb(color),
        birth: time
      });
      if (ripples.length > 10) ripples.shift();
    }
    onDestroy(() => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("click", handleClick);
      }
    });
    $$renderer2.push(`<canvas${attr_class("topo-canvas svelte-142gcaj", void 0, { "visible": mode < 2 })}></canvas>`);
    bind_props($$props, { mode });
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isLanding, effectiveMode;
    let bgMode = 0;
    const MODE_ICONS = ["◈", "◇", "○"];
    const MODE_NAMES = ["terrain", "dots", "off"];
    isLanding = store_get($$store_subs ??= {}, "$page", page).url.pathname === "/";
    effectiveMode = isLanding ? bgMode : 2;
    head("12qhfyh", $$renderer2, ($$renderer3) => {
      $$renderer3.push(`<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-9MEDMN3QKR" class="svelte-12qhfyh"><\/script>`);
      $$renderer3.push(` `);
      $$renderer3.push(`<script class="svelte-12qhfyh">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9MEDMN3QKR', {
      'page_title': document.title,
      'page_path': window.location.pathname + window.location.search
    });
  <\/script>`);
    });
    $$renderer2.push(`<div class="site svelte-12qhfyh"><header class="svelte-12qhfyh"><nav class="svelte-12qhfyh"><a href="/"${attr_class("wordmark svelte-12qhfyh", void 0, {
      "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/"
    })}>Stan Nowak</a> <div class="nav-links svelte-12qhfyh"><a href="/publications"${attr_class("svelte-12qhfyh", void 0, {
      "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/publications"
    })}>Publications</a> <a href="/cv"${attr_class("svelte-12qhfyh", void 0, {
      "active": store_get($$store_subs ??= {}, "$page", page).url.pathname === "/cv"
    })}>CV</a></div></nav></header> <main class="svelte-12qhfyh"><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></main> <footer class="svelte-12qhfyh"><div class="footer-inner svelte-12qhfyh"><span class="mono svelte-12qhfyh">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())}</span> <span class="dot svelte-12qhfyh">·</span> <span class="svelte-12qhfyh">Stan Nowak</span> `);
    if (isLanding) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button${attr_class("easter-egg svelte-12qhfyh", void 0, { "active": bgMode < 2 })} aria-label="Cycle generative background" title="Click anywhere on the page too"><span class="ee-icon svelte-12qhfyh">${escape_html(MODE_ICONS[bgMode])}</span> <span class="ee-label svelte-12qhfyh">${escape_html(MODE_NAMES[bgMode])}</span></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></footer></div> `);
    TopoBackground($$renderer2, { mode: effectiveMode });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _layout as default
};

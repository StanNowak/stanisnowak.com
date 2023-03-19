import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ":root{--bg-color:#1a1a1a;--text-color:#f5f5f5;--primary-color:#ff9800;--menu-color:#333333;--link-hover-color:#ffa726}.navbar.svelte-jx2eea{display:flex;justify-content:space-between;font-weight:600;font-size:21px;align-items:center;background-color:var(--menu-color);padding:15px 25px}.logo-link.svelte-jx2eea,.menu-link.svelte-jx2eea{color:var(--text-color);text-decoration:none;margin-right:15px}.logo-link.svelte-jx2eea:hover,.menu-link.svelte-jx2eea:hover{color:var(--link-hover-color)}.menu.svelte-jx2eea{display:flex}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `




<header><div class="navbar svelte-jx2eea"><div class="logo"><a href="/" class="logo-link svelte-jx2eea">Stan Nowak</a></div>
    <div class="menu svelte-jx2eea"><a href="/publications" class="menu-link svelte-jx2eea">Publications</a>
      </div></div></header>

<main>${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};

import { c as create_ssr_component, o as onDestroy, b as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-header.svelte-7iv2rl{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid var(--line)}.download-link.svelte-7iv2rl{font-family:var(--font-mono);font-size:0.8rem;color:var(--accent);text-decoration:none}.download-link.svelte-7iv2rl:hover{text-decoration:underline}.pdf-container.svelte-7iv2rl{overflow-y:auto;max-height:80vh;border:1px solid var(--line)}.pdf-container.svelte-7iv2rl canvas{display:block;width:100%;height:auto}",
  map: null
};
const pdfUrl = "/StanNowakCV.pdf";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let container;
  let resizeTimeout;
  async function renderPdf(pdf, scale) {
    container.innerHTML = "";
    const numPages = pdf.numPages;
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const canvas = document.createElement("canvas");
      container.appendChild(canvas);
      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const canvasContext = canvas.getContext("2d");
      await page.render({ canvasContext, viewport }).promise;
    }
  }
  async function loadPdf() {
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js";
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const containerWidth = container.clientWidth;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      await renderPdf(pdf, scale);
    } catch (error) {
      console.error("Error rendering PDF:", error);
    }
  }
  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(loadPdf, 200);
  }
  onDestroy(() => {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", handleResize);
    }
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1yjwjlu_START -->${$$result.title = `<title>CV — Stan Nowak</title>`, ""}<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"><\/script><!-- HEAD_svelte-1yjwjlu_END -->`, ""}

<header class="page-header svelte-7iv2rl"><h1>Curriculum Vitae</h1>
  <a${add_attribute("href", pdfUrl, 0)} download="StanNowak-CV.pdf" class="download-link svelte-7iv2rl">Download PDF ↓</a></header>

<div class="pdf-container svelte-7iv2rl"${add_attribute("this", container, 0)}></div>`;
});
export {
  Page as default
};

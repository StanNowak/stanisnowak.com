import { c as create_ssr_component, o as onDestroy, b as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-container.svelte-gegfv5{max-width:900px;margin:0 auto;padding:30px}a.svelte-gegfv5{color:var(--link-hover-color);text-decoration:none}a.svelte-gegfv5:hover{text-decoration:underline}",
  map: null
};
const pdfUrl = "/StanNowakCV2023.pdf";
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
      const renderContext = { canvasContext, viewport };
      await page.render(renderContext).promise;
    }
  }
  async function loadPdf() {
    const pdfjsLib = window["pdfjs-dist/build/pdf"];
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js";
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
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
    window.removeEventListener("resize", handleResize);
  });
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-awqwkc_START --><script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"><\/script><!-- HEAD_svelte-awqwkc_END -->`, ""}
  <div class="page-container svelte-gegfv5">
    <h1><a${add_attribute("href", pdfUrl, 0)} download="my-cv.pdf" class="svelte-gegfv5">Download my CV</a></h1>
  
    
    <div style="overflow-y: scroll; max-height: 80vh;"${add_attribute("this", container, 0)}></div>
  </div>`;
});
export {
  Page as default
};

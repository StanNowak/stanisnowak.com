import { h as head, ad as attr } from "../../../chunks/index.js";
import { o as onDestroy } from "../../../chunks/index-server.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let container;
    const pdfUrl = "/StanNowakCV.pdf";
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
    head("14tzwpa", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>CV — Stan Nowak</title>`);
      });
      $$renderer3.push(`<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"><\/script>`);
      $$renderer3.push(`<!---->`);
    });
    $$renderer2.push(`<header class="page-header svelte-14tzwpa"><h1>Curriculum Vitae</h1> <a${attr("href", pdfUrl)} download="StanNowak-CV.pdf" class="download-link svelte-14tzwpa">Download PDF ↓</a></header> <div class="pdf-container svelte-14tzwpa"></div>`);
  });
}
export {
  _page as default
};

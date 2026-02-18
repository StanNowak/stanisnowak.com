<script>
  import { onMount, onDestroy } from 'svelte';

  let container;
  const pdfUrl = '/StanNowakCV.pdf';
  let resizeTimeout;

  async function renderPdf(pdf, scale) {
    container.innerHTML = '';
    const numPages = pdf.numPages;
    for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
      const canvas = document.createElement('canvas');
      container.appendChild(canvas);

      const page = await pdf.getPage(pageNumber);
      const viewport = page.getViewport({ scale });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const canvasContext = canvas.getContext('2d');
      await page.render({ canvasContext, viewport }).promise;
    }
  }

  async function loadPdf() {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const containerWidth = container.clientWidth;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const scale = containerWidth / viewport.width;
      await renderPdf(pdf, scale);
    } catch (error) {
      console.error('Error rendering PDF:', error);
    }
  }

  function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(loadPdf, 200);
  }

  onMount(() => {
    loadPdf();
    window.addEventListener('resize', handleResize);
    setTimeout(() => window.dispatchEvent(new Event('resize')), 0);
  });

  onDestroy(() => {
    window.removeEventListener('resize', handleResize);
  });
</script>

<svelte:head>
  <title>CV — Stan Nowak</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
</svelte:head>

<header class="page-header">
  <h1>Curriculum Vitae</h1>
  <a href={pdfUrl} download="StanNowak-CV.pdf" class="download-link">Download PDF &darr;</a>
</header>

<div bind:this={container} class="pdf-container"></div>

<style>
  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--line);
  }

  .download-link {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--accent);
    text-decoration: none;
  }

  .download-link:hover {
    text-decoration: underline;
  }

  .pdf-container {
    overflow-y: auto;
    max-height: 80vh;
    border: 1px solid var(--line);
  }

  .pdf-container :global(canvas) {
    display: block;
    width: 100%;
    height: auto;
  }
</style>

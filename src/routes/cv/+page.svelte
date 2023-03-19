<script>
    import { onMount, onDestroy } from 'svelte';
  
    let container;
    const pdfUrl = '/StanNowakCV2023.pdf';
    let resizeTimeout;
  
    async function renderPdf(pdf, scale) {
      container.innerHTML = ''; // Clear the container before rendering
      const numPages = pdf.numPages;
      for (let pageNumber = 1; pageNumber <= numPages; pageNumber++) {
        const canvas = document.createElement('canvas');
        container.appendChild(canvas);
  
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale });
  
        canvas.width = viewport.width;
        canvas.height = viewport.height;
  
        const canvasContext = canvas.getContext('2d');
        const renderContext = {
          canvasContext,
          viewport,
        };
  
        await page.render(renderContext).promise;
      }
    }
  
    async function loadPdf() {
      const pdfjsLib = window['pdfjs-dist/build/pdf'];
  
      try {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';
        const loadingTask = pdfjsLib.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;
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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
  </svelte:head>
  <div class="page-container">
    <!-- Download link -->
    <h1><a href={pdfUrl} download="my-cv.pdf">Download my CV</a></h1>
  
    <!-- Display the PDF using canvas elements inside a container -->
    <div bind:this={container} style="overflow-y: scroll; max-height: 80vh;"></div>
  </div>
  
  <style>
    .page-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 30px;
    }
    a {
      color: var(--link-hover-color);
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  
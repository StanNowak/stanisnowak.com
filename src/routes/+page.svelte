<!-- src/routes/index.svelte -->
<script>
    let headshot = "/Portrait.jpeg";
    const pdfUrl = '/StanNowakCV.pdf';
  </script>
  
  <style>
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 30px;
    }
  
    .headshot-container {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }
  
    .headshot {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 10px;
    }
  
    h2 {
      font-size: 2rem;
      font-weight: 600;
      margin: 40px 0 20px;
    }
  
    p {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  
    a {
      color: var(--link-hover-color);
      text-decoration: none;
    }
  
    a:hover {
      text-decoration: underline;
    }
  </style>
  
  <div class="container">
    <div class="headshot-container">
      <img src="{headshot}" alt="Your Name" class="headshot" />
    </div>
    <p>
      I’m a Visualization Designer & Researcher at
      <a href="https://avalanche.ca/about/avcan-staff">Avalanche Canada</a>. My role involves designing visual analytics and other software systems used for avalanche safety by both professionals and the public. I thrive at the intersection of product design and applied research, creating solutions inspired by and evaluated through real-world challenges.
    </p>
    <h2>Research</h2>
    <p>
      I am interested in visual analytics for risk assessment in complex systems, particularly emphasizing enhancement of human data interaction, knowledge elcititation, sensemaking, and decision-making in critical, collaborative environments. Currently, I am exploring interactive knowledge management systems to better support collaborative sensemaking.
    </p>
    <br>
    <h3><a href={pdfUrl} >Download my CV</a></h3><small>last updated January 2024</small>
  </div>


<!-- src/routes/index.svelte -->
<script>
    let headshot = "/Portrait.jpeg";
    const pdfUrl = '/StanNowakCV2023.pdf';
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
      I’m a PhD candidate at the
      <a href="https://www.sfu.ca/siat.html">School of Interactive Arts and Technology</a>
      at <a href="https://www.sfu.ca/">Simon Fraser University</a> where I also work at the
      <a href="http://viva.sfu.ca/">Vancouver Institute for Visual Analytics</a>. I design and build interactive data interfaces and provide training in visual analytics. My supervisory committee includes
      <a href="https://www.sfu.ca/~lyn/">Lyn Bartram</a>,
      <a href="https://www.avalancheresearch.ca/pascal-haegeli/">Pascal Haegeli</a>, and
      <a href="https://ws.iat.sfu.ca/">Wolfgang Stuerzlinger</a>.
    </p>
    <h2>Research</h2>
    <p>
      I am interested in problem-driven and applied visualization research. My research focuses on the use of visual analytics in risk assessment in complex systems. I am particularly interested in the use of visual analytics to better support human data interaction (HDI), knowledge elicitation, complex and ambiguous sensemaking, and decision-making in time-constrained collaborative applications. 
      
    </p>
    <h2>Consulting</h2>
    <p>
        I am also a visual analytics practitioner and educator, serving clients across a variety of domains such as healthcare, academic research, manufacturing, retail distribution, public art, and public risk communication. I love learning about the unique worlds my clients inahbit, and I'm equally passionate about discovering the ways that interactive visualizations can give them a fresh perspective on the challenges they face.
    </p>
    <br>
    <h3><a href={pdfUrl} >Download my CV</a></h3><small>last updated February 2023</small>
  </div>
  
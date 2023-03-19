import { c as create_ssr_component, b as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1e1kxq7{max-width:800px;margin:0 auto;padding:30px}.headshot-container.svelte-1e1kxq7{display:flex;justify-content:center;margin-bottom:30px}.headshot.svelte-1e1kxq7{border-radius:50%;width:200px;height:200px;object-fit:cover}h2.svelte-1e1kxq7{font-size:2rem;font-weight:600;margin:40px 0 20px}p.svelte-1e1kxq7{font-size:1.1rem;line-height:1.5}a.svelte-1e1kxq7{color:var(--link-hover-color);text-decoration:none}a.svelte-1e1kxq7:hover{text-decoration:underline}",
  map: null
};
let headshot = "/Portrait.jpeg";
const pdfUrl = "/StanNowakCV2023.pdf";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `

  
  
  
  <div class="container svelte-1e1kxq7"><div class="headshot-container svelte-1e1kxq7"><img${add_attribute("src", headshot, 0)} alt="Your Name" class="headshot svelte-1e1kxq7"></div>
    <p class="svelte-1e1kxq7">I’m a PhD candidate at the
      <a href="https://www.sfu.ca/siat.html" class="svelte-1e1kxq7">School of Interactive Arts and Technology</a>
      at <a href="https://www.sfu.ca/" class="svelte-1e1kxq7">Simon Fraser University</a> where I also work at the
      <a href="http://viva.sfu.ca/" class="svelte-1e1kxq7">Vancouver Institute for Visual Analytics</a>. I design and build interactive data interfaces and provide training in visual analytics. My supervisory committee includes
      <a href="https://www.sfu.ca/~lyn/" class="svelte-1e1kxq7">Lyn Bartram</a>,
      <a href="https://www.avalancheresearch.ca/pascal-haegeli/" class="svelte-1e1kxq7">Pascal Haegeli</a>, and
      <a href="https://ws.iat.sfu.ca/" class="svelte-1e1kxq7">Wolfgang Stuerzlinger</a>.
    </p>
    <h2 class="svelte-1e1kxq7">Research</h2>
    <p class="svelte-1e1kxq7">I am interested in problem-driven and applied visualization research. My research focuses on the use of visual analytics in risk assessment in complex systems. I am particularly interested in the use of visual analytics to better support human data interaction (HDI), knowledge elicitation, complex and ambiguous sensemaking, and decision-making in time-constrained collaborative applications. 
      
    </p>
    <h2 class="svelte-1e1kxq7">Consulting</h2>
    <p class="svelte-1e1kxq7">I am also a visual analytics practitioner and educator, serving clients across a variety of domains such as healthcare, academic research, manufacturing, retail distribution, public art, and public risk communication. I love learning about the unique worlds my clients inahbit, and I&#39;m equally passionate about discovering the ways that interactive visualizations can give them a fresh perspective on the challenges they face.
    </p>
    <br>
    <h3><a${add_attribute("href", pdfUrl, 0)} class="svelte-1e1kxq7">Download my CV</a></h3><small>last updated February 2023</small></div>`;
});
export {
  Page as default
};

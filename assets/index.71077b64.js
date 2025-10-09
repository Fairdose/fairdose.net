import{i as p,o as t,c as i,u as n,j as o,t as u,a as r,n as f,k as h}from"./vendor.dd51d518.js";var m="/assets/whoaa.5a2defc0.png";const v={class:"fr-app__page-content"},g={key:0,class:"force-quit-prompt"},w={key:1},k={key:2,class:"fr-app__page-text"},y=h('<div><em>Imagine my creative<br>logo here</em></div><h4>Batur Ak\xE7ura</h4><div class="profiles"><a href="https://github.com/Fairdose"><i class="fa-brands fa-github"></i></a><a href="https://www.linkedin.com/in/batur-akcura"><i class="fa-brands fa-linkedin-in"></i></a><a href="mailto:fairdose.dev@gmail.com"><i class="fa-solid fa-envelope"></i></a></div>',3),b=[y],x=r("span",null,"WHOAA!",-1),A=r("img",{src:m},null,-1),B=[x,A],T={setup(C){const a=[`<div v-if="typed" class="fr-app__page-text">
{{ compile_my_immersive_nft_powered_strapped_with_boot_leveled_upped_with_react_illustration() }}
    <h4>Batur Ak\xE7ura</h4>
    <div class="profiles">
      <a href="https://github.com/Fairdose">
        <i class="fa-brands fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/batur-akcura">
        <i class="fa-brands fa-linkedin-in"></i>
      </a>
      <a href="mailto:fairdose.dev@gmail.com">
        <i class="fa-solid fa-envelope"></i>
      </a>
    </div>
  </div>
  <div :class="['whoaa', { 'surprise' : typed }]">
<span>WHOAA!</span>
<img src="@/assets/img/whoaa.png">
  </div>`];let c=0;const d=p("");let e=p(!1),l;const _=()=>{if(!a[0].includes(">>>")){const s=`>>>
> parsing...
> parsing..........
> parsing...............................`;a[0]=a[0]+s}d.value=a[0].substring(0,c)+"\u2588",c++!==a[0].length?(l=setTimeout(_,10),window.addEventListener("keydown",s=>{s.code==="KeyC"&&s.ctrlKey&&(clearTimeout(l),e.value=!0)})):e.value=!0};return _(),(s,N)=>(t(),i("div",v,[n(e)?o("",!0):(t(),i("div",g," You can skip, if you know what to press. ")),n(e)?o("",!0):(t(),i("div",w,u(d.value),1)),n(e)?(t(),i("div",k,b)):o("",!0),r("div",{class:f(["whoaa",{surprise:n(e)}])},B,2)]))}};export{T as default};

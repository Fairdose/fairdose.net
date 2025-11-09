import{i as u,o as t,c as s,j as o,t as v,a as r,n as h,k as f}from"./vendor.dd51d518.js";var m="/assets/whoaa.5a2defc0.png";const g={class:"fr-app__page-content"},b={key:0,class:"force-quit-prompt"},k={key:1},w={key:2,class:"fr-app__page-text"},y=f('<div><em>Imagine my creative<br>logo here</em></div><h4>Batur Ak\xE7ura</h4><div class="profiles"><a href="https://github.com/Fairdose" target="_blank"><i class="fa-brands fa-github"></i></a><a href="https://www.linkedin.com/in/batur-akcura" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a><a href="mailto:fairdose.dev@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i></a></div>',3),x=[y],A=r("span",null,"WHOAA!",-1),B=r("img",{src:m},null,-1),D=[A,B],V={setup(E){const a=[`<div v-if="typed" class="fr-app__page-text">
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
  </div>`];let l=0;const c=u(""),e=u(!1),d=()=>{if(!a[0].includes(">>>")){const i=`>>>
> parsing...
> parsing..........
> parsing...............................`;a[0]=a[0]+i}c.value=a[0].substring(0,l)+"\u2588",l++!==a[0].length?setTimeout(d,10):e.value=!0};d();let p=0;const _=i=>{const n=Date.now();n-p<300&&(e.value=!0,window.removeEventListener("pointerup",_)),p=n};return window.addEventListener("pointerup",_),(i,n)=>(t(),s("div",g,[e.value?o("",!0):(t(),s("div",b," You can skip by double click(tap). ")),e.value?o("",!0):(t(),s("div",k,v(c.value),1)),e.value?(t(),s("div",w,x)):o("",!0),r("div",{class:h(["whoaa",{surprise:e.value}])},D,2)]))}};export{V as default};

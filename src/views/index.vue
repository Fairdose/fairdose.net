<script setup>
import { ref } from 'vue'

const text = [
`
  compile my immersive nft powered strapped with boot leveled upped with react illustration
      <h4>Batur Akçura</h4>
      <div class="profiles">
        <a href="https://github.com/Fairdose">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/batur-akcura">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
      </div>`
]
let textPosition = 0

const homeText = ref(``)
let typed = ref(false)

// eslint-disable-next-line no-unused-vars
let tOut

const typeWriter = () => {
  if (!text[0].includes('>>>')) {
    const t_parsing = `
>>>
> parsing...
> parsing..........
> parsing...............................
`
    text[0] = text[0] + t_parsing
  }
  homeText.value = text[0].substring(0, textPosition) + '█'
  if (textPosition++ !== text[0].length) {
    tOut = setTimeout(typeWriter, 10)
  } else {
    typed.value = true
  }
}

typeWriter()

</script>
<template>
  <div class="fr-app__page-content">
    <div v-if="!typed">
      {{ homeText }}
    </div>
    <div v-if="typed" class="fr-app__page-text">
      <div><em>Imagine my creative<br>logo here</em></div>
      <h4>Batur Akçura</h4>
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
    </div>
  </div>
</template>

<style lang="scss">
.fr-app__page-content {
  height: 100%;
  .whoaa {
    position: fixed;
    bottom: -100%;
    left: 0;
    transition: bottom ease-in-out 1s;
    & > span {
      position: absolute;
      right: -35px;
      font-weight: bolder;
      transform: rotate(12deg);
      opacity: 0;
      transition-duration: 3s;
      transition-delay: 2s;
      transition: opacity ease-in-out;
      display: none;
    }
    img {
      width: 120px;
      object-fit: contain;
      filter: invert(1);
    }
    &.surprise {
      bottom: 0;
      & > span {
        display: initial;
        opacity: 1;
      }
    }
  }
}
.fr-app__page-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  text-align: center;
  white-space: normal;
  h4 {
    font-family: 'Ubuntu Mono', monospace, sans-serif, Tahoma;
    font-size: 4em;
  }
  .profiles {
    & > * {
      margin: 0.5em;
      font-size: 2.5em;
    }
  }
}
</style>

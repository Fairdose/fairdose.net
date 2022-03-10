<script setup>
import { ref } from 'vue'

const text = [
  `<div class="fr-app__page-text">
  <p>Hi</p>
  <p>Welcome to my website</p>
</div>`
]
let textPosition = 0

const homeText = ref(``)

let tOut

const typeWriter = () => {
  if (!text[0].includes('>>>')) {
    const t_parsing = `>>>
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
    clearTimeout(tOut)
    const trimLine = text[0].indexOf('>>>')
    document.querySelector('.fr-app__page-text').outerHTML = text[0]
      .slice(0, trimLine)
      .replace(/\n/g, '', '')
  }
}

typeWriter()

</script>
<template>
  <div class="fr-app__page-content">
    <div class="fr-app__page-text">
      {{ homeText }}
    </div>
  </div>
</template>

<style></style>

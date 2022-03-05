<script setup>
import { ref } from 'vue';

const text = [`<div class="fr-app__page-text">
<p>Hi</p>
<h2>Welcome to my website</h2>
</div>
>>>
> parsing...
> parsing..........
> parsing...............................
`]
let textPosition = 0

const homeText = ref(``)

let tOut

const typeWriter = () => {
  homeText.value = text[0].substring(0, textPosition) + '█'
  if (textPosition++ != text[0].length) {
    tOut = setTimeout(typeWriter, 10 / text[0].length)
  } else {
    clearTimeout(tOut)
    const trimLine = text[0].indexOf('>>>')
    const trimmed = text[0].slice(0, trimLine)
    document.querySelector('.fr-app__page-text').outerHTML = trimmed
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

<style>

</style>

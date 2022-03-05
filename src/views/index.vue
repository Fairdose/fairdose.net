<script setup>
import { ref } from 'vue';

const text = [`<p>Hi</p>
<h2>Welcome to my website</h2>
`]
let textPosition = 0

const homeText = ref(``)

let tOut

const typeWriter = () => {
  homeText.value = text[0].substring(0, textPosition) + '█'
  if (textPosition++ != text[0].length) {
    tOut = setTimeout(typeWriter, 50)
  } else {
    clearTimeout(tOut)
    const parser = new DOMParser()
    console.log(parser.parseFromString(text[0],'text/html').body.firstChild.textContent)
    document.querySelector('.fr-app__page-content').innerHTML = parser.parseFromString(text[0],'text/html').body.firstChild.textContent
  }
}

typeWriter()

</script>
<template>
  <div class="fr-app__page-content">
    {{ homeText }}
  </div>
</template>

<style>

</style>

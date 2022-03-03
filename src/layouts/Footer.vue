<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const pwd = computed(() => {
    return `guest@fairdose.net:${route.fullPath}$`
})
const command = ref(``)

const commands = {
  'ls': () => console.log('ls', command.value),
  'cd': () => console.log('cd', command.value)
}

const bash = (e) => {
  const value = e.target.value
  console.log(value)
  const piped = command.value.split('|')
  const parsed = command.value.split(' ')
  console.log(parsed, piped)
  command.value = pwd.value
}

</script>

<template>
  <div id="fr-cli">
    <span class="">{{ pwd }}</span>
    <input v-model="command" @keydown.enter="bash">
<!--    <textarea v-model="command" @keydown.enter="bash"/>-->
  </div>
</template>

<style lang="scss">
@use 'src/assets/style/colors';
#fr-cli {
  padding: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 2em);
  & > textarea,
  & > input {
    background: rgba(0, 0, 0, 0);
    width: calc(100% - 2em);
    box-sizing: border-box;
    font-size: 1rem;
    border: none;
    height: 100%;
    resize: none;
    position: relative;
    font-family: 'Ubuntu Mono', monospace, sans-serif, Tahoma;
    &:focus {
      outline: none;
    }
  }
}
</style>

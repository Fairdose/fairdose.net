<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const command = ref('')

const pwd = computed(() => {
    return `guest@fairdose.net:${route.fullPath}$`
})

const commands = {
  'ls': () => console.log('ls', command.value),
  'cd': () => console.log('cd', command.value)
}

const bash = () => {
  const piped = command.value.split('|')
  const parsed = command.value.split(' ')
  console.log(parsed, piped)
  command.value = ''
}

</script>

<template>
  <div id="fr-cli">
    <span class="">{{ pwd }}</span>
    <input v-model="command" @keydown.enter="bash"/>
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
  & > input {
    background: rgba(0, 0, 0, 0);
    width: calc(100% - 2em);
    box-sizing: border-box;
    font-size: 1rem;
    border: none;
    resize: none;
    position: relative;
    transform: translate(5px,-1px);
    &:focus {
      outline: none;
    }
  }
}
</style>

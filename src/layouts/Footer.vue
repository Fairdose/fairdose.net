<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const pwd = computed(() => {
    return `guest@fairdose.net:${useRoute().fullPath}$`
})
const command = ref(``)

const emit = defineEmits({
  command (payload) {
    return payload
  }
})

const bash = () => {
  const parsed = command.value.split(' ')
  emit('command', parsed)
}
</script>

<template>
  <div id="fr-cli">
    <span class="">{{ pwd }}</span>
    <input v-model="command" @keydown.enter="bash">
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
  & > span {
    margin-right: 0.5rem;
  }
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

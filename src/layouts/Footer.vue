<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

const pwd = {
  path: `guest@fairdose.net:${route.fullPath}$`,
  command: ''
}

</script>

<template>
  <div id="fr-cli">
    <span class="">{{ pwd.path }}</span>
    <input v-model="pwd.command" />
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
    color: transparent;
    text-shadow: 0 0 0 colors.$m-white;
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

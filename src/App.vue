<template>
  <div id="fr-app-background"/>
  <div id="fr-app">
    <Header />
    <div id="fr-view">
      <RouterView/>
    </div>
    <Footer @command="commandResult"/>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";

const commandResult = (cmd) => {
  console.log(cmd)
}
</script>

<style lang="scss">
@import "src/assets/style/default.scss";
#fr-view {
  width: calc(100% - 2em);
  padding: 1em;
}
</style>

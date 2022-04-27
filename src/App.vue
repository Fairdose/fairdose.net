<script setup>
import { RouterView } from 'vue-router'
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
import { reactive, provide } from "vue";

const termFocused = reactive({ focused: false })

const terminal = () => {
  termFocused.focused = !termFocused.focused
}

const commandResult = (cmd) => {
  console.log(cmd)
}

provide('terminal-focused', {
  termFocused,
  terminal
})
</script>

<template>
  <div id="fr-app-background">
    <!--
    <section class="stage">
      <figure class="ball"><span class="shadow"></span></figure>
    </section>
    -->
  </div>
  <div class="fr-app">
    <!--<Header />-->
    <div class="fr-app__view">
      <RouterView/>
    </div>
    <!--<Footer @command="commandResult"/>-->
  </div>
</template>

<style lang="scss">
@import "src/assets/style/default.scss";
</style>

<template>
  <div id="fr-app-background"/>
  <div id="fr-app">
    <Header />
    <div id="fr-view">
      <RouterView/>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
</script>

<style lang="scss">
@import "src/assets/style/default.scss";
</style>

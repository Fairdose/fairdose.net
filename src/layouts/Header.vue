<script setup>
</script>

<template>
<div class="fr-nav">
  <div class="fr-nav__logo">
    <router-link :to="{ path: '/' }">
      <div>Home</div>
    </router-link>
  </div>
  <nav class="fr-nav__container">
    <router-link :to="{ path: '/about' }">About</router-link>
    <router-link :to="{ path: '/stack' }">Stack</router-link>
    <router-link :to="{ path: '/contact' }">Contact</router-link>
  </nav>
  <div class="fr-nav__sidebar-toggle"></div>
</div>
</template>

<style lang="scss">
.fr-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  width: calc(100% - 2em);
  &__logo {
    cursor: pointer;
    a {
      text-decoration: none;
      cursor: pointer;
    }
  }
  &__container {
    display: flex;
    & > a {
      text-decoration: none;
      margin-right: 1em;
      cursor: pointer;
    }
  }
  &__sidebar-toggle {
    display: none;
  }
}
</style>

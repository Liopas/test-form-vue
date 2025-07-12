<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
    <nav>
      <RouterLink to="/">
        <h2>На главную</h2>
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  a.router-link-exact-active {
    color: black;
  }

  a {
    display: inline-block;
    padding: 0 1rem;
  }
}
</style>

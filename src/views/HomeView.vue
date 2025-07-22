<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <RouterLink to="/car">Машины</RouterLink>
    <RouterLink to="/animal">Животные</RouterLink>
    <RouterLink to="/estate">Недвижимость</RouterLink>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  justify-self: center;

  * {
    width: 300px;
    text-align: center;
    margin: 5px;
    text-decoration: none;
    transition: 0.4s;
    padding: 3px;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
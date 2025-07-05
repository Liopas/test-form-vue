<script setup lang="ts">
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
$card-wi: 165px;

main {
  display: flex;
  flex-direction: column;
  justify-self: center;


  * {
    width: 300px;
    text-align: center;
    background-color: rgb(39, 28, 143);
    margin: 5px;
  }
}
</style>
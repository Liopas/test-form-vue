<script setup lang="ts">

const a = 10;


</script>

<template>
    <form class="main-f">
        <div class="comp">REG</div>
        <div class="form">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
        </div>
        <div class="vivod">Вывод:</div>
    </form>
</template>

<style lang="scss" scoped>
.main-f {
    width: 500px;
    height: 300px;
    background-color: rgb(147, 201, 168);
    text-align: center;
    margin: auto;
}

.vivod {
    width: 100px;
    border: 1px black;
}
</style>
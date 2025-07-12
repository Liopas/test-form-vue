<script setup lang="ts">
import FormGenerator from '@/components/FormGenerator.vue';

const form1DataSet = {
    label_inpt1: "Номер:",
    label_inpt2: "Цвет:",
    label_selc: "Марка:",
    array_selc: ["Lada", "Volvo", "Kia", "Mercedes", "Toyota", "BMW", "Tesla", "Porsche"],
    label_chck: "АКПП",
    label_area: "Подробное описание"
};

</script>

<template>
    <div class="title-form">
        <h1>Регистрация машин</h1>
    </div>
    <FormGenerator v-bind="form1DataSet" />
</template>
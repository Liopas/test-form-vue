<script setup lang="ts">
import FormGenerator from '@/components/FormGenerator.vue';

const form3DataSet = {
    label_inpt1: "Имя:",
    label_inpt2: "Электронная почта:",
    label_selc: "Страна проживания:",
    array_selc: ["Россия", "Беларусь", "Казахстан", "Армения", "Кыргызстан"],
    label_chck: "Согласен с условиями обработки данных",
    label_area: "Адрес"
};

</script>

<template>
    <div>
        Регистрация недвижимости
    </div>
    <FormGenerator v-bind="form3DataSet" />
</template>
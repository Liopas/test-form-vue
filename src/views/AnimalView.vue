<script setup lang="ts">
import FormGenerator from '@/components/FormGenerator.vue';

const form2DataSet = {
    label_inpt1: "Кличка:",
    label_inpt2: "Окрас:",
    label_selc: "Вид:",
    array_selc: ["Кошка", "Кролик", "Собака", "Хомяк", "Попугай"],
    label_chck: "Дикий",
    label_area: "Дополнительные комментарии"
};

</script>

<template>
    <div class="title-form">
        <h1>Регистрация животных</h1>
    </div>
    <FormGenerator v-bind="form2DataSet" />
</template>
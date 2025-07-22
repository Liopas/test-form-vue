<script setup>
import { useRoute } from 'vue-router';
import FormGenerator from '@/components/FormGenerator.vue';

const route = useRoute()
const formN = route.name;

const form3Data = [
    { name: "name_1", mode: "input", label: "Имя:" },
    { name: "name_2", mode: "input", label: "Фамилия:" },
    { name: "name_3", mode: "input", label: "Отчество:", placeholder: "если есть" },
    {
        name: "country",
        mode: "select",
        label: "Страна проживания:",
        array: ["Россия", "Беларусь", "Казахстан", "Армения", "Кыргызстан"]
    },
    { name: "sign", mode: "checkbox", label: "Согласен с условиями обработки данных" },
    { name: "address", mode: "textarea", label: "Адрес", row: 1 },
    { mode: "buttons" }
];

const form3Collect = {
    formName: formN,
    name_1: '',
    name_2: '',
    name_3: '',
    country: '',
    sign: false,
    address: ''
};
</script>

<template>
    <div class="title-form">
        <h1>Регистрация недвижимости</h1>
    </div>
    <div class="el-form">
        <FormGenerator :form-data="form3Data" :form-collect="form3Collect">
            <template #address>
                Адрес регистрации по месту жительства:
            </template>
        </FormGenerator>
    </div>
</template>

<style lang="scss" scoped>
.el-form {
    background-color: rgb(161, 212, 180);
    margin: auto;
    width: 700px;
    text-align: center;
    border-radius: 12px;
    padding: 25px 5px;
    outline: 1px solid rgb(0, 0, 0);
    font-weight: 600;

    >:nth-child(1) {

        >* {
            margin: 10px 0;
        }

        >:nth-child(1) {
            margin-left: 35px;
        }
    }
}
</style>
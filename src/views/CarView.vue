<script setup>
import { useRoute } from 'vue-router';
import FormGenerator from '@/components/FormGenerator.vue';

const route = useRoute()
const formN = route.name;

const form1Data = [
    { name: "number", mode: "input", label: "Номер:" },
    { name: "color", mode: "input", label: "Цвет:" },
    {
        name: "brand",
        mode: "select",
        label: "Марка:",
        array: ["Lada", "Volvo", "Kia", "Mercedes", "Toyota", "BMW", "Tesla", "Porsche"]
    },
    { name: "auto", mode: "checkbox", label: "АКПП" },
    { name: "description", mode: "textarea", label: "Подробное описание" },
    { mode: "buttons" }
];

const form1Collect = {
    formName: formN,
    number: '',
    color: '',
    brand: '',
    auto: false,
    description: ''
};
</script>

<template>
    <div class="title-form">
        <h1>Регистрация машин</h1>
    </div>
    <div class="el-form">
        <FormGenerator :form-data="form1Data" :form-collect="form1Collect">
            <template #color>
                Цвет Автомобиля:
            </template>
            <template #description>
                Описание Автомобиля
            </template>
        </FormGenerator>
    </div>
</template>

<style lang="scss" scoped>
.el-form {
    background-color: rgb(255, 213, 162);
    margin: auto;
    width: 700px;
    border-radius: 12px;
    padding: 25px 5px;
    outline: 1px solid rgb(0, 0, 0);
    font-weight: 600;
    text-align: right;

    >:nth-child(1) {

        >:nth-child(3),
        >:nth-child(4) {
            display: inline-block;
        }

        >:nth-child(5) {
            text-align: center;
            margin-bottom: 10px;
        }

        >:nth-child(1),
        >:nth-child(2),
        >:nth-child(4) {
            margin-bottom: 10px;
            margin-right: 30%;
        }
    }
}
</style>
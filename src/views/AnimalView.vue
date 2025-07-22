<script setup>
import { useRoute } from 'vue-router';
import FormGenerator from '@/components/FormGenerator.vue';

const route = useRoute()
const formN = route.name;

const form2Data = [
    { name: "nickname", mode: "input", label: "Кличка:" },
    {
        name: "type",
        mode: "select",
        label: "Вид:",
        array: ["Кошка", "Кролик", "Собака", "Хомяк", "Попугай"]
    },
    { name: "description", mode: "textarea", label: "описание" },
    { mode: "buttons" }
];

const form2Collect = {
    formName: formN,
    nickname: '',
    type: '',
    description: ''
};
</script>

<template>
    <div class="title-form">
        <h1>Регистрация животных</h1>
    </div>
    <div class="el-form">
        <FormGenerator :form-data="form2Data" :form-collect="form2Collect">
            <template #description>
                Описание Животного
            </template>
        </FormGenerator>
    </div>
</template>

<style lang="scss" scoped>
.el-form {
    background-color: rgb(134, 203, 250);
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
            margin-right: 30px;
        }
    }
}
</style>
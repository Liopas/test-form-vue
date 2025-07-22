<script setup lang="ts">
import { useStore } from 'vuex';
import { type FormTypes } from './types';
import { onMounted, ref, type PropType } from 'vue';

const store = useStore()

const props = defineProps({
    formData: {
        type: Object as PropType<FormTypes[]>,
        required: true
    },
    formCollect: {
        type: Object,
        required: true
    },
})

const Collect = ref({ ...props.formCollect });

const Saves = ref(false)

function Save() {
    store.commit('adds', Collect.value)
    Saves.value = true
}

function Cancel() {
    store.commit('del_form', Collect.value.formName)
    Collect.value = { ...props.formCollect }
    Saves.value = false
}

onMounted(() => {
    if (store.getters.getForm(Collect.value.formName)) {
        Collect.value = store.getters.getForm(Collect.value.formName)
        Saves.value = true
    }
}
)
</script>

<template>

    <form @submit.prevent="Save">
        <div v-for="(item, index) in props.formData" :key="index">

            <div v-if="item.mode === 'input'">
                <label for="inpt">
                    <slot :name="item.name">{{ item.label }}</slot>
                </label>
                <input v-model="Collect[item.name]" type="text" :placeholder="item.placeholder || 'Введите'" name="inpt"
                    id="inpt" :maxlength="item.max || 26" required />
            </div>

            <div v-if="item.mode === 'select'">
                <label for="selc">
                    <slot :name="item.name">{{ item.label }}</slot>
                </label>
                <select v-model="Collect[item.name]" name="selc" required>
                    <option value selected disabled hidden style='display: none'>-Выберите-</option>
                    <option v-for="(opt, index) in item.array" :key="index" :value="opt">{{ opt }}</option>
                </select>
            </div>

            <div v-if="item.mode === 'checkbox'">
                <input v-model="Collect[item.name]" type="checkbox" id="chck" name="chck" style="accent-color: green" />
                <label for="chck">
                    <slot :name="item.name">{{ item.label }}</slot>
                </label>
            </div>

            <div v-if="item.mode === 'textarea'">
                <label for="area">
                    <slot :name="item.name">{{ item.label }}</slot>
                </label>
                <textarea v-model="Collect[item.name]" :placeholder="item.placeholder || 'Введите'" id="area"
                    name="area" :rows="item.row || 4" required></textarea>
            </div>

            <div class="bot" v-if="item.mode === 'buttons'">
                <input type="reset" @click="Cancel" />
                <input :class="{ 'blue': Saves }" type="submit" :value="Saves ? 'Сохранено' : 'Сохранить'" />
            </div>

        </div>
    </form>
</template>

<style scoped>
.bot {
    float: right;

    input {
        cursor: pointer;
    }
}

.blue {
    background-color: aqua;
}

label:not([for="area"]) {
    margin-right: 10px;
}

textarea {
    width: 100%;
    resize: none;
    box-sizing: border-box;
}
</style>
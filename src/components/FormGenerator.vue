<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const store = useStore()
const route = useRoute()
const formName = route.name;

interface Props {
    label_inpt1: string
    label_inpt2: string
    label_selc: string
    array_selc: string[]
    label_chck: string
    label_area: string
}

const props = defineProps<Props>()

const form = ref({
    formN: formName,
    inpt1: null,
    inpt2: null,
    selc: null,
    chck: null,
    area: null
})

function Save() {
    store.commit('adds', form.value)
    console.log(store.state.forms)
}

function Cancel() {
    store.commit('del_form', formName)
    console.log(store.state.forms)
}

onMounted(() => {
    if (store.getters.getForm(formName)) {
        console.log('ok')
        form.value = store.getters.getForm(formName)
    }
    else {
        console.log('not')
    }
}
)

</script>

<template>
    <form class="main-f" method="dialog">
        <div class="top">Анкета</div>

        <div class="el">
            <label for="inpt1">{{ props.label_inpt1 }}</label>
            <input v-model="form.inpt1" type="text" placeholder="Введите" name="inpt1" id="inpt1" required />
            <label for="inpt2">{{ props.label_inpt2 }}</label>
            <input v-model="form.inpt2" type="text" placeholder="Введите" name="inpt2" id="inpt2" required />
        </div>

        <div class="el">
            <label for="selc">{{ props.label_selc }}</label>
            <select v-model="form.selc" name="selc">
                <option v-for="(item, index) in props.array_selc" :key="index" :value="item">{{ item }}</option>
            </select>
            <input v-model="form.chck" type="checkbox" id="chck" name="chck" />
            <label for="chck">{{ props.label_chck }}</label>
        </div>

        <div>
            <label for="area">{{ props.label_area }}</label>
            <textarea v-model="form.area" placeholder="Введите" id="area" name="area" rows="5"></textarea>
        </div>

        <div class="bot">
            <button @click="Save">Сохранить</button>
            <button @click="Cancel">Отмена</button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
.main-f {
    width: 700px;
    height: 300px;
    background-color: rgb(161, 212, 180);
    text-align: center;
    margin: auto;
    border-radius: 12px;
    padding: 5px;
    outline: 1px solid rgb(0, 0, 0);
}

.el {
    margin: 20px 0;

    * {
        margin: 0 3px;
    }
}

.bot {
    float: right;
}

textarea {
    width: 100%;
    resize: none;
    box-sizing: border-box;
    margin: 10px 0;
}
</style>
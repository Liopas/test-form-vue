<script setup lang="ts">

interface Props {
    label_inpt1: string
    label_inpt2: string
    label_selc: string
    array_selc: string[]
    label_chck: string
    label_area: string
}

const props = defineProps<Props>()
</script>

<template>
    <form class="main-f">
        <div class="top">Анкета</div>

        <div class="el">
            <label for="inpt1">{{ props.label_inpt1 }}</label>
            <input type="text" placeholder="Введите" name="inpt1" id="inpt1" required />
            <label for="inpt2">{{ props.label_inpt2 }}</label>
            <input type="text" placeholder="Введите" name="inpt2" id="inpt2" required />
        </div>

        <div class="el">
            <label for="selc">{{ props.label_selc }}</label>
            <select name="selc">
                <option v-for="(item, index) in props.array_selc" :key="index" :value="item">{{ item }}</option>
            </select>
            <input type="checkbox" id="chck" name="chck" />
            <label for="chck">{{ props.label_chck }}</label>
        </div>

        <div>
            <label for="area">{{ props.label_area }}</label>
            <textarea placeholder="Введите" id="area" name="area" rows="5"></textarea>
        </div>

        <div class="bot">
            <input type="submit" value="Сохранить" />
            <input type="reset" value="Отмена" />
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
    outline: 1px solid rgb(32, 112, 61);
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
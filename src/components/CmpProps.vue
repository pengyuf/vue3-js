<template>
    <div>
        <div>objProp:{{ props.objProp.message }}</div>
        <div>arrayProp:
            <span v-for="item in props.arrayProp" :key="item">{{ item }}-</span>
        </div>
        <button @click="props.fnProp()">fnProp</button>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'

const props = defineProps({
    // 字符串
    strProp: {
        type: String,
        required: true, // 必传
    },

    // 数字
    numProp: {
        type: Number,
        default: 100, // 默认值
    },

    // 布尔
    boolProp: {
        type: Boolean
    },

    // 对象
    objProp: {
        type: Object,
        default(rawProps) {
            return { message: 'hello' }
        }
    },

    // 数组
    arrayProp: {
        type: Array,
        default(rawProps) {
            return [1, 2, 3]
        }
    },

    // 函数
    fnProp: {
        type: Function,
        default() {
            return 'default Fn'
        }
    },

    // 多种类型的prop
    multProp:{
        type:[String,Number,Boolean]
    }
})

</script>
<style scoped></style>
<template>
    <div>
        <button @click="nums++">nums++</button>
        <button @click="changeCountOfParam(obj.count)">通过传入count++</button>
        <button @click="changeCount">直接改变count++</button>
        <div>count:{{ obj.count }}</div>
        <div>nums:{{ nums }}</div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";

let obj = reactive({ count: 0 })

// 基本类型使用reactive，直接返回原始值
const nums = reactive(100) 

// 从响应式对象解构出属性时，会失去响应式
let { count } = obj
count++


function changeCount() {
    obj.count++
}

function changeCountOfParam(count) {
    // 不会改变响应式数据
    count++
}

onMounted(()=>{
    console.log(nums)
})

</script>
<style scoped></style>
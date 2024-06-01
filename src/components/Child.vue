<template>
    <div @click="clickChild">child-age:{{ age }}</div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed, useAttrs } from 'vue'

const attrs = useAttrs()

const props = defineProps({
    title: String,
    age: Number
})


const name = 'best'
const age = ref(18)

function changeAge() {
    age.value = 19
}

function clickChild() {
    console.log('clickChild')
}

defineExpose({
    name,
    age,
    changeAge
})

onMounted(() => {
    console.log(attrs)
})

</script>
<style scoped></style>
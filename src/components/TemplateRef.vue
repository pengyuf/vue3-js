<template>
    <div>
       <Child ref="childRef"/>
    </div>
</template>

<script setup>
import Child from './Child.vue'

import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'

const list = [{ id: 1 }, { id: 2 }, { id: 3 },]

const listRef = ref(null)
const childRef = ref(null)

onMounted(() => {
    console.log(childRef.value)
})

</script>
<style scoped></style>
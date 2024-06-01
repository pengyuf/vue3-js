<template>
    <div>
        <div>Parent bound v-model is: {{ model }}</div>
        <button @click="update">update</button>
        <input v-model="model" />
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'

const model = defineModel()

function update() {
    model.value++
}
</script>
<style scoped></style>
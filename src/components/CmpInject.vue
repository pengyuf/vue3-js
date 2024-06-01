<template>
    <div>
        <div>inject:count={{ data }}</div>
        <button @click="updateCount">child change inject ref</button>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed, inject } from 'vue'

const { data, updateCount } = inject('count')

function change() {
    count.value++
}
</script>
<style scoped></style>
<template>
    <div>
        <button @click="change">father change provide ref</button>
        <div>provide:count={{ count }}</div>
        <div>
            <CmpInject />
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed, provide, readonly } from 'vue'
import CmpInject from './CmpInject.vue'

const count = ref(100)

provide('count', {
    data: readonly(count),
    updateCount: change
})

function change() {
    count.value++
}

</script>
<style scoped></style>
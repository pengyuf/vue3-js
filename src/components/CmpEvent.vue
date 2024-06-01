<template>
    <div>
        <button @click="clickDiyFn">触发DiyFn</button>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, getCurrentInstance, computed } from 'vue'

const emits = defineEmits(['diyFn'])

function clickDiyFn() {
    emits('diyFn', { name: 'best', age: 18 })
}
</script>
<style scoped></style>
<template>
    <div :class="className">test</div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    type: String
})

const className = computed(() => {
    return `my-button-${props.type}`
})

</script>
<style scoped></style>
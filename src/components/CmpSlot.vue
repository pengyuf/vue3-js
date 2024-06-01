<template>
  <div>
    <slot name="header"></slot>
    <slot name="bottom"></slot>
  </div>
</template>

<script lang="ts" setup>
import { ref,reactive, toRefs, onMounted, getCurrentInstance,computed } from 'vue'

</script>
<style scoped lang="scss">
</style>
<template>
    <div>
        <button @click="changeAge">改变age</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, watchEffect } from "vue";

const obj = ref({
    school: {
        name: 'XTU',
        student: {
            name: 'best',
            age: 19
        }
    }
})

    
function changeAge() {
    obj.value.school.name= 'BTU'
}


watch(obj, (newCount) => {
    console.log('watch', newCount)
}
)

</script>
<style scoped lang="scss"></style>
<template>
    <div>
        <button @click="changeShallow">改变objShallow</button>
        <div>{{ objShallow }}</div>


        <button @click="changeAge">改变age</button>
        <button @click="changeName">改变name</button>
        <button @click="changeFood">改变food</button>
        <div>
            age:{{ objDeep.age }}
        </div>
        <div>
            name:{{ objDeep.student.name }}
        </div>
        <div>
            food:<span v-for="(item, index) in objDeep.food" :key="index">{{ item }}-</span>
        </div>
        <div>obj1:{{ obj1.id + 1}}</div>
    </div>
</template>

<script setup>
import { onMounted, ref, shallowRef } from "vue";

const objShallow = shallowRef(100)

const objDeep = ref({
    age: 20,
    student: { name: 'peng' },
    food: ['foo', 'bar']
})

const obj1 = {id:ref(1)}

onMounted(() => {
    
})

function changeAge() {
    objDeep.value.age = 18
}
function changeName() {
    objDeep.value.student.name = 'chang'
}
function changeFood() {
    objDeep.value.food.push('apple')
}

function changeShallow() {
    objShallow.value++
}


</script>
<style scoped></style>
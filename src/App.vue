<script setup>
import { storeToRefs } from "pinia";
import { useCounterStore } from "./store/index"


const store = useCounterStore()

store.$subscribe((mutation, state) => {
  console.log('tore.$subscribe')
})

function changeAll() {
  // store.$patch({
  //   count:1,
  //   name:'test'
  // })
  store.$patch((state) => {
    state.name = 'test'
  })
}

</script>

<template>
  <div>
    <button @click="() => store.name = 'pneg'">改变name</button>
    <button @click="changeAll">改变整个store</button>
    <div>
      {{ store.doubleCountOne }}
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

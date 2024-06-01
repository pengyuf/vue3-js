<script setup>
import RefComp from './components/RefComp.vue'
import ReactiveComp from './components/ReactiveComp.vue'
import WatchComp from './components/WatchComp.vue'
import TemplateRef from './components/TemplateRef.vue'
import CmpProps from './components/CmpProps.vue'
import CmpEvent from './components/CmpEvent.vue'
import CmpModel from './components/CmpModel.vue'
import Child from './components/Child.vue'
import CmpSlot from './components/CmpSlot.vue'
import CmpProvide from './components/CmpProvide.vue'
import CmpButton from './components/CmpButton.vue'
import MyButton from './components/MyButton.vue'
import { ref } from 'vue'
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'

const objProp = {
  message: 'testMessage'
}

function testFn() {
  console.log('testFn')
}

function myDiyFn(e) {
  console.log('myDiyFn', e)
}

function clickFather() {
  console.log('clickFather')
}


const countModel = ref(0)

</script>

<template>
  <div>
    <!-- <GlobalChild /> -->
    <!-- <RefComp/> -->
    <!-- <ReactiveComp /> -->
    <!-- <WatchComp/> -->
    <!-- <TemplateRef /> -->
    <!-- <CmpProps strProp="testStrProp" :objProp="objProp" :fnProp="testFn" /> -->
    <!-- <CmpEvent @diyFn="myDiyFn" /> -->
    <!-- <CmpModel v-model="countModel" /> -->
    <!-- <Child style="color: red;" @click="clickFather" /> -->
    <!-- <CmpSlot>
      <template #header>
        headerSlot
      </template>
      <template #bottom>
        bottomSlot
      </template>
    </CmpSlot> -->
    <!-- <CmpProvide/> -->
    <!-- <CmpButton/>
    <MyButton type="danger" /> -->
    <el-button tag="a" href='https://github.com/element-plus/element-plus'>primary</el-button>
  </div>
</template>

<style scoped></style>

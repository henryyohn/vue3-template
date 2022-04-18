<script setup lang="ts">
import { ref, watch, watchEffect } from "vue";
import { useMainStore } from "@/store/index";
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

defineProps<{ msg: string }>();

const count = ref(0);

const mainStore = useMainStore();

const updateName = () => {
  mainStore.$patch({
    name: "改变main的名称",
  });
};
console.log(import.meta.env.VITE_APP_WEB_URL)
console.log(import.meta.env.NODE_ENV)

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')
const md = breakpoints.between('sm', 'md')
const lg = breakpoints.between('md', 'lg')
const xl = breakpoints.between('lg', 'xl')
const xxl = breakpoints.between('xl', '2xl')
const xxxl = breakpoints['2xl']

const todos = ref([
  {
    title: '吃饭',
    complete: false
  }
])
console.log(todos.value);

const newVal = ref('')

const onClickAdd = () => {
  if (newVal.value) {
    console.log(newVal.value);
    todos.value.push({
      title: newVal.value,
      complete: false
    })
    newVal.value = '' 
  }
}

watchEffect(() => {
  console.log("watchEffect-todos=", todos.value);
  // console.log("watchEffect=newVal=",newVal.value);
})

watch(todos.value, (newVal, oldVal) => {
  console.log('==333===', newVal, oldVal)
})

// watch(newVal, (newVal, oldVal) => {
//   console.log('==newVal===', newVal, oldVal)
// })
</script>

<template>
  <h2>{{ count }}</h2>
  <p>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </p>
  <h2>{{ mainStore.name }}</h2>
  <p>长度：{{ mainStore.nameLength }}</p>
  <p>
    <button @click="updateName">改变名称</button>
  </p>
  <n-button @click="updateName">改变名称</n-button>

  <div class="font-mono">
    <div> sm: <BooleanDisplay :value="sm" /></div>
    <div> md: <BooleanDisplay :value="md" /></div>
    <div> lg: <BooleanDisplay :value="lg" /></div>
    <div> xl: <BooleanDisplay :value="xl" /></div>
    <div>2xl: <BooleanDisplay :value="xxl" /></div>
    <div>3xl: <BooleanDisplay :value="xxxl" /></div>
  </div>
  <div class="list">
    <n-input v-model:value="newVal"/>
    <p>input value:{{newVal}}</p>
    <n-button @click="onClickAdd">新增</n-button>
    <ul>
      <li v-for="(item, i) in todos" :key="i+'_todo'">{{item.title}}</li>
    </ul>
  </div>
</template>

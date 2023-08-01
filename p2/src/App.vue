<script setup>
const message= 'Welcome. Get ready to master Vue.js 3!'
const date = '1st August, 2023 '
function getDate(){
  const date = new Date()
  return date.toDateString()
}
const data = {
  message:'Welcome. Get ready to master Vue.js 3! - Obj',
  date:getDate()+' -Obj',
  tasks:['"No"',1,2,3,4,5,6,7]
}
</script>

<template>
  <div class="container mx-auto flex items-center justify-center min-h-screen flex-col">
    <h1 class="text-4xl">{{ data.message }}</h1>
    <h2 class="mt-10 text-xl text-white-700">Today is <span>{{ data.date }}</span></h2>
    <h3 class="mt-10 text-xl text-white-700">You have <span>{{ data.tasks.length }}</span> tasks for today</h3>
    <h3 class="mt-10 text-xl text-white-700">You have <span>{{ data.tasks[0] }}</span> tasks for today</h3>
  </div>
</template>

<style scoped>

</style>

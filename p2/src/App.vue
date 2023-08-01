<script setup>
// import {data} from './data/data'
import data from './data/data'
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

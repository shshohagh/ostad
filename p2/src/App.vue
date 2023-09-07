<script setup>
const tasks = [
    {id: 1, name: "Complete project proposal", status: "In Progress"},
    {id: 2, name: "Update Website Content", status: "Completed"},
    {id: 3, name: "Fix bug in user authentication", status: "In Progress"},
    {id: 4, name: "Prepare presentation slides", status: "Pending"},
    {id: 5, name: "Test new features implementation", status: "Completed"},
];

function getCompletedTasks(){ return tasks.filter(task=>"Completed"==task.status) } 
function getInProgressTasks(){ return tasks.filter(task=>"In Progress"==task.status) } 
function getPendingTasks(){ return tasks.filter(task=>"Pending"==task.status) } 
</script>

<template>
<section class="container mx-auto">

    <h1 class="text-center text-3xl py-5"> episode 03 - displaying objects and filtered objects in a loop</h1>
    <section class="mt-1">
            <!-- <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-indigo-400" v-for="(task, index) in tasks" :key="index" > {{ task.id }}, {{ task.name }}</div> -->
            <!-- <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-indigo-400" v-for="task in tasks" :key="task.id" > {{ task.id }}, {{ task.name }}</div> -->
            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-green-400" v-for="task in getCompletedTasks()" :key="task.id" > {{ task.id }}. {{ task.name }}</div>
            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-red-400" v-for="task in getInProgressTasks()" :key="task.id" > {{ task.id }}. {{ task.name }}</div>
            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-orange-400" v-for="task in getPendingTasks()" :key="task.id" > {{ task.id }}. {{ task.name }}</div>
    </section>

</section>
</template>

<style scoped>

</style>

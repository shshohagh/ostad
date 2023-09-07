<script setup>
const status = [
    "Pending",
    "Picked Up",
    "Processing",
    "On The Way",
];
</script>

<template>
<section class="container mx-auto">

    <h1 class="text-center text-3xl py-5"> episode 02 - display index in loop</h1>
        <section class="mt-1">
            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-indigo-400" v-for="(stat,index) in status" > {{ index }}, {{ stat }} </div>
        </section>

</section>
</template>

<style scoped>

</style>

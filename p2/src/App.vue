<script setup>
const items = [1,2,3,4,5]
</script>

<template>
<section class="container mx-auto">
    <h1 class="text-center text-3xl py-5"> List Rendering</h1>
        <section class="mt-1">
            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-indigo-400" v-for="item in items" > {{ item }} </div>

            <div class="h-16 flex items-center justify-center text-white p-3 mx-12 my-1 border border-orange-400" v-for="n in 5" > {{ n }} </div>
        </section>
        
</section>
</template>

<style scoped>

</style>

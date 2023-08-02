<script setup>
const location = 'Dhaka' 
const weather = 'pc' 
</script>

<template>

<section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Logic</h1>
        <div class="w-1/3 bg-black-200 p-10 flex items-center flex-col space-y-10">
            <h1 class="text-3xl">Dhaka</h1>
            <template v-if="weather=='s'">
                <h2 class="text-2xl">Weather: Sunney</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" alt="">
            </template>
            <template v-if="weather=='pc'">
                <h2 class="text-2xl">Weather: Partly Cloudy</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png" alt="">
            </template>
            <template v-if="weather=='r'">
                <h2 class="text-2xl">Weather: Rainy</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt="">

            </template>
            <template v-if="weather=='t'">
                <h2 class="text-2xl">Weather: Thunderstrom</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png" alt="">
            </template>

        </div>
    </section>

</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue'
const location = 'Dhaka' 
const weather  = ref("s") 
const status_size = 'text-2xl'
</script>

<template>

<section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10">Logic</h1>
        <div class="w-1/3 bg-black-200 p-10 flex items-center flex-col space-y-10">
            <h1 class="text-3xl">Dhaka</h1>
            <template v-if="weather=='s'">
                <h2 :class="status_size">Weather: Sunney</h2>
                <img id="sunney" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7911203/weather-icon-md.png" alt="">
            </template>
            <template v-if="weather=='pc'">
                <h2 :class="status_size">Weather: Partly Cloudy</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912718/weather-icon-md.png" alt="">
            </template>
            <template v-if="weather=='r'">
                <h2 :class="status_size">Weather: Rainy</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7913380/weather-icon-md.png" alt="">

            </template>
            <template v-if="weather=='t'">
                <h2 :class="status_size">Weather: Thunderstrom</h2>
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7912589/weather-icon-md.png" alt="">
            </template>

            <input type="text" placeholder="Weather Status" class="text-center p-5" v-model="weather">

        </div>
    </section>

</template>

<style scoped>

</style>

<script setup>
import {ref} from 'vue'
const location = 'Dhaka' 
const weather  = ref("s") 

const status_size = 'text-2xl'
const bgOrange="bg-orange-400"
const bgIndigo="bg-indigo-400"
const bgGreen="bg-green-400"
const weekday = false
const colors = {
    bgColor:'bg-blue-100',
    borderColor:'border-blue-500',
    textColor:'text-blue-900'
}
const messageType = 'error'
if('success' == messageType){ colors.bgColor='bg-teal-100', colors.borderColor='border-teal-500', colors.textColor='text-teal-900' }
if('error' == messageType){ colors.bgColor='bg-red-100', colors.borderColor='border-red-500', colors.textColor='text-red-900' }
if('warning' == messageType){ colors.bgColor='bg-yellow-100', colors.borderColor='border-yellow-500', colors.textColor='text-yellow-900' }

</script>

<template>
<section class="container mx-auto">
    <h1 class="text-center text-3xl py-12">Class Style Binding</h1>
        <section class="flex space-x-10">
            <div class="w-1/3 h-16 p-5" :class="bgOrange">Orang</div>
            <div class="w-1/3 h-16 p-5" :class="bgIndigo">Indigo</div>
            <div class="w-1/3 h-16 p-5" :class="bgGreen">Green</div>
        </section>
        <section class="mt-10">
            <div class="h-16 flex items-center justify-center text-white p-3" :class="[weekday?'bg-red-400':'bg-green-400',weekday==true?'text-2xl':'text-4xl']"> 
                {{weekday?"It's a Weekday":"It's a Weekend!"}}
            </div>
        </section>
        <section class="mt-10">
            <div class="border-t-4 round-b py-3 shadow-md" :class="[colors.bgColor, colors.borderColor, colors.textColor]">
                <p class="font-bold">Our privacy policy has change</p>
                <p class="text-sm">Make sure you knowhow these hangese effect you.</p>
            </div>
        </section>
</section>
</template>

<style scoped>

</style>

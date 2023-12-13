<template>
    <h1>Compteur </h1>
    <button @click="decrementer">-</button>
    {{ counter }}
    <button @click="incrementer">+</button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const counter = ref(0)
const incrementer = () => {
    counter.value++
}
const decrementer = () => {
    counter.value--
}

onMounted(() => {
    console.log('mounted');
})
</script>

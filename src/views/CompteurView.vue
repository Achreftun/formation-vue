<template>
    <h1>Compteur : {{ counter.etat }}</h1>
    <button @click="decrementer">-</button>
    {{ counter.valeur }}
    <button @click="incrementer">+</button>
</template>

<script setup>
import { reactive, onMounted, onUpdated } from 'vue'
// valeurs réactives : ref, reactive
const compteur = { valeur: 0, etat: 'nul' }
const counter = reactive(compteur)
const incrementer = () => {
    counter.valeur++
}
const decrementer = () => {
    counter.valeur--
}
onUpdated(() => {
    if (counter.valeur > 0) {
        counter.etat = 'positif'
    } else if (counter.valeur < 0) {
        counter.etat = 'négatif'
    } else {
        counter.etat = 'nul'
    }
})


onMounted(() => {
    console.log('mounted');
})
</script>

<template>
    <h1>Compteur </h1>
    <button @click="decrementer">-</button>
    {{ counter }}
    <button @click="incrementer">+</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const incrementer = () => {
    counter.value++
}
const decrementer = () => {
    counter.value--
}
</script>
<!-- <script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        incrementer() {
            this.counter++
        },
        decrementer() {
            this.counter--
        }
    }
}
</script> -->
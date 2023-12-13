<template>
    <h1>Compteur </h1>
    <button @click="decrementer">-</button>
    {{ counter }}
    <button @click="incrementer">+</button>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        // valeur réactive : ref
        // counter = { value: 0}
        const counter = ref(0)
        const incrementer = () => {
            counter.value++
        }
        const decrementer = () => {
            counter.value--
        }
        return {
            counter, incrementer, decrementer
        }
    }
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
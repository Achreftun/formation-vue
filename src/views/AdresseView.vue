<template >
    <h1>Adresse</h1>
    <ul>
        <li>Ville : {{ adresse.ville }}</li>
        <li>Code postal : {{ adresse.cp }}</li>
    </ul>
    <button @click="goToPays">
        Apprendre la géographie
    </button>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const adresse = computed(() => {
    return route.query
})
const goToPays = () => router.push({ name: 'pays' })
</script>

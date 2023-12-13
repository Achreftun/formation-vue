<template>
    <div>
        {{ valeur1 }} + {{ valeur2 }} = {{ resultat }}
    </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'

const valeur1 = ref(5)
const valeur2 = ref(2)

const resultat = computed(() => valeur1.value + valeur2.value)

onMounted(() => {
    setInterval(
        () => valeur1.value += 10,
        2000
    )
})

</script>

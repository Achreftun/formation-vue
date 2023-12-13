<template>
    <li>
        {{ produit.nom }} : {{ produit.prix }}€ (Hors TVA {{ tva }}%) : {{ produit.quantite }}
        <input type="number" placeholder="Saisissez votre quantité" v-model="qteReservee">
        <button @click="ajouter">Ajouter</button>
    </li>
</template>
<script setup>
import { ref, inject } from 'vue'
const qteReservee = ref(0)

defineProps({
    produit: { nom: String, prix: Number, quantite: String }
})
const emit = defineEmits(['sendData'])

const ajouter = () => {
    emit('sendData', qteReservee.value)
}

const tva = inject('tva', 5)
</script>

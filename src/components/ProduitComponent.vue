<template>
    <li>
        {{ produit.nom }} : {{ produit.prix }}€ (Hors TVA {{ tva }}%) : {{ produit.quantite }}
        <input type="number" placeholder="Saisissez votre quantité" v-model="qteReservee">
        <button @click="ajouter">Ajouter</button>
    </li>
</template>
<script setup>
import { ref, inject } from 'vue'
import { useProduitStore } from '../stores/produits.js'
const produitStore = useProduitStore()
const qteReservee = ref(0)

const props = defineProps({
    produit: { nom: String, prix: Number, quantite: String }
})
const emit = defineEmits(['sendData'])

const ajouter = () => {
    if (qteReservee.value > 0) {
        emit('sendData', qteReservee.value)
        produitStore.lignesCommandes.push({
            quantiteReservee: qteReservee.value,
            produit: props.produit
        })
    }


}

const tva = inject('tva', 5)
</script>

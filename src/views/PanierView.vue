<template >
    <h1>Panier</h1>
    <ul>
        <li v-for="(elt, ind) in produitStore.lignesCommandes">
            {{ elt.produit.nom }} {{ elt.quantiteReservee }}
            <button @click="supprimer(ind)">
                supprimer
            </button>
        </li>
    </ul>
</template>

<script setup>
import { useProduitStore } from '../stores/produits.js'
const produitStore = useProduitStore()
const supprimer = (ind) => produitStore.supprimerLigneCommande(ind) 
</script>

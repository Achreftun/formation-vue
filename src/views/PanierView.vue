<template >
    <h1>Panier</h1>
    <ul>
        <li v-for="elt in produitStore.lignesCommandes">
            {{ elt.produit.nom }} {{ elt.quantiteReservee }}
            <button @click="supprimer(elt.produit.nom)">
                supprimer
            </button>
        </li>
    </ul>
</template>

<script setup>
import { useProduitStore } from '../stores/produits.js'
const produitStore = useProduitStore()
const supprimer = (nom) => produitStore.supprimerLigneCommande(nom) 
</script>

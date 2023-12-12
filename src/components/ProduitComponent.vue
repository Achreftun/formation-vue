<template>
    <li>
        {{  produit.nom }} : {{  produit.prix }}€ : {{ produit.quantite }}
        <input type="number" placeholder="Saisissez votre quantité" v-model="qteReservee">
        <button>Ajouter</button>
    </li>
</template>
<script>
export default {
    props: {
        produit: { nom: String, prix: Number, quantite: String }
    }
}
</script>

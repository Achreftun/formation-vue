<template >
    <h1>Primeur : {{ total }}€</h1>
    <div>
        <input type="text" placeholder="nom" v-model="produit.nom">
        <input type="number" placeholder="prix" v-model="produit.prix">
        <input type="number" placeholder="quantité" v-model="produit.quantite">
        <button @click="ajouterProduit">Ajouter</button>
    </div>
    <ul>
        <template v-for="elt in produits">
            <ProduitComponent :produit="elt"></ProduitComponent>
        </template>
    </ul>
</template>

<script>
import ProduitComponent from './ProduitComponent.vue';

export default {
    components: {
        ProduitComponent
    },
    data() {
        return {
            produits: [
                { nom: "banane", prix: 3, quantite: 10 },
                { nom: "fraise", prix: 10, quantite: 20 },
                { nom: "poivron", prix: 5, quantite: 10 }
            ],
            produit: {},
            total: 0
        }
    },
    methods: {
        ajouterProduit() {
            this.produits.push(this.produit)
            this.produit = {}
        }
    },
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>

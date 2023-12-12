<template>
    <li>
        {{ produit.nom }} : {{ produit.prix }}€ : {{ produit.quantite }}
        <input type="number" placeholder="Saisissez votre quantité" v-model="qteReservee">
        <button @click="ajouter">Ajouter</button>
    </li>
</template>
<script>
export default {
    data() {
        return {
            qteReservee: 0
        }
    },
    props: {
        produit: { nom: String, prix: Number, quantite: String }
    },
    methods: {
        ajouter() {
            this.$emit('sendData', this.qteReservee)
        }
    },
    emits: ['sendData']
}
</script>

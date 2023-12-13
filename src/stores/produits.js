import { defineStore } from "pinia";

export const useProduitStore = defineStore('produits', {
    state() {
        return {
            lignesCommandes: []
        }
    },
    getters: {
        nombreProduits(state) {
            return state.lignesCommandes.length
        },
        quantiteTotaleReservee(state) {
            return state.lignesCommandes
                .map(p => p.quantiteReservee) // tableau de quantité
                .reduce((prev, curr) => prev + curr, 0)
        }
    },
    actions: {
        supprimerLigneCommande(nom) {
            this.lignesCommandes = this.lignesCommandes.filter(elt => elt.produit.nom != nom)
        }
    }
})
import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useProduitStore = defineStore('produits', () => {
    // state => ref ou reactive
    let lignesCommandes = reactive([])

    // getters => computed
    const nombreProduits = computed(() => lignesCommandes.length)
    const quantiteTotaleReservee = computed(() => {
        return lignesCommandes
            .map(p => p.quantiteReservee) // tableau de quantité
            .reduce((prev, curr) => prev + curr, 0)
    })

    // actions : arrow function

    function supprimerLigneCommande(ind) {
        lignesCommandes.splice(ind, 1)
    }

    return {
        lignesCommandes, nombreProduits, quantiteTotaleReservee, supprimerLigneCommande
    }
})
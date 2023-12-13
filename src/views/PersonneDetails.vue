<template >
    <h1>Détails de la personne numéro : {{ id }}</h1>
    <ul>
        <li>Nom : {{ personne.nom }}</li>
        <li>Prénom : {{ personne.prenom }}</li>
        <li>Âge : {{ personne.age }}</li>
    </ul>
</template>
<script>
import axios from 'axios'

export default {
    props: ['id'],
    data() {
        return {
            personne: {}
        }
    },
    mounted() {
        axios
            .get(`${this.BASE_URL}/personnes/${id}`)
            .then(res => this.personne = res.data)
    }

}
</script>
<style ></style>
<template >
    <PersonneAjouter />
    <h1>Liste de personnes</h1>
    <ul>
        <li v-for="elt in personnes">
            {{ elt.prenom }} {{ elt.nom }}
            <router-link :to="{ name: 'personne-details', params: { id: elt.id } }">
                consulter
            </router-link>
        </li>
    </ul>
</template>
<script>
import PersonneAjouter from '../components/PersonneAjouter.vue';


export default {
    components: {
        PersonneAjouter
    },
    data() {
        return {
            personnes: [
                { id: 1, nom: 'Wick', prenom: 'John', age: 45 },
                { id: 2, nom: 'Dalton', prenom: 'Jack', age: 40 },
                { id: 3, nom: 'Dupont', prenom: 'Sophie', age: 30 }
            ]
        }
    },
}
</script>
<style ></style>
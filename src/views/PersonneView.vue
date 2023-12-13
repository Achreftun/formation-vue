<template >
    <PersonneAdd @send-personne="updateList" />
    <h1>Liste de personnes</h1>
    <template v-if="!erreur">
        <ul>
            <li v-for="elt in personnes">
                {{ elt.prenom }} {{ elt.nom }}
                <router-link :to="{ name: 'personne-details', params: { id: elt.id } }">
                    consulter
                </router-link>
                <button @click="deletePersonne(elt.id)">
                    supprimer
                </button>
            </li>
        </ul>
    </template>
    <template v-else-if="erreur.response">
        <div class="error">
            Erreur : données indisponibles 
        </div>
    </template>
    <template v-else-if="erreur.request">
        <div class="error">
            Erreur : serveur indisponible
        </div>
    </template>
    <template v-else>
        <div class="error">
            Erreur inconnue
        </div>
    </template>
</template>
<script>
import PersonneAdd from '../components/PersonneAdd.vue';
import axios from 'axios'

export default {
    components: {
        PersonneAdd
    },
    data() {
        return {
            personnes: [],
            erreur: null
        }
    },
    methods: {
        // updateList(objet) {
        //     this.personnes.push(objet)
        // }
        updateList() {
            this.getData()
        },
        getData() {
            axios
                .get(`${this.BASE_URL}/personnes`)
                .then(res => this.personnes = res.data)
                .catch(err => this.erreur = err)
        },
        deletePersonne(id) {
            console.log(id);
            axios
                .delete(`${this.BASE_URL}/personnes/${id}`)
                .then(() => {
                    const index = this.personnes.findIndex(elt => elt.id == id)
                    this.personnes.splice(index, 1)
                })
        }

    },
    mounted() {
        // axios({
        //     method: 'GET',
        //     url: 

        // })
        this.getData()
    }
}
</script>
<style scoped>
.error {
    color: tomato;
}
</style>
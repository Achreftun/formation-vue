<template >
    <h1>Ajouter une nouvelle personne</h1>
    <Form @submit="ajouterPersonne" :initial-values="valeurs" @invalid-submit="afficherDetails">
        <div>
            <label for="nom">Nom</label>
            <Field type="text" id="nom" name="nom" :rules="validateString" />
            <ErrorMessage name="nom" as="div" />
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <Field type="text" id="prenom" name="prenom" :rules="validateString" />
            <ErrorMessage name="prenom" as="div" />
        </div>
        <div>
            <label for="age">Age</label>
            <Field type="number" id="age" name="age" rules="minMax:18,150" />
            <ErrorMessage name="age" as="div" />
        </div>
        <button>
            Ajouter
        </button>
    </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
export default {
    components: {
        Field, Form, ErrorMessage
    },
    data() {
        return {
            valeurs: { nom: 'Wick', prenom: 'John', age: 45 }
        }
    },
    methods: {
        afficherDetails({ values }) {
            console.log("invalid-submit");
            console.log(values);
        },
        ajouterPersonne(values, actions) {
            console.log(values);
            actions.resetForm()
        },
        validateString(valeur) {
            if (!valeur) {
                return "Ce champ est obligatoire"
            }
            if (valeur[0] < 'A' || valeur[0] > 'Z') {
                return "Première lettre obligatoirement en majuscule"
            }
            return true
        },
        // validateAge(valeur) {
        //     if (!valeur) {
        //         return "Ce champ est obligatoire"
        //     }
        //     if (valeur < 0) {
        //         return "L'age ne peut pas être négatif"
        //     }
        //     if (valeur > 150) {
        //         return "L'age ne peut pas dépasser 150"
        //     }
        //     return true
        // }
    }
}
</script>
<style ></style>
<template >
    <h1>Ajouter une nouvelle personne</h1>
    <Form @submit="ajouterPersonne" @invalid-submit="afficherDetails">
        <div>
            <label for="nom">Nom</label>
            <Field type="text" id="nom" name="nom" :rules="validateString" />
            <ErrorMessage name="nom" />
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <Field type="text" id="prenom" name="prenom" :rules="validateString" />
            <ErrorMessage name="prenom" />
        </div>
        <div>
            <label for="age">Age</label>
            <Field type="number" id="age" name="age" :rules="validateAge" />
            <ErrorMessage name="age" />
        </div>
        <button>
            Ajouter
        </button>
    </Form>
</template>
<script>
import { Field, Form, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
export default {
    components: {
        Field, Form, ErrorMessage
    },
    data() {
        return {
            validateString:
                yup
                    .string()
                    .required((args) => `${args.path} obligatoire`)
                    .matches(/^[A-Z]{1}/, "Ce champ doit commencer par une amjuscule"),
            validateAge:
                yup
                    .number()
                    .min(18, (args) => `Valeur min autorisée : ${args.min},mais valeur saisie : ${args.value}`)
                    .max(150)
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

    }
}
</script>
<style ></style>
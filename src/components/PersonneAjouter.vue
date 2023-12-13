<template >
    <h1>Ajouter une nouvelle personne</h1>
    <Form @submit="ajouterPersonne" v-slot="{ errors, values, meta }" :validation-schema="schema">
        {{ values }} {{  meta }}
        <div>
            <label for="nom">Nom</label>
            <Field type="text" id="nom" name="nom" />
            <ErrorMessage name="nom" />
        </div>
        <div>
            <label for="prenom">Prénom</label>
            <Field type="text" id="prenom" name="prenom" />
            <ErrorMessage name="prenom" />
        </div>
        <div>
            <label for="age">Age</label>
            <Field type="number" id="age" name="age" />
            <ErrorMessage name="age" />
        </div>
        <div>
            <label for="rue">Rue</label>
            <Field type="text" id="rue" name="adresse.rue" />
            <ErrorMessage name="rue" />
        </div>
        <button ref="bouton" :disabled="!meta.valid">
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
        const validator = (name) => yup
            .string()
            .required(`${name} obligatoire`)
            .matches(/^[A-Z]{1}/, "Ce champ doit commencer par une majuscule")
        return {
            schema: yup.object({
                prenom: validator('Prénom'),
                nom: validator('Nom'),
                age:
                    yup
                        .number()
                        .required()
                        .min(18, (args) => `Valeur min autorisée : ${args.min},mais valeur saisie : ${args.value}`)
                        .max(150)
            })

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
            // this.$refs.bouton.disabled = true
        },

    },
    // mounted() {
    //     this.$refs.bouton.disabled = true
    // }
}
</script>
<style ></style>
<template >
    <h1>Adresse</h1>
    <ul>
        <li>Ville : {{ adresse.ville }}</li>
        <li>Code postal : {{ adresse.cp }}</li>
    </ul>
</template>

<script>
export default {
    computed: {
        adresse() {
            return this.$route.query
        }
    }
}
</script>

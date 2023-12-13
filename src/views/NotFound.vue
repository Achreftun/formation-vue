<template>
    <h1>
        Erreur 404 : route '{{ route }}' non trouvée
    </h1>
</template>
<script>
export default {
    computed: {
        route() {
            return this.$route.params.pathMatch
        }
    }
}
</script>
<style scoped>
h1 {
    color: red
}
</style>
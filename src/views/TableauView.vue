<template>
    <h1>Tableau : {{ numbers }}</h1>
    <ul>
        <li>Valeur actuelle : {{ numbers[id] }}</li>
        <li>
            <router-link :to="{ name: 'tableau', params: { id: previous } }">Précédent</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'tableau', params: { id: next } }">Suivant</router-link>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            numbers: [2, 3, 8, 1]
        }
    },
    computed: {
        id() {
            return Number(this.$route.params.id)
        },
        next() {
            return [this.id + 1] % this.numbers.length
        },
        previous() {
            return this.id == 0 ? this.numbers.length - 1 : this.id - 1
        }
    },
}
</script>

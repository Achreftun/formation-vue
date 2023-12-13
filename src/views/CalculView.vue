<template>
    <h1>Calcul</h1>
    <div>
        {{ value1 }} {{ operator }} {{ value2 }} = {{ resultat }}
    </div>
</template>
<script>
export default {
    computed: {
        operator() {
            switch (this.$route.params.op) {
                case 'plus': return '+'
                case 'moins': return '-'
                case 'fois': return '*'
                default: return '/'
            }
        },
        value1() {
            return this.$route.query.value1
        },
        value2() {
            return this.$route.query.value2
        },
        resultat() {
            return eval(this.value1 + this.operator + this.value2)
        }
    },
}
</script>
<style ></style>
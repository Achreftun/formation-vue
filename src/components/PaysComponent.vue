<template >
    <h1>Pays</h1>
    <div>
        {{ villes }}
    </div>
    <div>
        {{ codesPostaux }}
    </div>
    <ul>
        <VilleComponent v-for="(elt, ind) in villes" v-model:ville="villes[ind]" v-model:code-postal="codesPostaux[ind]" />
    </ul>
</template>
<script>
import VilleComponent from './VilleComponent.vue';


export default {
    components: {
        VilleComponent
    },
    data() {
        return {
            villes: ['Marseille', 'Lyon', 'Paris'],
            codesPostaux: ['13000', '69000', '75000']
        }
    },
}
</script>
<style scoped></style>
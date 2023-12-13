<template >
    <h1>About</h1>
    <h2>Pays : {{ pays }} recieved</h2>
    <div>
        <HelloWorld ville="Lille" code-postal="59000" @send-data="displayCountry" />
        <HelloWorld>John </HelloWorld>
    </div>
    <div>
        <router-link :to="{ name: 'adresse', query: { ville: 'Lille', cp: '59000' } }">
            Visitez Lille
        </router-link>
    </div>
    <div>
        <button @click="visiter">
            Visitez Toulouse
        </button>
    </div>
</template>
<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
    components: {
        HelloWorld,
    },
    data() {
        return {
            pays: ''
        }
    },
    methods: {
        displayCountry(param) {
            this.pays = param
        },
        visiter() {
            // this.$router.push({ name: 'adresse', query: { ville: 'Toulouse', cp: 31000 } })
            this.$router.push({ path: '/adresse', query: { ville: 'Toulouse', cp: 31000 } })
        }
    }
}
</script>
<style ></style>
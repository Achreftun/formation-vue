<template >
    <h1>About</h1>
    <h2>Pays : {{ pays }} recieved</h2>
    <div>
        <HelloWorld ville="Lille" code-postal="59000" @send-data="displayCountry" />
        <HelloWorld>John </HelloWorld>
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
        }
    }
}
</script>
<style ></style>
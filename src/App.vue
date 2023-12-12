<template>
  <h1>Pays : {{  pays }} recieved</h1>
  <img alt="Vue logo" class="logo" src="./assets/vue.svg">
  <img alt="Vite logo" class="logo" src="/vite.svg">
  <HelloWorld ville="Lille" code-postal="59000" @send-data="displayCountry" />
  <HelloWorld>John </HelloWorld>
  <PrimeurComponent></PrimeurComponent>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PrimeurComponent from './components/PrimeurComponent.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent
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

<style scoped>
.logo {
  height: 6em;
  will-change: filter;
  transition: filter 300ms;
}
</style>
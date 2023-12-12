<template>
  <h1>Pays : {{ pays }} recieved</h1>
  <img alt="Vue logo" class="logo" src="./assets/vue.svg">
  <img alt="Vite logo" class="logo" src="/vite.svg">
  <HelloWorld ville="Lille" code-postal="59000" @send-data="displayCountry" />
  <HelloWorld>John </HelloWorld>
  <PrimeurComponent></PrimeurComponent>
  <PaysComponent />
  <ReactiveValue />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaysComponent from './components/PaysComponent.vue';
import PrimeurComponent from './components/PrimeurComponent.vue';
import ReactiveValue from './components/ReactiveValue.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    PrimeurComponent,
    PaysComponent,
    ReactiveValue
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
<template>
  <HeaderComponent />
  <NavComponent />
  <router-view />
  <PrimeurView></PrimeurView>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import PrimeurView from './views/PrimeurView.vue';



export default {
  name: 'App',
  components: {
    HeaderComponent,
    NavComponent,
    PrimeurView
  },
  provide: {
    tva: 20
  }

}
</script>


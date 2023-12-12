<template>
  <div class="hello">
    {{ msg }}
    <slot>Doe</slot>
    from {{ ville }} - {{ codePostal }}
  </div>
  <div>
    <input type="text" v-model="pays">
    <button @click="envoyer">Envoyer au parent</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello ',
      pays: ''
    }
  },
  // props: ['ville', 'codePostal']
  props: {
    ville: {
      default: 'Paris'
    },
    codePostal: {
      default: 'France',
      type: String
    }
  },
  methods: {
    envoyer() {
      this.$emit('sendData', this.pays)
    }
  },
  emits: ['sendData']

}
</script>


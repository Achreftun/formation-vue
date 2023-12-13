<template>
    <nav>
        <router-link to="/">Accueil</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/primeur">Primeur (props, emit)</router-link> |
        <router-link to="/pays">Pays (v-model)</router-link> |
        <router-link to="/reactive">Reactive value</router-link> |
        <router-link to="/adresse">Adresse ($route.query)</router-link> |
        <router-link to="/personne">Personne ($route.params)</router-link> |
        <router-link to="/tableau" :class="[{ 'lien-actif': $route.name == 'tableau' }]">Tableau </router-link> |
        <router-link to="/compteur">Compteur (API Composition)</router-link> |
    </nav>
</template>

<style scoped>
.lien-actif {
    font-weight: bold;
}
</style>
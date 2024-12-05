<template>
  <div id="app">
    <Header />  <!-- Assure-toi que Header est inclus ici -->
    <router-view /> <!-- Le contenu de chaque page sera affiché ici -->
  </div>
</template>

<script>
import Header from './components/Header.vue';  // Importation du composant Header

export default {
  name: 'App',
  components: {
    Header // Déclare le composant dans la section components
  }
};
</script>

<style>
/* Tu peux ajouter des styles globaux ici */
</style>

<template>
  <div id="app">
    <Header /> <!-- Le composant Header -->
    <main>
      <router-view /> <!-- Contenu dynamique selon les routes -->
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  }
};
</script>

<style>
/* Styles globaux */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background: linear-gradient(135deg, #6e7e85, #314e56); /* Fond moderne avec un dégradé */
  color: #fff;
}

main {
  padding: 20px;
  min-height: 80vh;
}
</style>

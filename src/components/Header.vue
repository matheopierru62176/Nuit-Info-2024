<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="/explore">Explorer</router-link></li>
          <li><router-link to="/dysfunction">Dysfonctionnements</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Header"
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 10px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  nav ul li {
    display: inline;
  }
  </style>
  
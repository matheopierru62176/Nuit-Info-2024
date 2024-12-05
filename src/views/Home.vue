<template>
    <div class="home">
      <h1>Bienvenue dans l'application éducative : Systèmes Humains et Océaniques</h1>
      <p>Découvrez les parallèles fascinants entre les systèmes humains et les systèmes océaniques.</p>
      <router-link to="/explore" class="button">Commencer à explorer</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home"
  };
  </script>
  
  <style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
  }
  
  .button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  </style>
  
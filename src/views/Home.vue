<template>
    <div class="home">
      <div class="content">
        <h1>Bienvenue à Nuit Info 2024</h1>
        <p>Découvrez les parallèles fascinants entre les systèmes humains et les systèmes océaniques.</p>
        <router-link to="/explore" class="button">Commencer à explorer</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home"
  };
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-image: url('https://source.unsplash.com/random'); /* Image de fond */
    background-size: cover;
    background-position: center;
    color: white;
  }
  
  .content {
    background-color: rgba(0, 0, 0, 0.5); /* Légère transparence pour faire ressortir le texte */
    padding: 40px;
    border-radius: 10px;
  }
  
  .button {
    display: inline-block;
    padding: 15px 30px;
    background-color: #3498db;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    font-size: 18px;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: #2980b9;
  }
  @keyframes buttonHover {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.button:hover {
  background-color: #2980b9;
  animation: buttonHover 0.3s ease-in-out;
}
  </style>
  
<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/" class="nav-item">Accueil</router-link></li>
          <li><router-link to="/explore" class="nav-item">Explorer</router-link></li>
          <li><router-link to="/dysfunction" class="nav-item">Dysfonctionnements</router-link></li>
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
    background-color: #2c3e50; /* Un bleu/gris profond */
    color: white;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }
  
  nav ul li {
    display: inline;
  }
  
  nav a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    padding: 5px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  
  nav a:hover {
    background-color: #3498db; /* Une couleur bleu moderne */
    color: #fff;
  }
  @media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  nav a {
    font-size: 16px;
  }

  .button {
    font-size: 16px;
    padding: 12px 25px;
  }
}
  </style>
  
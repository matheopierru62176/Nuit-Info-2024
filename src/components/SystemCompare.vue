<template>
    <div>
      <h2>Comparaison entre le {{ systemName }}</h2>
      <p v-if="system === 'circulatory'">
        Le système circulatoire humain est similaire aux courants marins, qui assurent la circulation de l'eau à travers l'océan.
      </p>
      <p v-if="system === 'respiratory'">
        Le système respiratoire humain est comparable à l'écoulement de l'eau, permettant l'échange de gaz dans les deux systèmes.
      </p>
      <p v-if="system === 'nervous'">
        Le système nerveux humain fonctionne comme un réseau d'îles, transmettant des signaux entre différentes régions.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "SystemCompare",
    props: ["system"],
    computed: {
      systemName() {
        switch (this.system) {
          case "circulatory":
            return "système circulatoire et courants marins";
          case "respiratory":
            return "système respiratoire et écoulement de l'eau";
          case "nervous":
            return "système nerveux et réseaux d'îles";
          default:
            return "";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    margin-top: 20px;
    color: #2c3e50;
  }
  </style>
  
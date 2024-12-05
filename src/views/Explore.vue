<template>
    <div>
      <h1>Explorer les systèmes humains et océaniques</h1>
      <p>Choisissez un système pour voir les parallèles entre le corps humain et l'océan.</p>
      <div class="compare-options">
        <div class="option" @click="showComparison('circulatory')">Système circulatoire vs Courants marins</div>
        <div class="option" @click="showComparison('respiratory')">Système respiratoire vs Écoulement de l'eau</div>
        <div class="option" @click="showComparison('nervous')">Système nerveux vs Réseaux d'îles</div>
      </div>
      
      <SystemCompare v-if="activeComparison" :system="activeComparison"/>
    </div>
  </template>
  
  <script>
  import SystemCompare from "@/components/SystemCompare.vue";
  
  export default {
    name: "Explore",
    components: {
      SystemCompare
    },
    data() {
      return {
        activeComparison: null
      };
    },
    methods: {
      showComparison(system) {
        this.activeComparison = system;
      }
    }
  };
  </script>
  
  <style scoped>
  .compare-options {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  .option {
    padding: 15px;
    background-color: #2ecc71;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    width: 200px;
    text-align: center;
  }
  </style>
  
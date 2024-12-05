import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importer le router

createApp(App)
  .use(router) // Utiliser le router dans l'application
  .mount('#app');

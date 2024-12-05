import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Explore from './views/Explore.vue';
import Dysfunction from './views/Dysfunction.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/explore', component: Explore },
  { path: '/dysfunction', component: Dysfunction }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Registration from '../components/Authorization/Registration.vue';
import CardDetail from '../components/CardDetail/CardDetail.vue';
import Products from '../components/Products.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Registration,
  },
  {
    path: '/card:id',
    name: 'card-detail',
    component: CardDetail,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

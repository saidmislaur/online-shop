import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import RegisterView from '../views/RegisterView.vue';
import CardDetail from '../components/CardDetail/CardDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/product',
    name: 'product',
    component: CardDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

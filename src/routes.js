import VueRouter from 'vue-router';

import Preloader from './components/Preloader.vue';
import Home from './components/Home.vue';
import CompanyInfo from './components/CompanyInfo.vue';
import Rates from './components/Rates.vue';
import CallToAction from './components/CallToAction.vue';

const routes = [
  { 
    path: '/',
    component: Preloader
  },

  { 
    path: '/home',
    component: Home
  },

  { 
    path: '/company-info',
    component: CompanyInfo
  },

  { 
    path: '/rates',
    component: Rates
  }
  ,

  { 
    path: '/orderform',
    component: CallToAction
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;
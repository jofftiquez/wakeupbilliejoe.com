import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Privacy from '@/components/Privacy';
import About from '@/components/About';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/privacy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

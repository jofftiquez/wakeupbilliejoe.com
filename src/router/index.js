import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Privacy from '@/components/Privacy';
import Terms from '@/components/Terms';
import About from '@/components/About';
import NotFound from '@/components/NotFound';

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
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: '404',
      component: NotFound
    },
    { path: '*', redirect: { name: '404' } }
  ]
})

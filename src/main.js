// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import './firebase';
import SocialSharing from 'vue-social-sharing';

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(SocialSharing);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});

Vue.filter('two_digits', function (value) {
  if(value.toString().length <= 1)
  {
    return "0"+value.toString();
  }
  return value.toString();
});
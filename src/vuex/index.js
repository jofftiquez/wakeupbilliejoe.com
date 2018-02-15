import Vue from 'vue';
import Vuex from 'vuex';
import wakeupList from './wakeup-list';
import user from './user';

Vue.use(Vuex);

const modules = {
  wakeupList,
  user
}

export default new Vuex.Store({
  modules
});
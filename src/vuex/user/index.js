import { 
  streamLoginStatus
} from '../../firebase';

const state = {
  isLoggedIn: false,
  user: null
}

const getters = {
  isLoggedIn: (s) => s.isLoggedIn,
  user: (s) => s.user
}

const actions = {
  streamLoginStatus: ({ dispatch, commit }) => {
    streamLoginStatus().subscribe({
      next: user => {
        commit('setIsLoggedIn', !!user);
        commit('setUser', user);
      },
      error: e => console.error(e.message)
    });
  }
}

const mutations = {
  setIsLoggedIn: (s, val) => s.isLoggedIn = val,
  setUser: (s, user) => s.user = user,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
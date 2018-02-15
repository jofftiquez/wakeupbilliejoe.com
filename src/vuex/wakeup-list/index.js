import { 
  streamWakeupList, addToWakeupList,
} from '../../firebase';

const state = {
  wakeupList: []
}

const getters = {
  wakeupList: (s) => s.wakeupList,
}

const actions = {
  streamWakeupList: ({ dispatch, commit }) => {
    streamWakeupList().subscribe({
      next: data => commit('setWakeupList', data),
      error: e => console.error(e.message)
    });
  },
  addToWakeupList: async ({commit}, user) => {
    await addToWakeupList(user);
  }
}

const mutations = {
  setWakeupList: (s, list) => s.wakeupList = list,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
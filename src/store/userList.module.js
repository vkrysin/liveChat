const state = {
  users: ['Vlad', 'Andrew']
}

const getters = {
  users(state) {
    return state.users
  }
}

const mutations = {

}


export default {
  namespaced: true,
  state,
  mutations,
  getters
}

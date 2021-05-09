import { ListUsersService } from '../common/api.service.js';

const state = {
  users: []
}

const getters = {
  users(state) {
    return state.users
  }
}

const mutations = {
  setUsers(state, users) {
    state.users = users
  }
}

const actions = {
  updateUsers(context) {
    ListUsersService.get('http://127.0.0.1:8081', 'users')
      .then(res =>  {
        context.commit('setUsers', res.data.users)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

import ListUsersService from '../common/api.service.js'

const state = {
  users: []
}

const getters = {
  users(state) {
    return state.users
  }
}

const mutations = {

}

const actions = {
  updateUsers(state) {
    ListUsersService.get('http://127.0.0.1:8081', 'users')
      .then(res => users = res.data)

  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

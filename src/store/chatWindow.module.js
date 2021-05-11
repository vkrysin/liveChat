import { ChatWindowService } from '../common/api.service';

const state = {
  messages: ['Hello, i am fine',
          'Hello, i\'m fine too',
          'I called you two days ago']
}

const getters = {
  messages(state) {
    return state.messages
  }
}

const mutations = {

}

const actions = {
  signUp(context, userName) { // userName is object like { name: "someName" }
    ChatWindowService.put(userName)
  },
  deleteUser(context, userName) {
    ChatWindowService.delete(userName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

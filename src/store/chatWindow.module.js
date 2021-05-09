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
  signUp(userName) {
    ChatWindowService.put(userName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}

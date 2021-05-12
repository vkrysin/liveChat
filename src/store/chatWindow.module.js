import { ChatWindowService } from '../common/api.service';

const state = {
  messages: [
    {
      name: "Vlad",
      message: "Hello person!"
    }
  ]
}

const getters = {
  messages(state) {
    return state.messages
  }
}

const mutations = {
  setMessages(state, messages) {
    console.log(messages);
    state.messages = messages
  }
}

const actions = {
  signUp(context, userName) { // userName is object like { name: "someName" }
    return ChatWindowService.put(userName)
  },
  deleteUser(context, userName) {
    ChatWindowService.delete(userName)
  },
  updateMessages(context) {
    ChatWindowService.get('messages')
      .then(res =>  {
        context.commit('setMessages', res.data.messages)
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

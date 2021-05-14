import {ChatWindowService} from '../common/api.service';

const state = {
  messages: [
    {
      name: 'Vlad',
      message: 'Hello person!',
    },
  ],
};

const getters = {
  messages(state) {
    return state.messages;
  },
};

const mutations = {
  setMessages(state, messages) {
    state.messages = messages;
  },
};

const actions = {
  signUp(context, userName) { // userName is object like { name: "someName" }
    return ChatWindowService.put('users', userName);
  },
  deleteUser(context, userName) {
    ChatWindowService.delete(userName);
  },
  sendMessage(context, message) {
    ChatWindowService.put('messages', message);
  },
  updateMessages(context) {
    ChatWindowService.get('messages')
        .then((res) => {
          context.commit('setMessages', res.data.messages);
        });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};

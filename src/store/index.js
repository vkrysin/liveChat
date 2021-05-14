import {createStore} from 'vuex';
import userList from './userList.module';
import chatWindow from './chatWindow.module';

export const store = createStore({
  state() {
    return {
      currentUserName: '',
    };
  },
  getters: {
    currentUser(state) {
      return state.currentUserName;
    },
  },
  mutations: {
    setCurrentUser(state, userName) {
      state.currentUserName = userName;
    },
  },
  modules: {
    userList,
    chatWindow,
  },
});

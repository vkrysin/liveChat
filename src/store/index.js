import { createStore } from 'vuex'
import userList from './userList.module'
import chatWindow from './chatWindow.module'

export const store = createStore({
  state () {
    return {
      users: []
    }
  },
  mutations: {
    addUser(state, user) {
      state.users.append(user)
    }
  },
  modules: {
    userList,
    chatWindow
  }
})

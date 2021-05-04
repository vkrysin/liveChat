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


export default {
  namespaced: true,
  state,
  mutations,
  getters
}

<template>
  <div class="container">
    <h2>Chat</h2>
    <chat-message v-for="(item, index) in messages"
      :key="index" :message="messages[index].message"
      :name="messages[index].name"
      :isCurrent="isCurrent(messages[index].name)">
    </chat-message>
    <chat-input v-if="auth"
      @send="sendMessage({ name: currentUser, message: $event})">
    </chat-input>
    <div v-else class="auth">
      <h4>Your name</h4>
      <input type="text" class="auth__name" v-model="userName">
      <button @click.prevent="sendData">Enter</button>
      <div v-if="notice" class="notice">This name has been reserved</div>
    </div>
  </div>
</template>

<script>

import ChatInput from './ChatInput.vue';
import ChatMessage from './ChatMessage.vue';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'ChatWindow',
  data() {
    return {
      auth: false,
      notice: false,
      userName: '',
    };
  },
  components: {
    ChatMessage,
    ChatInput,
  },
  created() {
    setInterval(this.updateMessages, 1000);
    // for mobile
    window.onunload = window.onbeforeunload;
    window.addEventListener('unload', this.beforeWindowUnload);
    window.addEventListener('beforeunload', this.beforeWindowUnload);
  },
  computed: {
    ...mapGetters({
      messages: 'chatWindow/messages',
      currentUser: 'currentUser',
    }),
  },
  methods: {
    ...mapActions({
      // signUp: 'chatWindow/sighUp'
      deleteUser: 'chatWindow/deleteUser',
      updateMessages: 'chatWindow/updateMessages',
      sendMessage: 'chatWindow/sendMessage',
    }),
    sendData() {
      // add to users list on server
      const serverResponse =
        this.$store.dispatch('chatWindow/signUp', {name: this.$data.userName});
      serverResponse.then(
          (res) => {
            if (res.data.isDuplicate !== 'true') {
              this.$data.auth = true;
              this.$data.notice = false;
              this.$store.commit('setCurrentUser', this.$data.userName);
            } else {
              this.$data.notice = true;
            }
          },
      );
    },
    beforeWindowUnload() {
      if (this.auth == true) {
        this.deleteUser(this.currentUser);
      }
    },
    isCurrent(userName) {
      return userName === this.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    min-height: 1080px;
    background-color: #E5E5E5;

    & h2 {
      margin-top: 10px;
      text-align: center;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 600;
      font-size: 30px;
      color: #f0cd32;
    }
  }
  .auth {
    margin: 0 auto;
    display: flex;
    justify-content: center;

    & .notice {
      align-self: center;
    }

  }
</style>

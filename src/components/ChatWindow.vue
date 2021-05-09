<template>
  <div class="container">
    <chat-messages v-for="(item, index) in messages" :key="index" :message="messages[index]"></chat-messages>
    <chat-input v-if="auth"></chat-input>
    <div v-else class="auth">
      <h4>Your name</h4>
      <input type="text" class="auth__name" v-model="userName">
      <button @click="sendData">Enter</button>
    </div>
  </div>
</template>

<script>

import ChatInput from './ChatInput.vue'
import ChatMessages from './ChatMessages.vue'
import { mapGetters } from 'vuex'

export default {
  name: "ChatWindow",
  data() {
    return {
      auth: false,
      userName: ""
    }
  },
  components: {
    ChatMessages,
    ChatInput
  },
  computed: {
    ...mapGetters({
      messages: 'chatWindow/messages'
    })
  },
  methods: {
    // ...mapActions({
    //   signUp: 'chatWindow/sighUp'
    // }),
    sendData() {
      this.$data.auth = true;
      this.$store.dispatch('chatWindow/signUp');
    }
  },
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 1080px;
    background-color: #E5E5E5;
  }
  .auth {
    margin: 0 auto;
    display: flex;
    justify-content: center;

  }
</style>

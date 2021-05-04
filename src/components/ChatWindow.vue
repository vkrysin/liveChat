<template>
  <div class="container">
    <chat-messages v-for="(item, index) in messages" :key="index" :message="messages[index]"></chat-messages>
    <chat-input></chat-input>
  </div>
</template>

<script>

import ChatInput from './ChatInput.vue'
import ChatMessages from './ChatMessages.vue'
import { mapGetters } from 'vuex'

export default {
  name: "ChatWindow",
  components: {
    ChatMessages,
    ChatInput
  },
  computed: {
    ...mapGetters({
      messages: 'chatWindow/messages'
    })
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 1080px;
    background-color: #E5E5E5;
  }
</style>

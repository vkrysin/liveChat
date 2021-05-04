<template>
  <div class="chat">
    <list-users></list-users>
    <chat-window></chat-window>
  </div>
</template>

<script>

import ChatWindow from './components/ChatWindow'
import ListUsers from './components/ListUsers'

export default {
  name: 'App',
  components: {
    ChatWindow,
    ListUsers
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.chat {
  display: flex;
}
</style>

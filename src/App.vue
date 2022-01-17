<template>
  <div class="chat">
    <div
      v-if="!isListShow"
      class="dropdown-list-button"
      @click="toggleListShow"
    ></div>
    <list-users
      v-if="isListShow"
      :isActive="isListShow"
      @closed="toggleListShow"
    ></list-users>
    <chat-window></chat-window>
  </div>
</template>

<script>

import { LocalNotifications } from '@capacitor/local-notifications';

import ChatWindow from './components/ChatWindow';
import ListUsers from './components/ListUsers';

export default {
  name: 'App',
  components: {
    ChatWindow,
    ListUsers,
  },

  data() {
    return {
      isListShow: false,
    }
  },

 async mounted() {
    await LocalNotifications.requestPermissions();
  },

  methods: {
    toggleListShow () {
      this.isListShow = !this.isListShow;
    }
  },
};
</script>

<style>

* {
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.chat {
  height: 100%;
  display: flex;
  background-color: #E5E5E5;
}

.dropdown-list-button {
  margin-left: 15px;
  margin-top: 20px;
  width: 40px;
  height: 40px;
  background: url('./assets/menu.png') no-repeat center center;
  background-size: contain;
}
</style>

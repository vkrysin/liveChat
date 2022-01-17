<template>
  <div class="container">
    <h2>Live Chat</h2>
    <div class="messages">
      <chat-message v-for="(item, index) in messages"
        :key="index" :message="messages[index].message"
        :name="messages[index].name"
        :isCurrent="isCurrent(messages[index].name)">
      </chat-message>
    </div >
    <chat-input v-if="auth"
      @send="newMessage($event)">
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

import { LocalNotifications } from '@capacitor/local-notifications';

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
      messageNumber: 0,
      id: 1,
    };
  },
  components: {
    ChatMessage,
    ChatInput,
  },
  created() {
    this.updateMessages();

    setTimeout(() => {
      this.messageNumber = this.messages.length;
    }, 600);


    setInterval( async () => {
      this.updateMessages();

      if (this.messages.length > this.messageNumber) {
        this.id += 1;
        this.messageNumber = this.messages.length;

        await LocalNotifications.schedule({
        notifications: [
          {
            title: this.messages[0].name,
            body: this.messages[0].message,
            id: this.id,
            iconColor: '#0000FF',
          },
        ],
      });

      console.log(LocalNotifications)
      }
    }, 1000);
    // for mobile
    window.onunload = window.onbeforeunload;
    window.onbeforeunload = () => {
      if (this.auth == true) {
        this.deleteUser(this.currentUser);
      };
      return 'Are you sure';
    };
    // window.addEventListener('unload', this.beforeWindowUnload);
    // window.addEventListener('beforeunload', this.beforeWindowUnload);
  },

  mounted() {
    setTimeout(() => {
      const messageBox = document.querySelector('.messages');
      console.log(messageBox, messageBox.scrollHeight, messageBox.clientHeight);
      messageBox.scrollTop = messageBox.scrollHeight;
      console.log(messageBox.scrollTop);
    }, 200);
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
    async sendData() {
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

    newMessage(event) {
      if (event) {
        this.messageNumber += 1;
        this.sendMessage({ name: this.currentUser, message: event});

        setTimeout(() => {
          const messageBox = document.querySelector('.messages');
          console.log(messageBox, messageBox.scrollHeight, messageBox.clientHeight);
          messageBox.scrollTop = messageBox.scrollHeight;
          console.log(messageBox.scrollTop);
        }, 1500);
      }
    },

    beforeWindowUnload() {
      if (this.auth == true) {
        this.deleteUser(this.currentUser);
      }
      return 'Are ot';
    },
    isCurrent(userName) {
      return userName === this.currentUser;
    },
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width: 12px;
}

::-webkit-scrollbar:horizontal {
    height: 12px;
}

::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, .5);
    border-radius: 10px;
    border: 2px solid #ffffff;
}

::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ffffff;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 10px;
  }

  & h2 {
    margin: 0;
    margin-top: 10px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 30px;
    color: #f0cd32;
  }
}

.messages {
  margin-top: 15px;
  margin-right: 20px;
  padding-bottom: 10px;
  max-height: 65vh;
  overflow-y: auto;
  border-bottom: 1px solid rgb(194, 194, 194);

  & > * {
    margin-top: 10px;
  }

  & >:first-child {
    margin-top: auto;
  }


}

.auth {
  padding-bottom: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin-top: 10px;
  }

  h4 {
    margin: 0;
    display: flex;
    flex-shrink: 1;
    justify-content: flex-start;
  }

  input {
    width: 200px;
  }

  & .notice {
    align-self: center;
  }

  button {
    width: 200px;
  }
}

@media only screen and (min-width: 578px) {
  .auth {
    margin-top: 20px;
    align-items: center;
    flex-direction: row;

    & > * {
      margin-top: 0;
      margin-left: 10px;
    }
  }

  button {
    width: 70px;
  }
}
</style>

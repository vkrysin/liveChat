<template>
  <!-- <div class="current-user-message"></div> -->
  <div class="message__container">
    <div class="name" ref="name">{{name}}:</div>
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessage',
  props: ['message', 'name', 'isCurrent'],
  mounted() {
    // highlight current user
    if (this.isCurrent) {
      this.$refs.name.style.color = 'blue';
    }
  },
};
</script>

<style lang="scss" scoped>
  .message__container {
    display: flex;
    padding-left: 20px;
    margin-top: 5px;

    & .message {
      font-family: sans-serif;
      margin-left: 5px;
    }
  }
</style>

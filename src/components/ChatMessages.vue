<template>
  <!-- <div class="current-user-message"></div> -->
  <div class="message__container">
    <div class="name" ref="name">{{name}}{{isCurrent}}</div>
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
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
    border: 1px solid #aaa;

    & .message {
      margin-left: 30px;
    }
  }
</style>

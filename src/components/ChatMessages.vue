<template>
  <!-- <div class="current-user-message"></div> -->
  <div class="container">
    <div class="name">{{name}}</div>
    <div class="message">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'ChatMessages',
  props: ['message', 'name', 'isCurrent'],
};
</script>

<style lang="scss" scoped>
  .container {
    width: max-content;
    display: flex;
    border: 1px solid #aaa;

    & .message {
      margin-left: 30px;
    }
  }
</style>

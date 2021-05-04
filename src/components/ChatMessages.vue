<template>
  <!-- <div class="current-user-message"></div> -->
  <div class="other-user-message">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "ChatMessages",
  props: ['message']
}
</script>

<style lang="scss" scoped>
  .other-user-message {
    border: 1px solid #aaa;
  }
</style>

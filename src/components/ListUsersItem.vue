<template>
  <div class="item">
    {{name}}
  </div>
</template>

<script>
export default {
  name: 'ListUsersItem',
  props: ['name'],
};
</script>

<style lang="scss" scoped>
  .item {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #14a360;
  }
</style>

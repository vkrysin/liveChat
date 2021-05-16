<template>
  <div class="users-list">
    <h2>Users online</h2>
    <list-users-item v-for="(item, index) in users"
      :key="index" :name="users[index]"></list-users-item>
  </div>
</template>

<script>

import ListUsersItem from './ListUsersItem';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'ListUsers',
  data() {
    return {
    };
  },
  components: {ListUsersItem},
  created() {
    setInterval(this.updateUsers, 1000);
  },
  computed: {
    ...mapGetters({
      users: 'userList/users',
    }),
  },
  methods: {
    ...mapActions({
      updateUsers: 'userList/updateUsers',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .users-list {
    height: 970px;
    width: 350px;
    background: #E3F6FC;

    & h2 {
      margin-top: 10px;
      color: #b1c928;
    }
  }

  .item {
    padding-top: 20px;
    padding-left: 35px;
    display: flex;
  }
</style>

<template>
  <div class="users-list">
    <list-users-item></list-users-item>
    <div class="c" v-for="(item, index) in users"
      :key="index">{{users[index]}}</div>
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
  .c {
    border: 1px solid blue;
  }
  .users-list {
    margin-top: 20px;
    height: 970px;
    width: 350px;
    background: #E3F6FC;
  }

  .item {
    padding-top: 20px;
    padding-left: 35px;
    display: flex;

    & .online-indicator {
      position: relative;
      left: 50px;
      bottom: 65px;
    }
  }
</style>

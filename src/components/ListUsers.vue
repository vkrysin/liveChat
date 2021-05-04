<template>
  <div class="users-list">
    <list-users-item></list-users-item>
    <div class="cl">{{users}}</div>
    <div class="c" v-for="(item, index) in us" :key="index">{{us[index]}}</div>
  </div>
</template>

<script>

import ListUsersItem from './ListUsersItem'
import { mapGetters } from 'vuex'

export default {
  name: 'ListUsers',
  components: { ListUsersItem },
  data() {
    return {
      users: [],
      counter: 0
    }
  },
  computed: {
    ...mapGetters({
      us: 'userList/users'
    })
  }
}
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

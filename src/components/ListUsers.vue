<template>
  <div
    class="users-list"
    :class="{'users-list_active': isActive}"
  >
    <div class="header-wrapper">
      <h2>Users online</h2>
      <div
        class="left-arrow"
        @click="closeList"
      ></div>
    </div>
    <list-users-item v-for="(item, index) in users"
      :key="index" :name="users[index]"></list-users-item>
  </div>
</template>

<script>

import ListUsersItem from './ListUsersItem';
import {mapGetters, mapActions} from 'vuex';

export default {
  name: 'ListUsers',

  props: {
    isActive: false,
  },

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
    closeList() {
      this.$emit('closed');
    },
    ...mapActions({
      updateUsers: 'userList/updateUsers',
    }),
  },
};
</script>

<style lang="scss" scoped>
  .users-list {
    height: 100vh;
    padding-bottom: 20px;
    width: 170px;
    background: #E3F6FC;
    overflow-y: scroll;
    transition: width 1s ease-in;

    & h2 {
      font-size: 18px;
      color: #b1c928;
    }

    &_active {
      width: 150px;
    }
  }

  .item {
    padding-top: 20px;
    padding-left: 20px;
    display: flex;
  }

  .left-arrow {
    margin-right: 10px;
    width: 40px;
    height: 40px;
    background: url('../assets/leftArrow.png') no-repeat center center;
    background-size: contain;
  }

  .header-wrapper {
    margin-left: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
</style>

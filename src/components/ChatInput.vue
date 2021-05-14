<template>
  <form>
    <textarea @input="autoGrow" class="message" v-model="message"></textarea>
    <input type="submit" value="" @click.prevent="$emit('send', message)">
  </form>
</template>

<script>
export default {
  name: 'ChatInput',
  data() {
    return {
      message: '',
    };
  },
  methods: {
    autoGrow() {
      const textarea = document.querySelector('.message');
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    align-items: flex-end;
  }
  textarea[class="message"] {
    width: 1050px;
    height: 20px;

    border-radius: 14px 0 0 14px;
    overflow: hidden;
    resize: none;

    &:hover {
      border: none;
    }
    &:active { bottom: none; }
  }
  input[type="submit"] {
    width: 108px;
    height: 40px;
  }
</style>

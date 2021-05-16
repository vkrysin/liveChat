<template>
  <form>
    <textarea @input="autoGrow" class="message" v-model="message"
      ref="textarea">
    </textarea>
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
      const textarea = this.$refs.textarea;
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
    margin: 10px 20px 0px 20px;
    width: 1050px;
    max-height: 100px;
    border-radius: 14px 0 0 14px;
    overflow-y: scroll;
    resize: none;

    &:active {
      bottom: none;
    }
  }
  input[type="submit"] {
    width: 108px;
    height: 40px;
  }
</style>

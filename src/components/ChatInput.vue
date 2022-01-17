<template>
  <form>
    <textarea @input="autoGrow" class="message" v-model="message"
      ref="textarea">
    </textarea>
    <input type="button" value="Submit" @click="submit">
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
    submit() {
      this.$el.querySelector('textarea').value = '';
      this.$emit('send', this.message);
      this.message = '';
    },
  },
};
</script>

<style lang="scss" scoped>
  form {
    padding-bottom: 15px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;

    & > * {
      margin-top: 10px;
    }
  }
  textarea[class="message"] {
    width: 300px;
    max-height: 100px;
    overflow-y: scroll;
    resize: none;

    &:active {
      bottom: none;
    }
  }
  input[type="button"] {
    width: 108px;
  }


  @media only screen and (min-width: 578px) {
  form {
    margin-top: 20px;
    flex-direction: row;

    & > * {
      margin-top: 0;
      margin-left: 10px;
    }
  }
}
</style>

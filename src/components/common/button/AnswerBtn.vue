<template>
  <div class="answer-btn" @click="btnClick">
    知识网络
  </div>
</template>

<script scoped>
export default {
  methods: {
    btnClick: function() {
      this.$emit('answerBtnClickListener');
    },
  },
};
</script>

<style>
.answer-btn {
  display: inline-block;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 6px 12px;
  vertical-align: middle;
  font-size: 1em;
  line-height: 1.42857143;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  background: #474747;
  color: white;
  opacity: 0.85;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>



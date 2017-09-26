<template>
  <div class="answer-btn" @click="btnClick">
    知识网络
  </div>
</template>

<script>
export default {
  methods: {
    btnClick: function () {
      this.$emit('answerBtnClickListener')
    }
  }
}
</script>

<style>
.answer-btn {
  display: inline-block;
  padding: 6px 12px;
  font-size: 1em;
  text-decoration: none;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  background: #474747;
  color: white;
  opacity: 0.85;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>



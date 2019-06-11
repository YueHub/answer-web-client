<template>
  <font class="bwb">
    <span v-if="param1 != null">{{ param1 }}</span>
    <span v-if="param2 != null">{{ param2 }}</span>
  </font>
</template>

<script scoped>

export default {
  props: {
    param1: {
      type: String,
      default: function() {
        return '';
      },
    },
    param2: {
      type: String,
      default: function() {
        return '';
      },
    },
  },
};
</script>

<style scoped>
.bwb {
  border: 1px #3385FF solid;
  border-radius: 3px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  font-size: 15px;
  background-color: #f6f6f6;
}
</style>


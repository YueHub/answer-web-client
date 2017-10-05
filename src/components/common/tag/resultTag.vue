<template>
  <font class="bwb">

    <span v-if="param1 != null"> {{ param1 }} </span>
    <span v-if="param2 != null">{{ param2 }}</span>

  </font>
</template>

<script scoped>

export default {
  props: ['param1', 'param2']
}
</script>

<style scoped>
.bwb {
  font-size: 15px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #f6f6f6;
  border-radius: 3px;
  border: 1px #3385FF solid;
}

</style>


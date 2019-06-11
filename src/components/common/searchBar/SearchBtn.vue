<template>
  <button class="search-btn" @click="searchBtnClick">
    搜索
  </button>
</template>

<script scoped>
export default {
  methods: {
    searchBtnClick: function() {
      this.$emit('searchBtnClickListener');
    },
  },
};
</script>

<style scoped>

.search-btn {
  /* Positioning 位置相关 */
  position: absolute;
  top: 0;
  right: 0px;

  /* Box model 尺寸相关 */
  width: 100px;
  height: 40px;
  border: 0px;
  border-bottom: 1px solid #2d78f4;

  /* Typographic 文本相关 */
  font-size: 15px;
  letter-spacing: 1px;
  outline: medium;

  /* Visual 视觉效果 */
  background: #3385ff;
  color: white;
  -webkit-appearance: none;
  cursor: pointer;
}

.search-btn:hover {
  opacity: 0.85;
}

@media screen and (min-width: 1120px) {
  .search-btn {
    width: 15%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .search-btn {
    width: 15%;
  }
}

@media screen and (max-width:770px) {
  .search-btn {
    width: 20%;
  }
}
</style>



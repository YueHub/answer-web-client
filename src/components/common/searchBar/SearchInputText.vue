<template>
  <div class="search-input-text">
    <input
      id="search-input-text"
      v-model="searchInputTextValue"
      maxlength="50" type="text" placeholder="音乐 / 美食 / 阅读 / 电影..."
      @keyup.enter="inputTextEnter"
      @input="inputTextChange"
      @change="inputTextChange"
    >
  </div>
</template>

<script scoped>

export default {
  props: {
    inputTextShift: {
      type: String,
      default: function() {
        return '';
      },
    },
    searchBarTextValue: {
      type: String,
      default: function() {
        return '';
      },
    },
  },
  data() {
    return {
      searchInputTextValue: this.searchBarTextValue,
    };
  },
  methods: {
    inputTextChange: function() {
      this.$emit('inputTextChangeListener', this.searchInputTextValue);
    },
    inputTextEnter: function() {
      this.$emit('inputTextEnterListener');
    },
    moveText: function(shift) {
      const paddingVal = '11px 0px 10px ' + shift + '%';
      document.getElementById('search-input-text').style.padding = paddingVal;
    },
  },
};
</script>

<style scoped>
.search-input-text {
  /* Positioning 位置相关 */
  /* Box model 尺寸相关 */
  width: 100%;
  height: 40px;
  /* padding: 0px 0px 0px 9px; */
  border-radius: 0;

  /* Typographic 文本相关 */
  outline: 0;
  font: 17px arial;
  line-height: 22px;

  /* Visual 视觉效果 */
  background: #FFFFFF;
  color: #000;
  -moz-box-shadow: 0 0 8px #3385ff;
  -webkit-box-shadow: 0 0 8px #3385ff;
  box-shadow: 0 0 8px #3385ff;
}

#search-input-text {
  /* Positioning 位置相关 */
  /* Box model 尺寸相关 */
  width: 98%;
  height: 100%;
  padding-left: 2%;
  border-radius: 0;

  /* Typographic 文本相关 */
  outline: 0;
  font: 17px arial;
  line-height: 22px;

  /* Visual 视觉效果 */
  background: #FFFFFF;
  color: #000;
}

#search-input-text:focus {
  -moz-box-shadow: 0 0 7px #3385ff;
  -webkit-box-shadow: 0 0 7px #3385ff;
  box-shadow: 0 0 7px #3385ff;
}

/* placeholder  */

#search-input-text::-webkit-input-placeholder {
  padding-left: 6px;
  font-style: italic;
}

#search-input-text:-moz-placeholder {
  padding-left: 6px;
  font-style: italic;
}

#search-input-text::-moz-placeholder {
  padding-left: 6px;
  font-style: italic;
}

#search-input-text:-ms-input-placeholder {
  padding-left: 6px;
  font-style: italic;
}
</style>



<template>
  <div class="mobile-line">
    <input id="search-input-text" class="search-input-text mobile-line" @keyup.enter="inputTextEnter" type="text" placeholder="音乐 / 美食 / 阅读 / 商城..." v-model="searchInputTextValue" @change="inputTextChange" maxlength="50">
  </div>
</template>

<script scoped>

export default {
  props: ['searchBarTextValue', 'inputTextShift'],
  data() {
    return {
      searchInputTextValue: this.searchBarTextValue,
    }
  },
  methods: {
    moveText: function(shift) {
      var paddingVal = '11px 0px 10px ' + shift + '%'
      document.getElementById('search-input-text').style.padding = paddingVal
    },

    inputTextChange: function() {
      this.$emit('inputTextChangeListener', this.searchInputTextValue);
    },
    inputTextEnter: function() {
      this.$emit('inputTextEnterListener')
    }
  }
}
</script>

<style scoped>
.mobile-line {
  -moz-box-shadow: 0 0 3px #3385ff;
  -webkit-box-shadow: 0 0 3px #3385ff;
  box-shadow: 0 0 3px #3385ff;
}

.mobile-line:focus {
  -moz-box-shadow: 0 0 10px #3385ff;
  -webkit-box-shadow: 0 0 10px #3385ff;
  box-shadow: 0 0 10px #3385ff;
}

.search-input-text {
  /* padding: 11px 0px 10px 9px; */
  width: 100%;
  height: 40px;
  background: #FFFFFF;
  color: #000;
  outline: 0;
  font: 17px arial;
  line-height: 22px;
  border-radius: 0;
  -moz-box-shadow: 0 0 10px #3385ff;
  -webkit-box-shadow: 0 0 10px #3385ff;
  box-shadow: 0 0 10px #3385ff;
}

.search-input-text:focus {
  -moz-box-shadow: 0 0 18px #3385ff;
  -webkit-box-shadow: 0 0 18px #3385ff;
  box-shadow: 0 0 18px #3385ff;
}

/* placeholder 斜体 */

.search-input-text::-webkit-input-placeholder {
  font-style: italic;
  padding-left: 6px;
}

.search-input-text:-moz-placeholder {
  font-style: italic;
  padding-left: 6px;
}

.search-input-text::-moz-placeholder {
  font-style: italic;
  padding-left: 6px;
}

.search-input-text:-ms-input-placeholder {
  font-style: italic;
  padding-left: 6px;
}
</style>



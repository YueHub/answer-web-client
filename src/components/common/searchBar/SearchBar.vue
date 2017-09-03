<template>
  <div>
    <!-- 搜索引擎选择 -->
    <search-type-select class="inline-block search-bar-type-select">

    </search-type-select>
    <div class="search-input-text-btn">
      <!-- 搜索串文本输入框 -->
      <search-input-text ref="searchInputText" :searchBarTextValue="searchBarTextValue" @inputTextChangeListener="searchBarTextChange" @inputTextEnterListener="searchBarTextEnter">
      </search-input-text>

      <!-- 搜索按钮 -->
      <search-btn class="inline-block" @searchBtnClickListener="searchBarBtnClick">
      </search-btn>
    </div>
  </div>
</template>

<script scoped>
import searchTypeSelect from '@/components/common/searchBar/SearchTypeSelect'
import searchInputText from '@/components/common/searchBar/SearchInputText'
import searchBtn from '@/components/common/searchBar/SearchBtn'

export default {
  components: {
    'search-type-select': searchTypeSelect,
    'search-input-text': searchInputText,
    'search-btn': searchBtn
  },
  data() {
    return {
      searchBarTextValue: this.$store.state.searchQuery,
    }
  },
  methods: {
    moveText: function(shift) {
      this.$refs.searchInputText.moveText(shift)
    },
    searchBarTextChange: function(searchInputTextValue) {
      this.searchBarTextValue = searchInputTextValue;
      this.$emit('searchBarTextChangeListener', this.searchBarTextValue)
    },
    searchBarTextEnter: function() {
      this.searchBarBtnClick()
    },
    searchBarBtnClick: function() {
      this.$emit('searchBarBtnClickListener');
    }
  }
}
</script>

<style scoped>
.inline-block {
  display: inline-block;
  margin: auto;
}

@media screen and (min-width: 1120px) {
  .search-bar-type-select {
    float: left;
  }
  .search-input-text-btn {
    position: relative;
    width: 85.2%;
    float: left;
    margin-left: 1%;
    height: 40px;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .search-bar-type-select {
    float: left;
    width: 10%;
  }
  .search-input-text-btn {
    position: relative;
    width: 85.2%;
    float: left;
    margin-left: 0.5%;
    height: 40px;
  }
}

@media screen and (max-width:770px) {
  .search-bar-type-select {
    display: none;
  }
  .search-input-text-btn {
    position: relative;
    width: 100%;
    float: left;
    height: 40px;
  }
}
</style>

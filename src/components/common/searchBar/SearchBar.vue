<template>
  <div>
    <!-- 搜索引擎选择 -->
    <search-type-select
      :default-value="'0'"
      :select-options="selectOptions"
      class="inline-block search-bar-type-select"
    />

    <div class="search-input-text-btn">
      <!-- 搜索串文本输入框 -->
      <search-input-text
        ref="searchInputText"
        :search-bar-text-value="searchBarTextValue"
        @inputTextChangeListener="searchBarTextChange"
        @inputTextEnterListener="searchBarTextEnter"
      />

      <!-- 搜索按钮 -->
      <search-btn
        class="inline-block"
        @searchBtnClickListener="searchBarBtnClick"
      />
    </div>
  </div>
</template>

<script scoped>
import {mapState, mapGetters} from 'vuex';

import searchTypeSelect from '@/components/common/searchBar/SearchTypeSelect';
import searchInputText from '@/components/common/searchBar/SearchInputText';
import searchBtn from '@/components/common/searchBar/SearchBtn';

export default {
  components: {
    'search-type-select': searchTypeSelect,
    'search-input-text': searchInputText,
    'search-btn': searchBtn,
  },
  data() {
    return {
      selectOptions: [{
        value: '0',
        label: '知识搜索',
      }, {
        value: '1',
        label: '应用搜索',
        disabled: true,
      }, {
        value: '2',
        label: '移动搜索',
        disabled: true,
      }],
      searchBarTextValue: this.searchQuery,
    };
  },
  computed: {
    ...mapState(['searchQuery']),
    ...mapGetters(['getSearchActiveTag']),
  },
  created() {
    this.searchBarTextValue = this.searchQuery;
  },
  methods: {
    moveText: function(shift) {
      this.$refs.searchInputText.moveText(shift);
    },
    searchBarTextChange: function(searchInputTextValue) {
      this.searchBarTextValue = searchInputTextValue;
      this.$emit('searchBarTextChangeListener', this.searchBarTextValue);
    },
    searchBarTextEnter: function() {
      this.searchBarBtnClick();
    },
    searchBarBtnClick: function() {
      this.$emit('searchBarBtnClickListener');
    },
  },
};
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
    float: left;
    margin-left: 10px;
    width: calc(85% - 10px);
    height: 50px;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .search-bar-type-select {
    float: left;
    width: 10%;
  }
  .search-input-text-btn {
    position: relative;
    float: left;
    margin-left: 30px;
    width: calc(90% - 30px);
    height: 50px;
  }
}

@media screen and (max-width:770px) {
  .search-bar-type-select {
    display: none;
  }
  .search-input-text-btn {
    position: relative;
    float: left;
    width: calc(100%);
    height: 50px;
  }
}
</style>

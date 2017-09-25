<template>
  <div>
    <!-- logo -->
    <div class="logo-results-main">
      <router-link to="/index">
        <img class="logo-img" src="/static/imgs/logo/answer-logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="result-search-bar">
      <search-bar @searchBarTextChangeListener="searchBarTextChange" @searchBarBtnClickListener="searchBarBtnClick"></search-bar>
    </div>
  </div>
</template>

<script scoped>
import { Message } from 'element-ui'
import { mapState, mapMutations } from 'vuex'
import searchBar from '@/components/common/searchBar/SearchBar'

import axios from 'axios'

export default {
  components: {
    'search-bar': searchBar
  },
  data() {
    return {
      searchBarTextValue: ''
    }
  },
  mounted() {
    if (this.searchQuery != null && this.searchQuery != '') {
      alert('开始搜索')
    }
  },
  computed: {
    ...mapState(['searchQuery'])
  },
  methods: {
    ...mapMutations(['setSearchQuery']),
    searchBarTextChange: function(searchBarTextValue) {
      this.searchBarTextValue = searchBarTextValue;
      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: searchBarTextValue
      })
    },
    searchBarBtnClick: function () {
      this.startSearch()
    },
    startSearch: function () {
      if (this.searchQuery == '') {
        Message({
          showClose: true,
          message: '请输入搜索请求',
          duration: 2000,
          type: 'warning'
        });
        return
      }
      axios.get('/Answer/front/developerAction!answer.action?question=' + this.searchQuery)
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.logo-img {
  width: 100%;
  height: 100%;
}

@media screen and (min-width: 1120px) {
  .logo-results-main {
    width: 10%;
    height: 5%;
    margin: 20px auto 20px;
  }
  .result-search-bar {
    width: 50%;
    margin: auto;
  }
}
</style>



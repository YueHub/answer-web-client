<template>
  <div>
    <!-- logo -->
    <div class="logo-results-main">
      <router-link to="/index">
        <img class="logo-img" src="/static/imgs/logo/answer-logo.png" alt="logo" />
      </router-link>
    </div>
    <!-- search bar -->
    <div class="result-search-bar">
      <search-bar @searchBarTextChangeListener="searchBarTextChange" @searchBarBtnClickListener="searchBarBtnClick"></search-bar>
    </div>

    <!-- answer result -->
    <div class="answer-result">
      <!-- short answer -->
      <div>
        <span class="result-title">
          周董的妻子的丈夫的母亲是谁？
        </span>
      </div>
      <div class="result-card">
        <div>
          <span class="short-answer-text">sdfsdfsdf</span>
          <result-tag class="short-answer-tag"></result-tag>
        </div>
      </div>
      <div class="result-card-explain">
        如果周董指的是
        <span class="explain-stress">
        周杰伦的别名  
        </span>
      </div>

    </div>

  </div>
</template>

<script scoped>
import { Message } from 'element-ui'
import { mapState, mapMutations } from 'vuex'
import searchBar from '@/components/common/searchBar/SearchBar'
import resultTag from '@/components/common/tag/resultTag'

import axios from 'axios'

export default {
  components: {
    'search-bar': searchBar,
    'result-tag': resultTag
  },
  data() {
    return {
      searchBarTextValue: ''
    }
  },
  mounted() {
    if (this.searchQuery != null && this.searchQuery != '') {
      this.startSearch()
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
    searchBarBtnClick: function() {
      this.startSearch()
    },
    startSearch: function() {
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
/* .result-search-bar {
  zoom: 1;
} */


/* 消除浮动 */


/* .result-search-bar :after {
  clear: both;
  content: '.';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
} */

.answer-result {
  margin-top: 6%;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.result-title {
  font-size: 1.3em;
}

.result-card {
  position: relative;
  margin-top: 1.5%;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 2%;
  background-color: #FFF;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  box-shadow: 0 1px 3px rgb(51, 133, 255);
}

.short-answer-text {
  font-family: "SimHei";
  color: #494949;
}

.short-answer-tag {
  margin-left: 5%;
}

.result-card-explain {
  margin-top: 15px;
  text-align: center;
  font-size: 0.8em;
  color: #737373;
}

.explain-stress {
  font-weight: bold;
}

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



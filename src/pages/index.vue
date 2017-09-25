<template>
  <div>

    <!-- logo -->
    <div class="logo-main">
      <router-link to="/index">
        <img class="logo-img" src="/static/imgs/logo/answer-logo.png" alt="logo" />
      </router-link>
    </div>
    <!-- search bar -->
    <div class="index-search-bar">
      <search-bar @searchBarTextChangeListener="searchBarTextChange" @searchBarBtnClickListener="searchBarBtnClick">

      </search-bar>
    </div>

    <!-- tag cloud -->
    <div class="index-tag-cloud">
      <tag-cloud :cloudWords="cloudWords">

      </tag-cloud>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

import { Message } from 'element-ui'

import searchBar from '@/components/common/searchBar/SearchBar'
import tagCloud from '@/components/common/tagCloud/TagCloud'

export default {
  components: {
    'search-bar': searchBar,
    'tag-cloud': tagCloud
  },
  data() {
    return {
      searchInputTextValue: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.platform == 0) {
        document.getElementById('logo-img').src = '/static/imgs/logo/logo-mobile.png'
      }
    })
  },
  computed: {
    ...mapState(['platform', 'cloudWords'])
  },
  methods: {
    ...mapMutations(['setSearchQuery']),
    searchBarTextChange: function(searchInputTextValue) {
      this.searchInputTextValue = searchInputTextValue
    },
    searchBarBtnClick: function() {
      if (this.searchInputTextValue == '') { // 如果是空字符串
        Message({
          showClose: true,
          message: '请输入搜索请求',
          duration: 2000,
          type: 'warning'
        });
        return
      }
      this.$router.push({ name: 'Result' })
      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: this.searchInputTextValue
      })   // 更新搜索请求串
    }
  }
}
</script>

<style>
.logo-img {
  width: 100%;
  height: 100%;
}
.logo-main {
  cursor: pointer;
}

@media screen and (min-width:1120px) {
  .logo-main {
    width: 300px;
    line-height: 35%;
    overflow: hidden;
    margin: 8% auto 4%;
  }
  .index-search-bar {
    width: 50%;
    margin: auto;
  }
  .index-tag-cloud {
    margin-top: 10%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .logo-main {
    width: 400px;
    line-height: 10px;
    overflow: hidden;
     margin: 20% auto 4%;
  }
  .index-search-bar {
    width: 70%;
    margin: auto;
  }
  .index-tag-cloud {
    margin-top: 17%;
  }
}

@media screen and (max-width: 770px) {
  .logo-main {
    width: 50%;
    line-height: 35%;
    overflow: hidden;
    margin: 20% auto 10%;
  }
  .index-search-bar {
    width: 95%;
    margin: auto;
  }
  .index-tag-cloud {
    margin-top: 40%;
  }
}
</style>
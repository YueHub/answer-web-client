<template>
  <div>
    <!-- logo -->
    <div class="logo-main">
      <router-link to="/index">
        <img
          alt="logo"
          class="logo-img"
          src="/static/imgs/logo/answer-logo.png"
        >
      </router-link>
    </div>

    <!-- search bar -->
    <div class="index-search-bar">
      <search-bar
        @searchBarTextChangeListener="searchBarTextChange"
        @searchBarBtnClickListener="searchBarBtnClick"
      />
    </div>

    <!-- tag cloud -->
    <div class="index-tag-cloud">
      <tag-cloud
        :cloud-words="cloudWords"
        :width="tagCloudWidth"
        :height="tagCloudHeight"
      />
    </div>
  </div>
</template>

<script scoped>
import {mapState, mapMutations} from 'vuex';

import {Message} from 'element-ui';

import searchBar from '@/components/common/searchBar/SearchBar';
import tagCloud from '@/components/common/tagCloud/TagCloud';

export default {
  components: {
    'search-bar': searchBar,
    'tag-cloud': tagCloud,
  },
  data() {
    return {
      searchInputTextValue: '',
      tagCloudWidth: '738px',
      tagCloudHeight: '350px',
    };
  },
  computed: {
    ...mapState(['platform', 'cloudWords']),
  },
  mounted() {
    this.$nextTick(() => {
      if (this.platform == 0) {

      }
    });
  },
  methods: {
    ...mapMutations(['setSearchQuery']),
    searchBarTextChange: function(searchInputTextValue) {
      this.searchInputTextValue = searchInputTextValue;
    },
    searchBarBtnClick: function() {
      /* 如果是空字符串 */
      if (this.searchInputTextValue == '') {
        new Message({
          showClose: true,
          message: '请输入搜索请求',
          duration: 2000,
          type: 'warning',
        });
        return;
      }
      this.$router.push({name: 'Result'});
      /* 更新搜索请求串 */
      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: this.searchInputTextValue,
      });
    },
  },
};
</script>

<style scoped>
.logo-main {
  cursor: pointer;
}
.logo-img {
  width: 100%;
  height: 100%;
}


@media screen and (min-width:1120px) {
  .logo-main {
    overflow: hidden;
    margin: 8% auto 4%;
    width: 300px;
    line-height: 35%;
  }
  .index-search-bar {
    margin: auto;
    width: 50%;
  }
  .index-tag-cloud {
    margin-top: 9%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .logo-main {
    overflow: hidden;
    margin: 20% auto 4%;
    width: 400px;
    line-height: 10px;
  }
  .index-search-bar {
    margin: auto;
    width: 75%;
  }
  .index-tag-cloud {
    margin-top: 17%;
  }
}

@media screen and (max-width: 770px) {
  .logo-main {
    overflow: hidden;
    margin: 15% auto 15%;
    width: 55%;
    line-height: 35%;
  }
  .index-search-bar {
    margin: auto;
    width: 95%;
  }
  .index-tag-cloud {
    margin-top: 40%;
  }
}
</style>

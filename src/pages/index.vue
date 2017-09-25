<template>
  <!-- answer index -->
  <div>

    <!-- logo -->
    <div>
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
import { mapState } from 'vuex'

import searchBar from '@/components/common/searchBar/SearchBar'
import tagCloud from '@/components/common/tagCloud/TagCloud'

export default {
  computed: {
    ...mapState(['cloudWords'])
  },
  components: {
    'search-bar': searchBar,
    'tag-cloud': tagCloud
  },
}
</script>

<style>
@media screen and (min-width:1120px) {
  .logo-img {
    width: 20%;
    margin: 5% auto 3.5%;
    cursor: pointer;
  }
  .index-search-bar {
    width: 50%;
    margin: auto;
  }
  .index-tag-cloud {
    margin-top: 6%;
  }
}

/* TODO */
@media screen and (min-width:770px) and (max-width:1120px) {
  .logo-img {
    width: 20%;
    margin: 8% auto 2%;
    cursor: pointer;
  }
}

/* TODO */
@media screen and (max-width:770px) {
  .logo-img {
    width: 20%;
    margin: 8% auto 2%;
    cursor: pointer;
  }
}
</style>



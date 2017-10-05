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
    <div class="answer-result" v-if="answerResult != null && answerResult != ''">
      <div class="explain-text" v-for="(word, index) in answerResult.words" :key="word.id" v-if="word.polysemantNamedEntities.length > 0">
        <span class="explain-stress"> {{ word.name }}</span>
        至少含有
        <span class="explain-stress">{{ word.polysemantNamedEntities.length }}</span>
        种歧义理解 Answer会根据问题自动识别
      </div>
      

      <!-- short answer -->
      <div v-for="shortAnswerPolysemant in answerResult.shortAnswer.polysemantSituationVOs" :key="shortAnswerPolysemant.id">
        <div>
          <span class="result-title">
            {{ answerResult.question }}
          </span>
        </div>
        <div class="result-card">
          <div class="answer-item" v-for="(queryResult, index) in shortAnswerPolysemant.queryResults" :key="queryResult.id">
            <span class="short-answer-text" v-if="queryResult.answers.length > 0 && answer != null" v-for="answer in queryResult.answers">
              {{ answer.content  + "  "}}
            </span>
            <result-tag class="short-answer-tag" v-if="queryResult.answers.length > 0" :param1="shortAnswerPolysemant.predicateDisambiguationStatements[index].subject.name" :param2="shortAnswerPolysemant.predicateDisambiguationStatements[index].predicate.disambiguationName">
            </result-tag>
          </div>
        </div>
        <div class="result-card-explain" v-for="activePolysemantNamedEntitie in shortAnswerPolysemant.activePolysemantNamedEntities" v-if="activePolysemantNamedEntitie != null" :key="activePolysemantNamedEntitie.id">
          如果
          <span class="explain-stress">
            {{ activePolysemantNamedEntitie.entityName }}
          </span>
          指的是
          <span class="explain-stress">
            {{ activePolysemantNamedEntitie.polysemantExplain }}
          </span>
        </div>
      </div>

      <!-- knowledge graph -->
      <div id="knowledge-graph" v-if="answerResult != null && answerResult.knowledgeGraphVOs != null">
        <div>
          <div>
            <span class="result-title">
              逻辑图谱
            </span>
          </div>
        </div>
        <div class="result-card">
          <div>
            <knowledge-graph ref="knowledgeGraph" :knowledgeGraphVOs="answerResult.knowledgeGraphVOs"></knowledge-graph>
          </div>
        </div>
      </div>

      <!-- ner answer -->
      <div class="ner-result" v-if="answerResult != null && answerResult.words != null">
        <div>
          <span class="result-title">
            命名实体识别
          </span>
        </div>
        <div class="result-card">
          <div class="ner-result-table">
            <result-table :tableData="answerResult.words"></result-table>
            <answer-btn class="new-answer-btn" @answerBtnClickListener="openRightWindow"></answer-btn>
          </div>
        </div>
      </div>

      <!-- page answer -->
      <div>
        <div>
          <span class="result-title">
            网页搜索结果
          </span>
        </div>
        <div class="result-card">
          <div>
            <page-result-item></page-result-item>
          </div>
        </div>
      </div>

      <!-- right window -->
      <div>
        <right-window ref="rightWindow"></right-window>
      </div>

    </div>

  </div>
</template>

<script scoped>
import Vue from 'vue'
import { Message } from 'element-ui'
import { mapState, mapMutations } from 'vuex'
import searchBar from '@/components/common/searchBar/SearchBar'
import resultTag from '@/components/common/tag/resultTag'
import knowledgeGraph from '@/components/graph/KnowledgeGraph'
import resultTable from '@/components/common/resultTable/ResultTable'
import answerBtn from '@/components/common/button/AnswerBtn'
import pageResultItem from '@/components/result/PageResultItem'
import rightWindow from '@/components/rightWindow/RightWindow'

import axios from 'axios'

export default {
  components: {
    'search-bar': searchBar,
    'result-tag': resultTag,
    'knowledge-graph': knowledgeGraph,
    'result-table': resultTable,
    'answer-btn': answerBtn,
    'page-result-item': pageResultItem,
    'right-window': rightWindow
  },
  data() {
    return {
      searchBarTextValue: '',
      answerResult: null,
      count: 1
    }
  },
  mounted() {
    if (this.searchQuery != null && this.searchQuery != '') {
      this.startAnswer(this.successHandler, this.errorHandler)
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
      this.startAnswer(this.successHandler, this.errorHandler)
    },
    startAnswer: function(successHandler, errorHandler) {
      if (this.searchQuery == '') {
        Message({
          showClose: true,
          message: '请输入搜索请求',
          duration: 2000,
          type: 'warning'
        });
        return
      }
      axios.get('/answer?q=' + this.searchQuery)
        .then(function(response) {
          successHandler(response)
        })
        .catch(function(error) {
          errorHandler(error)
        });
    },
    successHandler: function(response) {
      this.answerResult = response.data
      console.log(this.answerResult)
    },
    errorHandler: function(error) {
      console.log("error: ", error)
    },
    openRightWindow: function() {
      this.$refs.rightWindow.open('right')
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

.explain-text {
  width: 100%;
  text-align: center;
  font-size: 0.9em;
  color: #757373;
}


.result-title {
  font-style: oblique;
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

#knowledge-graph .result-card {
  padding: 1% !important;
}

.answer-item {
  padding-left: 1em;
  padding-top: 1em;
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

.ner-result {
  margin-top: 30px;
}

.ner-result-table {
  text-align: center;
}

.new-answer-btn {
  margin-top: 2%;
  color: #dfdfdf;
}

.new-answer-btn:hover {
  color: #FFF;
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
    margin-right: auto;
    margin-left: auto;
  }
}
</style>



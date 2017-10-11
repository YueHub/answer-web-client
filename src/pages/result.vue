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
        <span class="explain-stress">{{ word.name }}</span>
        至少含有
        <span class="explain-stress">{{ word.polysemantNamedEntities.length }}</span>
        种歧义理解, Answer 会根据问题自动识别
      </div>

      <!-- short answer -->
      <div class="result-item" v-for="shortAnswerPolysemant in answerResult.shortAnswer.polysemantSituationVOs" :key="shortAnswerPolysemant.id">
        <div>
          <span class="result-title">
            {{ answerResult.question }}
          </span>
        </div>
        <div class="result-card">
          <div class="answer-item" v-for="(queryResult, index) in shortAnswerPolysemant.queryResults" :key="queryResult.id">
            <span class="short-answer-text" v-if="queryResult.answers.length > 0 && answer != null" v-for="answer in queryResult.answers" :key="answer.id">
              {{ answer.content + " "}}
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
      <div class="result-item">
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
              <knowledge-graph ref="knowledgeGraph" :knowledgeGraphVOs="answerResult.knowledgeGraphVOs" :width="knowledgeGraphWidth" :height="knowledgeGraphHeight"></knowledge-graph>
            </div>
          </div>
        </div>
      </div>

      <!-- ner answer -->
      <div class="result-item">
        <div class="ner-result" v-if="answerResult != null && answerResult.words != null">
          <div>
            <span class="result-title">
              命名实体识别
            </span>
          </div>
          <div class="result-card">
            <div class="ner-result-table">
              <entity-table :tableData="answerResult.words"></entity-table>
              <answer-btn class="new-answer-btn" @answerBtnClickListener="toggleRightWindow"></answer-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- page answer -->
      <div class="result-item">
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

      <!-- right window - knowledge net -->
      <div>
        <right-window :words="answerResult.words" ref="rightWindow"></right-window>
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
import entityTable from '@/components/common/table/EntityTable'
import answerBtn from '@/components/common/button/AnswerBtn'
import pageResultItem from '@/components/result/PageResultItem'
import rightWindow from '@/components/rightWindow/RightWindow'

import axios from 'axios'

export default {
  components: {
    'search-bar': searchBar,
    'result-tag': resultTag,
    'knowledge-graph': knowledgeGraph,
    'entity-table': entityTable,
    'answer-btn': answerBtn,
    'page-result-item': pageResultItem,
    'right-window': rightWindow
  },
  data() {
    return {
      searchBarTextValue: '',
      answerResult: null,
      count: 1,
      knowledgeGraphWidth: '730',
      knowledgeGraphHeight: '448'
    }
  },
  mounted() {
    if (this.searchQuery != null && this.searchQuery != '') {
      this.startAnswer(this.successHandler, this.errorHandler)
    }
    if (this.platform == 0) { // 移动端
      this.knowledgeGraphWidth = '351'
      this.knowledgeGraphHeight = '540'
    }
  },
  computed: {
    ...mapState(['searchQuery', 'platform'])
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
    },
    errorHandler: function(error) {
      console.log("error: ", error)
    },
    toggleRightWindow: function() {
      this.$refs.rightWindow.toggle('right')
    }
  }
}
</script>

<style scoped>
.logo-img {
  width: 100%;
  height: 100%;
}

.explain-text {
  width: 100%;
  font-size: 0.9em;
  text-align: center;
  color: #757373;
}

.explain-stress {
  font-weight: bold;
}

.result-title {
  font-style: oblique;
  font-size: 1.2em;
}


.result-card {
  position: relative;
  margin-top: 1.5%;
  padding-top: 2%;
  padding-bottom: 2%;
  width: 100%;
  background-color: #FFF;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
  box-shadow: 0 1px 3px rgb(51, 133, 255);
}

.answer-item {
  padding-left: 1em;
  text-align: left;
  text-indent: 2em;
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
  font-size: 0.8em;
  text-align: center;
  color: #737373;
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

#knowledge-graph .result-card {
  padding: 1% !important;
}

@media screen and (min-width: 1120px) {
  .logo-results-main {
    margin: 20px auto 20px;
    width: 10%;
    height: 5%;
  }
  .result-search-bar {
    margin: auto;
    width: 50%;
  }
  .answer-result {
    margin-top: 6%;
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }
  .result-item {
    margin-top: 2%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .logo-results-main {
    margin: 20px auto 20px;
    width: 10%;
    height: 5%;
  }
  .result-search-bar {
    margin: auto;
    width: 50%;
  }
  .answer-result {
    margin-top: 15%;
    margin-right: auto;
    margin-left: auto;
    width: 80%;
  }
  .result-item {
    margin-top: 3%;
  }
}

@media screen and (max-width: 770px) {
  .logo-results-main {
    margin: 20px auto 20px;
    width: 40%;
    height: 5%;
  }
  .result-search-bar {
    margin: auto;
    width: 95%;
  }
  .answer-result {
    margin-top: 20%;
    margin-right: auto;
    margin-left: auto;
    width: 95%;
  }
  .result-item {
    margin-top: 4%;
  }
}
</style>



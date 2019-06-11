<template>
  <div>
    <!-- logo -->
    <div class="logo-results-main">
      <router-link to="/index">
        <img
          alt="logo"
          class="logo-img"
          src="/static/imgs/logo/answer-logo.png"
        >
      </router-link>
    </div>

    <!-- search bar -->
    <div class="result-search-bar">
      <search-bar
        @searchBarTextChangeListener="searchBarTextChange"
        @searchBarBtnClickListener="searchBarBtnClick"
      />
    </div>

    <!-- answer result -->
    <div
      v-if="answerResult != null && answerResult != ''"
      class="answer-result"
    >
      <div
        v-for="word in answerResult.words"
        :key="word.id"
        class="explain-text"
      >
        <template v-if="word.polysemantNamedEntities.length > 0">
          <span class="explain-stress">{{ word.name }}</span>
          至少含有
          <span class="explain-stress">
            {{ word.polysemantNamedEntities.length }}
          </span>
          种歧义理解, Answer 会根据问题自动识别
        </template>
      </div>

      <!-- short answer -->
      <div
        v-for="shortAnswerPolysemant in
          answerResult.shortAnswer.polysemantSituationVOs"
        :key="shortAnswerPolysemant.id"
        class="result-item"
      >
        <div>
          <span class="result-title">
            {{ answerResult.question }}
          </span>
        </div>
        <div class="result-card">
          <div
            v-for="(queryResult, index) in shortAnswerPolysemant.queryResults"
            :key="queryResult.id"
            class="answer-item"
          >
            <span
              v-for="answer in queryResult.answers"
              :key="answer.id"
              class="short-answer-text"
            >
              <template v-if="queryResult.answers.length > 0 && answer != null">
                {{ answer.content + " " }}
              </template>
            </span>
            <result-tag
              v-if="queryResult.answers.length > 0"
              class="short-answer-tag"
              :param1="shortAnswerPolysemant
                .predicateDisambiguationStatements[index].subject.name"
              :param2="shortAnswerPolysemant
                .predicateDisambiguationStatements[index]
                .predicate.disambiguationName"
            />
          </div>
        </div>
        <div
          v-for="activePolysemantNamedEntitie in
            shortAnswerPolysemant.activePolysemantNamedEntities"
          :key="activePolysemantNamedEntitie == null ?
            null: activePolysemantNamedEntitie.id"
          class="result-card-explain"
        >
          <template v-if="activePolysemantNamedEntitie != null">
            如果
            <span class="explain-stress">
              {{ activePolysemantNamedEntitie.entityName }}
            </span>
            指的是
            <span class="explain-stress">
              {{ activePolysemantNamedEntitie.polysemantExplain }}
            </span>
          </template>
        </div>
      </div>

      <!-- knowledge graph -->
      <div class="result-item">
        <div
          v-if="answerResult != null && answerResult.knowledgeGraphVOs != null"
          id="knowledge-graph"
        >
          <div>
            <div>
              <span class="result-title">
                逻辑图谱
              </span>
            </div>
          </div>
          <div class="result-card">
            <div>
              <knowledge-graph
                ref="knowledgeGraph"
                :knowledge-graph-vos="answerResult.knowledgeGraphVOs"
                :width="knowledgeGraphWidth"
                :height="knowledgeGraphHeight"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- ner answer -->
      <div class="result-item">
        <div
          v-if="answerResult != null && answerResult.words != null"
          class="ner-result"
        >
          <div>
            <span class="result-title">
              命名实体识别
            </span>
          </div>
          <div class="result-card">
            <div class="ner-result-table">
              <entity-table :table-data="answerResult.words" />
              <answer-btn
                class="new-answer-btn"
                @answerBtnClickListener="toggleRightWindow"
              />
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
            <page-result-item />
          </div>
        </div>
      </div>

      <!-- right window - knowledge net -->
      <div>
        <right-window
          ref="rightWindow"
          :words="answerResult.words"
        />
      </div>
    </div>
  </div>
</template>

<script scoped>
import {Message} from 'element-ui';
import {mapState, mapMutations, mapActions} from 'vuex';
import searchBar from '@/components/common/searchBar/SearchBar';
import resultTag from '@/components/common/tag/resultTag';
import knowledgeGraph from '@/components/graph/KnowledgeGraph';
import entityTable from '@/components/common/table/EntityTable';
import answerBtn from '@/components/common/button/AnswerBtn';
import pageResultItem from '@/components/result/PageResultItem';
import rightWindow from '@/components/rightWindow/RightWindow';

export default {
  components: {
    'search-bar': searchBar,
    'result-tag': resultTag,
    'knowledge-graph': knowledgeGraph,
    'entity-table': entityTable,
    'answer-btn': answerBtn,
    'page-result-item': pageResultItem,
    'right-window': rightWindow,
  },
  data() {
    return {
      searchBarTextValue: '',
      count: 1,
      knowledgeGraphWidth: '725',
      knowledgeGraphHeight: '448',
    };
  },
  computed: {
    ...mapState(['searchQuery', 'platform', 'answerResult']),
  },
  mounted() {
    if (this.searchQuery != null && this.searchQuery != '') {
      this.startAnswer(this.successHandler, this.errorHandler);
    }
    /* 移动端 */
    if (this.platform == 0) {
      this.knowledgeGraphWidth = '351';
      this.knowledgeGraphHeight = '540';
    }
  },
  methods: {
    ...mapActions(['searchAnswer']),
    ...mapMutations(['setSearchQuery']),
    searchBarTextChange: function(searchBarTextValue) {
      this.searchBarTextValue = searchBarTextValue;
      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: searchBarTextValue,
      });
    },
    searchBarBtnClick: function() {
      this.startAnswer(this.successHandler, this.errorHandler);
    },
    startAnswer: function(successHandler, errorHandler) {
      if (this.searchQuery == '') {
        new Message({
          showClose: true,
          message: '请输入搜索请求',
          duration: 2000,
          type: 'warning',
        });
        return;
      }
      this.searchAnswer().then(this.successHandler, this.errorHandler);
    },
    successHandler: function(answerResult) {
      console.log('返回成功');
    },
    errorHandler: function(error) {
      console.log('error: ', error);
    },
    toggleRightWindow: function() {
      this.$refs.rightWindow.toggle('right');
    },
  },
};
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
  padding: 0.8%;
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



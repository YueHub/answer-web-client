import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  // 平台, 
  platform: 1, // 0 - 移动端， 1 - PC 端
  searchQuery: '',
  cloudWords: ['美人鱼的导演是谁?', '火影忍者的作者是谁?', '周星驰出演过哪些电影?', '周星驰什么时候出生的?', '星爷的电影?',
    '周杰伦和昆凌?', '美人鱼导演的出生日期?', '北京大学?', '习近平的出生日期?', '周杰伦是哪里的人?', '死神的作者是谁?'
  ], // TagCloudWords 
  answerResult: null  // 搜索返回的结果
}

const mutations = {
  // 设置客户端平台类型
  setPlatform: function (state, payload) {
    state.platform = payload.platform
  },
  // 设置用户搜索字符串
  setSearchQuery: function (state, payload) {
    state.searchQuery = payload.searchQuery
  },
  // 更新搜索结果
  updateAnswerResult: function (state, answerResult) {
    state.answerResult = answerResult
  }
}

const actions = {
  // 搜索
  searchAnswer: function ({state, commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/answer?q=' + state.searchQuery)
        .then(function (response) {
          let answerResult = response.data
          commit('updateAnswerResult', answerResult)
          resolve(answerResult)
        })
        .catch(function (error) {
          reject(error)
        });
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

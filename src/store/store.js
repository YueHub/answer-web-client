import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  searchQuery: '',
  cloudWords: ['美人鱼的导演是谁?', '火影忍者的作者是谁?', '周星驰出演过哪些电影?', '周星驰什么时候出生的?', '星爷的电影?',
    '周杰伦和昆凌?', '美人鱼导演的出生日期?', '北京大学?', '习近平的出生日期?', '周杰伦是哪里的人?', '死神的作者是谁?'],  // TagCloudWords 
}

const mutations = {
  // 设置用户搜索字符串
  setSearchQuery: function (state, payload) {
    state.searchQuery = payload.searchQuery
  }
}

export default new Vuex.Store({
  state, mutations
})
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import store from '@/store/store.js'
export default {
  store,
  name: 'app',
  mounted() {
    this.$nextTick(() => {
      var is_mobi = navigator.userAgent.toLowerCase()
        .match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) != null
      if (is_mobi && window.location.search.indexOf("mv=fp") < 0) { // 移动端
        this.setPlatform({
          type: 'setPlatform',
          platform: 0
        })
      } else {  // PC 端
        this.setPlatform({
          type: 'setPlatform',
          platform: 1
        })
      }
    })
    console.log("Welcome! Developer!")
    console.log("Are you OK ?")
    console.log("I'm fine, thanks!")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

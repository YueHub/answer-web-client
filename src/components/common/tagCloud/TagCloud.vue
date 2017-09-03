<template>
  <!-- 云图 -->
  <div class="div-cloud">
    <canvas id="cloud" width="738px" height="350px">
      <ul>
        <li :key="cloudWord.id" v-for="cloudWord in cloudWords">
          <a href="javascript: void(0)" @click="tagCloudJump(cloudWord)"> {{ cloudWord }}</a>
        </li>
      </ul>
    </canvas>
  </div>
</template>

<script scoped>
import * as DrawTagCloud from './tagcanvas.min.js'

import { mapMutations } from 'vuex'

export default {
  props: ['cloudWords'],
  mounted() {
    this.$nextTick(() => {
      DrawTagCloud.drawTagCloud()
      window.onload = function() {
        try {
          window.TagCanvas.Start('cloud', null, {
            textFont: 'Verdana, Geneva, sans-serif',
            textColour: '#494949',
            textHeight: 18,
            wheelZoom: true
          })
        } catch (e) {
          document.getElementsByClassName('div-cloud').style.display = 'none'
        }
      }
    })
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'setSearchQuery'
    }),

    tagCloudJump: function(cloudWord) {
      this.$router.push({ name: 'Result' })
      
      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: cloudWord
      })
    }
  }

}
</script>

<style scoped>
#cloud {
  width: 100%;
  height: 100%;
}

#cloud li {
  border: red;
}

@media screen and (min-width: 1120px) {
  .div-cloud {
    max-width: 50%;
    margin: 3% auto;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .div-cloud {
    max-width: 70%;
    margin: 3% auto;
  }
}

@media screen and (max-width:770px) {
  .div-cloud {
    max-width: 90%;
    margin: 5% auto;
  }
}
</style>


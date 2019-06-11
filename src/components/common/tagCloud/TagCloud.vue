<template>
  <!-- 云图 -->
  <div class="div-cloud">
    <canvas id="cloud" :width="width" :height="height">
      <ul>
        <li v-for="cloudWord in cloudWords" :key="cloudWord.id">
          <a href="javascript: void(0)" @click="tagCloudJump(cloudWord)">
            {{ cloudWord }}
          </a>
        </li>
      </ul>
    </canvas>
  </div>
</template>

<script scoped>
import * as DrawTagCloud from '../../thirdparty/tag-cloud/tagcanvas.min';

import {mapMutations} from 'vuex';

export default {
  props: {
    cloudWords: {
      type: Array,
      default: function() {
        return [];
      },
    },
    width: {
      type: String,
      default: function() {
        return '';
      },
    },
    height: {
      type: String,
      default: function() {
        return '';
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      DrawTagCloud.drawTagCloud();
      window.onload = function() {
        try {
          new window.TagCanvas.Start('cloud', null, {
            textFont: 'Verdana, Geneva, sans-serif',
            textColour: '#494949',
            textHeight: 18,
            wheelZoom: true,
          });
        } catch (e) {
          document.getElementsByClassName('div-cloud').style.display = 'none';
        }
      };
    });
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'setSearchQuery',
    }),

    tagCloudJump: function(cloudWord) {
      this.$router.push({name: 'Result'});

      this.setSearchQuery({
        type: 'setSearchQuery',
        searchQuery: cloudWord,
      });
    },
  },
};
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
    margin: 3% auto;
    max-width: 50%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .div-cloud {
    margin: 3% auto;
    max-width: 70%;
  }
}

@media screen and (max-width:770px) {
  .div-cloud {
    margin: 5% auto;
    max-width: 90%;
  }
}
</style>


<template>
  <mu-popup popupClass="popup-right" position="right" :open="rightPopup" @close="close('right')" :overlay="false">
    <div class="left-window-contain">
      <div class="knowledge-infos">
        <div v-for="word in words" :key="word.id" v-if="word.polysemantNamedEntities.length != 0">
          <div v-for="polysemantNamedEntity in word.polysemantNamedEntities" :key="polysemantNamedEntity.id">
            
            <div class="knowledge-info-title">
              <span>Answer知识网络</span>
            </div>
            <!-- right window close btn -->
            <img src="/static/imgs/close.png" class="close-btn" @click="close('right')" />

            <!-- 实体名称 -->
            <div class="info-item-title">
              <svg class="icon yellow-square" aria-hidden="true">
                <use xlink:href="#icon-square"></use>
              </svg>
              <span class="entity-text">
                {{ polysemantNamedEntity.entityName }}
              </span>
              <!-- 所属类 -->
              <span class='belong-text'>属于</span>
              <span class='entity-category-text'>
                {{ polysemantNamedEntity.ontClass }}
              </span>
            </div>

            <div class="info-divider"></div>

            <!-- 实体图片 -->
            <div class="entity-img">
              <!-- <img src="answer_image/<s:property value='#polysemantNamedEntity.ontClass'/>/<s:property value='#polysemantNamedEntity.picSrc'/>" style=''></img> -->
              <img src="/static/imgs/1465139022110978.jpg"></img>
            </div>

            <div class="entity-intro">
              <!-- 描述 -->
              <p class="entity-intro-text">
                {{ polysemantNamedEntity.lemmaSummary }}
              </p>
            </div>

            <div class="entity-object">
              <svg class="icon yellow-thumb" aria-hidden="true">
                <use xlink:href="#icon-thumb"></use>
              </svg>
              <!-- 相关对象 -->
              <span class="object-text">相关对象</span><br/>
              <!-- <s:iterator value='#polysemantNamedEntity.objectProperties' id='objectProperty'> -->
              <!-- <s:if test="#objectProperty.value != null"> -->
              <div class="object-border object-contain" v-for="objectProperty in polysemantNamedEntity.objectProperties" :key="objectProperty.id" v-if="objectProperty != null">
                <!-- <a class='mylk' target="_blank" style='font-family:"楷体";font-weight:bold;' href='${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value=' #objectProperty.value '/>'> -->

                <a class='object-link' target="_blank" href='#'>
                  <!-- <s:property value='#objectProperty.value' /> -->
                  {{ objectProperty }}
                </a>
              </div>
            </div>

            <!-- 主要数据属性 -->
            <div class="entity-property">
              <svg class="icon yellow-thumb" aria-hidden="true">
                <use xlink:href="#icon-thumb"></use>
              </svg>
              <span class="main-property-text">主要属性</span><br/>
              <!-- <s:iterator value='#polysemantNamedEntity.dataProperties' id='dataProperty'> -->
              <!-- <s:if test="#dataProperty.value != null"> -->
              <div class="property-border" v-for="(dataProperty, key) in polysemantNamedEntity.dataProperties" :key="dataProperty.id" v-if="dataProperty != null">
                <span class="property-text">
                  {{ key }}
                </span>
              </div>
            </div>
            <br/><br/>
            <div class="entity-polysemant">
              <svg class="icon yellow-thumb" aria-hidden="true">
                <use xlink:href="#icon-thumb"></use>
              </svg>
              <!-- 歧义理解 -->
              <span class="entity-polysemant-text">歧义理解</span><br/>
              <!-- <s:iterator value='#session.answerResultVO.words' id='word'> -->
              <!-- <s:if test='#word.name == #polysemantNamedEntity.entityName'> -->
              <center>
                <span style='font-family:"SimHei";color:yellow;'>
                  {{ polysemantNamedEntity.entityName }}
                </span>
                <span style='font-family:"SimHei";'>
                  至少含有
                  <span style='font-family:"SimHei";color:yellow;'>
                    <!-- <s:property value='#word.polysemantNamedEntities.size' /> -->
                    {{ word.polysemantNamedEntities.length }}
                  </span>
                  种歧义理解
                </span>
              </center>
              <div style='margin-left:20px;' v-for="polysemantNamedEntity in word.polysemantNamedEntities" :key="polysemantNamedEntity.id">
                <svg class="icon yellow-thumb" aria-hidden="true" style='color:#ffd800;font-size:12px;margin-left:-2%;'>
                  <use xlink:href="#icon-circle"></use>
                </svg>
                <span style='font-size:10px;color:rgba(255, 255, 255, 0.65);'>
                  {{ polysemantNamedEntity.polysemantExplain }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </mu-popup>
</template>


<script scoped>
export default {
  props: ['words'],
  data() {
    return {
      rightPopup: false
    }
  },
  methods: {
    open(position) {
      this[position + 'Popup'] = true
    },
    close(position) {
      this[position + 'Popup'] = false
    },
    toggle(position) {
      this[position + 'Popup'] = !this[position + 'Popup']
    }
  },
  watch: {
    topPopup(val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style>
.popup-right {
  display: flex;
  width: 25%;
  height: 100%;
  max-width: 25%;
  align-items: center;
}

.left-window-contain {
  background: rgba(0, 0, 0, 0.72);
  width: 100%;
  height: 100%;
}


.knowledge-infos {
  width: 98%;
  height: 100%;
  overflow-y: auto;
  padding: 1em;
}

.knowledge-info-title span {
  margin-top: -20px;
  font-size: 1.2em;
  font-style: oblique;
}

.info-item-title {
  margin-top: 2%;
}

.entity-text {
  margin-left: 4%;
}

.close-btn {
  display: block;
  position: absolute;
  top: 5px;
  right: 15px;
  width: 2em;
  height: 2em;
  cursor: pointer;
  transition: 0.3s ease;
}

.yellow-square {
  font-size: 1.8em;
  color: #ffd800;
}

.entity-text {
  font-family: "楷体";
  font-size: 1.6em;
  font-weight: bold;
}

.belong-text {
  font-family: "SimHei";
  font-size: 1.1em;
}

.entity-category-text {
  margin-left: 2%;
  border-bottom: 2px solid #ffd800;
  font-family: "SimHei";
  font-size: 1.3em;
  color: yellow !important;
}

.info-divider {
  width: 100%;
  height: 2px;
  margin-top: 0px;
  overflow: hidden;
  background: #ffd800;
}

.entity-img {
  text-align: center;
  margin-top: 2%;
}

.entity-img img {
  width: 100px;
  height: 100px;
}

.entity-intro {
  margin-top: 2%;
  width: 100%;
  height: auto;
}

.entity-intro-text {
  text-align: left;
  text-indent: 2em;
  font-family: "SimHei";
}

.yellow-thumb,
.entity-property,
.entity-polysemant {
  font-size: 18px;
  color: #ffd800;
}

.entity-object {
  width: 320px;
  height: auto;
  overflow: hidden;
}

.object-text {
  font-family: LiSu;
  font-size: 20px;
}

.object-border {
  border-color: #ffd800;
  border-width: 1px 1px 1px 1px;
  border-bottom: 0.5px solid #ffd800;
  border-style: solid;
}

.object-contain {
  float: left;
  width: 49px;
  height: 49px;
  margin-left: 14px;
  margin-right: 8px;
  margin-top: 10px;
  margin-bottom: 5px;
  text-align: center;
}

.object-link {
  border-bottom: 1px solid #0BDA41;
  font-family: "楷体";
  font-weight: bold;
  color: #FFFFFF;
}

.main-property-text {
  font-family: LiSu;
  font-size: 20px;
}

.property-border {
  font-size: 15px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: rgb(71, 71, 71);
  border-radius: 3px;
  border: 1px #3385FF solid;
  text-align: center;
  margin-top: 5px;
  margin-right: 11px;
  width: 80px;
  height: 20px;
  float: left;
}

.property-text {
  font-family: LiSu;
}

.entity-polysemant-text {
  font-family: LiSu;
  font-size: 20px;
}

.knowledge-infos span,
.knowledge-infos p {
  color: #FFF;
}





/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/

.knowledge-infos::-webkit-scrollbar {
  width: 4px;
  height: 16px;
  background-color: rgba(0, 0, 0, 0.4);
}





/*定义滚动条轨道 内阴影+圆角*/

.knowledge-infos::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.4);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}




/*定义滑块 内阴影+圆角*/

.knowledge-infos::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  -moz-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>



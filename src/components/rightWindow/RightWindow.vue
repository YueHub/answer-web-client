<template>
  <!-- 右侧知识网络 -->
  <mu-popup popupClass="popup-right" position="right" :open="rightPopup" @close="close('right')" :overlay="false">
    <div class="left-window-contain">
      <div class="knowledge-infos">
        <div>
          <!-- <s:iterator value='#session.polysemantNamedEntities' id='polysemantNamedEntity'> -->
          <span class="knowledge-info-title">Answer知识网络</span><br/><br/>
          <!-- 实体名称 -->
          <svg class="icon yellow-square" aria-hidden="true">
            <use xlink:href="#icon-square"></use>
          </svg>
          <span class="entity-text">
            <!-- <s:property value='#polysemantNamedEntity.entityName' /> -->
            美人鱼
          </span>
          <!-- 所属类 -->
          <span class='belong-text'>属于</span>
          <span class='lk entity-category'>
            <!-- <s:property value='#polysemantNamedEntity.ontClass' /> -->
            电影
          </span>

          <div class="info-divider"></div>

          <!-- 实体图片 -->
          <div style='text-align:center;margin-top:5px;'>
            <!-- <img src="answer_image/<s:property value='#polysemantNamedEntity.ontClass'/>/<s:property value='#polysemantNamedEntity.picSrc'/>" style=''></img> -->
            <img class="entity-img" src="/static/imgs/logo/answer-logo.png"></img>
          </div>

          <div class="entity-intro">
            <!-- 描述 -->
            <span class="entity-intro-text">
              <!-- <s:property value='#polysemantNamedEntity.lemmaSummary' /> -->
              《美人鱼》是由周星驰执导，由江玉仪监制的喜剧爱情片，邓超、罗志祥、张雨绮、林允等领衔出演[1] 。 该片讲述了富豪刘轩和为了拯救同族前往刺杀他的美人鱼珊珊坠入爱河，谱写了一段人鱼爱情童话的故事。该片于2016年2月8日在中国上映[2-3] 。
            </span>
          </div>

          <div class="entity-object">

            <svg class="icon yellow-thumb" aria-hidden="true">
              <use xlink:href="#icon-thumb"></use>
            </svg>
            <!-- 相关对象 -->
            <span class="object-text">相关对象</span><br/>
            <!-- <s:iterator value='#polysemantNamedEntity.objectProperties' id='objectProperty'> -->
            <!-- <s:if test="#objectProperty.value != null"> -->
            <div class="object-border object-contain">
              <!-- <a class='mylk' target="_blank" style='font-family:"楷体";font-weight:bold;' href='${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value=' #objectProperty.value '/>'> -->
              <a class='object-link' target="_blank" href='#'>
                <!-- <s:property value='#objectProperty.value' /> -->
                美人鱼
              </a>
            </div>
            <!-- </s:if> -->
            <!-- </s:iterator> -->
          </div>

          <!-- 主要数据属性 -->
          <div class="entity-property">
            <svg class="icon yellow-thumb" aria-hidden="true">
              <use xlink:href="#icon-thumb"></use>
            </svg>
            <span class="main-property-text">主要属性</span><br/>
            <!-- <s:iterator value='#polysemantNamedEntity.dataProperties' id='dataProperty'> -->
            <!-- <s:if test="#dataProperty.value != null"> -->
            <div class="property-border">
              <span class="property-text">
                <!-- <s:property value='#dataProperty.key' /> -->
                拍摄日期
              </span>
            </div>
            <!-- </s:if> -->
            <!-- </s:iterator> -->
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
                <!-- <s:property value='#polysemantNamedEntity.entityName' /> -->
                美人鱼
              </span>
              <span style='font-family:"SimHei";'>
                至少含有
                <span style='font-family:"SimHei";color:yellow;'>
                  <!-- <s:property value='#word.polysemantNamedEntities.size' /> -->
                  3
                </span>种歧义理解
              </span>
            </center>
            <!-- <s:iterator value='#word.polysemantNamedEntities' id='polysemantNamedEntity'> -->
            <div style='margin-left:20px;'>
              <svg class="icon yellow-thumb" aria-hidden="true" style='color:#ffd800;font-size:12px;margin-left:-2%;'>
                <use xlink:href="#icon-circle"></use>
              </svg>
              <span style='font-size:10px;color:rgba(255, 255, 255, 0.65);'>
                2016年周星驰执导3D喜剧电影
                <!-- <s:property value='#polysemantNamedEntity.polysemantExplain' /> -->
              </span>
            </div>
            <!-- </s:iterator> -->
            <!-- </s:if> -->
            <!-- </s:iterator> -->
          </div>

          <!-- </s:iterator>   -->
        </div>
        <div>
          <!-- <s:iterator value='#session.polysemantNamedEntities' id='polysemantNamedEntity'> -->
          <span class="knowledge-info-title">Answer知识网络</span><br/><br/>
          <!-- 实体名称 -->
          <svg class="icon yellow-square" aria-hidden="true">
            <use xlink:href="#icon-square"></use>
          </svg>
          <span class="entity-text">
            <!-- <s:property value='#polysemantNamedEntity.entityName' /> -->
            美人鱼
          </span>
          <!-- 所属类 -->
          <span class='belong-text'>属于</span>
          <span class='lk entity-category'>
            <!-- <s:property value='#polysemantNamedEntity.ontClass' /> -->
            电影
          </span>

          <div class="info-divider"></div>

          <!-- 实体图片 -->
          <div style='text-align:center;margin-top:5px;'>
            <!-- <img src="answer_image/<s:property value='#polysemantNamedEntity.ontClass'/>/<s:property value='#polysemantNamedEntity.picSrc'/>" style=''></img> -->
            <img class="entity-img" src="/static/imgs/logo/answer-logo.png"></img>
          </div>

          <div class="entity-intro">
            <!-- 描述 -->
            <span class="entity-intro-text">
              <!-- <s:property value='#polysemantNamedEntity.lemmaSummary' /> -->
              《美人鱼》是由周星驰执导，由江玉仪监制的喜剧爱情片，邓超、罗志祥、张雨绮、林允等领衔出演[1] 。 该片讲述了富豪刘轩和为了拯救同族前往刺杀他的美人鱼珊珊坠入爱河，谱写了一段人鱼爱情童话的故事。该片于2016年2月8日在中国上映[2-3] 。
            </span>
          </div>

          <div class="entity-object">

            <svg class="icon yellow-thumb" aria-hidden="true">
              <use xlink:href="#icon-thumb"></use>
            </svg>
            <!-- 相关对象 -->
            <span class="object-text">相关对象</span><br/>
            <!-- <s:iterator value='#polysemantNamedEntity.objectProperties' id='objectProperty'> -->
            <!-- <s:if test="#objectProperty.value != null"> -->
            <div class="object-border object-contain">
              <!-- <a class='mylk' target="_blank" style='font-family:"楷体";font-weight:bold;' href='${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value=' #objectProperty.value '/>'> -->
              <a class='object-link' target="_blank" href='#'>
                <!-- <s:property value='#objectProperty.value' /> -->
                美人鱼
              </a>
            </div>
            <!-- </s:if> -->
            <!-- </s:iterator> -->
          </div>

          <!-- 主要数据属性 -->
          <div class="entity-property">
            <svg class="icon yellow-thumb" aria-hidden="true">
              <use xlink:href="#icon-thumb"></use>
            </svg>
            <span class="main-property-text">主要属性</span><br/>
            <!-- <s:iterator value='#polysemantNamedEntity.dataProperties' id='dataProperty'> -->
            <!-- <s:if test="#dataProperty.value != null"> -->
            <div class="property-border">
              <span class="property-text">
                <!-- <s:property value='#dataProperty.key' /> -->
                拍摄日期
              </span>
            </div>
            <!-- </s:if> -->
            <!-- </s:iterator> -->
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
                <!-- <s:property value='#polysemantNamedEntity.entityName' /> -->
                美人鱼
              </span>
              <span style='font-family:"SimHei";'>
                至少含有
                <span style='font-family:"SimHei";color:yellow;'>
                  <!-- <s:property value='#word.polysemantNamedEntities.size' /> -->
                  3
                </span>种歧义理解
              </span>
            </center>
            <!-- <s:iterator value='#word.polysemantNamedEntities' id='polysemantNamedEntity'> -->
            <div style='margin-left:20px;'>
              <svg class="icon yellow-thumb" aria-hidden="true" style='color:#ffd800;font-size:12px;margin-left:-2%;'>
                <use xlink:href="#icon-circle"></use>
              </svg>
              <span style='font-size:10px;color:rgba(255, 255, 255, 0.65);'>
                2016年周星驰执导3D喜剧电影
                <!-- <s:property value='#polysemantNamedEntity.polysemantExplain' /> -->
              </span>
            </div>
            <!-- </s:iterator> -->
            <!-- </s:if> -->
            <!-- </s:iterator> -->
          </div>

          <!-- </s:iterator>   -->
        </div>
      </div>
    </div>
  </mu-popup>
  <!-- 右侧知识网络 -->
</template>


<script>


export default {
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

.knowledge-info-title {
  margin-top: -20px;
  font-style: oblique;
}

.yellow-square {
  font-size: 27px;
  color: #ffd800;
}

.entity-text {
  font-family: "楷体";
  font-size: 22px;
  font-weight: bold;
}

.belong-text {
  font-family: "SimHei";
}

.entity-category {
  font-family: "SimHei";
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
  width: 100px;
  height: 100px;
}

.entity-intro {
  margin-top: 5px;
  width: 330px;
  height: auto;
}

.entity-intro-text {
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




.knowledge-infos span {
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



<template>
  <mu-popup
    popupClass="popup-right"
    position="right"
    :open="rightPopup"
    :overlay="false"
    @close="close('right')"
  >
    <div class="left-window-contain">
      <div class="knowledge-infos scroll-bar-1">
        <div class="knowledge-info-title">
          <span>Answer知识网络</span>
        </div>
        <!-- right window close btn -->
        <img
          src="/static/imgs/close.png"
          class="close-btn"
          @click="close('right')"
        >

        <div
          v-for="word in words" :key="word.id"
        >
          <template v-if="word.polysemantNamedEntities.length != 0">
            <div class="entity-polysemant">
              <svg class="icon yellow-thumb" aria-hidden="true">
                <use xlink:href="#icon-thumb" />
              </svg>
              <!-- 歧义理解 -->
              <span class="content-title-text">歧义理解</span>
              <div class="ambiguous-understanding-title">
                <span class="yellow-text">
                  {{ word.name }}
                </span>
                <span>
                  至少含有
                  <span class="yellow-text">
                    {{ word.polysemantNamedEntities.length }}
                  </span>
                  种歧义理解
                </span>
              </div>
              <div
                v-for="(polysemantNamedEntity, index) in
                  word.polysemantNamedEntities"
                :key="polysemantNamedEntity.id"
                class="ambiguous-understanding-content"
              >
                <svg class="icon icon-circle" aria-hidden="true">
                  <use xlink:href="#icon-circle" />
                </svg>
                <span>
                  <a :href="'#anchor-' + index">
                    {{ polysemantNamedEntity.polysemantExplain }}
                  </a>
                </span>
              </div>
            </div>

            <div
              v-for="(polysemantNamedEntity, index) in
                word.polysemantNamedEntities"
              :id="'anchor-' + index"
              :key="polysemantNamedEntity.id"
            >
              <!-- 实体名称 -->
              <div class="info-item-title">
                <svg class="icon yellow-square" aria-hidden="true">
                  <use xlink:href="#icon-square" />
                </svg>
                <span class="entity-text">
                  {{ polysemantNamedEntity.polysemantExplain }}
                </span>
                <!-- 所属类 -->
                <div class="entity-class">
                  <span class="belong-text">属于</span>
                  <span class="entity-category-text">
                    {{ polysemantNamedEntity.ontClass }}
                  </span>
                </div>
              </div>

              <div class="info-divider" />

              <!-- 实体图片 -->
              <div class="entity-img">
                <!-- <img
                  src="answer_image/<s:property
                  value='#polysemantNamedEntity.ontClass'/>/
                  <s:property value='#polysemantNamedEntity.picSrc'/>"
                > -->
                <img src="/static/imgs/1465139022110978.jpg">
              </div>

              <div class="entity-intro">
                <!-- 描述 -->
                <p class="entity-intro-text">
                  {{ polysemantNamedEntity.lemmaSummary }}
                </p>
              </div>

              <div class="entity-object">
                <svg class="icon yellow-thumb" aria-hidden="true">
                  <use xlink:href="#icon-thumb" />
                </svg>
                <!-- 相关对象 -->
                <span class="content-title-text">相关对象</span><br>
                <!-- <s:iterator
                  id="objectProperty"
                  value="#polysemantNamedEntity.objectProperties"
                /> -->
                <!-- <s:if test="#objectProperty.value != null"> -->
                <div
                  v-for="objectProperty in
                    polysemantNamedEntity.objectProperties"
                  :key="objectProperty.id"
                  class="object-border object-contain"
                >
                  <template v-if="objectProperty != null">
                    <a
                      class="mylk"
                      target="_blank" style="font-family:'楷体';font-weight:bold;"
                      href="${pageContext.request.contextPath}/front/
                      developerAction!answer.action?
                      question=<s:property value=' #objectProperty.value '/>"
                    />
                    <a class="object-link" target="_blank" href="#">
                      <!-- <s:property value='#objectProperty.value' /> -->
                      {{ objectProperty }}
                    </a>
                  </template>
                </div>
              </div>

              <!-- 主要数据属性 -->
              <div class="entity-property clearfix">
                <svg class="icon yellow-thumb" aria-hidden="true">
                  <use xlink:href="#icon-thumb" />
                </svg>
                <span class="content-title-text">主要属性</span><br>
                <!-- <s:iterator
                  id="dataProperty"
                  value="#polysemantNamedEntity.dataProperties"
                /> -->
                <!-- <s:if test="#dataProperty.value != null"> -->
                <div
                  v-for="(dataProperty, key) in
                    polysemantNamedEntity.dataProperties"
                  :key="dataProperty.id"
                  class="property-border"
                >
                  <span v-if="dataProperty != null" class="property-text">
                    {{ key }}
                  </span>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </mu-popup>
</template>


<script scoped>
export default {
  props: {
    words: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      rightPopup: false,
    };
  },
  watch: {
    topPopup(val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false;
        }, 2000);
      }
    },
  },
  methods: {
    open(position) {
      this[position + 'Popup'] = true;
    },
    close(position) {
      this[position + 'Popup'] = false;
    },
    toggle(position) {
      this[position + 'Popup'] = !this[position + 'Popup'];
    },
  },
};
</script>

<style>
.popup-right {
  display: flex;
  height: 100%;
  align-items: center;
}

.left-window-contain {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.72);
}

.knowledge-infos {
  padding: 1em;
  width: 98%;
  height: 100%;
  overflow-y: auto;
}

.knowledge-infos span,
.knowledge-infos p {
  color: #FFF;
}

.knowledge-info-title span {
  margin-top: -20px;
  font-style: oblique;
  font-size: 1.2em;
}

.close-btn {
  position: absolute;
  top: 5px;
  right: 15px;
  display: block;
  width: 2em;
  height: 2em;
  transition: 0.3s ease;
  cursor: pointer;
}

.info-item-title {
  margin-top: 2%;
}

.yellow-square {
  font-size: 1.2em;
  color: #ffd800;
}

.ambiguous-understanding-title {
  text-align: center;
}

.ambiguous-understanding-title span {
  font-size: 1em;
}

.yellow-text {
  color: yellow !important;
}

.ambiguous-understanding-content {
  margin-left: 1em;
}

.ambiguous-understanding-content span a {
  margin-left: 0.5em;
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.65);
}

.ambiguous-understanding-content span a:hover {
  color: #FFF;
}

.icon-circle {
  font-size: 1em;
  color: #ffd800;
}

.content-title-text {
  font-family: LiSu;
  font-size: 1.2em;
}

.entity-text {
  margin-left: 2%;
  font-family: "楷体";
  font-size: 1.1em;
  font-weight: bold;
}

.belong-text {
  font-family: "SimHei";
  font-size: 1em;
}

.entity-class {
  float: right;
}

.entity-category-text {
  border-bottom: 2px solid #ffd800;
  font-family: "SimHei";
  font-size: 1.1em;
  color: yellow !important;
}

.info-divider {
  overflow: hidden;
  margin-top: 0px;
  width: 100%;
  height: 2px;
  background: #ffd800;
}

.entity-img {
  margin-top: 2%;
  text-align: center;
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
  font-family: "SimHei";
  text-align: left;
  text-indent: 2em;
}

.yellow-thumb {
  font-size: 1.2em;
  color: #ffd800;
}

.entity-object {
  overflow: hidden;
  width: 100%;
  height: auto;
}

.object-border {
  border-bottom: 0.5px solid #ffd800;
  border-width: 1px 1px 1px 1px;
  border-style: solid;
  border-color: #ffd800;
}

.object-contain {
  float: left;
  margin: 14px 10px 8px 5px;
  width: 49px;
  height: 49px;
  text-align: center;
}

.object-link {
  border-bottom: 1px solid #0BDA41;
  font-family: "楷体";
  font-weight: bold;
  color: #FFFFFF;
}

.property-border {
  float: left;
  border: 1px #3385FF solid;
  border-radius: 3px;
  margin-top: 5px;
  margin-right: 11px;
  padding: 1px;
  padding-left: 5px;
  padding-right: 5px;
  height: 20px;
  font-size: 15px;
  text-align: center;
  background-color: rgb(71, 71, 71);
}

.clearfix:after {
  overflow: hidden;
  clear: both;
  content: ".";
  display: block;
  margin: 0;
  padding: 0;
  height: 0px;
  font-size: 0;
  line-height: 0;
  background: #000;
}

.property-text {
  font-family: LiSu;
}

@media screen and (min-width: 1120px) {
  .popup-right {
    width: 24%;
  }
}

@media screen and (min-width:770px) and (max-width:1120px) {
  .popup-right {
    width: 25%;
  }
}

@media screen and (max-width: 770px) {
  .popup-right {
    width: 100%;
  }
}
</style>



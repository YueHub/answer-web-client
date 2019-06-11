<template>
  <canvas id="knowledge_graph" :width="width" :height="height" />
</template>

<script scoped>
const knowledgeGraph = require('../thirdparty/graph/knowledge-graph');
export default {
  props: {
    'knowledgeGraphVos': {
      type: Array,
      default: function() {
        return [];
      },
    },
    'width': {
      type: String,
      default: function() {
        return '0';
      },
    },
    'height': {
      type: String,
      default: function() {
        return '0';
      },
    },
  },
  watch: {
    'knowledgeGraphVos': function() {
      this.draw();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.draw();
    });
  },
  methods: {
    draw: function() {
      if (this.knowledgeGraphVos == null ||
        this.knowledgeGraphVos == undefined) {
        return;
      }
      // 初始化
      /* eslint-disable-next-line new-cap */
      const sysKnowledgeGraph = new knowledgeGraph.getArbor().ParticleSystem();
      // 设置相关参数 stiffness:硬度 repulsion:排斥力 gravity:重力
      sysKnowledgeGraph.parameters(
          {stiffness: 900, repulsion: 2000, gravity: true, dt: 0.015});
      // 读取绘图区域
      sysKnowledgeGraph.renderer =
        new knowledgeGraph.Renderer('#knowledge_graph');

      /* 传入结点和连接 */
      /* 添加结点 */
      for (let i = 0; i < this.knowledgeGraphVos.length; i++) {
        const knowledgeGraphStatements =
          this.knowledgeGraphVos[i].knowledgeGraphStatements;
        for (let j = 0; j < knowledgeGraphStatements.length; j++) {
          /* 添加结点 */
          /* 先添加普通结点 避免实体颜色不能正常显示 */
          const objectName = knowledgeGraphStatements[j].object.name;
          let data = knowledgeGraphStatements[j].object;
          sysKnowledgeGraph.addNode(objectName, data);

          const subjectName = knowledgeGraphStatements[j].subject.name;
          data = knowledgeGraphStatements[j].subject;
          sysKnowledgeGraph.addNode(subjectName, data);
          /* 添加连线 */
          const sourceName = knowledgeGraphStatements[j].subject.name;
          const targetName = knowledgeGraphStatements[j].object.name;
          data = knowledgeGraphStatements[j].predicate;
          sysKnowledgeGraph.addEdge(sourceName, targetName, data);
        }
      }
      const nav = new knowledgeGraph.Nav('#nav');
      $(sysKnowledgeGraph.renderer).bind('navigate', nav.navigate);
      $(nav).bind('mode', sysKnowledgeGraph.renderer.switchMode);
      nav.init();
    },
  },
};
</script>

<style scoped>
#knowledge_graph {
  opacity: 1;
}
</style>

<template>
  <canvas id="knowledge_graph" :width="width" :height="height">
  </canvas>
</template>

<script scoped>
var knowledgeGraph = require('./knowledge-graph')
export default {
  props: ['knowledgeGraphVOs', 'width', 'height'],
  mounted() {
    this.$nextTick(() => {
      this.draw()
    })
  },
  watch: {
    knowledgeGraphVOs: function() {
      this.draw()
    }
  },
  methods: {
    draw: function() {
      if (this.knowledgeGraphVOs == null || this.knowledgeGraphVOs == undefined) {
        return
      }
      // 初始化
      var sys_knowledge_graph = knowledgeGraph.getArbor().ParticleSystem()
      // 设置相关参数	stiffness:硬度	repulsion:排斥力	gravity:重力
      sys_knowledge_graph.parameters({ stiffness: 900, repulsion: 2000, gravity: true, dt: 0.015 })
      // 读取绘图区域
      sys_knowledge_graph.renderer = knowledgeGraph.Renderer("#knowledge_graph")
      // 传入结点和连接
      // 添加结点

      for (var i = 0; i < this.knowledgeGraphVOs.length; i++) {
        var knowledgeGraphStatements = this.knowledgeGraphVOs[i].knowledgeGraphStatements;
        for (var j = 0; j < knowledgeGraphStatements.length; j++) {
          // 添加结点
          // 先添加普通结点 避免实体颜色不能正常显示
          var objectName = knowledgeGraphStatements[j].object.name
          var data = knowledgeGraphStatements[j].object
          sys_knowledge_graph.addNode(objectName, data)

          var subjectName = knowledgeGraphStatements[j].subject.name
          data = knowledgeGraphStatements[j].subject
          sys_knowledge_graph.addNode(subjectName, data)
          // 添加连线
          var sourceName = knowledgeGraphStatements[j].subject.name
          var targetName = knowledgeGraphStatements[j].object.name
          data = knowledgeGraphStatements[j].predicate
          sys_knowledge_graph.addEdge(sourceName, targetName, data)
        }
      }
      var nav = knowledgeGraph.Nav("#nav")
      $(sys_knowledge_graph.renderer).bind('navigate', nav.navigate)
      $(nav).bind('mode', sys_knowledge_graph.renderer.switchMode)
      nav.init()
    }
  }
}
</script>

<style scoped>
#knowledge_graph {
  opacity: 1;
}
</style>

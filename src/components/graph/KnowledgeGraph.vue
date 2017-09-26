<template>
  <canvas id="knowledge_graph" width="720" height="448" style="opacity: 1;">
  </canvas>
</template>

<script>
import * as knowledgeGraph from './knowledge-graph'

export default {
  mounted() {
    this.$nextTick(() => {
      var targetURL = "/Answer/front/developerAction!getKnowledgeGraph.action"
      $.ajax({
        url: targetURL,
        type: "POST",
        async: true,
        dataType: "json",
        timeout: 10000,
        success: function(returnVal) {
          console.log('这里这里', returnVal)
          // var CLR = {
          //   branch: "#b2b19d",
          //   code: "orange",
          //   doc: "#922E00",
          //   demo: "#a7af00"
          // }
          if (returnVal.length == 0) {
            $('#knowledge').css('display', 'none');
            return;
          }
          // 初始化
          var sys_knowledge_graph = knowledgeGraph.arbor.ParticleSystem()
          // 设置相关参数	stiffness:硬度	repulsion:排斥力	gravity:重力  
          sys_knowledge_graph.parameters({ stiffness: 900, repulsion: 2000, gravity: true, dt: 0.015 })
          // 读取绘图区域
          sys_knowledge_graph.renderer = knowledgeGraph.Renderer("#knowledge_graph")
          // 传入结点和连接
          // 添加结点

          for (var i = 0; i < returnVal.length; i++) {
            var knowledgeGraphStatements = returnVal[i].knowledgeGraphStatements;
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
        },
        error: function(errorInfo, errorType) {
          alert('知识图谱获取失败')
          console.log(errorInfo, errorType);
        }
      });
    })
  }
}
</script>



<style>

</style>

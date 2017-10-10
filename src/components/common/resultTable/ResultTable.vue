<template>
  <table class="bt" border="1" style='text-align:center;'>
    <tbody>
      <tr class="th">
        <th class="tn tny">实体</th>
        <th width='70%'>歧义理解</th>
        <th width='30%'>所属类</th>
      </tr>
      <template v-for="word in tableData">
        <tr class="trh" v-for="lineData in word.polysemantNamedEntities" :key="lineData.id">
          <td class="tn">
            <a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value='#word.name'/>" class="lk1" target="_blank">
              <span style='font-family:"SimHei";font-weight:bold;'>
                {{ lineData.entityName }}
              </span>
            </a>
          </td>
          <td>
            <span style='font-family:"SimHei";'>
              {{ lineData.polysemantExplain }}
            </span>
          </td>
          <td>
            <span style='font-family:"SimHei";'>
              {{ lineData.ontClass }}
            </span>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['tableData']
}
</script>

<style scoped>
.bt {
  overflow: hidden;
  display: block;
  width: 100%;
  table-layout: fixed;
  padding-top: 2px;
  padding-bottom: 2px;
  border-collapse: collapse;
  border-spacing: 5;
  border: 0;
  border-color: #c5c5c5
}

.th {
  background-color: #dadada
}

th {
  font-weight: 700
}

td,
th {
  display: table-cell;
  vertical-align: inherit;
  word-break: break-all;
  word-wrap: break-word
}

.tn {
  white-space: nowrap;
  padding: 8px;
  min-width: 110px
}

.tny {
  background-color: #ffea79
}

.trh {
  background-color: #eee
}

.lk1 {
  color: #000000;
  border-bottom: 2px solid #ffd800;
}
</style>


<template>
  <table class="entity-table" border="1">
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
              <span>
                {{ lineData.entityName }}
              </span>
            </a>
          </td>
          <td>
            <span>
              {{ lineData.polysemantExplain }}
            </span>
          </td>
          <td>
            <span>
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

td span {
  font-family: "SimHei";
}

.entity-table {
  display: block;
  overflow: hidden;
  table-layout: fixed;
  border-collapse: collapse;
  border-spacing: 5;
  border: 0;
  border-color: #c5c5c5;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  text-align:center;
}

.th {
  background-color: #dadada
}

.tn {
  white-space: nowrap;
  padding: 8px;
  min-width: 110px
}

.tn span {
  font-weight: bold;
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


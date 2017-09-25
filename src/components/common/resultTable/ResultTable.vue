<template>
  <table class="bt" border="1" style='text-align:center;'>
    <tbody>
      <tr class="th">
        <th class="tn tny">实体</th>
        <th width='70%'>歧义理解</th>
        <th width='30%'>所属类</th>
      </tr>

      <tr class="trh">
        <td class="tn">
          <a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value='#word.name'/>" class="lk" target="_blank">
            <span style='font-family:"SimHei";font-weight:bold;'>
              美人鱼
            </span>
          </a>
        </td>
        <td>
          <span style='font-family:"SimHei";'>
            2016年周星驰执导3D喜剧电影
          </span>
        </td>
        <td>
          <span style='font-family:"SimHei";'>
            电影
          </span>
        </td>
      </tr>

      <tr>
        <td class="tn">
          <a href="${pageContext.request.contextPath}/front/developerAction!answer.action?question=<s:property value='#word.name'/>" class="lk" target="_blank">
            <span style='font-family:"SimHei";font-weight:bold;'>
              美人鱼
            </span>
          </a>
        </td>
        <td>
          <span style='font-family:"SimHei";'>
            周杰伦创作歌曲
          </span>
        </td>
        <td>
          <span style='font-family:"SimHei";'>
            音乐
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {

}
</script>

<style>
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

.lk {
  color: #000000;
  border-bottom: 2px solid #ffd800;
}
</style>


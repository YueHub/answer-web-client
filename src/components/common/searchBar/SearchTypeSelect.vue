<template>
  <div class="search-type-select">
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '0',
        label: '知识搜索'
      }, {
        value: '1',
        label: '应用搜索',
        disabled: true
      }, {
        value: '1',
        label: '移动搜索',
        disabled: true
      }],
      value: '0'
    }
  }
}
</script>

<style>
/* 下拉列表项内容 */

.search-type-select .el-input__inner {
  width: 100px;
  height: 40px;
  background: #3385ff;
  color: white;
  padding-right: 0px;
}




/* 下拉箭头图标大小 */

.search-type-select .el-select .el-input .el-input__icon {
  font-size: 0.5px;
}


/* 下拉列表项背景和圆角 */

.el-select-dropdown {
  background: #3385ff;
  border-radius: 4px;
}


/* 下拉列表项文字颜色 */

.el-select-dropdown .el-select-dropdown__item {
  color: white;
}
/* 无效项鼠标移上 */
.el-select-dropdown__item.is-disabled:hover {
  background: rgba(43, 134, 134, 0.3);
}
/* 无效项文字颜色 */
.el-select-dropdown__item.is-disabled {
  color: #bfcbd9;
}
/* 下拉列表项选中项背景 */

.el-select-dropdown .el-select-dropdown__item.selected {
  background: rgba(43, 134, 134, 0.3);
}


/* 下拉列表项鼠标 hover 的背景色 */

.el-select-dropdown .el-select-dropdown__item.hover {
  background: rgba(43, 134, 134, 0.3);
}
</style>



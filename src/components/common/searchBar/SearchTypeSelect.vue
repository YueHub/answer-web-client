<template>
  <div class="search-type-select">
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in selectOptions" :key="item.value" :label="item.label"
        :value="item.value" :disabled="item.disabled"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    defaultValue: {
      type: String,
      default: function() {
        return '';
      },
    },
    selectOptions: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      value: this.defaultValue,
    };
  },
};
</script>

<style>
/* 下拉列表项内容 */
.search-type-select .el-input__inner {
  /* Positioning 位置相关 */

  /* Box model 尺寸相关 */
  width: 100px;
  height: 40px;
  padding-right: 0px;

  /* Visual 视觉效果 */
  background: #3385ff;
  color: white;
}


/* 下拉箭头图标大小 */

.search-type-select .el-select .el-input .el-input__icon {
  font-size: .5em;
}

/* 下拉列表项背景和圆角 */

.el-select-dropdown {
  border-radius: 4px;
  background: #3385ff;
}

/* 下拉列表项文字颜色 */

.el-select-dropdown .el-select-dropdown__item {
  color: #FFF;
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



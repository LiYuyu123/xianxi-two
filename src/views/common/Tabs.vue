<template>
  <el-tabs v-model="activeName"  class="tabs123">
    <el-tab-pane label="主站到报统计" name="first">用户管理</el-tab-pane>
    <el-tab-pane label="常规计数统计" name="second" class="second">
    <Routine class="routine"/>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Routine from "./Routine";

export default {
  components: {Routine},
  data() {
    return {
      activeName: 'second'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.tabs123{
  padding-top: 20px;
      /deep/.el-tabs__item {
        font-size: 20px ;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000000;
        line-height: 28px;
      }
      /deep/ .el-tabs__active-bar {
        height: 4px;
        background: #0973FF;
      }
      /deep/ .el-tabs__item.is-active{
        font-weight: 600 !important;
      }
    /deep/ .el-tabs__nav-wrap::after {
           display: none;
  }
}
</style>
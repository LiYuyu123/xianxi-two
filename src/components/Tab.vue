<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-wrapper">
    <el-tab-pane label="按日" name="first"></el-tab-pane>
    <el-tab-pane label="按年" name="second">
      <Chart />
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Chart from "./Chart";
export default {
  data() {
    return {
      activeName: 'second'
    };
  },
  components:{Chart},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>
.tab-wrapper{

  /deep/ #tab-second.el-tabs__item{
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
  }
  /deep/ #tab-first.el-tabs__item{
    padding-left: 180px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
  }
  /deep/ .el-tabs__nav-wrap.is-top::after {
    display: block;
    border: 1px solid rgba(0, 0, 0, 0.15);
  }
  /deep/.el-tabs__item.is-top.is-active{
    font-weight: 400 !important;
    color: #1890FF !important;
  }
  /deep/ .el-tabs__active-bar.is-top {
    height: 2px;
    background: #1890FF;
  }
}
</style>
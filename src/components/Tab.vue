<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="tab-wrapper">
    <el-tab-pane label="按日" name="first"  class="day-wrapper" >
      <Chart :option="dayOption"></Chart>
    </el-tab-pane>
    <el-tab-pane label="按年" name="second"  class="year-wrapper">
      <Chart :option="option"></Chart>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Chart from "./Chart";
import {mapState} from "vuex";
export default {
  computed:mapState({
    option:state => state.option,
    dayOption:state => state.dayOption
  }),
  data() {
    return {
      activeName: 'second'
    };
  },
  components:{Chart},
  methods: {
    handleClick(tab) {
      this.$emit('update:value',tab.name)
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
    border: 0.3px solid #ededed;
    margin-left: 18px;
    margin-right: -30px;
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
.day-wrapper{
 /deep/ .div1{
   height: 255px;
   transform:translateX(118px) translateY(111px) ;
 }
}
.year-wrapper{
  /deep/ .div1{
    height: 288px;
    transform:translateX(115px) translateY(78px) ;
  }
}
</style>
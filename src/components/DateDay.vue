<template>
  <div class="block">
    <div class="year1">
      <el-date-picker
          v-model="value1"
          type="date"
          placeholder="2021-08-01"
          :change="change"
      >
      </el-date-picker>
    </div>
    <div class="year2">
      <el-date-picker
          v-model="value2"
          type="date"
          placeholder="2021-08-31"
          @change="change"
      >
      </el-date-picker>
    </div>
    <i class="el-icon-sort-down " style="font-size: 8px;opacity: 0.25;">
    </i>
    <img src="../assets/image/2.png" alt="">
  </div>
</template>
<script>

import {createDay} from "../assets/js/dayChart";
import dayjs from "dayjs";

export default {
  methods:{
    change(){
      const dayOne=dayjs(this.value1)
      const dayTwo=dayjs(this.value2)
      this.newDate=[dayOne.$D,dayTwo.$D]
      this.dateName=dayjs(this.value1).format('YYYY年MM月DD日')+'至'+dayjs(this.value2).format('YYYY年MM月DD日')
      this.$store.commit('setDay',createDay(this.chartData,this.newDate,this.dateName))
    }
  },
  created() {
    this.$store.commit('setDay',createDay(this.chartData,this.newDate,this.dateName))
  },
  data() {
    return {
      value1: '',
      value2: '',
      newDate:[1,30],
      dateName:'',
      chartData: [49,49,49,49, 71, 100, 100, 100,49, 71, 100, 100, 100, 100, 100, 100, 100, 100, 95, 50, 90, 54, 95, 54, 95, 54, 95, 54,95, 54,95],
    };
  }
};
</script>
<style lang="less" scoped>
/deep/ .el-date-editor{
}
/deep/.el-input__icon.el-icon-date{
  display: none;
}
/deep/ .el-input__inner{
  width: 90px;
  height: 32px;
  padding: 0 !important;
  border: none;
  margin-left:33px ;
  color: black;
  font-size: 14px;
}
/deep/ .el-input__inner::-webkit-input-placeholder{ //设置input placeholder文字颜色
  color: black;
  font-size: 14px;
}
.block{
  position: relative;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  width: 292px;
  border-radius: 2px;
  .year2{
    position: absolute;
    top: 0;
    transform: translateX(125px) ;
  }
  .el-icon-sort-down{
    position: absolute;
    transform: rotateX(180deg) rotateZ(270deg) translateY(123px) translateX(-22px);
  }
  >img{
    position: absolute;
    width: 15px;
    height: 15px;
    right: 0;
    transform: translateY(-23px) translateX(-13px);
  }
}
</style>
<template>
  <div class="block">
    <div class="year1">
      <el-date-picker
          v-model="value1"
          type="year"
          placeholder="2001"
          :change="change"
      >
      </el-date-picker>
    </div>
    <div class="year2">
      <el-date-picker
          v-model="value2"
          type="year"
          placeholder="2021"
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

import {createAll} from "../assets/js/chart";
import dayjs from "dayjs";

export default {
  methods:{
    change(){
      this.newDate=[this.value1,this.value2]
      this.dateName=dayjs(this.newDate[0]).format('YYYY')+'年'+'至'+dayjs(this.newDate[1]).format('YYYY')+'年'
      this.$store.commit('setData',createAll(this.chartData,this.newDate,this.dateName))
    }
  },
  created() {
    this.$store.commit('setData',createAll(this.chartData,this.newDate,this.dateName))
  },
  data() {
    return {
      value1: '',
      value2: '',
      newDate:['2001','2021'],
      dateName:'',
      chartData: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4,95.6, 54.4,95.6],
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
  margin-left:13px ;
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
  width: 186px;
  border-radius: 2px;
  .year2{
    position: absolute;
    top: 0;
    transform: translateX(71px) ;
  }
  .el-icon-sort-down{
    position: absolute;
    transform: rotateX(180deg) rotateZ(270deg) translateY(57px) translateX(-22px);
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
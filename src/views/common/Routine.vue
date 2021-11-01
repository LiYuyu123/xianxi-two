<template>
  <div class="routine-wrapper">
    <header class="header">
      <div class="header-visible">
      </div>
      <div class="date-wrapper" v-show="dateVisible==='second'">
        <span class="header-word2">年份选择：</span>
        <DateYear/>
        <div class="div1"></div>
      </div>
      <div class="date-wrapper" v-show="dateVisible==='first'">
        <span class="header-word2">天数选择：</span>
        <DateDay/>
        <div class="div1"></div>
      </div>
      <div class="tab-wrapper">
        <span class="header-word">到报率统计</span>
        <Tab class="header-tab"
             :value.sync="dateVisible"
        />
      </div>
      <div class="newspaper" >
        <div class="newspaper-wrapper">
          <div class="div1"></div>
          <span class="word1">到报率 (%) 正常</span>
        </div>
        <div class="newspaper-wrapper2">
          <div class="div2"></div>
          <span class="word2">到报率 (%) 异常</span>
        </div>
        <div class="newspaper-wrapper3" v-show="dateVisible==='first'">
          <div class="div3"></div>
          <span class="word3">缺报条数</span>
        </div>
      </div>
    </header>
      <div class="warning" v-show="show">
        <i class="el-icon-close" style="color:#A4A6AA;" @click="click"></i>
        <div class="warning-wrapper">
          <span class="warning-word1">近5天数据异常提醒</span>
          <div class="warning-word2">近5天有200条记录。缺失条数10条记录 缺失数据站点如下：<span>浦江、兰溪、金华、 义乌、东阳、磐安、武义。</span></div>
        </div>
      </div>
    </div>
</template>
<script>
import Tab from "../../components/Tab";
import DateYear from "../../components/DateYear";
import DateDay from "../../components/DateDay";

export default {
  data(){
    return{
      show:true,
      style:'',
      dateVisible:'second',
    }
  },
  methods:{
    click(){
      this.show = this.show !== true;
      this.style='none'
    }
  },
  components: {DateYear, Tab,DateDay}
}
</script>
<style lang="less" scoped>
.routine-wrapper {
  position: relative;
  background: white;
  display: flex;
  flex-direction: column;
  .header {
    padding-top: 21px;
    padding-bottom: 60px;
    position: relative;
    .header-visible{
      width: 18px;
      height: 18px;
      background: white;
      position: absolute;
      right: 0;
      transform: translateY(30px);
      z-index: 100;
    }
    .newspaper{
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
      .newspaper-wrapper{
        display: flex;
        align-items: center;
         .div1{
           width: 8px;
           height: 8px;
           background: #4FC88C;
         }
        .word1{
          display: inline-block;
           padding-left: 10px;
          font-size: 12px;
          color: #8C8C8C;
          line-height: 17px;
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }
      .newspaper-wrapper2{
        display: flex;
        align-items: center;
        padding-left: 30px;
        .div2{
          width: 8px;
          height: 8px;
          background: #F57D65;
        }
        .word2{
          display: inline-block;
          padding-left: 10px;
          font-size: 12px;
          color: #8C8C8C;
          line-height: 17px;
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }
      .newspaper-wrapper3{
        display: flex;
        align-items: center;
        padding-left: 30px;
        .div3{
          width: 8px;
          height: 8px;
          background: #EBEBEB;
        }
        .word3{
          display: inline-block;
          padding-left: 10px;
          font-size: 12px;
          color: #8C8C8C;
          line-height: 17px;
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }
    }
    .tab-wrapper {
      position: relative;
      .header-word {
        position: absolute;
        left: 17px;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #000000;
        line-height: 25px;
      }

      .header-tab {
      }
    }

    .date-wrapper {
      display: flex;
      align-items: center;
      position: absolute;
      right: 0;
      transform: translateX(-43px) translateY(-5px);
      z-index: 1;
      .div1{
        position: absolute;
        width: 20px;
        height: 20px;
        background: white;
        right: 0;
        transform: translateX(25px) translateY(3px);
      }
      .header-word2 {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #666666;
      }
      /deep/ .el-date-editor.el-range-editor{
      }
      .header-date {
        /deep/ .el-date-editor {
          padding: 0;
          width: 186px;
          height: 32px;
          display: flex;
          flex-direction: row-reverse;
          .el-range-input{
            width: 30px;
            margin-right: 35px;
            color: #000000 !important;
            white-space:nowrap;
            overflow:auto;

          }
          .el-input__icon.el-range__close-icon {
            display: none;
          }

          .el-range-separator {
            padding: 0 !important;
            display: none;
          }

          .el-input__icon {
            margin: 0;

            margin-right: 10px;
          }
        }
      }
    }
  }

  .warning {
    position: fixed;
    right: 27px;
    //transform: translateY(80px);
     top: 670px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.09);
    border-radius: 4px;
    .el-icon-close{
      position: absolute;
      z-index: 1;
      right: 0;
      transform: translateY(10px) translateX(-10px);
    }
    .warning-wrapper {
      width: 280px;
      height: 120px;
      background: white;
      opacity: 0.9;
      border-radius: 4px;

      .warning-word1 {
        padding-top: 11px;
        padding-left: 16px;
        display: block;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        line-height: 25px;
        color: #333333;
        font-weight: 600;
      }

      .warning-word2 {
        display: block;
        width: 258px;
        height: 60px;
        font-size: 14px;
        margin: 8px 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 20px;
        color: #333333;
        >span {
          font-weight: 600;
        }
      }
    }
  }

}

</style>
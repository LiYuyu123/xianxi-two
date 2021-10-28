<template>
  <div class="routine-wrapper">
    <header class="header">
      <div class="date-wrapper">
        <span class="header-word2">年份选择：</span>
        <Date class="header-date"/>
      </div>
      <div class="tab-wrapper">
        <span class="header-word">到报率统计</span>
        <Tab class="header-tab"/>
      </div>
      <div class="newspaper">
        <div class="newspaper-wrapper">
          <div class="div1"></div>
          <span class="word1">到报率 (%) 正常</span>
        </div>
        <div class="newspaper-wrapper2">
          <div class="div2"></div>
          <span class="word2">到报率 (%) 异常</span>
        </div>
      </div>
    </header>
    <i class=" el-icon-error" style="font-size: 21px;color:#F57D65;opacity: 0.6;">
    </i>
    <div class="warning">
      <div class="warning-wrapper">
        <span class="warning-word1">近5天数据异常提醒</span>
        <span class="warning-word2">近5天有200条记录， 缺失数据站点如下：浦江、兰溪、金华、 义乌、东阳、磐安、武义。</span>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from "../../components/Tab";
import Date from "../../components/Date";

export default {
  components: {Tab, Date}
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
    padding-bottom: 100px;
    .newspaper{
      display: flex;
      align-items: center;
      justify-content: center;
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
      transform: translateX(-43px);
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
            color: #000000 !important;

          }
          .el-input__icon.el-range__close-icon {
            display: none;
          }

          .el-range-separator {
            padding: 0 !important;
          }

          .el-input__icon {
            margin: 0;
            margin-left: 20px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .el-icon-error {
    position: fixed;
    right: 0;
    bottom: 0;
  }
  .warning {
    position: fixed;
    right: 0;
    bottom: 0;
    .warning-wrapper {
      width: 280px;
      height: 120px;
      background: #F57D65;
      border-radius: 4px;
      color: white;

      .warning-word1 {
        padding-top: 11px;
        padding-left: 16px;
        display: block;
        font-size: 18px;
        font-family: PingFangSC-Semibold, PingFang SC;
        line-height: 25px;
      }

      .warning-word2 {
        display: block;
        width: 258px;
        height: 60px;
        font-size: 14px;
        margin: 8px 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 20px;
      }
    }
  }
}
</style>
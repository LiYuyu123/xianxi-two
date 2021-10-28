<template>
  <div class="home">
    <Header/>
    <div class="tabs-wrapper">
      <Tabs class="tabs"/>
    </div>
    <footer class="footer">
      <span>技术支持：杭州幂拓科技有限公司</span>
    </footer>
  </div>
</template>

<script>
import Tabs from "./common/Tabs";
import Header from "./common/Header";
export default {
  name: 'Home',
  components: {
   Tabs,Header
  }
}
</script>
<style lang="less" scoped>
.home{
  display: flex;
  flex-direction: column;
  //background: #EEF3F9;
  .tabs-wrapper {
    padding: 0 49px;
    .tabs {
    }
  }
  .footer{
    text-align: center;
    >span{
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 17px;
    }
  }
}
</style>

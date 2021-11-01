<template>
  <div class="content">
    <div class="div1"></div>
    <highcharts  :options="option"  :style="{height:400+'px'}"></highcharts>
  </div>
</template>
<script>

export default {
  props:['option'],
data(){
  return {
    chartData: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4, 95.6, 54.4,95.6, 54.4,95.6],
  }
},
  created() {
    // this.chartOption=createAll(this.chartData)
  },
  watch:{},
  methods:{
  }
}
</script>
<style lang="less" scoped>
.content {
  position: relative;
  .div1 {
    position: absolute;
    height: 315px;
    border: 0.5px solid #e6e6e6;
    z-index: 100;
    transform:translateX(115px) translateY(49px) ;
  }
}
</style>
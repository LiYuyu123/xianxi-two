<template>
  <div>
    <highcharts  :options="chartOption"  :style="{height:400+'px'}"></highcharts>
  </div>
</template>
<script>
import {createAll} from "../assets/js/chart";

export default {
data(){
  return {
    chartOption:{},
    chartData: [{
      name: '东京',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }
    ]
  }
},
  created() {
   this.chartOption=createAll(this.chartData)
  },
  methods:{
  }
}
</script>
<style>

</style>
<template>
  <div class="block">
    <i class="el-icon-sort-down " style="font-size: 4px;opacity: 0.25;">
    </i>
    <i>
    </i>
    <el-date-picker
        v-model="value1"
        type="daterange"
        start-placeholder="2021"
        end-placeholder="2001"
        popper-class="date-style"
    >
    </el-date-picker>
  </div>
</template>

<script>
export default {
  mounted() {
    this.value1
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
      },
      value1: '',
    };
  }
};
</script>
<style lang="less" scoped>
.block{
  position: relative;
  .el-icon-sort-down{
   position: absolute;
    z-index: 1;
     transform: rotateX(180deg) rotateZ(270deg) translateY(60px) translateX(10px);
  }
}
</style>
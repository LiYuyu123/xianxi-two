<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <img src="../../assets/image/1.png" alt="">
    </div>
    <div class="header-nav">
      <div v-for="(d,index) in data" :key="index" class="nav-wrapper" >
        <router-link
            :to="{name:d.path}"
            active-class="selected"
            class="router"
        >
          <span>{{d.name}}</span>
        </router-link>
      </div>
    </div>
    <div class="header-login">
      <span>登录</span>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      data: [
        {name:"到报监测",path:''},
      ]
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.header-wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0973FF;
  height: 60px;
  .header-logo{
    width: 220px;
    height: 22px;
    margin: 5px 20px;
  }
  .header-nav{
    display: flex;
    align-items:center ;
    .nav-wrapper {
      .router {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 120px;
        height: 40px;
        font-size: 14px;
        &.selected{
          background: linear-gradient(163deg, #FFAE00 0%, #FF9600 100%);
          border-radius: 20px;
        }
        > img {
          width: 20px;
          height: 20px;
        }
        > span {
          padding-left: 10px;
        }
      }
    }
  }
  .header-login{
    color: white;
    margin: 0 20px;
  }

}
</style>
<template>
  <div class="header-wrapper">
    <div class="header-logo">
      <img src="../../assets/image/1.png" alt="">
    </div>
    <div class="header-nav">
      <div v-for="(d,index) in data" :key="index" class="nav-wrapper">
        <router-link
            :to="{name:d.path}"
            active-class="selected"
            class="router"
        >
          <span>{{ d.name }}</span>
        </router-link>
      </div>
    </div>
    <div class="header-login">
      <span v-show="show===false">登录</span>
      <div class="logins">
        <div class="img"></div>
        <div class="logins-word">
          <div>李子杰</div>
          <div>|</div>
          <div>退出</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {name: "到报监测", path: ''},
      ],
      show: true,
    }
  },
  components: {}
}
</script>

<style lang="less" scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0973FF;
  height: 60px;

  .header-logo {
    width: 220px;
    height: 22px;
    margin: 5px 20px;
  }

  .header-nav {
    display: flex;
    align-items: center;

    .nav-wrapper {
      .router {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        width: 106px;
        height: 60px;
        font-size: 14px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        &.selected {
          background: rgba(0, 0, 0, 0.21);
        }
        > span {
        }
      }
    }
  }

  .header-login {
    color: white;
    margin: 0 20px;
    .logins {
      display: flex;
      flex-direction: row;
      align-items: center;
       .img{
         width: 24px;
         height: 24px;
         border-radius: 50%;
         background: red;
       }
      .logins-word {
        display: flex;
        flex-direction: row;
        align-items: center;
        > div {
          margin: 0 5px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 17px;
        }
      }
    }
  }

}
</style>
<template>
  <div class="header">
    <!-- 头部地址导航 -->
    <div class="header-nav">
      <!-- 版心 -->
      <div class="w header-nav_main">
        <div class="header-nav_left">
          <span>欢迎来到😊家族</span>
          <i class="iconfont icon-tubiaozhizuomoban"></i>
        </div>
        <div class="header-nav_right">
          <div class="format">
            <span class="format-download">移动端</span>
            <span>地图找🐖</span>
          </div>
          <div class="tel">
            <span>服务热线：</span>
            <span class="tel-content">12112112121</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 页面导航 -->
    <div class="page-nav">
      <div class="w page-nav_main">
        <div class="page-nav_left">
          <a href="#">
            <img class="logo" src="../assets/logogo.jpg" alt="" />
          </a>
          <div class="content">首页</div>
          <div class="content">🐷🐖</div>
          <div class="content">🦌</div>
        </div>
        <div class="page-nav_right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
//公共样式
html,
body {
  margin: 0;
  padding: 0;
}
//版心
.w {
  width: 56%;
  margin: 0 auto;
}
//头部地址导航
.header-nav {
  width: 100%;
  background-color: #f6f6f6;
  .header-nav_main {
    display: flex;
    background-color: #f6f6f6;
    .header-nav_left {
      width: 50%;
      height: 30px;
      color: #9e9e9e;
    }
    .header-nav_right {
      display: flex;
      justify-content: flex-end;
      width: 50%;
      height: 30px;
      color: #9e9e9e;
      .format {
        margin-right: 50px;
        .format-download {
          margin-right: 20px;
        }
      }
      .tel {
        .tel-content {
          color: red;
        }
      }
    }
  }
}
//页面导航
.page-nav {
  width: 100%;
  height: 100px;
  .page-nav_main {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    height: 100%;
    .page-nav_left {
      display: flex;
      width: 60%;
      height: 100%;
      overflow: hidden;
      .logo {
        width: 200px;
        height: 100%;
      }
      .content {
        display: inline-block;
        margin-left: 30px;
        width: 15%;
        height: 100%;
        text-align: center;
        line-height: 100px;
        font-size: 20px;
      }
    }
    .page-nav_right {
      width: 40%;
      height: 100%;
      background-color: blue;
    }
  }
}
</style>

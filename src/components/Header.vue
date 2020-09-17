<template>
  <div class="common">
    <!-- header -->
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
              <i class="iconfont "></i>
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
            <div class="content">新房</div>
            <div class="content">楼市资讯</div>
          </div>
          <div class="page-nav_right">
            <input type="text" placeholder="请输入您要搜索的楼盘" />
            <div class="page-nav_right--seach">
              <span>搜索</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 插槽 -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="w mian-ze">
        <div class="mian-ze_content">
          <span>
            免责声明：本页面旨在为广大用户提供更多信息的无偿服务，所有楼盘信息以开发商最终公布为准，不声明或保证所提供信息的准确性和完整性。刊载的楼盘资料不视为楼盘已达到可售标
            准，仅供参考和借鉴， 购房者
            在购房时需慎重考虑。参阅本网站的用户，应被视为已确认得悉上述立场。
          </span>
        </div>
      </div>
      <div class="footer-main">
        <div class="w">
          <div class="footer-main_top">
            <div class="nav"><a href="#">新房</a></div>
            <div class="nav"><a href="#">楼市资讯</a></div>
            <div class="nav"><a href="#">关于我们</a></div>
            <div class="nav"><a href="#">问答</a></div>
            <div class="nav"><a href="#">地图看房</a></div>
          </div>
          <div class="footer-main_bottom">
            <div class="footer-main_bottom--left">
              <p>服务电话：4001052240</p>
              <p>本网站任何信息和活动的最终解释权归公司所有。</p>
              <p>
                Copyright © 2019-2020 北京房满网科技有限公司 版权所有
                京ICP20014944号，
              </p>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <div class="footer-main_bottom--right"></div>
          </div>
        </div>
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
a {
  color: #fff;
  text-decoration: none;
}
a:hover {
  color: #cd1b2b;
}
input {
  background: none;
  outline: none;
  border: none;
}
//头部地址导航
.header {
  .header-nav {
    width: 100%;
    background-color: #f6f6f6;
    .header-nav_main {
      display: flex;
      line-height: 30px;
      overflow: hidden;
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
          font-size: 22px;
        }
      }
      .page-nav_right {
        position: relative;
        width: 40%;
        height: 100%;
        input {
          position: absolute;
          top: 0;
          right: 100px;
          display: inline-block;
          margin: 23px 0;
          border-radius: 25px;
          width: 270px;
          height: 50px;
          font-size: 20px;
          text-align: center;
          background-color: #f8f8f8;
        }
        .page-nav_right--seach {
          position: absolute;
          top: 0;
          right: 0;
          padding: 0 10px;
          display: inline-block;
          width: 60px;
          height: 50px;

          margin-top: 23px;
          text-align: right;
          line-height: 50px;
          color: #fff;
          background-color: #5da750;
        }
      }
    }
  }
}

//插槽
.main {
  width: 100%;
  height: 500px;
}
//脚部版本内容
.footer {
  .mian-ze {
    height: 100px;
    line-height: 30px;
    letter-spacing: 1px;
    color: #91807d;
    overflow: hidden;
  }
  .footer-main {
    background-color: #363a3d;
    .footer-main_top {
      border-bottom: 1px solid #44494b;
      .nav {
        display: inline-block;
        padding: 0 15px;
        font-size: 24px;
        color: #fff;
        height: 100px;
        line-height: 100px;
      }
      :first-child {
        padding: 0 15px 0 0px;
      }
    }
    .footer-main_bottom {
      .footer-main_bottom--left {
        p {
          color: #ccc;
        }
      }
    }
  }
}
</style>

<template>
  <div class="hot-sell">
    <div class="w custom-header">
      <slot></slot>
    </div>
    <div class="w hot-sell_main">
      <div class="hot-sell_main--left">
        <slot></slot>
      </div>
      <div class="hot-sell_main--right">
        <div class="top">
          <div class="top-text">
            <div class="text title">
              <span>开启消息通知</span>
            </div>
            <div class="text">
              <span>获取楼盘最新动态信息</span>
            </div>
            <div class="text">
              <span>我们将以短信的方式通知您 </span>
            </div>
            <div class="tel-input">
              <input type="text " placeholder="请输入您的电话号码" />
            </div>
          </div>
          <div class="top-button">
            <!-- <div class="button">
              <span>现在开启</span>
            </div> -->
            <input type="submit" value="现在开启" />
          </div>
        </div>
        <div class="content">
          <div class="content-title">
            <!-- 标题 -->
            <div class="title">
              <div class="vertical-bar"></div>
              <div class="title-text">
                热销新盘
                <em>TOP</em>
              </div>
            </div>
          </div>
          <div class="content-rank">
            <div class="no1">
              <div class="serial">NO.1</div>
              <div class="details">
                <div>房屋地址</div>
                <div>价格/m²</div>
                <div>有效期</div>
              </div>
            </div>
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
//自定义
.custom-header {
  width: 100%;
  height: 100px;
}
//热销
.hot-sell_main {
  position: relative;
  display: flex;
  justify-content: space-between;
  .hot-sell_main--left {
    width: 68%;
    height: 1000px;
    background-color: #ccc;
  }
  .hot-sell_main--right {
    position: absolute;
    top: 0;
    right: 0;
    width: 30%;
    height: 1284px;
    //top
    .top {
      position: relative;
      width: 100%;
      height: 284px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 1px #ccc;
      .top-text {
        width: 100%;
        height: 70%;
        padding-top: 1px;
        text-align: center;
        :first-child {
          margin-top: 40px;
        }
        .text {
          color: #747774;
        }
        .title {
          font-size: 20px;
          color: #3b424c;
          margin-bottom: 10px;
        }
        .tel-input {
          margin-top: -20px;
          input {
            width: 200px;
            height: 40px;
            text-align: center;
            color: #666;
            background-color: #dddddd;
            outline: none;
            border: none;
            box-shadow: 1px 1px 0px 1px inset;
          }
        }
      }
      .top-button {
        position: absolute;
        bottom: 0;
        left: 15px;
        width: 90%;
        height: 30%;
        border-top: 1px solid #e5e8ed;
        input {
          width: 200px;
          height: 40px;
          border-radius: 5px;
          background: #4e82f7;
          margin-left: 16%;
          margin-top: 4%;
          color: #fff;
          font-size: 16px;
        }
      }
    }
    //数据列表
    .content {
      width: 100%;
      margin-top: 25px;
      padding-top: 1px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 1px 1px 10px 1px #ccc;
      //标题
      .content-title {
        width: 100%;
        height: 40px;
        background-color: #fff;
        margin-top: 20px;
        margin-bottom: 20px;
        .title {
          margin-top: 20px;
          display: flex;
          .vertical-bar {
            width: 2px;
            height: 40px;
            background-color: #5da750;
          }
          .title-text {
            margin-left: 10px;
            font-size: 30px;
            color: #333333;
            em {
              font-style: normal;
              font-weight: bold;
              color: #5da750;
            }
          }
        }
      }
      //数据列表
      .content-rank {
        margin: 0 10px;
        .no1 {
          display: flex;
          justify-content: space-between;
          width: 100%;
          height: 67px;
          margin-top: 10px;
          background-color: #fff;
          .serial {
            display: inline-block;
            width: 30%;
            height: 100%;
            color: #fff;
            text-align: center;
            line-height: 67px;
            font-size: 30px;
            font-weight: bold;
            background-color: #5da750;
          }
          .details {
            display: inline-block;
            width: 70%;
            height: 100%;
            background-color: #ebebeb;
            div {
              margin-top: 3px;
              margin-left: 10px;
              font-size: 14px;
            }
            :first-child {
              margin-top: 2px;
            }
          }
        }
      }
    }
  }
}
</style>

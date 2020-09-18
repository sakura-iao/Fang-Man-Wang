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
        <div class="top"></div>
        <div class="content"></div>
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
//热销
.hot-sell_main {
  display: flex;
  justify-content: space-between;
  .hot-sell_main--left {
    width: 70%;
    height: 1000px;
    background-color: #ccc;
  }
  .hot-sell_main--right {
    width: 30%;
    height: 1284px;
    background-color: #666;
    .top {
      width: 100%;
      height: 284px;
      background-color: #fff;
    }
    .content {
      width: 100%;
      height: 969px;
      margin-top: 25px;
      background-color: #333;
    }
  }
}
</style>

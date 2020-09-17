<template>
  <div class="header">
    <div class="header_top">
      <span>欢迎来到房满网</span>
      <span> <img src="../../assets/v2ico_1.png" alt="" /> 北京</span>
      <div class="header_right">
        <span> <img src="../../assets/v2ico_35.png" alt="" />移动端 </span>
        <span> <img src="../../assets/v2ico_4.png" alt="" />地图找房 </span>
        <span class="hotLine"
          >服务热线：<span class="line">4001052240</span></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  width: 100%;
  padding: 6px 0;
  background-color: #f6f6f6;
  .header_top {
    width: 1200px;
    margin: 0 auto;
    font-size: 14px;
    color: #9e9e9e;
    img {
      margin: 0 7px;
      vertical-align: bottom;
    }
    .header_right {
      display: inline-block;
      float: right;
      .hotLine {
        margin-left: 20px;
        .line {
          color: orange;
        }
      }
    }
  }
}
</style>

<template>
      <!-- 上方数据展示窗口结束 -->
    <!-- 常用功能开始 -->
    <div class="df_use">
      <!-- 单个功能开始 -->
      <div class="df_use_one" id="use_cx">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im1">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>查询寿命</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one" id="use_rj">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im2">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>入境管理</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im3">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>重要通知</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im4">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>发勾魂单</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im5">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>十八地狱</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im6">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>员工管理</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im7">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>资产管理</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im8">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>货币管理</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
      <!-- 单个功能开始 -->
      <div class="df_use_one">
        <!-- 上方图片 -->
        <div class="df_use_im df_use_im9">

        </div>
        <!-- 下方文字 -->
        <div class="df_use_te">
          <span>操作日志</span>
        </div>
      </div>
      <!-- 单个功能结束 -->
    </div>
    <!-- 常用功能结束 -->
</template>

<script>
export default {
    name:"Main",
}
</script>

<style lang="less" scoped>
.df_use {
  position: relative;
  width: 100%;
  height: 330px;
  top: 10px;
  margin: 0 auto;
}

.df_use a {
  text-decoration: none;
  color: black;
}

.df_use_cygn {
  position: relative;
  top: -10px;
  text-align: center;
  letter-spacing: 1px;
  margin: 10px;
  padding: 0;
}

.df_use_one {
  position: relative;
  float: left;
  width: 25%;
  height: 25%;
  top: -5%;
  margin-top: 5%;
  margin-left: 6%;
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 10px;
}

.df_use_im1 {
  background-image: url(./images/df_use_sm.png);
}

.df_use_im2 {
  background-image: url(./images/df_use_gl.png);
}

.df_use_im3 {
  background-image: url(./images/df_use_tz.png);
}

.df_use_im4 {
  background-image: url(./images/df_use_gh.png);
}

.df_use_im5 {
  background-image: url(./images/df_use_dy.png);
}

.df_use_im6 {
  background-image: url(./images/df_use_yg.png);
}

.df_use_im7 {
  background-image: url(./images/df_use_zc.png);
}

.df_use_im8 {
  background-image: url(./images/df_use_hb.png);
}

.df_use_im9 {
  background-image: url(./images/df_use_rz.png);
}

.df_use_im {
  position: relative;
  width: 60%;
  height: 60%;
  top: 5%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 45px;
  background-position: center;
}

.df_use_te {
  position: relative;
  width: 100%;
  height: 30%;
  top: 10%;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
}

</style>
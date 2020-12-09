<template>
  <div class="df_body df_body1" style="display:block">
    <!-- 首页大图开始 -->
    <div class="df_bg">
      <!-- 公告框开始 -->
      <div class="df_gg">
        <!-- 左侧公告logo -->
        <div class="df_gg_lo">
          <img src="./images/df_gg.png" alt="">
        </div>
        <!-- 右侧文字显示栏 -->
        <div class="df_gg_te">
          <!-- 内部文字横向滚动栏 -->
          <div class="df_gg_th">
            <span id="df_gd_te"></span>
          </div>
        </div>
      </div>
      <!-- 公告框结束 -->
    </div>
    <!-- 首页大图结束 -->
    <!-- 上方数据展示窗口开始 -->
    <div class="df_show_list">
      <!-- 单个展示窗口开始 -->
      <div class="df_show_one df_show_one1">
        <!-- 展示窗口内部文字开始 -->
        <div class="df_show_te">
          <!-- 顶部文字 -->
          <span class="df_show_tet">地府人数</span>
          <br>
          <!-- 底部文字 -->
          <span class="df_show_teb" id="df_show_rs">58660</span>
        </div>
      </div>
      <div class="df_show_one df_show_one2">
        <!-- 展示窗口内部文字开始 -->
        <div class="df_show_te">
          <!-- 顶部文字 -->
          <span class="df_show_tet">今日入境</span>
          <br>
          <!-- 底部文字 -->
          <span class="df_show_teb" id="df_show_rj">283</span>
        </div>
      </div>
    </div>
    <!-- 主要内容区域 -->
      <Main />
  </div>
</template>

<script>
import Main from "./Main" 
export default {
    name:"Home",
    components: {
      Main
  },
}
</script>

<style lang="less" scoped>
.df_body {
  position: relative;
  float: left;
  width: 100%;
  height: 700px;
  display: none;
}
.df_bg {
  position: relative;
  width: 90%;
  height: 20%;
  margin: 0 auto;
  top: 1%;
  border-radius: 20px;
  background-image: url(./images/df_bg_b.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: 0px 0px 20px #ccc;
}

.df_gg {
  position: relative;
  width: 66%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0 auto;
  top: 73%;
  border-radius: 20px;
}

.df_gg_lo {
  position: absolute;
  width: 15%;
  height: 100%;
}

.df_gg_lo img {
  width: 80%;
  height: 100%;
  margin-left: 15%;
}

.df_gg_te {
  position: absolute;
  width: 80%;
  left: 20%;
  height: 100%;
  overflow: hidden;
}

.df_gg_th {
  position: relative;
  width: 150%;
  height: 80%;
  left: 100%;
  top: 13%;
  border-radius: 20px;
  font-size: 15px;
  color: #000;
}

.df_show_list {
  position: relative;
  width: 100%;
  height: 150px;
  top: 1%;
  margin: 0 auto;
}

.df_show_one {
  position: relative;
  float: left;
  width: 42%;
  height: 80%;
  background: green;
  border-radius: 20px;
  margin: 0 auto;
  left: 5%;
  top: 10%;
  box-shadow: 0px 0px 10px #ccc;
}

.df_show_one1 {
  background: linear-gradient(to right, #38ef7d, #3cdc86);
}

.df_show_one2 {
  background: linear-gradient(to right, #00c6ff, #0072ff);
  left: 11%;
}

.df_show_te {
  position: relative;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  top: 10%;
  color: #fff;
  text-align: center;
}

.df_show_tet {
  font-size: 30px;
  font-weight: bold;
}

.df_show_teb {
  font-size: 40px;
  font-weight: bold;
}
</style>
<template>
  <router-link class="df_nav_btm" to="/">
    <!-- 单个导航按钮 -->
    <router-link to="/" class="nav_btm_one" data-index="0">
      <!-- 上方按钮logo -->
      <div class="nav_btm_logo btm_logo_1">
      </div>
      <!-- 下方文字 -->
      <div class="nav_btm_te">
        <span class="btm_te_fff">首页</span>
      </div>
    </router-link>
    <router-link to="/lifedie" class="nav_btm_one" data-index="1">
      <!-- 上方按钮logo -->
      <div class="nav_btm_logo btm_logo_2">
      </div>
      <!-- 下方文字 -->
      <div class="nav_btm_te">
        <span>生死簿</span>
      </div>
    </router-link>
    <router-link  to="/trial" class="nav_btm_one" data-index="2">
      <!-- 上方按钮logo -->
      <div class="nav_btm_logo btm_logo_3">
      </div>
      <!-- 下方文字 -->
      <div class="nav_btm_te">
        <span>审判庭</span>
      </div>
    </router-link>
    <router-link  to="/user" class="nav_btm_one" data-index="3" style="border: none">
      <!-- 上方按钮logo -->
      <div class="nav_btm_logo btm_logo_4">
      </div>
      <!-- 下方文字 -->
      <div class="nav_btm_te">
        <span>轮回</span>
      </div>
    </router-link>
  </router-link>
</template>

<script>
export default {
    name:"Footer",
    watch:{
      
  },
  methods:{
}
}
</script>

<style lang="less" scoped>
.df_nav_btm {
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background: #000;
  z-index: 999;
}

.nav_btm_one {
  position: relative;
  float: left;
  width: 25%;
  height: 100%;
  border-right: 1px solid;
  border-image: linear-gradient(black, white, black)3 4 3;
  box-sizing: border-box;
}

.btm_logo_1 {
  background-image: url(./images/df_nav_sy.png);
}

.btm_logo_2 {
  background-image: url(./images/df_nav_ssb.png);
}

.btm_logo_3 {
  background-image: url(./images/df_nav_sp.png);
}

.btm_logo_4 {
  background-image: url(./images/df_nav_lh.png);
}

.nav_btm_logo {
  position: relative;
  width: 40%;
  height: 50%;
  top: 6%;
  background-repeat: no-repeat;
  background-size: 22px;
  margin: 0 auto;
  background-position: center;
}

.nav_btm_logo:hover {
  animation: btm_logo 0.2s;
}

@keyframes btm_logo {
  from {
    background-size: 22px;
  }

  to {
    background-size: 23px;
  }
}

.nav_btm_te {
  position: relative;
  width: 100%;
  height: 30%;
  top: 12%;
  color: #ccc;
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
}

.btm_te_fff {
  color: #fff;
}
</style>
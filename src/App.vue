<template>
  <div>
    <!-- <Home  v-if="$route.meta.isHomeHide"/> -->
    <!-- 路由跳转 -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import Home from "./pages/Home"
import Footer from "./components/Footer"
export default {
  name:"App",
  components:{
    
    Footer,
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f6f6f6;
}
a{
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}
</style>
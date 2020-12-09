<template>
  <div>
    <Home  />
    <!-- <router-view></router-view> -->
    <Footer  />
  </div>
</template>

<script>
import Home from "./components/Home"
import Footer from "./components/Footer"
export default {
  name:"App",
  components:{
    Home,
    Footer
  }
} 
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #f6f6f6;
}
</style>
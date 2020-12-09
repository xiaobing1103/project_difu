import Vue from 'vue'
import VueRouter from "vue-router"

import LifeDie from '../pages/LifeDie'
import Trial from '../pages/Trial'
import User from  '../pages/User'
import Home from '../pages/Home'
// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
const push = VueRouter.prototype.push;
const replace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location,onComplete,onAbort){
    //如果用户想处理失败,就处理
    if(onComplete && onAbort){
        //如果用户想处理失败,就处理
        return push.call(this,location,onComplete,onAbort);
    }
    //如果用户不处理失败,给默认值:空函数
    return push.call(this, location, onComplete, () => {});
}

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
    // 如果用户想处理失败，就处理
    if (onComplete && onAbort) {
      return replace.call(this, location, onComplete, onAbort);
    }
    // 如果用户不处理失败，给默认值：空函数
    return replace.call(this, location, onComplete, () => {});
  };

Vue.use(VueRouter);

  export default new VueRouter({
      //路由配置
      routes:[
          {
                path:'/',
                component:Home,
               /*  meta:{
                    isHomeHide:true,
                }, */
          },
          {
                path:'/lifedie',
                component:LifeDie,
                
          },
          {
                path:'/trial',
                component:Trial,
     
          },
          {
                path:"/user",
                component:User,
          }
      ],
      // 每次切换路由页面滚动条位置
      scrollBehavior() {
		return { x: 0, y: 0 };
	},
  })
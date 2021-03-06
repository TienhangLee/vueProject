import Vue from 'vue'
import VueRouter from 'vue-router'

const Home =() => import('../views/home/Home')
const Category =() => import('../views/category/Category')
const Profile =() => import('../views/profile/Profile')
const Cart =() => import('../views/cart/Cart')

// 1.安裝插件
Vue.use(VueRouter)

// 2.創建路由對象
const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.導出router
export default router


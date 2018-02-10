import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/dashboard/pages/layout'
import store from '@/store/index'

// 导入路由规则
import DashboardRouter from '@/views/dashboard/router'
import MockRouter from '@/views/mock/router'

Vue.use(Router)

// 定义路由配置
let childrenRouters = []
let concat = (bllRouter) => {
  childrenRouters = childrenRouters.concat(bllRouter)
}

// 合并路由规则
concat(DashboardRouter) // 面板
concat(MockRouter) // 模拟数据

let router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: childrenRouters
    }
  ]
})

router.afterEach((to, from) => {
  // console.log('afterEach', to)
  store.commit('SET_CURRENT_ROUTER', to)
  // window.scrollTo(0, 0)
})

export default router

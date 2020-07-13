/*
 * @Author: siwenfeng
 * @Date: 2020-07-06 15:47:51
 * @LastEditTime: 2020-07-11 22:04:40
 * @Description: this is ....
 */
import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import { filterAsyncRouter } from '@/store/modules/permission'
import { topRoutes } from '@/api/user'

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  console.log(to, from)
  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/welcome' })
      NProgress.done()
    } else if (to.path === '/welcome' || to.path === '/') {
      next()
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (!hasRoles) {
        await store.dispatch('user/getInfo')
        loadMenus(next, to)
      } else if (store.getters.loadMenus) {
        store.dispatch('user/updateLoadMenus', false).then(res => {})
        loadMenus(next, to)
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

export const loadMenus = (next, to) => {
  topRoutes().then(res => {
    let data = []
    res.data.map(v => {
      if (v.children && v.children.length) {
        data = data.concat(v.children)
      }
    })
    const asyncRouter = filterAsyncRouter(data)
    asyncRouter.push({
      path: '*',
      redirect: '/404',
      hidden: true
    })
    store.dispatch('permission/generateRoutes', asyncRouter).then(() => { // 存储路由
      router.addRoutes(asyncRouter) // 动态添加可访问路由表
      next({ ...to, replace: true })
    })
  })
}

router.afterEach(() => {
  NProgress.done() // finish progress bar
})

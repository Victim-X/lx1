import router from './router'
// 全局导航前置守卫
router.beforeEach((to, from, next) => {
// 若果以home为起始   就认为进入了需要检查token的区域
  if (to.path.startsWith('/home')) {
    // 获取前端的token
    let result = window.localStorage.getItem('user-info')
    if (result) {
      let userInfo = JSON.parse(result)
      if (userInfo && userInfo.token) {
        next()
      } else {
        next('/login')
      }
    } else {
      next('/login')
    }
  } else {
    next()// 不以home为起始 直接放行
  }
})
export default router

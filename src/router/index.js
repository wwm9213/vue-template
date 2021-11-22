/*
 * @Date: 2021-04-09 11:06:25
 * @Author: wwm
 * @LastEditTime: 2021-11-22 16:42:52
 * @LastEditors: wwm
 * @Description: ...
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import tokenInfo from '@/utils/tokenInfo';
import cancelRequest from '@/utils/cancelRequest';
Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/index' },
  {
    name: 'Index',
    path: '/index',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login')
  },
  {
    path: '*',
    name: 'Nofind',
    component: () => import(/** 捕获所有路由或 404 Not found 路由,应该放在最后 */ '@/views/NoFind')
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  cancelRequest();
  next();
  // const token = tokenInfo.get();

  // if (to.path !== '/login') {
  //   if (!token) {
  //     next('/login');
  //   } else {
  //     next();
  //   }
  // } else if (to.path === '/login' && token) {
  //   next('/');
  // } else {
  //   next();
  // }
});

export default router;

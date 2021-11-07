/*
 * @Author: dingminghui
 * @Date: 2021-10-30 16:58:23
 * @LastEditTime: 2021-10-30 17:04:56
 * @LastEditors: Please set LastEditors
 * @Description: 路由
 * @FilePath: /vue3-tsx-vite/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes:RouteRecordRaw[] = [];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
/*
 * @Author: dingminghui 
 * @Date: 2021-10-30 16:34:44
 * @LastEditTime: 2021-10-30 16:57:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/env.d.ts
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface AnyObject {
	[key: string]: any
}
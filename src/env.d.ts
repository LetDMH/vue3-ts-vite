/*
 * @Author: your name
 * @Date: 2021-11-02 16:35:20
 * @LastEditTime: 2021-11-17 00:16:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/store/globEager.d.ts
 */
interface ImportMeta {
  readonly globEager(arg0: string): AnyObject;
  readonly hot: any;
  readonly env: any;
}

// interface ImportMetaEnv extends Readonly<Record<string, string>> {
//   readonly VITE_APP_TITLE: string
//   // 更多环境变量...
// }
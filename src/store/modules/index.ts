/*
 * @Author: your name
 * @Date: 2021-10-31 02:13:59
 * @LastEditTime: 2021-10-31 02:15:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/store/modules/index.ts
 */
export function loadModules() {
  const context = import.meta.globEager("./*.ts") as AnyObject;

  const modules: AnyObject = {};

  Object.keys(context).forEach((key: string) => {
      if (key === "./index.ts") return;
      modules[key.replace(/(\.\/|\.ts)/g, '')] = context[key].default
  });
  
  return { context, modules }
}

export const { context, modules } = loadModules();
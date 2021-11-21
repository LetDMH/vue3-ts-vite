/*
 * @Author: your name
 * @Date: 2021-11-11 14:04:35
 * @LastEditTime: 2021-11-11 14:24:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /vue3-ts-vite/src/hooks/useDebounceRef.ts
 */
import { customRef } from 'vue';
export default function useDebounceDef(value: any, delay: number) {
  let timeout:number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: any) {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    }
  })
}
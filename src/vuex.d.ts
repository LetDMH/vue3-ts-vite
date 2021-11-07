/*
 * @Author: your name
 * @Date: 2021-10-31 02:15:42
 * @LastEditTime: 2021-11-02 16:35:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/vuex.d.ts
 */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // 声明自己的 store state
    interface State {
        [key: string]: any
    }

    // 为 `this.$store` 提供类型声明
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}
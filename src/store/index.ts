/*
 * @Author: dingminghui
 * @Date: 2021-10-30 17:07:49
 * @LastEditTime: 2021-11-04 23:42:14
 * @LastEditors: Please set LastEditors
 * @Description: vuex
 * @FilePath: /vue3-tsx-vite/src/store/index.ts
 */
import { InjectionKey } from "vue";
import { loadModules, context, modules } from "./modules";
import { createStore, useStore as baseUseStore, Store, createLogger } from "vuex";

export interface State {
    [key: string]: any
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore({
  strict: process.env.NODE_ENV === 'development',
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});

export function useStore() {
    // return baseUseStore(key);
    return baseUseStore();
}

// 热重载
if (import.meta.hot) {
    import.meta.hot?.accept(Object.keys(context), () => {
        const { modules } = loadModules()
        store.hotUpdate({
            modules
        })
    })
}

export default store;
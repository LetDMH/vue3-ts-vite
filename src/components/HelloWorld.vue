<!--
 * @Author: your name
 * @Date: 2021-10-30 15:46:10
 * @LastEditTime: 2021-11-17 01:12:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-vite/src/components/HelloWorld.vue
-->
<template>
  <h1>{{ msg }}</h1>
  <a-skeleton active :loading="loading">
    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>+
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    </p>
    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a>|
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <div>watchedVal：{{ watchedVal }}</div>
    <a-button type="primary" @click="debounceVal++">debounceBtn</a-button>
    <div>debounceVal：{{ debounceVal }}</div>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>to test hot module replacement.
    </p>
  </a-skeleton>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, watch, onMounted, reactive, toRefs, inject, InjectionKey } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import userDebounceRef from '@/hooks/useDebounceRef';

interface reactiveData {
  count: number,
  loading: boolean
}
export default defineComponent({
  props: {
    msg: String
  },
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const $http: InjectionKey<string> | undefined = inject('$http');
    console.log(route, router, import.meta.env);
    // let count = ref<number>(0);
    const state = reactive<reactiveData>({
      count: 0,
      loading: true
    })
    console.log(state)
    console.log({ ...toRefs(state) })
    // let msg:Ref = ref('vue3 + ts + vite');
    let watchedVal: Ref = ref(1);
    watch(() => state.count, (val, newVal): void => {
      watchedVal.value *= 2;
    })
    onMounted(() => {
      setTimeout(() => {
        state.loading = false;
      }, 5000)
    })
    function formatter<T>(value: T): T {
      return value;
    }
    // @ts-ignore
    $http.get('/api/sys/_user_info').then((res: any) => {
      console.log(res)
    });
    return {
      ...toRefs(state),
      // count,
      // msg,
      watchedVal,
      formatter,
      debounceVal: userDebounceRef('1', 3000)
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
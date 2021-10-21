<template>
  <div class="hello">
    <!-- 阿里图标库的使用 -->
    <span
      class="iconfont icon-shouye"
      style="color: #38a5a1; font-size: 70px"
    ></span>
    <h1>{{ msg }}</h1>
    <span>&#9733;★</span>
    <!-- Unicode 字符 https://unicode-table.com/cn/ -->
    <button @click="urlTest">url请求测试</button>
  </div>
</template>

<script>
import { request } from "@/utils/request.js";

/* 带命名空间store https://vuex.vuejs.org/zh/guide/modules.html */
const MUDULE_NAME = "homeStore";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers(MUDULE_NAME);

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    // 在 `homeStore` 中查找
    ...mapState({
      age: (state) => state.age
    })
  },
  created() {
    console.log(this.age);
    // this.sleepTest01();
    // this.sleepTest02();
    // this.blockMainThreadaTest();
  },
  methods: {
    urlTest() {
      let params = {
        type: "pop",
        page: 1
      };
      request({
        url: "/home/data",
        params
      });
    },
    sleepTest01() {
      console.log("sleep01---------start");
      // 不会影响方法内部后续的执行
      this.common.sleep(5000).then(() => {});
      console.log("sleep01---------end");
    },
    async sleepTest02() {
      console.log("sleep02---------start");
      // 阻塞所在方法内部后续的执行，then执行完才会执行后续
      await this.common.sleep(3000).then(() => {
        for (let i = 0; i < 3000; i++) {
          console.log("sleep02---------");
        }
      });
      console.log("sleep02---------end");
    },
    blockMainThreadaTest() {
      console.log("block---------start");
      // 阻塞主线程
      this.common.blockMainThread(5000);
      console.log("block---------end");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 0.114583rem; /* rem测试 */
}
h1:hover {
  color: var(--color-high-text); /* 全局css测试 */
}
</style>

<template>
  <div class="hello">
    <!-- 阿里图标库的使用 -->
    <span
      class="iconfont icon-shouye"
      style="color: #38a5a1;font-size: 70px"
    ></span>
    <h1>{{ msg }}</h1>
    <span>&#9733;★</span> <!-- Unicode 字符 https://unicode-table.com/cn/ -->
    <button @click="urlTest">url请求测试</button>
  </div>
</template>

<script>
import { request } from "@/utils/request.js";

/* 带命名空间store https://vuex.vuejs.org/zh/guide/modules.html */
const MUDULE_NAME = "homeStore";
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers(MUDULE_NAME);

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    // 在 `homeStore` 中查找
    ...mapState({
      age: state => state.age
    })
  },
  created() {
    console.log(this.age);
  },
  methods: {
    urlTest() {
      let params = {
        type: "pop",
        page: 1
      };
      request({
        url: '/home/data',
        params
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: .114583rem;  /* rem测试 */
}
h1:hover {
  color: var(--color-high-text);  /* 全局css测试 */
}
</style>

<template>
  <div>{{ name }}</div>
</template>

<script>
/* 带命名空间store https://vuex.vuejs.org/zh/guide/modules.html */
const MUDULE_NAME = "aboutStore";
import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers(MUDULE_NAME);

export default {
    computed: {
    // 在 `aboutStore` 中查找
    ...mapState({
      name: state => state.name
    })
  },
}
</script>

<style>

</style>
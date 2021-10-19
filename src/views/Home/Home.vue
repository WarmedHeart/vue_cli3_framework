<template>
  <!-- 1. 通过store.js自动进行注册(必须存在moduleName字段) -->
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/test/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

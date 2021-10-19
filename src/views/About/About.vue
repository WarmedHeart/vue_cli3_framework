<template>
  <!-- 当不存在moduleName字段，想注册模块，该视图被打开时再进行注册store，再SelfRegisterComp模板有使用 -->
  <div>
    <self-register-comp />
    <element-test />
    <!-- <ant-design-test /> -->
  </div>
</template>

<script>
import SelfRegisterComp from "components/SelfRegisterComp.vue";
import ElementTest from "components/ElementTest.vue";
// import AntDesignTest from "components/AntDesignTest.vue";
import aboutStoreObj from "./store.js";
const MUDULE_NAME = "aboutStore";

export default {
  components: {
    SelfRegisterComp,
    ElementTest
    // AntDesignTest
  },
  beforeCreate() {
    //注册模块
    if (!this.$store.hasModule(MUDULE_NAME)) {
      this.$store.registerModule(MUDULE_NAME, aboutStoreObj);
    }
  },
}
</script>

<style scoped>

</style>
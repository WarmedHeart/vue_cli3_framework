<template>
  <div class="app-wrapper">
    <div class="header"></div>
    <div class="main">
      <div class="sider">
        <tab-bar
          :menuData="menuData"
          @jumpToRoute="jumpToRoute"
          v-model="isCollapse"
        ></tab-bar>
      </div>
      <div class="content">
        <!-- <div class="select-tab-bar"></div> -->
        <div class="content-main">
          <button @click="isCollapse = !isCollapse">展开/收缩</button>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabBar from "./components/TabBar.vue";

export default {
  components: {
    TabBar
  },
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    jumpToRoute(route) {
      this.$router.push({
        name: route.name
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$headerHeight: 60px;
$selectTabBar: 36px;

.app-wrapper {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: $background-color;
  overflow: hidden;
}
.header {
  width: 100%;
  height: $headerHeight;
  background-color: #1fc8db;
  background-image: linear-gradient(
    120deg,
    #9fb8ad 0%,
    #1fc8db 51%,
    #2cb5e8 75%
  );
}
.main {
  width: 100%;
  height: calc(100% - 60px);
  display: flex;
  .sider {
    height: 100%;
    float: left;
    background-color: $background-color;
    border: 1px solid #dadfe6;
    padding: 6px 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .content {
    height: 100%;
    flex: 1;
    float: left;
    .select-tab-bar {
      height: $selectTabBar;
    }
    .content-main {
      // height: calc(100% - $selectTabBar);
      height: 100%;
      padding: 20px;
      background-color: $background-color;
    }
  }
}
</style>

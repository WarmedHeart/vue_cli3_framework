<template>
  <!-- 
    优化点：
      1. 目前只支持三级目录
      2. 如何更加优雅的生成key:1-1-1
      3. 路由是从各个文件夹router.js读取的，没有顺序
  -->
  <div>
    <el-menu
      :default-active="defaultSelectBarIndex"
      text-color="#8b8691"
      background-color="transparent"
    >
      <el-submenu
        v-for="(item, index) in showItemList"
        :key="index + ''"
        :index="index + ''"
        :disabled="item.disabled"
      >
        <template slot="title">
          <i :class="item.menu"></i>
          <span>{{ item.title }}</span>
        </template>
        <template v-for="(itemchild1, index1) in item.children">
          <el-submenu
            v-if="itemchild1.children && itemchild1.children.length > 0"
            :index="[index, index1].join('-')"
            :key="[index, index1].join('-')"
            :disabled="itemchild1.disabled"
          >
            <template slot="title">
              <span>{{ itemchild1.title }}</span>
            </template>
            <el-menu-item
              v-for="(itemchild2, index2) in itenchild1.children"
              :index="[index, index1, index2].join('-')"
              :key="[index, index1, index2].join('-')"
              @click.native="tabBarClick(itemchild2)"
              :disabled="itemchild2.disabled"
              >{{ itemchild2.title }}</el-menu-item
            >
          </el-submenu>
          <el-menu-item
            v-else
            :index="[index, index1].join('-')"
            :key="[index, index1].join('-')"
            @click.native="tabBarClick(itemchild1)"
            :disabled="itemchild1.disabled"
            >{{ itemchild1.title }}</el-menu-item
          >
        </template>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  created() {},
  data() {
    return {};
  },
  computed: {
    showItemList() {
      return this.iteratorFilterItems(this.menuData);
    },
    defaultSelectBarIndex() {
      let redirectPath = this.menuData[0].redirect;
      return this.iteratorFindIndexByPath(this.showItemList, redirectPath);
    }
  },
  methods: {
    /**
     * 触发父组件跳转router
     */
    tabBarClick(item) {
      if (item.disabled) {
        return;
      }
      this.$emit("jumpToRoute", item);
    },
    /**
     * 通过redirect路径找到默认显示的index
     */
    iteratorFindIndexByPath(itemList, path) {
      path = this.removeIncludeStr(path, "/", "prefix");
      for (let index = 0, len = itemList.length; index < len; index++) {
        let item = itemList[index];
        let tempPath = this.removeIncludeStr(item.path, "/", "prefix");
        if (path.startsWith(tempPath)) {
          path = this.removeIncludeStr(
            path.substring(tempPath.length),
            "/",
            "prefix"
          );
          return (
            index +
            (path === ""
              ? ""
              : "-" + this.iteratorFindIndexByPath(item.children, path))
          );
        }
      }
      return "defaultPath";
    },
    removeIncludeStr(originStr, filterStr, flag) {
      let oLen = originStr.length;
      let fLen = filterStr.length;
      switch (flag) {
        case "prefix":
          return originStr.startsWith(filterStr)
            ? originStr.substring(fLen)
            : originStr;
        case "suffix":
          return originStr.endsWith(filterStr)
            ? originStr.substring(0, oLen - fLen)
            : originStr;
        case "all":
          return originStr.replaceAll(filterStr, "");
      }
      return originStr;
    },
    /**
     * 通过route属性show控制是否显示
     */
    iteratorFilterItems(itemList) {
      let tempList = [];
      for (let item of itemList) {
        if (item.show) {
          let cloneItem = this.common.clone(item);
          tempList.push(cloneItem);

          let tempChild = item.children;
          cloneItem.children =
            tempChild?.length > 0 ? this.iteratorFilterItems(tempChild) : [];
        }
      }
      return tempList;
    },
    /**
     * 后续优化生成key方法
     */
    getItemIndex() {
      // let prefix = "";
      // let appendPrefix = function (appendStr) {
      //   prefix = prefix + "-" + appendStr;
      //   return true;
      // };
      // let result = function (str) {
      //   return prefix + "-" + str;
      // };
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .el-menu .el-submenu__title {
  padding-right: 45px;
}
::v-deep .el-submenu.is-disabled .el-submenu__title,
::v-deep .el-menu-item.is-disabled {
  opacity: 0.6 !important;
  &:hover {
    background-color: #e0dfdf !important;
    color: #b4b8c7 !important;
    i {
      color: #b4b8c7 !important;
    }
  }
}
::v-deep .el-submenu {
  .el-submenu__title {
    &:hover {
      background-color: rgba(0, 111, 106, 0.6) !important;
      color: #ffffff !important;
      i {
        color: #ffffff !important;
      }
    }
  }
}
::v-deep .el-menu-item {
  &:hover {
    background-color: rgba(0, 111, 106, 0.2) !important;
    color: #009d85 !important;
    i {
      color: #009d85 !important;
    }
  }
}
</style>

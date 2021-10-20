const Home = () => import("views/Home/Home.vue")

// 懒加载路由
export default [
  {
    title: "主页",
    path: "/home",
    name: "home",
    component: Home,
    menu: "el-icon-eleme",
    show: true,
    disabled: false,
    children: [
      {
        title: "热门",
        path: "hot",
        name: "hot",
        component: Home,
        menu: "el-icon-eleme",
        show: true,
        disabled: false
      }
    ]
  }
];

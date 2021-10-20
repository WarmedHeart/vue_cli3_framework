const About = () => import("views/About/About.vue")

// 懒加载路由
export default [
  {
    title: "关于",
    path: "/about",
    name: "about",
    component: About,
    menu: "el-icon-s-tools",
    show: true,
    disabled: false,
    children: [
      {
        title: "我的",
        path: "/me",
        name: "me",
        component: About,
        children: [],
        menu: "el-icon-s-tools",
        show: true,
        disabled: true
      }
    ]
  }
];

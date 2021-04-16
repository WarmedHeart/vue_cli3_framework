const About = () => import("views/About/About.vue")

// 懒加载路由
export default [
  {
    path: "/about",
    name: "about",
    component: About,
    children: []
  }
];

const Home = () => import("views/Home/Home.vue")

// 懒加载路由
export default [
  {
    path: "/home",
    name: "home",
    component: Home,
    children: []
  }
];

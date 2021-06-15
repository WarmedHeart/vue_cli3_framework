## vue-cli3搭建项目

1. 安装node（自带npm）

2. 安装脚手架，执行创建命令： vue create my-project搭建vue-cli3

   ```javascript
   //vuecli3版本 @1(只是用脚手架3)
   npm install -g @vue/cli
   vue create my-project
   
   //在脚手架3的基础上使用vuecli2版本 @2(先安装脚手架3，在安装脚手架2，两个都可以使用)
   npm install -g @vue/cli-init
   vue init webpack my-project
   ```

3. 执行过程：安装babel、router、vuex
   3.1 其中的core-js依赖附带所有 JavaScript 不同版本中标准库的实现，之后想了解es的实现可以参考。
   3.2 参考文档：   [MDN中文文档](https://developer.mozilla.org/zh-CN/docs/Web)   [MDN英文文档](https://developer.mozilla.org/en-US/docs/Web)  [cdn引入](https://cdnjs.com/libraries?q=vue)  [es6新特性](https://www.yuque.com/ostwind/es6/readme)  [浏览器兼容性检测](https://caniuse.com/)

   <img src="https://github.com/WarmedHeart/my-pic/blob/master/VueCli3Framework/image-20210408164147735.png" alt="image-20210408164147735" style="zoom:80%;margin-left: 20px" />

4. 创建webpack的配置文件vue.config.js，并新增配置（主要别名和代理）

5. 全局路由和缓存文件中实现动态加载view文件中的router（防止单一router内容过多）和store（防止兄弟组件传值繁琐）。

6. 安装axios，配置request请求方法。

7. 安装lib-flexible，在main.js中引入，缩放浏览器html中的font-size一直是54px；修改flexible.js中的代码（源代码只考虑了移动端适配），已达到web端自适应。没有使用 px2remLoader插件进行px自动转rem（使用时第三方css也会进行转换），通过vscode安装插件cssrem自定义哪些需要转rem。

   ```javascript
   function refreshRem(){
       var width = docEl.getBoundingClientRect().width;
       // 屏幕宽度大于540，设置宽为540
       if (width / dpr > 540) {
       // width = 540 * dpr; 注释该行代码
       width = width * dpr;
       }
       var rem = width / 10;
       docEl.style.fontSize = rem + 'px';
       flexible.rem = win.rem = rem;
   }
   ```

8. 引入全局css、阿里图标库、公共方法。

9. 引入element

10. 引入ant-design

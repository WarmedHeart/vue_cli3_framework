/* 
  参考链接：https://cli.vuejs.org/zh/config/
*/
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        store: "@/store",
        utils: "@/utils",
        views: "@/views"
      }
    }
  },
  publicPath: "./",
  outputDir: "dist",
  // 代理配置参考链接：https://webpack.docschina.org/configuration/
  devServer: {
    port: 8888,
    host: "0.0.0.0",
    https: false,
    open: true,
    proxy: {
      //开发环境代理配置  解决跨域问题  即不满足同源策略：协议，域名，端口号有一个不一致
      [process.env.VUE_APP_BASE_API]: {
        //用中括号括起来
        //目标服务器地址，代理访问'http://localhost:8001'
        target: process.env.VUE_APP_SERVICE_URL, //从配置文件中获取目标服务器地址
        changeOrigin: true, //开启代理服务器
        pathRewrite: {
          ///dev-api/db.josn  最后会发送http://localhost:8001/db.json,
          //将请求地址前缀/dev-api替换为空
          // '^/dev-api':'',
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  }
};


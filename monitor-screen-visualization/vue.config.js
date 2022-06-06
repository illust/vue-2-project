const path = require("path");

function resolve(dir) {
    return path.join(__dirname, dir);
  }

module.exports = {
    publicPath: './',
    devServer:{
        open: true,
        host: '0.0.0.0',
        port: 8081,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/data': {
                target: 'http://192.168.110.224:18880',
                changeOrigin: true,
                pathRewrite:{
                    '^/data':'/data'//重写路径
                }
            }
        }
    },
    configureWebpack: {
        name: "长三角金融中心大屏",
        resolve: {
          alias: {
            "@": resolve("src"),
          },
        }
    }
};
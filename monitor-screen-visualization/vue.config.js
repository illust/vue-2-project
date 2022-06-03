module.exports = {
    publicPath: './',
    devServer:{
        open: true,
        host: '0.0.0.0',
        port: 8080,
        overlay: {
            warnings: false,
            errors: true
        }
        // ,
        // proxy: {
        //     '/api': {
        //         target: 'http://53591h4z16.wicp.vip:80',
        //         ws: true,
        //         changeOrigin: true,
        //         pathRewrite:{
        //             '^/api':''//重写路径
        //         }
        //     }
        // }
    }
};
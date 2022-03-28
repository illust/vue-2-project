module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '192.168.191.1:8080',

        hot: true,

        disableHostCheck: true,

    },

    css: {

        extract: false,  // 是否使用css分离插件 ExtractTextPlugin

        
        loaderOptions: {
            css: {
                // options here will be passed to css-loader
            },
            postcss: {
                // options here will be passed to postcss-loader
                plugins: [require('postcss-px2rem')({
                    remUnit: 37.5  //缩放比例：是75还是37.5还是其他数值，需要根据ui图来定。取值方式为  设计图宽度/10
                })]
            }
        }
    }

    

};
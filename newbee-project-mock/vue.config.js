module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '192.168.191.1:8081',

        hot: true,

        disableHostCheck: true,

    },

    css: {

        extract: false  // 是否使用css分离插件 ExtractTextPlugin
    }


};
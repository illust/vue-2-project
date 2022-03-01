module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {

        public: '192.168.8.163:8081',

        hot: true,

        disableHostCheck: true,

    }



};
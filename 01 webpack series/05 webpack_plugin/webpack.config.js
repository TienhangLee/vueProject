const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports ={
    entry:'./src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
      //  publicPath: "dist/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader" , "css-loader"]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //當加載的圖片小於limit時會將圖片編譯成base64字符串形式
                            //當加載的圖片大於limit時需要file loader進行加載
                            limit: 8196,
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {test:/\.vue$/,
            use:['vue-loader'] }
        ]
    },
    resolve:{
        extensions:['.js','.css','.vue'],
        alias:{
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('final version copy right'),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    devServer:{
        contentBase:'./dist',
        inline: true
    },
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    
    entry: './src/index.js',

    output: { //出口
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath:'', //全局公共的路径 比如http://www.youzu.com
    },

    module: {
      rules: [{
        test: '/\.js$/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env','@babel/preset-react']
          }
        }
      }]
    },

    devServer: {
      port: 3000,
      open: true,
      contentBase: './dist',
      hot: true,
    },

    plugins: [
      new webpack.DllReferencePlugin({
        manifest: path.resolve(__dirname, 'dist', 'manifest.json'),
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),  // 热更新插件
    ]
        
}
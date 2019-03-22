const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: 'production',
    
    entry: {
      vendor: ['jquery', 'lodash']
    },

    output: { //出口
        filename: '_dll_[name].js',
        path: path.resolve(__dirname, 'dist'),
        library: '_dll_[name]'
    },

    plugins: [
      new webpack.DllPlugin({
        path: path.resolve(__dirname, 'dist', 'manifest.json'),
        name: '_dll_[name]'
      })
    ]
        
}
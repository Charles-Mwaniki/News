var path = require('path');
var ROOT = path.resolve(__dirname);
module.exports = {
  mode: 'development',
    entry: './src/App.js',
    output: {
        path: path.join(ROOT, './dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
      },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
      },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    }
}
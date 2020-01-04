var path = require('path');
var ROOT = path.resolve(__dirname);
module.exports = {
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
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/,/assets/,/public/],
                loader: "babel-loader",
                include: __dirname
              }
        ]
    }
}
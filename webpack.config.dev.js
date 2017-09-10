const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    //input
    entry: ['babel-polyfill','./src/main.js'],

    //output
    output: {
        path: path.join(__dirname, 'build'),
        filename: './build/bundle.gz.js'
    },
    plugins: [
      new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.(js|html)$/,
        threshold: 10240,
        minRatio: 0.8
      }),
    ],

    //transformations
    module: {
        rules: [
            {
                test: /\.jsx?/i,
                loader: 'babel-loader',
                options: {
                    presets: ['env','stage-0'],
                    plugins: [
                        ['transform-react-jsx', { pragma: 'h' },"transform-object-rest-spread"]
                    ]
                }
            },

            {
              test: /\.less$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "autoprefixer-loader" },
                { loader: "less-loader" }
              ]
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            }

        ]
    },
    resolve:{
      alias:{
        'react':'preact-compat',
        'react-dom':'preact-compat'
      }
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: __dirname,
        compress: true,
        historyApiFallback: true
    }
}

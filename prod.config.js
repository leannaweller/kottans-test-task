const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");


module.exports = {
    //input
    entry: ['babel-polyfill','./src/main.js'],

    //output
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.gz.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new UglifyJSPlugin({test: /\.js($&#124;\?)/i,
      comments: false,
      sourceMap:false,
      debug: false,
      }),
      new CompressionPlugin({
  			asset: "[path].gz[query]",
  			algorithm: "gzip",
  			test: /\.(js|html)$/,
  			threshold: 10240,
  			minRatio: 0.8
		  }),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.IgnorePlugin(/^(webpack-dev-server|webpack-bundle-analyzer|eslint|eslint-plugin-react|mocha|isomorphic-fetch)$/)

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

    //sourcemaps
    devtool: 'eval',

}

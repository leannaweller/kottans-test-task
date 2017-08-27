const path = require('path');

module.exports = {
    //input
    entry: './src/main.js',

    //output
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },

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
            }

        ]
    },

    //sourcemaps
    devtool: 'source-map',

    //server
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        compress: true,
        historyApiFallback: true
    }
}

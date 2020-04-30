module.exports = {
    devtool: 'source-map',
    entry: "./src/app.js",
    mode: "development",
    output: {
        filename: "./app-bundle.js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.svg$/, use: [ { loader: 'svg-url-loader', options: { limit: 10000 }, }, ], },
            { test: /\.tsx$/, exclude: /(node_modules|bower_components)/, use: { loader: 'ts-loader' } }
        ]
    }
};
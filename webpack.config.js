const path = require('path');

module.exports = {
    entry: './src/index.js',
    //we tell webpack this is entry point of our project and its location.
    // It will get all our js files and combine them into app.js which is going to reside in "dist/public folder"
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.svg$/, loader: 'svg-loader?pngScale=2' }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
    },
    mode:'development'
};
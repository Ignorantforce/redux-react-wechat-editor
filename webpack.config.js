var path = require('path'),
    webpack = require('webpack'),
    autoprefixer = require('autoprefixer-core'),
    csswring = require('csswring');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './index',
        './static/styles/base.scss'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.json$/,
                loaders: ['json'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss!sass'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./styles")]
    },
    postcss: [autoprefixer, csswring],
    reslove:[
        './static'
    ]
};

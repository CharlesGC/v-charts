const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const componentInfo = require('../src/component-list')
const { addons, externals } = require('./config')

const webpackComponentConfig = {
    mode: 'production',
    entry: Object.assign(componentInfo, addons),
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '',
        filename: (chunkData) => {
            const name = chunkData.chunk.name.replace(/Ve/, '').toLocaleLowerCase()
            return `${name}.js`
        },
        chunkFilename: '[id].js',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        modules: ['node_modules']
    },
    externals: externals,
    performance: {
        hints: false
    },
    stats: 'none',
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: /node_modules/,
                    loader: 'babel-loader'
                },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};

module.exports = webpackComponentConfig;

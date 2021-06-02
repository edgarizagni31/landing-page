const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniExtractCssPlugin = require('mini-css-extract-plugin');
const CssMinimizer = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: "assets/images/[hash][ext][query]"
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/'),
        compress: true,
        port: 3000

    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    'html-loader', 
                    'pug-html-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniExtractCssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.jpg$/,
                type: 'asset/resource'
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.ttf$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        mimetype: 'application/font-ttf',
                        name: '[name].[contenthash].[ext]',
                        outputPath: './assets/fonts/',
                        publicPath: './assets/fonts/',
                        esModule: false,
                    }
                } 
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/view/index.pug',
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: true,
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new MiniExtractCssPlugin({
            filename: './styles.[contenthash].css'
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new TerserPlugin()
        ]
    }
}
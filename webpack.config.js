const path = require('path');

//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin')
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js' ),
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    resolve: {
        extensions: ['.js'],
    },

    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssWebpackPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-resources-loader',
                        options:  {
                            resources: [
                                './src/sass/base/__nomalize.scss',
                                './src/sass/base/__base.scss',
                                './src/sass/components/__header.scss',
                                './src/sass/components/__about.scss',
                                './src/sass/components/__creations.scss',
                                './src/sass/components/__footer.scss'
                            ],
                        }
                    },
                ],
            },
            {
                test: /\.(jpg|png)/,
                type: 'asset/resource'
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './index.html',
            filename: 'index.html',
        }),
        new MiniCssWebpackPlugin({
            filename: './style.css'
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname,"assets"),
                        to: './assets'
                    }
                ]
            }
        )
    ],

    optimization:{
        minimize: true,
        minimizer: [
            new  HtmlMinimizerWebpackPlugin()
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000
    }
};

const path = require("path");

//plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerWebpackPlugin = require('html-minimizer-webpack-plugin')
const MiniCssWebpackPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./index.js",
    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    resolve: {
        extensions: [".js"],
    },

    module: {
        rules: [
            {
                test: /\.(sc|c)ss$/,
                use: [
                    MiniCssWebpackPlugin.loader,
                    'css-loader',
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
                                './sass/base/__nomalize.scss',
                                './sass/base/__base.scss',
                                './sass/components/__header.scss',
                                './sass/components/__about.scss',
                                './sass/components/__creations.scss',
                                './sass/components/__footer.scss'
                            ],
                            hoistUseStatements: true
                        }
                    },
                ],
            },
            {
                test: /\.(jpg|png)/,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./index.html",
            filename: "index.html",
        }),
        new CleanWebpackPlugin(),
        new MiniCssWebpackPlugin({
            filename: "./style.css"
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname,"images"),
                        to: './images'
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
    }
};

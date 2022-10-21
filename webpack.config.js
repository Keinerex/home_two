const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StatoscopePlugin = require('@statoscope/webpack-plugin').default;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        about: './src/pages/About.js',
        home: './src/pages/Home.js',
        index: {import: './src/index.js',
            dependOn: ['about', 'home']
        }
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new StatoscopePlugin({
            saveStatsTo: 'stats.json',
            saveOnlyStats: false,
            open: false,
        }),
        new LodashModuleReplacementPlugin({
            'collections': true,
            'paths': true
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,

    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                use: "babel-loader",
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js']
                },
                sideEffects: false,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // @TODO css rule
        ],
    },
    optimization: {
        usedExports: true,
        concatenateModules: true,
        minimize: true,
        moduleIds: "deterministic",
        innerGraph: true,
        splitChunks: {
            minSize: 20000,
            minRemainingSize: 0,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            minChunks: 1,
            chunks: "all",
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: {
            name: "runtime"
        },

    },
    target: "web",
    resolve: {
        fallback: {
            'buffer': require.resolve('buffer'),
            'stream': false,
            'crypto': require.resolve('crypto')
        },
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'node_modules/ui/node_modules'),
        ],
    },
    stats: {
        children: true
    },

    // @TODO optimizations: done
    // @TODO lodash treeshaking: done
    // @TODO chunk for lodash: done
    // @TODO chunk for runtime: done
    // @TODO fallback for crypto: done
};

module.exports = config
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
    entry: {
        index: './src/index.tsx',
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve('./build'),
        chunkFilename: 'js/[name].[chunkhash].js',
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 1,
                    maxInitialRequests: 5,
                    minSize: 0,
                },
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    priority: 10,
                    enforce: true,
                },
            },
        },
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        },
        extensions: ['', '.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                { runtime: 'automatic' }, // For JSX auto transform
                            ],
                        ],
                    },
                },
            },
            {
                test: /.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-typescript', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            [
                                '@babel/preset-react',
                                { runtime: 'automatic' }, // For JSX auto transform
                            ],
                        ],
                    },
                },
            },
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devServer: {
        contentBase: './public',
        port: 8080,
        inline: true,
        proxy: {
            /* '/path': {
                    target: 'url',
                    pathRewrite: { '^/re-write-path': '' },
                    changeOrigin: true,
                }, */
        },
    },
    plugins: [
        new ESLintPlugin({
            files: 'src/**/*',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        }),
    ],
});

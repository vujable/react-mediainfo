const path = require('path');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const wasmFile = resolve(__dirname, 'node_modules', 'mediainfo.js', 'dist', 'MediaInfoModule.wasm');
const dist = resolve(__dirname);

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: wasmFile, to: dist }]
        })
    ],
    output: {
        path: path.resolve('lib'),
        filename: 'react-mediainfo.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.wasm']
    },
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'workerize-loader',
                    options: { inline: true }
                }
            },
            {
                test: /\.wasm$/,
                include: path.resolve(__dirname, 'src'),
                use: ['wasm-loader']
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};

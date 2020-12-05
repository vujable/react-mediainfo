const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

const wasmFile = path.resolve(__dirname, 'node_modules', 'mediainfo.js', 'dist', 'MediaInfoModule.wasm');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: wasmFile, to: '.' }]
        })
    ],
    output: {
        path: path.resolve('lib'),
        filename: 'react-mediainfo.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};

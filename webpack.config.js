const path = require('path');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const wasmFile = resolve(__dirname, 'node_modules', 'mediainfo.js', 'dist', 'MediaInfoModule.wasm');
const dist = resolve(__dirname);
const wasmExtensionRegExp = /\.wasm$/;

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
                use: ['workerize-loader']
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
//config.module.rules.forEach((rule) => {
//    (rule.oneOf || []).forEach((oneOf) => {
//        if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
//            // Make file-loader ignore WASM files
//            oneOf.exclude.push(wasmExtensionRegExp);
//        }
//    });
//});

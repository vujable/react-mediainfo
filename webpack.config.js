const path = require('path');
const { resolve } = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const WorkerPlugin = require('worker-plugin');

const wasmFile = resolve(__dirname, 'node_modules', 'mediainfo.js', 'dist', 'MediaInfoModule.wasm');
const dist = resolve(__dirname);

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new CopyPlugin({
            patterns: [{ from: wasmFile, to: dist }]
        }),
        new WorkerPlugin()
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

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        path: path.resolve('lib'),
        publicPath: '/',
        filename: 'react-mediainfo.js',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    plugins: [new CleanWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                exclude: [/node_modules/, /mediainfo\.js$/],
                use: {
                    loader: 'workerize-loader',
                    options: { inline: true }
                }
            }
        ]
    },
    node: {
        fs: 'empty'
    }
};

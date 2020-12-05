const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve('lib'),
        filename: 'react-mediainfo.js',
    },
    node: {
        fs: 'empty'
    }
};

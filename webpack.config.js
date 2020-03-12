const path = require('path');

module.exports = [
    {
        entry: path.resolve(__dirname, 'src', 'server', 'app.js'),
        target: 'node',
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'app.js',
            path: path.resolve(__dirname, 'dist'),
        },
    },
    {
        entry: path.resolve(__dirname, 'src', 'client', 'index.js'),
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'public'),
        },
    },
    /*{
        entry: path.resolve(__dirname, 'public', 'darkmode.js'),
        module: {
        rules: [
            {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'darkmode.js',
            path: path.resolve(__dirname, 'app', 'static'),
        },
    }*/
];

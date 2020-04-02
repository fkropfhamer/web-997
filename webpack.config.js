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
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'public', 'js'),
        },
    },
    {
        entry: path.resolve(__dirname, 'src', 'client', 'about.js'),
        module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'about.js',
            path: path.resolve(__dirname, 'public', 'js'),
        },
    },
    {
        entry: path.resolve(__dirname, 'src', 'client', 'evolution', 'travelingSalesman', 'main.js'),
        module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
        ],
        },
        resolve: {
            extensions: ['*', '.js'],
        },
        output: {
            filename: 'travelingsalesman.js',
            path: path.resolve(__dirname, 'public', 'js'),
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

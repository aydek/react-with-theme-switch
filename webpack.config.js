const path = require('path');

module.exports = {
    mode: 'development', // bundling mode (other: production)
    entry: './src/index.tsx', // direct webpack to enter through here
    output: {
        // output a bundle.js file in the public dir
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    resolve: {
        // array of extensions used to resolve modules
        extensions: ['.ts', '.tsx', '.js'],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        // loader configuration rules
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')], // only include files included in this folder
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
                include: [path.resolve(__dirname, 'src')], // only include files included in this folder
            },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                include: [path.resolve(__dirname, 'src')], // only include files included in this folder
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg)$/,
                loader: 'file-loader',
            },
        ],
    },
};

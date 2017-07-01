module.exports = {
    entry: './src/entry.js',
    module: {
        rules: [
            {
                test:/\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}
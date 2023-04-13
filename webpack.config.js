const HtmlwebpackPlugin = require('html-webpack-plugin');

const htmlplugin = new HtmlwebpackPlugin({
    template: './src/index.html',
    filename: './index.html'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

    plugins: [htmlplugin]
}
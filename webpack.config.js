const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleJS = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                { 
                    runtime: 'automatic'
                 }
            ]
            
        ]
    }
}

const ruleCss = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
}

const ruleUrl = {
    test: /\.(jpg|png)$/,
    use: ['url-loader']
}
const rules = [ruleJS, ruleCss, ruleUrl]

module.exports = {
    output : {
        publicPath: '/',
        path: path.resolve(__dirname, 'build')
    },
    plugins : [
        new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    module: { rules },
    devServer: {
        open: true,
        port: 3000,
        historyApiFallback: true
    }
}
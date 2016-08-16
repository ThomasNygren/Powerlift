module.exports = {
    entry: './PowerliftApp/app.jsx',
    output: {
        filename: 'wwwroot/js/bundle.js'
    },
    resolve: {
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
}
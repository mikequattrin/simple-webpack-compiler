module.exports = {
    entry: "./js/entry.js",
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: ['style-loader','css-loader'] 
            }
        ]
    }
};
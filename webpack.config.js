const webpack = require("webpack");
const HtmlWebpackPugin = require("html-webpack-plugin");
const path = require("path");

// const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "index_bundle.js",
    },
    devtool: "inline-source-map",
    devServer: {
        // host: "localhost",
        // port: port,
        historyApiFallback: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPugin({
            template: "public/index.html",
        }),
    ],
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};

//  use: [
//           {
//             loader: "style-loader",
//           },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//               localsConvention: "camelCase",
//               sourceMap: true,
//             },
//           },
//         ],
const HtmlWebPackPlugin = require("html-webpack-plugin");
const DotenvWebpack = require("dotenv-webpack");
const path = require("path");
// Try the environment variable, otherwise use root
// const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /.(ttf|woff|svg|mp3|mp4|png|PNG|jpg|jpeg|gif|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/"
          }
        }
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", "*"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    }),
    new DotenvWebpack()
  ],
  devServer: {
    port: 3001,
    host: '0.0.0.0',
    hot: true
  }
};
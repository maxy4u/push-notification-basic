const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./app/index.html",
  filename: "index.html"
});

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [htmlPlugin],
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
        test: /\.(jpg|jpeg|gif|png|ico)$/,
        exclude: /node_modules/,
        loader: "file-loader?name=img/[path][name].[ext]&context=./app/images"
      }
    ]
  }
};

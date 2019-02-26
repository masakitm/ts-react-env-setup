const path = require("path");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    open: true
  }
};

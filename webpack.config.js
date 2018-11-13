const path = require("path")
const webpack = require("webpack")

const server = {
  entry: {
    server: "./src/server/server.ts"
  },
  node: {
    __dirname: false
  },
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  }
  // stats: "errors-only",
  // plugins: [new webpack.DefinePlugin({"global.GENTLY": false})]
}

const client = {
  entry: "./src/client/Main.ts",
  target: "web",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "dist")
  }
  // stats: "errors-only"
}

module.exports = [serverConfig, clientConfig]

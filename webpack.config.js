require("dotenv").config();

const path = require("path");
const webpack = require("webpack");

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  context: __dirname,
  entry: "./frontend/robins_jacket.jsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "*"],
    fallback: {
      "readable-stream": require.resolve("readable-stream"),
    },
  },
  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/,
        test: /\.[jt]sx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.DefinePlugin({
      "process.browser": JSON.stringify(true),
      "process.env": {
        RAPID_API_KEY: JSON.stringify(process.env.RAPID_API_KEY),
        RAPID_API_HOST: JSON.stringify(process.env.RAPID_API_HOST),
      },
    }),
  ],
  devtool: "eval-source-map",
};

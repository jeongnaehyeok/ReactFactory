const path = require("path");
const port = process.env.PORT || 3000;

const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env) => {
  const isDevelopment = env === "isDevelopment";

  return {
    devServer: {
      contentBase: path.resolve(__dirname, "./build"),
      index: "index.html",
      port,
      host: "localhost",
      open: true,
      historyApiFallback: true,
    },
    devtool: isDevelopment ? "inline-source-map" : "cheap-module-source-map",
    entry: "./src/index.js",
    output: {
      filename: "bundle.[contenthash].js",
      path: path.resolve(__dirname, "./build"),
    },
    mode: "production",
    module: {
      rules: [
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "url-loader",
          },
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules",
          use: ["babel-loader"],
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true },
            },
          ],
        },
        {
          test: /\.scss$/,
          use: [
            isDevelopment ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "index.html",
      }),
      ...(isDevelopment
        ? new MiniCssExtractPlugin({
            filename: "style.css",
          })
        : []),
      new CleanWebpackPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  };
};

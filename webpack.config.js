const HtmlWebPackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  return {
    output: {
      publicPath: process.env.PUBLIC_PATH,
    },
    devtool: "eval-cheap-module-source-map",
    resolve: {
      extensions: ["", ".js", ".jsx", ".ts"],
    },

    devServer: {
      port: 3000,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
          "X-Requested-With, content-type, Authorization",
      },
    },

    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
        {
          test: /\.ttf?$/i,
          type: "asset/resource",
          dependency: { not: ["url"] },
        },
        {
          exclude: /\.(s?(a?|c)ss|js|html)$/,
          test: /\.(css|svg|styl|sass|scss|png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },

    plugins: [
      new Dotenv(),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
      }),
    ],
  };
};

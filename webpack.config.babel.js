/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const TS_EXTENSION = /\.(ts|tsx)$/;

module.exports = (env) => {
  const envConfig = env.config;

  return {
    entry: "./src/index.tsx",
    mode: envConfig === "dev" ? "development" : "production",
    target: "web",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: TS_EXTENSION,
          loader: "eslint-loader",
          exclude: /node_modules/,
          enforce: "pre",
        },
        {
          test: TS_EXTENSION,
          loader: "babel-loader",
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
      }),
    ],
  };
};

/* eslint-enable @typescript-eslint/no-var-requires */

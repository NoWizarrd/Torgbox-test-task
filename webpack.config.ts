import path from "path";
import { Configuration } from "webpack";
import devServer from 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin';

const babelLoader = {
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
        "@babel/preset-typescript",
      ],
    },
}

const config: Configuration = {
  mode: 'development',
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [babelLoader]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    mainFiles: ['index'],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public" ,"index.html"),
    }),
  ],
};

export default config
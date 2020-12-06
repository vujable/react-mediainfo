const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    path: path.resolve("lib"),
    publicPath: "/",
    filename: "react-mediainfo.js",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        exclude: [/node_modules/, /bundle\.js$/],
        use: {
          loader: "workerize-loader",
          options: { inline: true },
        },
      }
    ],
  },
  node: {
    fs: "empty",
  },
};

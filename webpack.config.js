
const path = require("path");
const webpack = require('webpack');

module.exports = {

   entry: {
      app: "./app.ts"
   },

   output: {
      path: path.resolve(__dirname, "bin/"),
      filename: "[name].js"
   },

   //heavy, good debugg
   devtool: "source-map",
   //light basic debug
   // devtool: "cheap-moduleT-source-map",

   resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js", ".json"]
   },

   module: {
      rules: [
         {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
         },
         // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
         {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
         }
      ]
   }
};

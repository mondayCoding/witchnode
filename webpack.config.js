
const path = require("path");
const webpack = require('webpack');

module.exports = {
   entry: {
      app: "./src/index.tsx",
      vendor: ["jquery", "react", "react-dom", "react-router", "toastr"]
   },
   output: {
      path: path.resolve(__dirname, "public/javascripts/"),
      filename: "[name].js"
   },
   devtool: "source-map",
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
   },
   plugins: [
      new webpack.optimize.CommonsChunkPlugin({
         name: "vendor",
         minChunks: Infinity,
      }),
      new webpack.ProvidePlugin({
         $: "jquery"
      })
   ]
};

// const path = require("path");
//
// module.exports = {
//    entry: "./src/index.tsx",
//    output: {
//       path: path.resolve(__dirname, "public/javascripts/"),
//       filename: "bundle.js"
//    },
//    devtool: "source-map",
//    resolve: {
//       // Add '.ts' and '.tsx' as resolvable extensions.
//       extensions: [".ts", ".tsx", ".js", ".json"]
//    },
//    module: {
//       rules: [
//          {
//             test: /\.tsx?$/,
//             loader: "awesome-typescript-loader"
//          },
//          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//          {
//             enforce: "pre",
//             test: /\.js$/,
//             loader: "source-map-loader"
//          }
//       ]
//    },
//    externals: {
//       "react": "React",
//       "react-dom": "ReactDOM",
//       "jquery": 'jQuery'
//    }
// };

const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      /** 4. css */
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      // },
      /** 6. babel */
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [
      //         ['@babel/preset-env', { targets: "defaults" }]
      //       ],
      /** 6.1 babel */
      //       plugins: ["@babel/plugin-proposal-nullish-coalescing-operator"],
      //     }
      //   }
      // }
      /** 7 loaders */
      // {
      //   test: /\.js$/i,
      //   use: [
      //     {
      //       loader: path.resolve('./dog.js'),
      //     },
      //     {
      //       loader: path.resolve('./cat.js'),
      //     }
      //   ],
      // },
    ],
  },
  /** 8. woof */
  // resolve: {
  //   alias: {
  //     '🐶': path.join(__dirname, 'src/dog')
  //   },
  //   extensions: ['.js', '.cat'],
  // }
  /** 9. plugins */
  // plugins: [
  //   new webpack.BannerPlugin({
  //     banner: 'Copyright belongs to 🐶🐱🐶🐱🐶🐱🐶🐱🐶🐱🐶🐱🐶🐱🐶🐱'
  //   }),
  //   new webpack.DefinePlugin({
  //     'process.env.HELLO_WORLD': JSON.stringify('hello world!'),
  //   })
  // ]
};

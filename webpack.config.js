'use strict';
const path = require('path');
const webpack = require('webpack');
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = (env, argv) => {
  const isDev = argv.mode !== 'production';
  const targetPath = path.join(__dirname, 'dist');
  const config = {
    stats: { modules: false, performance: false },
    target: "node",
    resolve: {
      extensions: ['.js','.ts'],
      alias: {
        utils: path.resolve(__dirname, 'src/utils/')
      }
    },
    entry: {
      app: './src/app.ts',
      aws: './src/app-base.ts'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/, include: /src/, use: 'awesome-typescript-loader?silent=true'
        }
      ]
    },
    devtool: "source-map",
    output: {
      filename: '[name].js',
      path: targetPath,
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, require.resolve('node-noop')),
      new webpack.IgnorePlugin(/^encoding$/, /node-fetch/)
    ],
    externals: ['express']
  };

  if (isDev) {
    config.entry = {
      app: './src/app.ts'
    };
    config.plugins.push(
      new NodemonPlugin({
        watch: path.resolve('./dist'),
        exec: 'npm run debug --prefix dist'
      })
    );
  }

  return config;
};

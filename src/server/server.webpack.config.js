// webpack.config.js
'use strict';

// https://medium.com/front-end-hacking/adding-a-server-side-rendering-support-for-an-existing-react-application-using-express-and-webpack-5a3d60cf9762

import webpack from 'webpack';
import NodeExternals from 'webpack-node-externals';
import EnvConfig from '../../config.json';

const nodeEnv = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;
const plugins = [
  new webpack.EnvironmentPlugin(EnvConfig),
];

export default {
  target: 'node',
  externals: [NodeExternals()],
  entry: {
    renderApp: `${__dirname}/renderApp.js`,
    createInitialStore: `${__dirname}/../client/js/createInitialStore.js`,
  },
  output: {
    filename: '[name].js',
    path: `/dist/server/`,
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {loader: 'babel-loader'},
        ],
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'css-loader/locals'},
        ],
      },
    ],
  },
  mode: isProd ? 'production' : 'development',
  plugins: plugins,
};

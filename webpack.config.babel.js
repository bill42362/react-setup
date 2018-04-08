// webpack.config.js
import webpack from 'webpack';
import EnvConfig from './config.json';

const nodeEnv = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === nodeEnv;
const plugins = [];
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
];
const prodPlugins = [];

// hot middleware
export const hmrConfig = {
  path: '/__webpack_hmr',
  timeout: 20000,
  reload: true,
  logLevel: 'warn',
  log: console.log,
  heartbeat: 10*1000
};
const hotMiddlewareScript
  = `webpack-hot-middleware/client?path=${hmrConfig.path}&timeout=${hmrConfig.timeout}&reload=${hmrConfig.reload}`;

export default {
  entry: {
    bundle: ['./src/client/js/index.js', hotMiddlewareScript],
  },
  output: {
    filename: 'js/[name].js',
    path: `${__dirname}/dist/client/`,
    publicPath: 'http://localhost:3000/',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
    ],
  },
  mode: isProd ? 'production' : 'development',
  plugins: isProd ? [ ...plugins, ...prodPlugins ] : [ ...plugins, ...devPlugins ],
};

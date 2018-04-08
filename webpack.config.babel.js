// webpack.config.js
import EnvConfig from './config.json';

const stageConfig = process.env.NODE_ENV || EnvConfig.NODE_ENV || 'production';
const isProd = 'production' === stageConfig;

export default {
  entry: './src/client/index.js',
  output: {
    filename: 'client/bundle.js'
  },
  mode: isProd ? 'production' : 'development',
};

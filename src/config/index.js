import commonConfig from './common';
import devConfig from './development';
import prodConfig from './production';

let config = {};

switch (process.env.NODE_ENV) {
  case 'development':
    config = Object.assign(config, commonConfig, devConfig);
    break;
  case 'production':
    config = Object.assign(config, commonConfig, prodConfig);
    break;
  default:
    config = Object.assign(config, commonConfig, devConfig);
    break;
}

export default config;
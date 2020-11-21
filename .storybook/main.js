const path = require('path');
module.exports = {
  stories: ['../src/stories/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/preset-create-react-app'],
  webpackFinal: async config => {
    config.module.rules = [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader'],
        include: path.resolve(__dirname, '../'),
      },
    ];
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    config.node = {
      __dirname: true,
    };
    return config;
  },
};

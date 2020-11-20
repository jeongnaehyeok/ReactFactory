import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

const loadStories = () => {
  const context = require.context('../src/stories', true, /Story\.js$/);
  context.keys().forEach(srcFile => {
    interopRequireDefault(context(srcFile));
  });
};

configure(loadStories, module);

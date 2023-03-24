module.exports = {
  'stories': [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // Add PostCSS into addons for compiling tailwind below
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    // End PostCSS
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-webpack5'
  }
}
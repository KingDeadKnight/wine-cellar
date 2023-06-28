import '@/styles/globals.scss';

import type { Preview } from '@storybook/react';

const customViewports = {
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '744px',
      height: '1133px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '708px',
    },
  },
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#F9F8FF',
        },
      ],
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'Mobile'
    },
  },
};

export default preview;
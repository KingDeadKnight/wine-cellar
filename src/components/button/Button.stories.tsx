import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Button',
    component: Button,
  } as ComponentMeta<typeof Button>;

  // Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { label: "Primary 😃" };

export const Secondary = Template.bind({});
Secondary.args = { secondary: true, label: "Secondary 😇" }
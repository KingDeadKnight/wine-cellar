import {Meta, StoryFn} from '@storybook/react';
import {Icon} from "@/components/atoms/icon/Icon";

export default {
    title: 'Atoms/Icon',
    component: Icon,
  } as Meta<typeof Icon>;

  // Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

// Reuse that template for creating different stories
export const Plus = Template.bind({});
Plus.args = { iconName: "plus" };
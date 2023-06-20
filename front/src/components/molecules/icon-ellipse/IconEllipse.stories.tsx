import { StoryFn, Meta } from '@storybook/react';
import {IconEllipse} from "@/components/molecules/icon-ellipse/IconEllipse";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules/IconEllipse',
    component: IconEllipse,
  } as Meta<typeof IconEllipse>;

  // Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof IconEllipse> = (args) => <IconEllipse {...args} />;

// Reuse that template for creating different stories
export const Default  = Template.bind({});
Default.args = { iconName: "plus" };
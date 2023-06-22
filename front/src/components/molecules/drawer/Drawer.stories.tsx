import { StoryFn, Meta } from '@storybook/react';
import {Drawer} from "@/components/molecules";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'Molecules/Drawer',
    component: Drawer,
  } as Meta<typeof Drawer>;

  // Create a master template for mapping args to render the Button component
const Template: StoryFn<typeof Drawer> = (args) => <Drawer/>;

// Reuse that template for creating different stories
export const Default  = Template.bind({});
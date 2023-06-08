import { ComponentStory, ComponentMeta } from '@storybook/react';

import {BottleEllipse} from "@/components/bottleEllipse/BottleEllipse";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'BottleEllipse',
    component: BottleEllipse,
  } as ComponentMeta<typeof BottleEllipse>;

  // Create a master template for mapping args to render the Button component
const Template: ComponentStory<typeof BottleEllipse> = (args) => <BottleEllipse {...args} />;

// Reuse that template for creating different stories
export const Red = Template.bind({});
Red.args = { bgColor: "#9B1A30" };

export const White = Template.bind({});
White.args = { bgColor: "#FAE7C0" };

export const Pink = Template.bind({});
Pink.args = { bgColor: "#D18080" };

export const Sparkling = Template.bind({});
Sparkling.args = { bgColor: "#D4B98A" };


export const WithTextInside  = Template.bind({});
WithTextInside.args = { bgColor: "#D4B98A", children: <span>+</span> };